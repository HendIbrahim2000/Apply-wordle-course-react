import {useEffect, useState} from 'react'
import Wordle from './Components/Wordle';
import {useWordle} from './hooks/useWordle';

function App () {
  const [solution, setSolution] = useState(null)

  useEffect(()=>{
    return () => {
      fetch("http://localhost:3001/solutions")
      .then(res => res.json())
      .then(result=>{
        const randomSolution = result[Math.floor(Math.random() * 14)].word
        setSolution(randomSolution)
        // console.log(randomSolution)
    })
    
    }
  },[setSolution])

  return (
    <div className="App">
      <h1>Welcome to wordle</h1>
      {solution && <Wordle solution={solution} />}
    </div>
  );
}

export default App;
