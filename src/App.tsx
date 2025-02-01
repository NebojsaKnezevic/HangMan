import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import wordList from './word-list.json'
import { HangmanDrawing } from './components/hangman-drawing/hangman-drawing'
import { HangmanWord } from './components/hangman-word/hangman-word'
import { Keyboard } from './components/keyboard/keyboard'

// Define the type for game states
export type GameState = 'playing' | 'lose' | 'win';


function App() {
  const [wordToGuess, setWordToGuess] = useState<string>(() => {
    return wordList[Math.floor(Math.random() * wordList.length)]
  })

  const [gameState, setGameState] = useState<GameState>('playing');

  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  const [resetRef, setResetRef] = useState<() => void>(() => { });

  useEffect(() => {
    if (gameState == 'playing') {
      const uniqueLetters = new Set(wordToGuess.toLowerCase())
      const isWin = Array.from(uniqueLetters).every(letter => guessedLetters.includes(letter));
      if (isWin) {
        setGameState('win');
      }
    }
  }, [guessedLetters, wordToGuess])

  const STYLES_MAIN: React.CSSProperties = {
    // backgroundColor: 'red',
    maxWidth: '800px',
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    margin: '0 auto',
    alignItems: 'center'
  }

  const STYLES_HEADER: React.CSSProperties = {
    fontSize: '2rem', textAlign: 'center'
  }

  const inCorrectGuesses: string[] = guessedLetters != undefined ?
    guessedLetters.filter(letter => !wordToGuess.toLocaleLowerCase().includes(letter))
    :
    []

  function reset(): void {
    setWordToGuess(() => {
      return wordList[Math.floor(Math.random() * wordList.length)]
    })
    setGuessedLetters([])
    setGameState('playing')
    resetRef();
  }
  return (
    <div style={STYLES_MAIN}>
      <div style={STYLES_HEADER}>
        <button onClick={reset}>Play again:{gameState}</button>
      </div>
      <HangmanDrawing numberOfGuesses={inCorrectGuesses.length} setGameState={setGameState} />
      <HangmanWord word={wordToGuess.toLocaleLowerCase()} guessedLetters={guessedLetters} gameState={gameState} setResetRef={setResetRef} />
      <div style={{ alignSelf: 'stretch' }}>
        <Keyboard setGuessedLetters={setGuessedLetters} guessedLetters={
          {
            positive: guessedLetters.filter(l => !inCorrectGuesses.includes(l)),
            negative: inCorrectGuesses
          }

        } gameState={gameState} />
      </div>

    </div>

  )
}

export default App
