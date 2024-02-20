export interface Node {
    val: number;
}

export class InputNode implements Node {
    val: number;
    constructor(val: number = 0) {
        this.val = val;
    }
}

export class OutputNode implements Node {
    val: number;
    constructor(val: number = 0) {
        this.val = val;
    }
}

export interface Gate {
    Function(): void;
}
