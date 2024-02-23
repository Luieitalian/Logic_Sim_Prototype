import { InputNode, OutputNode } from "./logic";
import OR from "./or";
import Switch from "./switch";

export function newSwitchGate(_in: number)
: Switch {
    const inputNode: InputNode = new InputNode(_in as number);
    const outputNode: OutputNode = new OutputNode(Switch.Evaluate(_in as number));
    const newGate: Switch = new Switch(inputNode, outputNode);
    return newGate;
}

export function newORGate(_in: number[])
: OR {
    const inputNodes: InputNode[] = _in.map((num) => {
        return new InputNode(num);
    });
    const outputNode: OutputNode = new OutputNode(OR.Evaluate(_in));
    const newGate: OR = new OR(inputNodes, outputNode);
    return newGate;
}
