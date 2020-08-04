
export function error(msg: string) {
    throw new Error(msg)
}

export function log(msg: string, v?: any) {
    if (v === undefined)
        console.log("JD: " + msg)
    else
        console.log("JD: " + msg, v)
}

export function warn(msg: string, v?: any) {
    if (v === undefined)
        console.log("JD-WARN: " + msg)
    else
        console.log("JD-WARN: " + msg, v)
}

export function delay<T>(millis: number, value?: T): Promise<T> {
    return new Promise((resolve) => setTimeout(() => resolve(value), millis))
}

export function memcpy(trg: Uint8Array, trgOff: number, src: ArrayLike<number>, srcOff?: number, len?: number) {
    if (srcOff === void 0)
        srcOff = 0
    if (len === void 0)
        len = src.length - srcOff
    for (let i = 0; i < len; ++i)
        trg[trgOff + i] = src[srcOff + i]
}

export function strcmp(a: string, b: string) {
    if (a == b) return 0;
    if (a < b) return -1;
    else return 1;
}

export function bufferEq(a: Uint8Array, b: ArrayLike<number>) {
    if (a == b)
        return true
    if (!a || !b || a.length != b.length)
        return false
    for (let i = 0; i < a.length; ++i) {
        if (a[i] != b[i]) return false
    }
    return true
}

export function hash(buf: Uint8Array, bits: number) {
    bits |= 0
    if (bits < 1)
        return 0
    const h = fnv1(buf)
    if (bits >= 32)
        return h >>> 0
    else
        return ((h ^ (h >>> bits)) & ((1 << bits) - 1)) >>> 0
}

export function idiv(a: number, b: number) { return ((a | 0) / (b | 0)) | 0 }
export function fnv1(data: Uint8Array) {
    let h = 0x811c9dc5
    for (let i = 0; i < data.length; ++i) {
        h = Math.imul(h, 0x1000193) ^ data[i]
    }
    return h
}

export function crc(p: Uint8Array) {
    let crc = 0xffff;
    for (let i = 0; i < p.length; ++i) {
        const data = p[i];
        let x = (crc >> 8) ^ data;
        x ^= x >> 4;
        crc = (crc << 8) ^ (x << 12) ^ (x << 5) ^ x;
        crc &= 0xffff;
    }
    return crc;
}

export function ALIGN(n: number) { return (n + 3) & ~3 }

// this will take lower 8 bits from each character
export function stringToUint8Array(input: string) {
    let len = input.length;
    let res = new Uint8Array(len)
    for (let i = 0; i < len; ++i)
        res[i] = input.charCodeAt(i) & 0xff;
    return res;
}

export function uint8ArrayToString(input: ArrayLike<number>) {
    let len = input.length;
    let res = ""
    for (let i = 0; i < len; ++i)
        res += String.fromCharCode(input[i]);
    return res;
}


export function fromUTF8(binstr: string) {
    if (!binstr) return ""

    // escape function is deprecated
    let escaped = ""
    for (let i = 0; i < binstr.length; ++i) {
        let k = binstr.charCodeAt(i) & 0xff
        if (k == 37 || k > 0x7f) {
            escaped += "%" + k.toString(16);
        } else {
            escaped += binstr.charAt(i)
        }
    }

    // decodeURIComponent does the actual UTF8 decoding
    return decodeURIComponent(escaped)
}

export function toUTF8(str: string, cesu8?: boolean) {
    let res = "";
    if (!str) return res;
    for (let i = 0; i < str.length; ++i) {
        let code = str.charCodeAt(i);
        if (code <= 0x7f) res += str.charAt(i);
        else if (code <= 0x7ff) {
            res += String.fromCharCode(0xc0 | (code >> 6), 0x80 | (code & 0x3f));
        } else {
            if (!cesu8 && 0xd800 <= code && code <= 0xdbff) {
                let next = str.charCodeAt(++i);
                if (!isNaN(next))
                    code = 0x10000 + ((code - 0xd800) << 10) + (next - 0xdc00);
            }

            if (code <= 0xffff)
                res += String.fromCharCode(0xe0 | (code >> 12), 0x80 | ((code >> 6) & 0x3f), 0x80 | (code & 0x3f));
            else
                res += String.fromCharCode(0xf0 | (code >> 18), 0x80 | ((code >> 12) & 0x3f), 0x80 | ((code >> 6) & 0x3f), 0x80 | (code & 0x3f));
        }

    }
    return res;
}


export interface SMap<T> {
    [index: string]: T;
}

export class PromiseBuffer<T> {
    private waiting: ((v: (T | Error)) => void)[] = [];
    private available: (T | Error)[] = [];

    drain() {
        for (let f of this.waiting) {
            f(new Error("Promise Buffer Reset"))
        }
        this.waiting = []
        this.available = []
    }


    pushError(v: Error) {
        this.push(v as any)
    }

    push(v: T) {
        let f = this.waiting.shift()
        if (f) f(v)
        else this.available.push(v)
    }

    shiftAsync(timeout = 0) {
        if (this.available.length > 0) {
            let v = this.available.shift()
            if (v instanceof Error)
                return Promise.reject<T>(v)
            else
                return Promise.resolve<T>(v)
        } else
            return new Promise<T>((resolve, reject) => {
                let f = (v: (T | Error)) => {
                    if (v instanceof Error) reject(v)
                    else resolve(v)
                }
                this.waiting.push(f)
                if (timeout > 0) {
                    delay(timeout)
                        .then(() => {
                            let idx = this.waiting.indexOf(f)
                            if (idx >= 0) {
                                this.waiting.splice(idx, 1)
                                reject(new Error("Timeout"))
                            }
                        })
                }
            })
    }
}


export class PromiseQueue {
    promises: SMap<(() => Promise<any>)[]> = {};

    enqueue<T>(id: string, f: () => Promise<T>): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            let arr = this.promises[id]
            if (!arr) {
                arr = this.promises[id] = []
            }
            const cleanup = () => {
                arr.shift()
                if (arr.length == 0)
                    delete this.promises[id]
                else
                    arr[0]()
            }
            arr.push(() =>
                f().then(v => {
                    cleanup()
                    resolve(v)
                }, err => {
                    cleanup()
                    reject(err)
                }))
            if (arr.length == 1)
                arr[0]()
        })
    }
}

export function toHex(bytes: ArrayLike<number>) {
    let r = ""
    for (let i = 0; i < bytes.length; ++i)
        r += ("0" + bytes[i].toString(16)).slice(-2)
    return r
}

export function fromHex(hex: string) {
    let r = new Uint8Array(hex.length >> 1)
    for (let i = 0; i < hex.length; i += 2)
        r[i >> 1] = parseInt(hex.slice(i, i + 2), 16)
    return r
}

export function toArray<T>(a: ArrayLike<T>): T[] {
    const r: T[] = new Array(a.length)
    for (let i = 0; i < a.length; ++i)
        r[i] = a[i]
    return r
}

export interface MutableArrayLike<T> {
    readonly length: number;
    [n: number]: T;
}

export function write32(buf: MutableArrayLike<number>, pos: number, v: number) {
    buf[pos + 0] = (v >> 0) & 0xff;
    buf[pos + 1] = (v >> 8) & 0xff;
    buf[pos + 2] = (v >> 16) & 0xff;
    buf[pos + 3] = (v >> 24) & 0xff;
}

export function write16(buf: MutableArrayLike<number>, pos: number, v: number) {
    buf[pos + 0] = (v >> 0) & 0xff;
    buf[pos + 1] = (v >> 8) & 0xff;
}

export function read32(buf: ArrayLike<number>, pos: number) {
    return (buf[pos] | (buf[pos + 1] << 8) | (buf[pos + 2] << 16) | (buf[pos + 3] << 24)) >>> 0
}

export function read16(buf: ArrayLike<number>, pos: number) {
    return buf[pos] | (buf[pos + 1] << 8)
}

export function encodeU32LE(words: number[]) {
    let r = new Uint8Array(words.length * 4)
    for (let i = 0; i < words.length; ++i)
        write32(r, i * 4, words[i])
    return r
}

export function decodeU32LE(buf: Uint8Array) {
    let res: number[] = []
    for (let i = 0; i < buf.length; i += 4)
        res.push(read32(buf, i))
    return res
}

export function bufferToString(buf: Uint8Array) {
    return fromUTF8(uint8ArrayToString(buf))
}

export function bufferConcat(a: Uint8Array, b: Uint8Array) {
    const r = new Uint8Array(a.length + b.length)
    r.set(a, 0)
    r.set(b, a.length)
    return r
}

export function jsonCopyFrom<T>(trg: T, src: T) {
    let v = clone(src)
    for (let k of Object.keys(src)) {
        (trg as any)[k] = (v as any)[k]
    }
}
export function assert(cond: boolean, msg = "Assertion failed") {
    if (!cond) {
        debugger
        throw new Error(msg)
    }
}

export function flatClone<T extends Object>(obj: T): T {
    if (obj == null) return null
    let r: any = {}
    Object.keys(obj).forEach((k) => { r[k] = (obj as any)[k] })
    return r;
}

export function clone<T>(v: T): T {
    if (v == null) return null
    return JSON.parse(JSON.stringify(v))
}

export function debounceAsync(handler: () => Promise<void>, delay: number): () => void {
    let timeOutId: any;
    return function () {
        if (timeOutId) {
            clearTimeout(timeOutId);
        }
        timeOutId = setTimeout(async () => {
            await handler();
        }, delay);
    }
}

export interface DebouncedPoll {
    execute: () => void;
    stop: () => void;
}

/**
 * Creates a debounced polls the handler, use stop to any polling interval
 * @param handler 
 * @param delay 
 * @param pollDelay 
 */
export function debouncedPollAsync(handler: () => Promise<void>, delay: number, pollDelay: number): DebouncedPoll {
    const debounced = debounceAsync(handler, delay);
    let interval

    const poll = () => {
        if (!interval)
            interval = setInterval(() => debounced(), pollDelay)
    }

    const execute = () => {
        poll()
        debounced()
    }

    const stop = () => {
        if (interval) {
            clearInterval(interval);
            interval = undefined;
        }
    }

    poll()
    return { execute, stop }
}
