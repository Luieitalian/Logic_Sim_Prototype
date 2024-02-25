import * as React from "react";
import OutputNode from "./OutputNode";

type SwitchGateSVGProps = {
    size: number,
    output: number,
}

const SwitchGateSVG = (props: SwitchGateSVGProps) => {
    const width = props.size * 80;
    const height = props.size * 80;
    const strokeWidth = props.size * 6;
    const outputNodeLength = props.size * 40;

    return (
        <svg height={height} width={width + outputNodeLength} xmlns="http://www.w3.org/2000/svg">
            <OutputNode
                x1={width}
                y1={height / 2}
                x2={width + outputNodeLength}
                y2={height / 2} style={{
                    stroke: "grey",
                    strokeWidth: strokeWidth,
                }} />
            <path d={`M 0 0 L ${width} 0 L ${width} ${height} L 0 ${height} L 0 0 `} style={{ fill: "grey" }} />
            <text x={width / 2 - props.size * 10} y={height / 2 + props.size * 10} fontSize={width / 2}>{props.output}</text>
        </svg>
    );
};

export default SwitchGateSVG;
