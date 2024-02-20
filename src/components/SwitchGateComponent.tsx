import { useEffect, useState } from "react"
import React from 'react'
import { newSwitchGate } from "../gates/gateFactory";

const SwitchGateComponent = () => {
    const [gateComp, setGateComp] = useState(newSwitchGate(0));

    useEffect(() => {
        console.log("Rendered");
    }, []);

    const onClickEvent = () => {
        setGateComp((prev) => newSwitchGate(prev.inputNode.val > 0 ? 0 : 1));
        console.log("Clicked Switch Gate");
    }

    return (
        <button onClick={onClickEvent}> <span>Switch Gate : </span> {gateComp.outputNode.val}</button>
    );
}

export default SwitchGateComponent;