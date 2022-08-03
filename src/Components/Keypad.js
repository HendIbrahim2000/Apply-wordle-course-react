import React, { useEffect, useState } from 'react'

export default function Keypad({newKey}) {

    const [letters, setLetters] = useState(null)
    useEffect(()=>{
        fetch('http://localhost:3001/letters')
        .then(res => res.json())
        .then(json => setLetters(json))
    },[])
    
  return (
    <div className='keypad'>
        {letters && letters.map((letter, index) => {
            const color = newKey[letter.key]
            return <div key={index} className={color}>{letter.key}</div>
        })}
    </div>
  )
}
