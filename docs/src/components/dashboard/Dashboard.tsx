import { Grid, GridSize } from "@material-ui/core";
import React, {  } from "react";
import { JDDevice } from "../../../../src/jdom/device";
import useSelectedNodes from "../../jacdac/useSelectedNodes";
import { isReading, isValueOrIntensity } from "../../../../src/jdom/spec";
import { strcmp } from "../../../../src/jdom/utils";
import ConnectAlert from "../alert/ConnectAlert"
import Alert from "../ui/Alert";
import useDevices from "../hooks/useDevices";
import DashboardDevice from "./DashboardDevice";

function deviceSort(l: JDDevice, r: JDDevice): number {
    const srvScore = (srv: jdspec.ServiceSpec) => srv.packets
        .reduce((prev, pkt) => prev + (isReading(pkt) ? 10 : isValueOrIntensity(pkt) ? 1 : 0), 0)
    const score = (srvs: jdspec.ServiceSpec[]) => srvs.reduce((prev, srv) => srvScore(srv), 0)

    const ls = score(l.services().slice(1).map(srv => srv.specification))
    const rs = score(r.services().slice(1).map(srv => srv.specification))
    if (ls !== rs)
        return -ls + rs;
    return strcmp(l.deviceId, r.deviceId);
}

export default function Dashboard() {
    const devices = useDevices({ announced: true, ignoreSelf: true })
        .sort(deviceSort);
    const { selected, toggleSelected } = useSelectedNodes()
    const handleExpand = (device: JDDevice) => () => toggleSelected(device)
    const breakpoints = (device: JDDevice): {
        xs?: GridSize,
        md?: GridSize,
        sm?: GridSize,
        lg?: GridSize,
        xl?: GridSize
    } => {
        if (selected(device))
            return { xs: 12, sm: 12, md: 12, lg: 8, xl: 6 };
        else
            return { xs: 6, sm: 6, md: 6, lg: 4, xl: 3 };
    }

    if (!devices.length)
        return <>
            <ConnectAlert />
            <Alert severity="info">Please connect a JACDAC device to use the dashboard.</Alert>
        </>

    return <Grid container spacing={2}>
        {devices?.map(device => <Grid key={device.id} item {...breakpoints(device)}>
            <DashboardDevice device={device} expanded={selected(device)} toggleExpanded={handleExpand(device)} />
        </Grid>)}
    </Grid>
}