import { MutableRefObject, useEffect, useState } from "react"
import React from 'react'
import { GatePropsContextType } from "@/src/contexts/GatePropsContext";
import SwitchGateSVG from "../svgs/SwitchGateSVG";

const SwitchGate = ({ onGateRightClick, id }: GatePropsContextType) => {
    const [input, setInput] = useState(0);
    const [output, setOutput] = useState(0);
    const [size, setSize] = useState(1);

    const onClickEvent = (e: React.MouseEvent<HTMLElement>) => {
        setInput(input === 0 ? 1 : 0);
    }

    const onContextMenu = (e: React.MouseEvent<HTMLElement>) => {
        onGateRightClick(e);
    }

    useEffect(() => {
        setOutput(input === 0 ? 1 : 0);
    }, [input]);

    return (
        <button className="absolute" id={(id as MutableRefObject<number>).current.toString()} type="button" onContextMenu={onContextMenu} onClick={onClickEvent}> 
            <SwitchGateSVG size={size} output={output} />
        </button>
    );
}

export default SwitchGate;
