import React from "react"
import ORGateComponent from "./ORGateComponent";
import SwitchGateComponent from "./SwitchGateComponent";

const Window = () => {
    return (
        <div className="w-5/6 drop-shadow-sm h-full bg-sky-500 flex flex-col">
            <SwitchGateComponent />
            <ORGateComponent/>
        </div>
    )
}

export default Window;
