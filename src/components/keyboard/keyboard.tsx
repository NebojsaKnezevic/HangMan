import React from "react";  
import styles from './keyboard.module.css'
import { GameState } from "../../App";

const englishLetters = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 
    'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 
    'W', 'X', 'Y', 'Z'
  ];
  
interface IKeyboard{
    setGuessedLetters: React.Dispatch<React.SetStateAction<string[]>>;
    guessedLetters: {
        positive: string[],
        negative: string[]
    },
    gameState: string
    // setGameState: React.Dispatch<React.SetStateAction<GameState>>
}

export const Keyboard: React.FC<IKeyboard> = (props) => {
    const{setGuessedLetters, guessedLetters, gameState}=props


    const keyboardStyle: React.CSSProperties = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(75px, 1fr))',
        gap: '.5rem'
    }

    const getButtonClass = (letter: string) => {
        if (guessedLetters.positive.includes(letter.toLowerCase())) {
          return `${styles.btn} ${styles.active}`;
        }

        if (guessedLetters.negative.includes(letter.toLowerCase())) {
          return `${styles.btn} ${styles.inactive}`;
        }

        if (gameState != 'playing') {
            return `${styles.btn} ${styles.inactive}`;
        }
        
        return styles.btn;
      };

    return(
        <div style={keyboardStyle}>
            {englishLetters.map((item, index)=>{
                return(<button  className={getButtonClass(item)} key={item} 
                disabled={guessedLetters.positive.includes(item.toLocaleLowerCase()) || guessedLetters.negative.includes(item.toLocaleLowerCase())}
                onClick={()=>setGuessedLetters(prev => [...prev, item.toLocaleLowerCase()])}>{item}</button>);
            })}
        </div>
    );
}