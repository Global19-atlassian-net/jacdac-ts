import useWindowEvent from "./useWindowEvent"
import JACDACContext, { JDContextProps } from "../../../src/react/Context";
import { useContext } from "react";

export default function useGamepadHosts() {
    const { bus } = useContext<JDContextProps>(JACDACContext);

    useWindowEvent("gamepadconnected", (event: GamepadEvent) => {
        const gamepad = event.gamepad;

    }, false, [])

    useWindowEvent("gamepadconnected", (event: GamepadEvent) => {
        const gamepad = event.gamepad;
    }, false, [])

}