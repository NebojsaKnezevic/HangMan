import React from "react";

export enum Side {
    Left = "left",
    Right = "right"
}

interface IArmProp{
    side: Side
}

export const HangmanArm: React.FC<IArmProp> = (prop) => {
    const {side} = prop 

    const armStyle: React.CSSProperties = {
        width: '100px',
        height: '10px',
        backgroundColor: 'black',
        position: 'absolute',
        top: '150px',
        right: side == 'right' ? '-100px' : '10px',
        rotate: side == 'right' ? '-30deg': '30deg',
        transformOrigin: side == 'right' ? 'left bottom' : 'right bottom'
        
    }

    return(<div style={armStyle}></div>);
}