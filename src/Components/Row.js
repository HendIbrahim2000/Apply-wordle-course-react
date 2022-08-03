import React from 'react'

export default function Row({guess, currentGuess}) {
    if(guess) {
        return (
            <div className='row past'>
                {guess.map((item, index)=>{
                    return <div key={index} className={item.color}>{item.key}</div>
                })}
            </div>
        )
    }
    if(currentGuess) {
        let current = currentGuess.split('')
        return (
            <div className='row current'>
                {current.map((item, index) =>{
                    return <div key={index} className="filled">{item}</div>
                })}
                {[...Array(5- current.length)].map((item, index) =>{
                    return <div key={index} ></div>
                })}
            </div>
            
        )
    }
  return (
    <div className='row'>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    </div>
    
  )
}
