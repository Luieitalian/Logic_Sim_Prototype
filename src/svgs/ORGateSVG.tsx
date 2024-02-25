import * as React from "react";
import InputNode from "./InputNode";
import OutputNode from "./OutputNode";

type ORGateSVGProps = {
    inputNo: number,
    size: number,
}

const ORGateSVG = (props: ORGateSVGProps) => {
    const width = props.size * 120;
    const height = props.size * 80;
    const strokeWidth = props.size * 6;

    return (
        <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="grad1" x1="0%" x2="100%" y1="0%" y2="0%">
                    <stop offset="15%" stopColor="#c9c9c9" />
                    <stop offset="100%" stopColor="grey" />
                </linearGradient>
            </defs>
            {
                [...Array(props.inputNo).keys()].map(no => {
                    const gap = height / (props.inputNo + 1);
                    const x1 = width / 3;
                    const x2 = 0;
                    const y1 = (no + 1) * gap;
                    const y2 = (no + 1) * gap;
                    const style = {
                        stroke: "#c9c9c9",
                        strokeWidth: strokeWidth,
                    }
                    return (<InputNode key={no} x1={x1} y1={y1} x2={x2} y2={y2} style={style} />)
                }
                )
            }
            <OutputNode
                x1={width - (props.size * 22)}
                y1={height / 2}
                x2={width}
                y2={height / 2} style={{
                    stroke: "grey",
                    strokeWidth: strokeWidth,
                }} />
            <path
                d={`M 20 0 L ${height} 0 Q ${width} ${height / 2} ${height} ${height} L 20 ${height} Q ${width / 2} ${height / 2} 20 0`}
                fill="url(#grad1)"
            />
        </svg>

    );
};
export default ORGateSVG;
