import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import wordList from './word-list.json'
import { HangmanDrawing } from './components/hangman-drawing/hangman-drawing'
import { HangmanWord } from './components/hangman-word/hangman-word'
import { Keyboard } from './components/keyboard/keyboard'

function App() {
  const [wordToGuess, setWordToGuess] = useState<string>(() => {
    return wordList[Math.floor(Math.random() * wordList.length)]
  })

  const [guessedWords, setGuessedWords] = useState<string[]>()

  const STYLES_MAIN: React.CSSProperties = {
    // backgroundColor: 'red',
    maxWidth: '800px',
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    margin: '0 auto',
    alignItems: 'center'
  }

  const STYLES_HEADER : React.CSSProperties = {
    fontSize: '2rem', textAlign: 'center'
  }

  return (
    <div style={STYLES_MAIN}>
      <div style={STYLES_HEADER}>win lose</div>
      <HangmanDrawing/>
      <HangmanWord/>
      <div style={{alignSelf: 'stretch'}}><Keyboard/></div>
      
    </div>

  )
}

export default App
