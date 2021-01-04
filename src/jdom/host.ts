import { JDBus } from "./bus";
import { JDClient } from "./client";
import { CMD_ADVERTISEMENT_DATA, JD_SERVICE_INDEX_CRC_ACK, JD_SERVICE_INDEX_CTRL } from "./constants";
import Packet from "./packet";

export class JDDeviceHost extends JDClient {
    /**
     * Device services, not including the control service
     */
    private _services: JDServiceHost[] = [];
    private restartCounter = 0

    constructor(public readonly deviceId: string) {
        super();
    }

    addService(host: JDServiceHost) {
        if (this._services.indexOf(host) < 0)
            this._services.push(host)
    }

    processPacket(pkt: Packet) {
        
    }

    async sendAck(bus: JDBus, pkt: Packet) {
        const ack = Packet.onlyHeader(pkt.crc)
        ack.serviceIndex = JD_SERVICE_INDEX_CRC_ACK;
        ack.deviceIdentifier = this.deviceId;
        await ack.sendCoreAsync(bus)
    }

    async sendAnnounce(bus: JDBus) {
        // we do not support any services (at least yet)
        if (this.restartCounter < 0xf) this.restartCounter++

        const fmt = `u32 ${this._services.map(srv => 'u32').join(' ')}`
        const pkt = Packet.jdpacked<number[]>(CMD_ADVERTISEMENT_DATA, fmt, [this.restartCounter | 0x100]
            .concat(this._services.map(srv => srv.serviceClass)))
        pkt.serviceIndex = JD_SERVICE_INDEX_CTRL;
        pkt.deviceIdentifier = this.deviceId
        await pkt.sendCoreAsync(bus)
    }
}

export class JDServiceHost extends JDClient {
    constructor(public readonly serviceClass: number) {
        super();
    }
}

