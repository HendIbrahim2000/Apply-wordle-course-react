import React, { useEffect, useState } from 'react'
import useWordle from '../hooks/useWordle'
import Grid from './Grid'
import Keypad from './Keypad'
import Modal from './Modal'

export default function Wordle({solution}) {

    const {currentGuess, handleKeyUp, guesses, turn, isCorrect, newKey} = useWordle(solution)
    const [showModal, setShowModal] = useState(false)
    useEffect(()=>{
        window.addEventListener('keyup', handleKeyUp)
        if(isCorrect) {
            setTimeout(()=>{
                setShowModal(true)
            }, 2000)
            
            window.removeEventListener('keyup', handleKeyUp)
        }
        if(turn > 5) {
            setTimeout(()=>{
                setShowModal(true)
            }, 2000)
            window.removeEventListener('keyup', handleKeyUp)
        }
        return ()=> window.removeEventListener('keyup', handleKeyUp)
    },[handleKeyUp, turn, isCorrect])
  return (
    <div>
        <div>Cheating: {solution}</div>
        <div>Wordle: {currentGuess}</div>
        <Grid guesses={guesses} turn={turn} currentGuess={currentGuess} />
        <Keypad newKey={newKey}/>
        {showModal && <Modal turn={turn} isCorrect={isCorrect} solution={solution} />}
    </div>
    
  )
}
