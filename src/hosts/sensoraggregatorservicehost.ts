import { NumberFormat } from "../jdom/buffer";
import { CHANGE, SensorAggregatorReg, SensorAggregatorSampleType, SRV_SENSOR_AGGREGATOR } from "../jdom/constants";
import JDRegisterHost from "../jdom/registerhost";
import JDServiceHost from "../jdom/servicehost";

type SensorAggregatorInputRecord = [Uint8Array, number, number, number, SensorAggregatorSampleType, number];
type SensorAggregatorInput = [number, number, SensorAggregatorInputRecord[]];

function numberFmt(stype: SensorAggregatorSampleType) {
    switch (stype) {
        case SensorAggregatorSampleType.U8: return NumberFormat.UInt8LE
        case SensorAggregatorSampleType.I8: return NumberFormat.Int8LE
        case SensorAggregatorSampleType.U16: return NumberFormat.UInt16LE
        case SensorAggregatorSampleType.I16: return NumberFormat.Int16LE
        case SensorAggregatorSampleType.U32: return NumberFormat.UInt32LE
        case SensorAggregatorSampleType.I32: return NumberFormat.Int32LE
    }
}

export default class SensorAggregatorServiceHost extends JDServiceHost {
    readonly inputs: JDRegisterHost<SensorAggregatorInput>;
    readonly numSamples: JDRegisterHost<[number]>;
    readonly sampleSize: JDRegisterHost<[number]>;
    readonly streamingSamples: JDRegisterHost<[number]>;
    readonly currentSample: JDRegisterHost<[Uint8Array]>;

    //private collectors: Collector[]
    private lastSample: number
    private samplingInterval: number
    private _samplesInWindow = 1
    private samplesBuffer: Uint8Array

    constructor() {
        super(SRV_SENSOR_AGGREGATOR);

        this.inputs = this.addRegister<SensorAggregatorInput>(SensorAggregatorReg.Inputs);
        this.numSamples = this.addRegister<[number]>(SensorAggregatorReg.NumSamples, [0]);
        this.sampleSize = this.addRegister<[number]>(SensorAggregatorReg.SampleSize, [1]);
        this.streamingSamples = this.addRegister<[number]>(SensorAggregatorReg.StreamingSamples, [16]);
        this.currentSample = this.addRegister<[Uint8Array]>(SensorAggregatorReg.CurrentSample, [new Uint8Array(0)]);

        this.inputs.on(CHANGE, this.configureInputs.bind(this))
    }

    private configureInputs() {
        //const config = this.inputSettings
        //if (!config)
        //    return
        /*
        rw inputs @ 0x80 {
            sampling_interval: u16 ms
            samples_in_window: u16
            reserved: u32
        repeats:
            device_id: u64
            service_class: u32
            service_num: u8
            sample_size: u8 bytes
            sample_type: SampleType
            sample_shift: i8
        }
        */

        const [samplingInterval, samplesInWindow, records] = this.inputs.values();
        if (samplingInterval === undefined)
            return;
        const entrySize = 16
        let off = 8
        for (const coll of this.collectors || [])
            coll.destroy()
        this.collectors = []
        let frameSz = 0
        while (off < config.length) {
            const coll = new Collector(this, config.slice(off, entrySize))
            coll.setRegInt(SensorReg.StreamingInterval, this.samplingInterval)
            coll.setRegInt(SensorReg.StreamingSamples, 255)
            this.collectors.push(coll)
            frameSz += coll.lastSample.length
            off += entrySize
        }
        this.sampleSize.setValues([frameSz]);
        this.numSamples.setValues([0]);
        this.syncWindow()
    }

    get samplesInWindow() {
        return this._samplesInWindow
    }

    set samplesInWindow(v: number) {
        if (!v || v <= 1) v = 1
        this._samplesInWindow = v
        this.syncWindow()
    }

    private syncWindow() {
        const [sz] = this.sampleSize.values();
        if (sz)
            this.samplesBuffer = new Uint8Array(this.samplesInWindow * sz)
        else
            this.samplesBuffer = new Uint8Array(this.samplesInWindow)
    }

    private pushData() {
        this.samplesBuffer.shift(this.sampleSize)
        let off = this.samplesBuffer.length - this.sampleSize
        for (const coll of this.collectors) {
            this.samplesBuffer.write(off, coll.lastSample)
            off += coll.lastSample.length
        }
        const [ns] = this.numSamples.values();
        this.numSamples.setValues([ns + 1]);
        const [sts] = this.streamingSamples.values();
        if (sts > 0) {
            this.streamingSamples.setValues([sts - 1]);
            this.sendLastSample()
        }
    }

    _newData(timestamp: number, isPost: boolean) {
        if (!this.lastSample)
            this.lastSample = timestamp
        const d = timestamp - this.lastSample
        let numSamples = Math.idiv(d + (d >> 1), this.samplingInterval)
        if (!numSamples)
            return
        if (isPost) {
            this.lastSample = timestamp
            this.pushData()
            if (this.newDataCallback)
                this.newDataCallback()
        } else {
            numSamples--
            if (numSamples > 5) numSamples = 5
            while (numSamples-- > 0)
                this.pushData()
        }
    }

    private async sendLastSample() {
        const [sz] = this.sampleSize.values();
        const buf = this.samplesBuffer.slice(this.samplesBuffer.length - sz, sz)
        this.currentSample.setValues([buf]);
        await this.currentSample.sendGetAsync();
    }
}