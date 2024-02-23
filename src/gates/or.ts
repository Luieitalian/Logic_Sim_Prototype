import { InputNode, OutputNode, Gate } from "./logic";

class OR implements Gate {
    inputNodes: InputNode[];
    outputNode: OutputNode;

    Evaluate(): number {
        for (let i = 0; i < this.inputNodes.length; i++) {
            if (this.inputNodes[i].val >= 1){
                this.outputNode.val = 1;
                return 1;
            } else {
                this.outputNode.val = 0;
            }
        }
        return this.outputNode.val;
    }

    static Evaluate(_in: number[]): number  {
        for (let i = 0; i < _in.length; i++) {
            if (_in[i] >= 1){
                return 1;
            }
        }
        return 0;
    }

    constructor (
        inputNodes: InputNode[] = [], 
        outputNode: OutputNode = new OutputNode
        ) {
        this.inputNodes = inputNodes;
        this.outputNode = outputNode;
    }
}

export default OR;
