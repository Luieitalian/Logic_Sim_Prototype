import { MutableRefObject, useState } from "react"
import React from 'react'
import { newORGate } from "@/src/gates/gateFactory";
import ORGateSVG from "@/src/svgs/ORGateSVG";

type ORGateProps = {
    onGateRightClick: Function,
    id: MutableRefObject<number> | undefined,
}

const ORGate = ({ onGateRightClick, id }: ORGateProps) => {
    const [gateComp, setGateComp] = useState(newORGate([0, 1, 1, 1, 1, 0, 1]));
    const [size, setSize] = useState(1);
    const [inputNo, setInputNo] = useState(2);

    const onContextMenu = (e: React.MouseEvent<HTMLElement>) => {
        onGateRightClick(e);
    }

    return (

        <button id={(id as MutableRefObject<number>).current.toString() } type="button" onContextMenu={onContextMenu}>
            <ORGateSVG inputNo={inputNo} size={size} />
        </button>

    );
}

export default ORGate;
