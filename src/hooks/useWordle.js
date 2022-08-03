import { useState } from "react"


const useWordle = (solution) => {
    const[turn, setTurn] = useState(0)
    const[currentGuess, setCurrentGuess] = useState('')
    const[guesses, setGuesses] = useState([...Array(6)])
    const[history, setHistory] = useState([])
    const[isCorrect, setIsCorrect] = useState(false)
    const[newKey, setnewKey] = useState({})

    const formatGuess = () =>{
        let solutionArray = [...solution]
        let formattedGuess= [...currentGuess].map(letter => {
            return {key: letter, color: 'grey'}
        });
        formattedGuess.forEach((letter, index) => {
            if(solutionArray[index] === letter.key) {
                letter.color = 'green'
                solutionArray[index] = null
            }
        })
        formattedGuess.forEach((letter, index) => {
            if(solutionArray.includes(letter.key) && letter.color !== 'green') {
                letter.color = 'yellow'
                solutionArray[solutionArray.indexOf(letter.key)] = null
            }
        });
        
        return formattedGuess
    }


    const addNewGuess = (formatted) =>{
        if(currentGuess === solution) {
            setIsCorrect(true)
        }
        setGuesses(prev => {
            let guess = [...prev]
            guess[turn] = formatted
            return guess
        })
        setHistory(prev=>{
            return [...prev, currentGuess]
        })
        setTurn(()=>{
            return turn + 1
        })
        setCurrentGuess('')

        setnewKey(prev=> {
            let keySets = {...prev}
            formatted.forEach(l=>{
                const eachFormat = keySets[l.key]

                if(l.color === 'green') {
                    keySets[l.key] = 'green'
                    return
                }
                if(l.color === 'yellow' && eachFormat !== 'green') {
                    keySets[l.key] = 'yellow'
                    return
                }
                if(l.color === 'grey' && eachFormat !== 'green' && eachFormat !== 'yellow') {
                    keySets[l.key] = 'grey'
                    return
                }
            })

            return keySets
            
        })
    }

    const handleKeyUp = ({ key }) => {
        if(key === 'Enter') {
            if(turn > 5) {
                console.log('You exceeded the limited number of trying')
                return
            }
            if(history.includes(currentGuess)) {
                console.log('This word is already written')
                return
            }
            if(currentGuess.length !== 5) {
                console.log('Word should be 5 words')
                return
            }
            const formatted = formatGuess()
            addNewGuess(formatted)
        }
        if(key === 'Backspace') {
            setCurrentGuess(prev => {
                return prev.slice(0, -1)
            })
            return
        }
        if(/^[A-Za-z]$/.test(key)) {
            if(currentGuess.length < 5) {
                setCurrentGuess(prev => {
                    return prev + key
                })
            }
        }
    }

    return {turn, currentGuess, guesses, isCorrect, newKey, handleKeyUp}
}

export default useWordle