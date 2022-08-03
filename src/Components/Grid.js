import React from 'react'
import Row from './Row'

export default function Grid({guesses, turn, currentGuess}) {
  return (
    <div>
    {guesses.map((item, index) => {
        if(turn === index) {
            return <Row key={index} currentGuess={currentGuess} />
        }
            return <Row key={index} guess={item} />
        })  
    }
    </div>
    
    
  )
}
