import { MutableRefObject, createContext } from 'react';

type GatePropsContextType = {
    onGateRightClick: any,
    id: MutableRefObject<number> | undefined,
}

const GatePropsContext = createContext<GatePropsContextType>({ onGateRightClick: () => { } , id: undefined});

export default GatePropsContext;