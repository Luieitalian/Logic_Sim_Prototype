import { MutableRefObject, createContext } from 'react';

export type GatePropsContextType = {
    onGateRightClick: any,
    onGateMouseDown: any,
    onGateMouseUp: any,
    onGateMouseMove: any,
    id: MutableRefObject<number> | undefined,
}

const GatePropsContext = createContext<GatePropsContextType>({ onGateRightClick: null, onGateMouseMove: null, onGateMouseDown: null, onGateMouseUp: null, id: undefined });

export default GatePropsContext;