import React from 'react'

export default function Result({correctCount, questions, again}) {

  return (
    <div className="result">
        <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt='#' />
        <h2>Вы отгадали {correctCount} ответа из {questions.length}</h2>
        <button onClick={() => again()}>Попробовать снова</button>
    </div>

  )
}
