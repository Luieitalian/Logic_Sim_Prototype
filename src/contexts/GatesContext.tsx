import { createContext } from 'react';

type GateContextType = {
    gates: React.JSX.Element[],
    setGates: Function,
}

const GatesContext = createContext<GateContextType>({ gates: [], setGates: () => { } });

export default GatesContext;