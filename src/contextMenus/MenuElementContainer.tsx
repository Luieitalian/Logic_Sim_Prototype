import React, { MutableRefObject, useContext, useRef } from 'react'
import GatesContext from '@/src/contexts/GatesContext'
import ORGate from '@/src/components/ORGate';
import GatePropsContext from '@/src/contexts/GatePropsContext';

export type MenuElement = {
    id: number,
    category: string,
    title: string,
}

const MenuElementContainer = (element: MenuElement) => {

    const gatesContext = useContext(GatesContext);
    const gatePropsContext = useContext(GatePropsContext);

    const onMenuElementClick = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        e.stopPropagation();
        if (gatePropsContext.id as MutableRefObject<number>) {
                if (element.title === "add_orgate") {
                gatesContext.setGates(gatesContext.gates.concat(
                    <ORGate key={gatePropsContext.id?.current} id={gatePropsContext.id} onGateRightClick={gatePropsContext.onGateRightClick} />,
                ));
                const idCountRef = gatePropsContext.id as MutableRefObject<number>;
                idCountRef.current++;
            }
        } else {
            throw Error;
        }
    }

    return (
        <button onClick={onMenuElementClick} type='button' className='flex relative w-72 items-center justify-between bg-sky-300'>
            <span>menu_el_id:{element.id}</span>
            <span>{element.title}</span>
            <span>{element.category}</span>
        </button>
    );
}
export default MenuElementContainer;