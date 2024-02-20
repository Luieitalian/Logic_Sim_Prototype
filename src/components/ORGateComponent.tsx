import { useEffect, useState } from "react"
import React from 'react'
import ORGate from "../gates/or";
import { InputNode, OutputNode } from "../gates/logic";
import { newORGate } from "../gates/gateFactory";

const ORGateComponent = () => {
    const [gateComp, setGateComp] = useState(newORGate([0, 1, 1, 1, 1, 0, 1]));

    useEffect(() => {
        console.log("Rendered");
    }, []);

    return (
        <button><span>Or Gate : </span>{gateComp.outputNode.val}</button>
    );
}

export default ORGateComponent;
