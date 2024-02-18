import { AND } from "./gates";
let button = document.getElementById("button");
const Gateand = new AND;
;
;
button.addEventListener("click", () => Gateand.GateFunction(1, 2, 3, 4));
