import React from 'react'
import MenuElements from './MenuElements.json';
import MenuElementContainer, { MenuElement } from './MenuElementContainer';
import { contextMenuPositionType } from '../components/Window';

type GateContextMenuProps = {
    gateID: number,
    pos: contextMenuPositionType,
}

const GateContextMenu = ({ gateID, pos }: GateContextMenuProps) => {
    return (
        <div style={{left: pos.x, top: pos.y}} className='flex flex-col w-64 absolute'>
            {
                MenuElements.filter((element: MenuElement) => element.category === "gate").map((element) => {
                    return <MenuElementContainer key={element.id} id={element.id} title={element.title} category={element.category} />
                })
            }
        </div>
    );
};

export default GateContextMenu;