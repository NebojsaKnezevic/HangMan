import React from "react";
import {
    containerStyle,
    topBeamStyle,
    verticalPoleStyle,
    hangingRopeStyle,
    baseBeamStyle
} from "./hangman-styles";
import { HangmanHead } from "./head/head";
import { HangmanBody } from "./body/body";
import { Side, HangmanArm } from "./arm/arm";
import { HangmanLeg } from "./leg/leg";

export const HangmanDrawing: React.FC = () => {

    return (
        <div style={containerStyle}>
            <HangmanHead/>
            <HangmanBody/>
            <HangmanArm side={Side.Right}/>
            <HangmanArm side={Side.Left}/>
            <HangmanLeg side={Side.Right}/>
            <HangmanLeg side={Side.Left}/>
            <div style={topBeamStyle}></div>
            <div style={hangingRopeStyle}></div>
            <div style={verticalPoleStyle}></div>
            <div style={baseBeamStyle}></div>
        </div>
    );
};
