import { InputNode, OutputNode, Gate } from "./logic";

interface Switch extends Gate {
    inputNode: InputNode;
    outputNode: OutputNode;
}

class Switch implements Switch {
    inputNode: InputNode;
    outputNode: OutputNode;

    Evaluate(): number {
        this.outputNode.val = this.inputNode.val;
        return this.outputNode.val;
    }

    static Evaluate(_in: number): number {
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

export default Switch;
