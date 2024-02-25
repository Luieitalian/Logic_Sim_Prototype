import * as React from 'react'

type InputNodeProps = {
    style: {
        stroke: string,
        strokeWidth: number,
    },
    x1: number,
    x2: number,
    y1: number,
    y2: number,
}

const InputNode = ({
    style,
    x1,
    x2,
    y1,
    y2,
}: InputNodeProps) => {

    return (
        <line
            x1={x1}
            x2={x2}
            y1={y1}
            y2={y2}
            style={style}
        >

        </line>
    )
}

export default InputNode;