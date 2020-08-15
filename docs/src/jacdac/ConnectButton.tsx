import React, { useEffect, useState, useContext } from "react";
import { Button } from "gatsby-theme-material-ui";
import JacdacContext from "../../../src/react/Context";
import { BusState } from "../../../src/dom/bus";
// tslint:disable-next-line: no-submodule-imports match-default-export-name
import UsbIcon from '@material-ui/icons/Usb';
import { CircularProgress, Hidden } from "@material-ui/core";
import { DEVICE_CHANGE } from "../../../src/dom/constants";
import KindIcon from "../components/KindIcon";

function ConnectButton() {
    const { bus, connectionState, connectAsync, disconnectAsync } = useContext(JacdacContext)
    const [count, setCount] = useState(bus.devices().length)
    useEffect(() => bus.subscribe(DEVICE_CHANGE, () => setCount(bus.devices().length)))
    const showDisconnect = connectionState == BusState.Connected || connectionState == BusState.Disconnecting;
    const inProgress = connectionState == BusState.Connecting || connectionState == BusState.Disconnecting
    return <Button
        variant="contained"
        color="primary"
        startIcon={showDisconnect ? <KindIcon kind="device" /> : <UsbIcon />}
        disabled={connectionState != BusState.Connected && connectionState != BusState.Disconnected}
        onClick={showDisconnect ? disconnectAsync : connectAsync}>
        {<Hidden mdDown>{showDisconnect ? "disconnect" : "connect"}</Hidden>}
        {count > 0 && ` (${count})`}
        {inProgress && <CircularProgress />}
    </Button>
}

export default ConnectButton;