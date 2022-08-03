import React from 'react'

export default function Modal({turn , isCorrect, solution}) {
  return (
    <div>
        {isCorrect?(
            <div className='modal'>
                <p>You Won in turn {turn}</p>
                <p className='solution'>{solution}</p>
            </div>
        ):(
        <div className='modal'>
            <p>Run out of turns</p>
            <p>Solution was {solution}</p>
        </div>
        )}
    </div>
  )
}
