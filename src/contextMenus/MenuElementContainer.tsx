import React, { MutableRefObject, useContext, useRef } from 'react'
import GatesContext from '@/src/contexts/GatesContext'
import ORGate from '@/src/components/ORGate';
import GatePropsContext from '@/src/contexts/GatePropsContext';
import SwitchGate from '@/src/components/SwitchGate';
import { MenuElement, MenuElementFunctions } from '@/src/components/Window';

const MenuElementContainer = (element: MenuElement) => {
    const gatesContext = useContext(GatesContext);
    const gatePropsContext = useContext(GatePropsContext);

    const onMenuElementClick = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        e.stopPropagation();
        if (gatePropsContext.id as MutableRefObject<number>) {
            switch (element.func) {
                case MenuElementFunctions.ADD_ORGATE:
                    gatesContext.setGates(gatesContext.gates.concat(
                        <ORGate key={gatePropsContext.id?.current} id={gatePropsContext.id} onGateRightClick={gatePropsContext.onGateRightClick} onGateMouseDown={gatePropsContext.onGateMouseDown} onGateMouseMove={gatePropsContext.onGateMouseMove} onGateMouseUp={gatePropsContext.onGateMouseUp} />,
                    ));
                    {
                        const idCountRef = gatePropsContext.id as MutableRefObject<number>;
                        idCountRef.current++;
                    }
                    break;
                case MenuElementFunctions.ADD_SWITCHGATE:
                    gatesContext.setGates(gatesContext.gates.concat(
                        <SwitchGate key={gatePropsContext.id?.current} id={gatePropsContext.id} onGateRightClick={gatePropsContext.onGateRightClick} onGateMouseDown={gatePropsContext.onGateMouseDown} onGateMouseMove={gatePropsContext.onGateMouseMove} onGateMouseUp={gatePropsContext.onGateMouseUp} />,
                    ));
                    {
                        const idCountRef = gatePropsContext.id as MutableRefObject<number>;
                        idCountRef.current++;
                    }
                    break;
                default:
                    break;
            }
        } else {
            throw Error;
        }
    }

    return (
        <button onClick={onMenuElementClick} type='button' className='hover:opacity-70 flex px-3 py-1 relative w-72 items-center justify-between'>
            <span>menu_el_id:{element.id}</span>
            <span>{element.title}</span>
        </button>
    );
}
export default MenuElementContainer;