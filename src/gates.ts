export interface Gate {
    GateFunction(...inputs: number[]): number | null;
}

export class AND implements Gate {
    GateFunction(...inputs: number[]) {
        const result = inputs.reduce((prev, curr) => {
            return prev * curr;
          });
        console.log(result);
        return result;
    }
    
}

