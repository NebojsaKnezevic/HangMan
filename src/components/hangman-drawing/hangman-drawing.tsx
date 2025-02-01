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
import { GameState } from "../../App";

interface IHangmanDrawing{
    numberOfGuesses: number,
    setGameState: React.Dispatch<React.SetStateAction<GameState>>
}

const hangmanParts: JSX.Element[] = [
    <div style={topBeamStyle}></div>
    ,<div style={hangingRopeStyle}></div>
    ,<div style={verticalPoleStyle}></div>
    ,<div style={baseBeamStyle}></div>
    ,<HangmanHead/>
    ,<HangmanBody/>
    ,<HangmanArm side={Side.Right}/>
    ,<HangmanArm side={Side.Left}/>
    ,<HangmanLeg side={Side.Right}/>
    ,<HangmanLeg side={Side.Left}/>
  
];

export const HangmanDrawing: React.FC<IHangmanDrawing> = (props) => {
    const {numberOfGuesses, setGameState} = props
    
    if(numberOfGuesses == hangmanParts.length)
    {
        setGameState('lose')
    }

    return (
        <div style={containerStyle}>
            {hangmanParts.filter((_,i)=>i < numberOfGuesses)}
        </div>
    );
};
