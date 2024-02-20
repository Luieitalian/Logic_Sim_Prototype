import { InputNode, OutputNode, Gate } from "./logic";

interface Switch extends Gate {
    inputNode: InputNode;
    outputNode: OutputNode;
}

class SwitchGate implements Switch {
    inputNode: InputNode;
    outputNode: OutputNode;

    Function(): number {
        this.outputNode.val = this.inputNode.val;
        return this.outputNode.val;
    }

    static Func(_in: number): number {
        return _in;
    }

    constructor(
        inputNode: InputNode = new InputNode, 
        outputNode: OutputNode = new OutputNode
        ) {
        this.inputNode = inputNode;
        this.outputNode = outputNode;
    }
}

export default SwitchGate;
