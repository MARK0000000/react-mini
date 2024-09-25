import React from 'react'

export default function Game({step, question, onClickVariant, questions}) {
  const progressBar = step / questions.length * 100

  return (
    <div className='game'>
        <div className="progress">
            <div style={{ width: `${progressBar}%` }} className="progress__inner"></div>
        </div>
        <h1>{question.title}</h1>
        <ul>
          {question.variants.map((variant, index) => (
            <li onClick={() => onClickVariant(index)}  key={variant}>{variant}</li>
          ))}
        </ul>
    </div>
  )
}
