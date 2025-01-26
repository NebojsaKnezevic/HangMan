import React from "react";

export const HangmanWord: React.FC = () => {

    const word = "test"
    const guessedLetter = ['t', 'r', 'e']
    const wordStyle: React.CSSProperties = {
        display: 'flex',
        gap:'.25rem',
        fontSize: '6rem',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontFamily: 'monospace'
    }

    return(<div style={wordStyle}>
        {word
        .split("")
        .map((item, index)=>{
            return(
                <span style={{borderBottom: '.1em solid black'}} key={index}>
                    <span style={{visibility: guessedLetter.includes(item) ? 
                        'visible' : 'hidden'}}>{item}</span>
                </span>
            );
        })}
    </div>);
}