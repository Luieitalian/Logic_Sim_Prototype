import React from 'react';

type GridProps = {
    width: number,
    height: number,
    gridSize: number,
}

const Grid = ({ width, height, gridSize }: GridProps) => {
    const lines = [];
    for (let y = 0; y <= height; y += gridSize) {
        lines.push(
            <line
                key={`h-${y}`}
                x1={0}
                y1={y}
                x2={width}
                y2={y}
                stroke="black"
                strokeWidth="1"
            />
        );
    }

    for (let x = 0; x <= width; x += gridSize) {
        lines.push(
            <line
                key={`v-${x}`}
                x1={x}
                y1={0}
                x2={x}
                y2={height}
                stroke="black"
                strokeWidth="1"
            />
        );
    }
    return (
        <svg opacity={0.1} width={width} height={height}>
            {lines}
        </svg>
    );
};

export default Grid;
