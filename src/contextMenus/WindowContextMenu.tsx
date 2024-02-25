import React from 'react'
import MenuElements from './MenuElements.json';
import MenuElementContainer, { MenuElement } from './MenuElementContainer';
import { contextMenuPositionType } from '@/src/components/Window';

type WindowContextMenuProps = {
    pos: contextMenuPositionType,
}

const WindowContextMenu = ({ pos }: WindowContextMenuProps) => {
    return (
        <div style={{ left: pos.x, top: pos.y }} className='flex flex-col w-64 absolute'>
            {
                MenuElements.filter((element: MenuElement) => element.category === "window").map((element) => {
                    return <MenuElementContainer key={element.id} id={element.id} title={element.title} category={element.category} />
                })
            }
        </div>
    );
};

export default WindowContextMenu;