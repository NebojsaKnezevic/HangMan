import React from "react";

export const HangmanBody: React.FC = () => {

    const bodyStyle: React.CSSProperties = {
        width: '10px',
        height: '100px',
        // borderRadius: '100%',
        // border: '10px solid black',
        backgroundColor: 'black',
        position: 'absolute',
        top: '118px',
        right: '0px'
    }

    return(
        <div style={bodyStyle}></div>
    );
}