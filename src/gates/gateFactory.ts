import { InputNode, OutputNode } from "./logic";
import ORGate from "./or";
import SwitchGate from "./switch";

export function newSwitchGate(_in: number)
: SwitchGate {
    const inputNode: InputNode = new InputNode(_in as number);
    const outputNode: OutputNode = new OutputNode(SwitchGate.Func(_in as number));
    const newGate: SwitchGate = new SwitchGate(inputNode, outputNode);
    return newGate;
}

export function newORGate(_in: number[])
: ORGate {
    const inputNodes: InputNode[] = _in.map((num) => {
        return new InputNode(num);
    });
    const outputNode: OutputNode = new OutputNode(ORGate.Func(_in));
    const newGate: ORGate = new ORGate(inputNodes, outputNode);
    return newGate;
}
