import * as React from "react";

type ORGateSVGProps = {
    inputs: number,
    height: number,
    width: number,
}

const ORGateSVG = (props: ORGateSVGProps) => {

    return (
        <svg height={props.height} width={props.width} xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="grad1" x1="0%" x2="100%" y1="0%" y2="0%">
                    <stop offset="15%" stopColor="#c9c9c9" />
                    <stop offset="100%" stopColor="grey" />
                </linearGradient>
            </defs>
            {
                
                <path
                d="M 50 0 L 200 0 Q 300 100 200 200 L 50 200 Q 100 100 50 0"
                fill="url(#grad1)"
                />
            }

            {
                [...Array(props.inputs).keys()].map(num => {
                    const gap = props.height / (props.inputs + 1);
                    return (<line
                        x1={75}
                        y1={num * gap + gap}
                        x2={0}
                        y2={num * gap + gap}
                        style={{
                            stroke: "#c9c9c9",
                            strokeWidth: 10,
                        }}
                    >

                    </line>)
                }
                )
            }
            <line
                x1={300}
                y1={100}
                x2={249}
                y2={100}
                style={{
                    stroke: "grey",
                    strokeWidth: 10,
                }}
            />
        </svg>
    )
};
export default ORGateSVG;
