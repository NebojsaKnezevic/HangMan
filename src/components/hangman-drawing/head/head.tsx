import React from "react";

export const HangmanHead: React.FC = () => {

    const headStyle: React.CSSProperties = {
        width: '50px',
        height: '50px',
        borderRadius: '100%',
        border: '10px solid black',
        position: 'absolute',
        top: '48px',
        right: '-30px'
    }

    return(
        <div style={headStyle}></div>
    );
}