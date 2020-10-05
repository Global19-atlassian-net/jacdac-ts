import React, { useContext, useEffect, useState } from "react"
import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, CircularProgress, Collapse, Grid, TextField, Typography, useEventCallback, useTheme } from '@material-ui/core';
import { Link } from 'gatsby-theme-material-ui';
import useDbValue from "./useDbValue";
import JACDACContext, { JDContextProps } from "../../../src/react/Context";
import { isSensor, startStreaming } from "../../../src/dom/sensor";
import useChange from "../jacdac/useChange";
import useGridBreakpoints from "./useGridBreakpoints";
import { JDRegister } from "../../../src/dom/register";
import { JDClient } from "../../../src/dom/client";
import DeviceCardHeader from "./DeviceCardHeader";
import Alert from "./Alert";
import useEffectAsync from "./useEffectAsync";
import { BaseReg, CHANGE, CONNECT, CONNECTING, CONNECTION_STATE, DISCONNECT, ERROR, PACKET_REPORT, PROGRESS, REPORT_RECEIVE, SRV_MODEL_RUNNER } from "../../../src/dom/constants";
import FieldDataSet from "./FieldDataSet";
import { deviceSpecificationFromClassIdenfitier } from "../../../src/dom/spec";
import CircularProgressWithLabel from "./CircularProgressWithLabel";
import Trend from "./Trend"
// tslint:disable-next-line: match-default-export-name no-submodule-imports
import GetAppIcon from '@material-ui/icons/GetApp';
// tslint:disable-next-line: match-default-export-name no-submodule-imports
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// tslint:disable-next-line: match-default-export-name no-submodule-imports
import Accordion from '@material-ui/core/Accordion';
// tslint:disable-next-line: match-default-export-name no-submodule-imports
import AccordionDetails from '@material-ui/core/AccordionDetails';
// tslint:disable-next-line: match-default-export-name no-submodule-imports
import AccordionSummary from '@material-ui/core/AccordionSummary';
import { AccordionActions } from '@material-ui/core';
// tslint:disable-next-line: match-default-export-name no-submodule-imports
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import ServiceList from "./ServiceList";
import { ModelActions, ModelContent } from "./ModelUploader";
import { readBlobToUint8Array } from "../../../src/dom/utils";
import useDeviceName from "./useDeviceName";

const EDGE_IMPULSE_API_KEY = "edgeimpulseapikey"

const IDLE = "idle";
const STARTING = "starting";
const SAMPLING = "sampling";
const UPLOADING = "uploading";

const SAMPLING_STATE = "samplingState";

interface EdgeImpulseResponse {
    success: boolean;
    error?: string;
    // HTTP status code
    errorStatus?: number;
}

interface EdgeImpulseHello {
    hello?: boolean;
    err?: any;
}

interface EdgeImpulseSensorInfo {
    "name": string,
    "maxSampleLengthS": number,
    "frequencies": number[]
}

interface EdgeImpulseRemoteManagementInfo {
    version: number;
    apiKey: string;
    deviceId: string;
    deviceType: string;
    connection: string;
    sensors: EdgeImpulseSensorInfo[]
}

interface EdgeImpulseDeviceInfo {
    id: number;
    deviceId: string;
    name: string;
    created: string;
    lastSeen: string;
    deviceType: string;
    sensors: EdgeImpulseSensorInfo[]
}

interface EdgeImpulseDeviceResponse extends EdgeImpulseResponse {
    device?: EdgeImpulseDeviceInfo;
}

interface EdgeImpulseSample extends EdgeImpulseResponse {
    "label": string;
    "length": number;
    "path": string;
    "hmacKey": string;
    "interval": number;
    "sensor": string;
}

interface EdgeImpulseSampling extends EdgeImpulseSample {
    dataSet?: FieldDataSet;
    startTimestamp?: number;
    lastProgressTimestamp?: number;
    generatedFilename?: string;
    unsubscribers?: (() => void)[];
}

interface EdgeImpulseProjectInfo {
    id: number;
    name: string;
    logo?: string;
}

interface EdgeImpulseProject extends EdgeImpulseResponse {
    project: EdgeImpulseProjectInfo,
    devices: EdgeImpulseDeviceInfo[],
    impulse: {
        created: boolean;
        configured: boolean;
        complete: boolean;
    },
    dataSummary: {
        totalLengthMs: number;
        labels: string[];
        dataCount: number;
    },
    downloads: {
        name: string;
        type: string;
        size: string;
        link: string;
    }[];
}

interface EdgeImpulseProjects extends EdgeImpulseResponse {
    projects: EdgeImpulseProjectInfo[];
}

/*
A client for the EdgeImpulse remote management
https://docs.edgeimpulse.com/reference#remote-management
*/
class EdgeImpulseClient extends JDClient {
    private _ws: WebSocket;
    public connectionState = DISCONNECT;
    public samplingState = IDLE;
    private _hello: EdgeImpulseRemoteManagementInfo;
    private _sample: EdgeImpulseSampling;
    private _pingInterval: any;
    private pong: boolean;

    constructor(private readonly apiKey: string, private readonly register: JDRegister) {
        super()

        this.handleMessage = this.handleMessage.bind(this);
        this.handleOpen = this.handleOpen.bind(this)
        this.handleError = this.handleError.bind(this);
        this.handleReport = this.handleReport.bind(this);
        this.handlePing = this.handlePing.bind(this);

        // make sure to clean up
        this.mount(() => this.disconnect());
    }

    get dataSet() {
        return this._sample?.dataSet;
    }

    disconnect() {
        this.clearSampling();
        if (this._pingInterval) {
            clearInterval(this._pingInterval)
            this._pingInterval = undefined;
        }
        // stop socket
        if (this._ws) {
            const w = this._ws;
            this._ws = undefined;
            try {
                w.close();
            }
            catch (e) {
            }
            finally {
                this.setConnectionState(DISCONNECT);
            }
        }
    }

    private setConnectionState(state: string) {
        if (this.connectionState !== state) {
            this.connectionState = state;
            this.emit(CONNECTION_STATE, this.connectionState);
            console.log(`ei: connection state changed`, this.connectionState)
        }
    }

    private setSamplingState(state: string) {
        if (this.samplingState !== state) {
            this.samplingState = state;
            this.emit(SAMPLING_STATE, this.samplingState)
            this.emit(CHANGE)
            console.log(`ei: sampling state changed`, this.samplingState)
        }
    }

    private send(msg: any) {
        this._ws?.send(JSON.stringify(msg))
    }

    private async handleOpen() {
        console.log(`ws: open`)
        const { service } = this.register;
        const { device } = service;

        // fetch device spec
        const deviceClass = await this.register.service.device.resolveDeviceClass();
        const deviceSpec = deviceSpecificationFromClassIdenfitier(deviceClass);

        this._hello = {
            "version": 2,
            "apiKey": this.apiKey,
            "deviceId": device.deviceId,
            "deviceType": deviceSpec?.name || deviceClass?.toString(16) || "JACDAC device",
            "connection": "ip", // direct connection
            "sensors": [
                {
                    "name": service.name,
                    "maxSampleLengthS": 10000,
                    "frequencies": [50, 30, 20, 10]
                }
            ]
        };
        this.send({
            "hello": this._hello
        })
    }

    private reconnect() {
        this.disconnect();
        this.connect();
    }

    private handleMessage(msg: any) {
        // response to ping?
        if (msg.data === "pong") {
            this.pong = true;
            return;
        }

        const data = JSON.parse(msg.data)
        if (data.hello !== undefined) {
            const hello = data as EdgeImpulseHello;
            if (!hello.hello) {
                this.emit(ERROR, hello.err)
                this.disconnect();
            } else {
                this.setConnectionState(CONNECT);
            }
        } else if (data.sample) {
            const sample = data.sample as EdgeImpulseSample;
            this.startSampling(sample);
        }
    }

    get connected() {
        return this.connectionState === CONNECT;
    }

    get sampling() {
        return this.samplingState !== IDLE;
    }

    get generatedSampleName() {
        return this._sample?.generatedFilename;
    }

    private handleReport() {
        if (!this.connected) return; // ignore

        const { bus } = this.register.service.device
        const { timestamp } = bus;
        // first sample, notify we're started
        if (this.samplingState == STARTING) {
            this._sample.startTimestamp = this._sample.lastProgressTimestamp = timestamp;
            this.send({ "sampleStarted": true });
            this.setSamplingState(SAMPLING);
        }
        // store sample
        if (this.samplingState == SAMPLING) {
            const ds = this.dataSet;
            ds.addRow();
            this.emit(REPORT_RECEIVE);

            // debounced progress update
            if (timestamp - this._sample.lastProgressTimestamp > 100) {
                this._sample.lastProgressTimestamp = timestamp;
                this.emit(PROGRESS, this.progress)
            }

            if (timestamp - this._sample.startTimestamp >= this._sample.length) {
                // first stop the sampling
                this.stopSampling();
                // we're done!
                this.emit(PROGRESS, this.progress)
                // and upload...
                this.uploadData();
            }
        }
    }

    private uploadData(): Promise<void> {
        this.setSamplingState(UPLOADING);
        const ds = this.dataSet;
        const payload = {
            "protected": {
                "ver": "v1",
                "alg": "none",
                "iat": Date.now()
            },
            "signature": "",
            "payload": {
                "device_name": this._hello.deviceId,
                "device_type": this._hello.deviceType,
                "interval_ms": this._sample.interval,
                "sensors": ds.headers.map((h, i) => ({
                    "name": ds.headers[i],
                    "units": ds.units[i] || "/"
                })
                ),
                "values": ds.data(true)
            }
        }
        console.log(`payload`, payload)
        // upload dataset
        // https://docs.edgeimpulse.com/reference#ingestion-api
        return fetch(`https://ingestion.edgeimpulse.com${this._sample.path}`, {
            method: "POST",
            headers: {
                "x-api-key": this.apiKey,
                "x-label": this._sample.label,
                "x-file-name": ds.name,
                "x-disallow-duplicates": "true",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        }).then(async (resp) => {
            // response contains the filename
            const filename = await resp.text();
            this._sample.generatedFilename = filename;
        }).finally(() => {
            this.send({
                "sampleFinished": true
            })
            this.setSamplingState(IDLE);
        })
    }

    private handleError(ev: Event) {
        this.emit(ERROR, ev)
        this.reconnect();
    }

    private startSampling(sample: EdgeImpulseSample) {
        const { service, fields } = this.register;
        this._sample = sample;
        this._sample.dataSet = new FieldDataSet(
            this.register.service.device.bus,
            this._sample.label,
            fields
        );
        this._sample.unsubscribers = [];
        this.send({ "sample": true })
        this.setSamplingState(STARTING);

        // set interval
        const streamingIntervalRegister = service.register(BaseReg.StreamingInterval);
        // TODO ack
        streamingIntervalRegister.sendSetIntAsync(this._sample.interval);

        // start sampling
        this._sample.unsubscribers.push(startStreaming(this.register.service));
        const collectInterval = setInterval(this.handleReport, this._sample.interval)
        this._sample.unsubscribers.push(() => clearInterval(collectInterval))
    }

    private stopSampling() {
        const sample = this._sample;
        if (sample) {
            sample.unsubscribers.forEach(unsub => {
                try {
                    unsub();
                }
                catch (e) {
                    console.log(e)
                }
            })
            sample.unsubscribers = [];
        }
    }

    private clearSampling() {
        this.stopSampling();
        if (this._sample) {
            this._sample = undefined;
            this._hello = undefined;
            this.setSamplingState(IDLE);
        }
    }

    connect() {
        if (this._ws) return; // already connected

        console.log(`ei: connect`)
        this.setConnectionState(CONNECTING)
        this._ws = new WebSocket("wss://remote-mgmt.edgeimpulse.com")
        this._ws.onmessage = this.handleMessage;
        this._ws.onopen = this.handleOpen;
        this._ws.onerror = this.handleError;

        this.pong = true;
        this._pingInterval = setInterval(this.handlePing, 3000);
    }

    private handlePing() {
        if (!this.connected) return;

        if (!this.pong) {
            // the socket did not response
            console.log(`missing pong`)
            this.reconnect();
        } else {
            // send a new ping and wait for pong
            this.pong = false;
            this._ws.send("ping");
        }
    }

    get progress() {
        const timestamp = this.register.service.device.bus.timestamp;
        return this.samplingState !== IDLE
            && (timestamp - this._sample.startTimestamp) / this._sample.length;
    }

    static async currentProjectInfo(apiKey: string): Promise<{
        valid: boolean,
        errorStatus?: number,
        project?: EdgeImpulseProject
    }> {
        if (!apiKey) return { valid: false };

        const rsj = await EdgeImpulseClient.apiFetch<EdgeImpulseProjects>(apiKey, "projects");
        if (!rsj.success) {
            return {
                valid: false,
                errorStatus: rsj.errorStatus
            }
        }

        // the API returns the current project when using the API key
        const projectId = rsj.projects?.[0]?.id;
        if (!rsj?.success || projectId === undefined) {
            return {
                valid: true,
                errorStatus: 402
            }
        }

        const project = await EdgeImpulseClient.apiFetch<EdgeImpulseProject>(apiKey, projectId);
        return {
            valid: true,
            errorStatus: project.errorStatus,
            project
        }
    }

    static async apiFetch<T extends EdgeImpulseResponse>(apiKey: string, path: string | number, body?: any): Promise<T> {
        const API_ROOT = "https://studio.edgeimpulse.com/v1/api/"
        const url = `${API_ROOT}${path}`
        const options: RequestInit = {
            method: body ? "POST" : "GET",
            headers: {
                "x-api-key": apiKey,
                "Accept": "application/json"
            },
            body: body
        }
        if (options.method === "POST")
            options.headers["Content-Type"] = "application/json"

        const resp = await fetch(url, options)
        if (resp.status !== 200)
            return {
                success: false,
                errorStatus: resp.status,
                error: resp.statusText
            } as T;
        try {
            const payload = await resp.json() as T;
            return payload;
        } catch (e) {
            return {
                success: false,
                errorStatus: 500,
                error: e.message
            } as T;
        }
    }

    static async deviceInfo(apiKey: string, projectId: number, deviceId: string): Promise<EdgeImpulseDeviceResponse> {
        return await EdgeImpulseClient.apiFetch<EdgeImpulseDeviceResponse>(apiKey, `${projectId}/device/${deviceId}`)
    }

    static async renameDevice(apiKey: string, projectId: number, deviceId: string, name: string): Promise<EdgeImpulseResponse> {
        return await EdgeImpulseClient.apiFetch<EdgeImpulseResponse>(apiKey, `${projectId}/devices/${deviceId}/rename`, { name })
    }
}

function ApiKeyManager() {
    const { value: apiKey, setValue: setApiKey } = useDbValue(EDGE_IMPULSE_API_KEY, "")
    const [key, setKey] = useState("")
    const [expanded, setExpanded] = useState(false)
    const [validated, setValidated] = useState(false)

    useEffectAsync(async (mounted) => {
        if (!apiKey) {
            if (mounted())
                setValidated(false)
        }
        else {
            const r = await EdgeImpulseClient.currentProjectInfo(apiKey)
            if (!mounted())
                return;
            if (r?.valid) {
                setValidated(true);
                setExpanded(false);
            } else {
                setValidated(false)
                if (r.errorStatus === 403) // invalid key
                    setApiKey(undefined)
            }
        }
    }, [apiKey])

    const handleApiChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setKey(event.target.value)
    }
    const handleSave = () => {
        setApiKey(key)
        setKey("")
    }
    const handleReset = () => {
        setApiKey("")
    }

    const handleExpanded = () => {
        setExpanded(!expanded)
    }

    return <Accordion expanded={expanded} onChange={handleExpanded}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="body1">API Key Configuration</Typography>
            {validated && <Box ml={1} color="success.main"><CheckCircleOutlineIcon /></Box>}
        </AccordionSummary>
        <AccordionDetails style={({ display: "block" })}>
            {validated && <Alert severity={"success"}>API key ready!</Alert>}
            <p>To get an <b>API key</b>, navigate to &nbsp;
            <Link to="https://studio.edgeimpulse.com/studio/8698/keys" target="_blank">https://studio.edgeimpulse.com/studio/8698/keys</Link>
            &nbsp; and generate a new key.</p>
            <TextField
                autoFocus
                label="API key"
                fullWidth
                value={key}
                onChange={handleApiChange}
            />
        </AccordionDetails>
        <AccordionActions>
            <Button disabled={!key} variant="contained" color="primary" onClick={handleSave}>Save</Button>
            <Button disabled={!apiKey} variant="contained" onClick={handleReset}>Clear</Button>
        </AccordionActions>
    </Accordion >
}

function useEdgeImpulseProjectInfo(apiKey: string) {
    const [info, setInfo] = useState<EdgeImpulseProject>(undefined);

    useEffectAsync(async (mounted) => {
        if (!apiKey) {
            if (mounted())
                setInfo(undefined);
        } else {
            const r = await EdgeImpulseClient.currentProjectInfo(apiKey)
            if (mounted())
                setInfo(r?.project);
        }
    }, [apiKey])

    return info;
}

function ProjectInfo(props: { apiKey: string, info: EdgeImpulseProject }) {
    const { apiKey, info } = props;
    const disabled = !info?.success;

    return <Card>
        <CardHeader title={info?.project?.name || "..."}
            subheader={info?.dataSummary && `${info?.dataSummary?.dataCount} samples`}
        />
        {info?.project?.logo && <CardMedia image={info?.project?.logo} />}
        <CardActions>
            <Button disabled={disabled} target="_blank" href={`https://studio.edgeimpulse.com/studio/${info?.project?.id}/`} variant="contained" color="primary">Open EdgeImpulse</Button>
        </CardActions>
    </Card >
}

function ModelDownloadButton(props: { apiKey: string, info: EdgeImpulseProject, setModel: (blob: Uint8Array) => void }) {
    const { apiKey, info, setModel } = props;
    const theme = useTheme();
    const [downloading, setDownloading] = useState(false)
    const [error, setError] = useState("")
    const download = info?.downloads.find(download => download.type === "TensorFlow Lite (float32)");

    const handleDownload = (url: string) => async () => {
        try {
            setDownloading(true)
            setError("")
            const resp = await fetch(url, {
                headers: {
                    "x-api-key": apiKey
                }
            })
            const res = await resp.blob()
            const bytes = await readBlobToUint8Array(res);
            setModel(bytes)
        }
        catch (e) {
            console.log(e)
            setError("Oops, download failed.")
        }
        finally {
            setDownloading(false)
        }
    }

    return <Box mb={1}>
        {error && <Alert severity="error">{error}</Alert>}
        <Button
            variant="contained"
            disabled={!download || downloading}
            startIcon={downloading ? <CircularProgress size={theme.spacing(2)} /> : <GetAppIcon />}
            onClick={handleDownload(`https://studio.edgeimpulse.com${download?.link}`)}>DOWNLOAD MODEL</Button>
    </Box>
}

function ReadingRegister(props: { register: JDRegister, apiKey: string, info: EdgeImpulseProjectInfo }) {
    const { register, apiKey, info } = props
    const { service } = register;
    const { device } = service;

    const [client, setClient] = useState<EdgeImpulseClient>(undefined)
    const [error, setError] = useState("")
    const [connectionState, setConnectionState] = useState(DISCONNECT)
    const [samplingState, setSamplingState] = useState(IDLE)
    const [samplingProgress, setSamplingProgress] = useState(0)
    const [deviceInfo, setDeviceInfo] = useState<EdgeImpulseDeviceInfo>(undefined);
    const { deviceId } = device;
    const deviceName = useDeviceName(device, false);
    const projectId = info?.id;

    const connected = connectionState === CONNECT;
    const sampling = samplingState !== IDLE
    const dataSet = client?.dataSet;
    const generatedSampleName = client?.generatedSampleName;

    useEffect(() => {
        if (!apiKey || !register) {
            setClient(undefined);
            setError(undefined);
            return undefined;
        }
        else {
            console.log(`start client`)
            const c = new EdgeImpulseClient(apiKey, register)
            c.connect();
            setClient(c);
            setError(undefined);
            return () => c.unmount();
        }
    }, [register, apiKey])
    // subscribe to client changes
    useEffect(() => client?.subscribe(CONNECTION_STATE,
        (v: string) => setConnectionState(v))
        , [client])
    // subscribe to client changes
    useEffect(() => client?.subscribe(SAMPLING_STATE,
        (v: string) => setSamplingState(v))
        , [client])
    // listen to errors
    useEffect(() => client?.subscribe(ERROR, (e: string) => setError(e))
        , [client])
    // progress
    useEffect(() => client?.subscribe(PROGRESS, (p: number) => setSamplingProgress(p * 100))
        , [client])

    // name checking
    useEffectAsync(async () => {
        if (!apiKey || projectId === undefined) {
            setDeviceInfo(undefined)
        } else {
            const resp = await EdgeImpulseClient.deviceInfo(apiKey, projectId, deviceId);
            const info = resp.success && resp.device;
            if (info && info.name !== deviceName) {
                // no name assigned, use current
                if (info.name === deviceId) {
                    console.log(`ei: sync name`)
                    const rename = await EdgeImpulseClient.renameDevice(apiKey, projectId, deviceId, deviceName)
                    if (rename.success) {
                        info.name = deviceName;
                    }
                } else {
                    // name assigned in EI, pull it in
                    console.log(`ei: pull name`)
                    device.name = info.name;
                }
            }
            setDeviceInfo(info)
        }
    }, [apiKey, projectId, deviceName])

    return <Card>
        <DeviceCardHeader device={device} />
        <CardContent>
            {error && <Alert severity={"error"}>{error}</Alert>}
            {connected && !sampling && <Alert severity={"success"}>Connected</Alert>}
            {sampling && <Alert severity={"info"}>Sampling...</Alert>}
            {!!dataSet && <Trend dataSet={dataSet} />}
            {sampling && <CircularProgressWithLabel value={samplingProgress} />}
            {generatedSampleName && <Typography variant="body2">sample name: {generatedSampleName}</Typography>}
        </CardContent>
    </Card>
}

export default function EdgeImpulse(props: {}) {
    const { value: apiKey } = useDbValue(EDGE_IMPULSE_API_KEY, "")
    const { bus } = useContext<JDContextProps>(JACDACContext);
    const [model, setModel] = useState<Uint8Array>(undefined)
    const gridBreakPoints = useGridBreakpoints()
    const info = useEdgeImpulseProjectInfo(apiKey);

    const readingRegisters = useChange(bus, bus =>
        bus.devices().map(device => device
            .services().find(srv => isSensor(srv))
            ?.readingRegister
        ).filter(reg => !!reg))

    return <>
        <ApiKeyManager />
        <Box mb={1} />
        <ProjectInfo apiKey={apiKey} info={info} />
        <h3>Data acquisition</h3>
        {!readingRegisters.length && <Alert severity="info">No sensor found...</Alert>}
        <Grid container spacing={2}>
            {readingRegisters.map(reg => <Grid item key={reg.id} {...gridBreakPoints}>
                <ReadingRegister register={reg} apiKey={apiKey} info={info?.project} />
            </Grid>)}
        </Grid>
        <h3>Deployment</h3>
        {model && <Box mb={1}><Alert severity="success">Model downloaded!</Alert></Box>}
        <ModelDownloadButton apiKey={apiKey} info={info} setModel={setModel} />
        <ServiceList
            serviceClass={SRV_MODEL_RUNNER}
            content={service => <ModelContent service={service} />}
            actions={service => <ModelActions
                service={service}
                model={model}
            />}
            alertMissing={"No model runner found..."}
        />
    </>
}