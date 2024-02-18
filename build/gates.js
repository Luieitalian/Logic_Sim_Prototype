export class AND {
    GateFunction(...inputs) {
        const result = inputs.reduce((prev, curr) => {
            return prev * curr;
        });
        console.log(result);
        return result;
    }
}
