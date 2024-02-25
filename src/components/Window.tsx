import React, { ReactNode, useRef, useState } from "react"
import ORGate from "./ORGate";
import SwitchGate from "./SwitchGate";
import GateContextMenu from "@/src/contextMenus/GateContextMenu";
import WindowContextMenu from "@/src/contextMenus/WindowContextMenu";
import GatesContext from "@/src/contexts/GatesContext";
import GatePropsContext from "../contexts/GatePropsContext";

export type contextMenuPositionType = {
    x: number,
    y: number,
}

const Window = () => {
    const [isGateContextMenuVisible, setIsGateContextMenuVisible] = useState(false);
    const [isWindowContextMenuVisible, setIsWindowContextMenuVisible] = useState(false);
    const [gateIDState, setGateIDState] = useState(0);
    const [contextMenuPosition, setContextMenuPosition] = useState<contextMenuPositionType>({ x: 0, y: 0 });
    const [gates, setGates] = useState([]);
    const idCountRef = useRef(0);

    const onWindowRightClick = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setContextMenuPosition({ x: e.clientX - 120, y: e.clientY - 120 });
        if (!isWindowContextMenuVisible) {
            setIsWindowContextMenuVisible(true);
            setIsGateContextMenuVisible(false);
        }
    }

    const onGateRightClick = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setContextMenuPosition({ x: e.clientX - 120, y: e.clientY - 120 });
        if (!isGateContextMenuVisible) {
            setIsGateContextMenuVisible(true);
            setIsWindowContextMenuVisible(false);
        }
        console.log("gate id: ", e.currentTarget.id);
    }

    const onWindowLeftClick = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsGateContextMenuVisible(false);
        setIsWindowContextMenuVisible(false);
    }

    return (
        <GatesContext.Provider value={{ gates, setGates }}>
            <GatePropsContext.Provider value={{ onGateRightClick, id: idCountRef }}>

                <main onClick={onWindowLeftClick} onContextMenu={onWindowRightClick} className="w-full mx-20 drop-shadow-sm h-full bg-sky-500 flex justify-between flex-col">
                    {gates.map((gate: React.JSX.Element) => {
                        return gate
                    })}
                    {isGateContextMenuVisible && <GateContextMenu pos={contextMenuPosition} gateID={gateIDState} />}
                    {isWindowContextMenuVisible && <WindowContextMenu pos={contextMenuPosition} />}
                </main>

            </GatePropsContext.Provider>
        </GatesContext.Provider>

    )
}

export default Window;
