import { useEffect, useState } from "react"
import React from 'react'
import { newSwitchGate } from "@/src/gates/gateFactory";
import Switch from "@/src/gates/switch";

type SwitchGateProps = {
    onGateRightClick: Function,
}

const SwitchGate = ({ onGateRightClick }: SwitchGateProps) => {
    const [gateComp, setGateComp] = useState(newSwitchGate(0));

    useEffect(() => {
        console.log("Rendered");
    }, []);

    const onClickEvent = (e: React.MouseEvent<HTMLElement>) => {
        setGateComp((prev: Switch) => newSwitchGate(prev.inputNode.val > 0 ? 0 : 1));
        console.log("Clicked Switch Gate");
    }

    const onContextMenu = (e: React.MouseEvent<HTMLElement>) => {
        onGateRightClick(e);
    }

    return (

        <button onContextMenu={onContextMenu} onClick={onClickEvent}> <span>Switch Gate : </span> {gateComp.outputNode.val}</button>

    );
}

export default SwitchGate;