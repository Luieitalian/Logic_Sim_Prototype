import { MutableRefObject, useEffect, useState } from "react"
import React from 'react'
import ORGateSVG from "@/src/svgs/ORGateSVG";
import { GatePropsContextType } from "@/src/contexts/GatePropsContext";


const ORGate = ({ onGateRightClick, onGateMouseDown, onGateMouseMove, onGateMouseUp, id }: GatePropsContextType) => {
    const [inputs, setInputs] = useState<number[]>([0, 0]);
    const [output, setOutput] = useState<number>(0);
    const [size, setSize] = useState(1);

    const Evaluate = () => {
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i] >= 1) {
                setOutput(1);
                return;
            }
        }
        setOutput(0);
    }

    useEffect(() => {
        Evaluate();
    }, [inputs]);

    const onContextMenu = (e: React.MouseEvent<HTMLElement>) => {
        onGateRightClick(e);
    }
    const onMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
        onGateMouseDown(e);
    }
    const onMouseUp = (e: React.MouseEvent<HTMLButtonElement>) => {
        onGateMouseUp(e);
    }
    const onMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        onGateMouseMove(e);
    }
    return (
        <button className="absolute" onMouseUp={onMouseUp} onMouseMove={onMouseMove} onMouseDown={onMouseDown} id={(id as MutableRefObject<number>).current.toString()} type="button" onContextMenu={onContextMenu}>
            <ORGateSVG inputNo={inputs.length} size={size} />
        </button>
    );
}

export default ORGate;
