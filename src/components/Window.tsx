import React, { useEffect, useRef, useState } from "react";
import GateContextMenu from "@/src/contextMenus/GateContextMenu";
import WindowContextMenu from "@/src/contextMenus/WindowContextMenu";
import GatesContext from "@/src/contexts/GatesContext";
import GatePropsContext from "../contexts/GatePropsContext";
import Grid from "./Grid";
import { flushSync } from "react-dom";

export type contextMenuPositionType = {
    x: number,
    y: number,
};

export const enum MenuElementFunctions {
    DOUBLE_SIZE = 1,
    SHRINK_SIZE,
    ADD_INPUTNODE,
    ADD_ORGATE,
    ADD_SWITCHGATE,
};

export type MenuElement = {
    id: number,
    title: string,
    gateID?: string,
    func: MenuElementFunctions,
};

const Window = () => {
    const [isGateContextMenuVisible, setIsGateContextMenuVisible] = useState(false);
    const [isWindowContextMenuVisible, setIsWindowContextMenuVisible] = useState(false);
    const [contextMenuPosition, setContextMenuPosition] = useState<contextMenuPositionType>({ x: 0, y: 0 });
    const [gates, setGates] = useState([]);
    const [isDragging, setIsDragging] = useState(false);
    const [selectedGateID, setSelectedGateID] = useState<string>("1");
    const [gridWidth, setGridWidth] = useState(0);
    const [gridHeight, setGridHeight] = useState(0);
    const [gridSize, setGridSize] = useState(60);
    const idCountRef = useRef(0);

    const onWindowRightClick = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setContextMenuPosition({ x: e.clientX - 75, y: e.clientY - 130 });
        if (!isWindowContextMenuVisible) {
            setIsWindowContextMenuVisible(true);
            setIsGateContextMenuVisible(false);
        }
    }
    const onGateRightClick = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setContextMenuPosition({ x: e.clientX - 75, y: e.clientY - 130 });
        if (!isGateContextMenuVisible) {
            setIsGateContextMenuVisible(true);
            setIsWindowContextMenuVisible(false);
        }
        setSelectedGateID(e.currentTarget.id);
    }
    const onGateMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
        setIsDragging(true);
        setSelectedGateID(e.currentTarget.id);
    }
    const onGateMouseUp = (e: React.MouseEvent<HTMLButtonElement>) => {
        setIsDragging(false);
    }
    const onGateMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (isDragging) {
            console.log("dragging");
            const newX = Math.round(e.nativeEvent.offsetX / 50) * 50;
            const newY = Math.round(e.nativeEvent.offsetY / 50) * 50;
            const selectedGate = document.getElementById(selectedGateID);
            selectedGate?.setAttribute('x', newX.toString());
            selectedGate?.setAttribute('y', newY.toString());
        }

    }
    const onWindowLeftClick = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsGateContextMenuVisible(false);
        setIsWindowContextMenuVisible(false);
    }

    useEffect(() => {
        const mainElement = document.getElementsByTagName("main")[0];
        setGridWidth(mainElement!.clientWidth);
        setGridHeight(mainElement!.clientHeight);
    }, [])

    return (
        <GatesContext.Provider value={{ gates, setGates }}>
            <GatePropsContext.Provider value={{ onGateRightClick, onGateMouseDown, onGateMouseUp, onGateMouseMove, id: idCountRef }}>

                <main onClick={onWindowLeftClick} onContextMenu={onWindowRightClick} className="flex items-start justify-start w-full mx-20 drop-shadow-sm h-full bg-slate-200">
                    <Grid width={gridWidth} height={gridHeight} gridSize={gridSize} />
                    {gates.map((gate: React.JSX.Element) => {
                        return gate
                    })}
                    {isGateContextMenuVisible && <GateContextMenu pos={contextMenuPosition} gateID={selectedGateID} />}
                    {isWindowContextMenuVisible && <WindowContextMenu pos={contextMenuPosition} />}
                </main>

            </GatePropsContext.Provider>
        </GatesContext.Provider>

    )
}

export default Window;
