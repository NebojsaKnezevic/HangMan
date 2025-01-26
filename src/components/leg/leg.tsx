import React from "react";
import { Side } from "../arm/arm";

interface ILegProp{
    side: Side
}

export const HangmanLeg: React.FC<ILegProp> = (prop) => {
    const {side} = prop 

    const legStyle: React.CSSProperties = {
        width: '100px',
        height: '10px',
        background: 'black',
        position: 'absolute',
        top: '210px',
        right: side == 'left' ? '-90px' : '0px',
        rotate: side == 'left' ? '60deg' : '-60deg',
        transformOrigin: side == 'left' ? 'left bottom' : 'right bottom'
    }

    return(<div style={legStyle}></div>);
}