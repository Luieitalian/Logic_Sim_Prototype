import React from 'react'
import MenuElementContainer from './MenuElementContainer';
import { MenuElement, contextMenuPositionType } from '@/src/components/Window';
import WindowContextMenuElements from './WindowContextMenuElements';

type WindowContextMenuProps = {
    pos: contextMenuPositionType,
}

const WindowContextMenu = ({ pos }: WindowContextMenuProps) => {
    return (
        <div style={{ left: pos.x, top: pos.y }} className='flex border-2 border-slate-600/50 p-1 divide-y-2 flex-col rounded-md divide-slate-700/50 bg-slate-900 text-slate-50/90 absolute'>
            {
                WindowContextMenuElements.map((element: MenuElement) => {
                    return <MenuElementContainer func={element.func} key={element.id} id={element.id} title={element.title} />
                })
            }
        </div>
    );
};

export default WindowContextMenu;