import React from "react";  
import styles from './keyboard.module.css'

const englishLetters = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 
    'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 
    'W', 'X', 'Y', 'Z'
  ];
  

export const Keyboard: React.FC = () => {

    const keyboardStyle: React.CSSProperties = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(75px, 1fr))',
        gap: '.5rem'
    }

    return(
        <div style={keyboardStyle}>
            {englishLetters.map((item, index)=>{
                return(<button className={styles.btn} key={item}>{item}</button>);
            })}
        </div>
    );
}