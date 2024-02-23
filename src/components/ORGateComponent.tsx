import { useEffect, useState } from "react"
import React from 'react'
import { newORGate } from "@/src/gates/gateFactory";
import ORGateSVG from "@/src/svgs/ORGateSVG";

const ORGateComponent = () => {
    const [gateComp, setGateComp] = useState(newORGate([0, 1, 1, 1, 1, 0, 1]));

    useEffect(() => {
        console.log(`Rendered`);
    }, []);

    const onButtonClick = () => {
        console.log(gateComp.outputNode.val);
    }

    return (
        <button type="button" onClick={onButtonClick}>
            <ORGateSVG inputs={5} width={300} height={200}/>
        </button>
    );
}

export default ORGateComponent;
