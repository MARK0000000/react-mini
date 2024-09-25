import React, { useState } from 'react'
import Result from './quiz/Result';
import Game from './quiz/Game';

export default function Quiz() {
const questions = [
    {
        title: 'React - это ... ?',
        variants: ['библиотека', 'фреймворк', 'приложение'],
        correct: 0,
    },
    {
        title: 'Компонент - это ... ',
        variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
        correct: 1,
    },
    {
        title: 'Что такое JSX?',
        variants: [
        'Это простой HTML',
        'Это функция',
        'Это тот же HTML, но с возможностью выполнять JS-код',
        ],
        correct: 2,
    },
    ];
    
const [step, setStep] = useState(0)
const question = questions[step]
const [correctCount, setCorrectCount] = useState(0)

function onClickVariant(index) {
    setStep(step + 1)

    if (index === question.correct) {
        setCorrectCount(correctCount + 1)
    }
} 
function again() {
    setStep(step - questions.length)
    setCorrectCount(correctCount - correctCount)
}

return (
    <div className='section section_1'>
        <div className='quiz'>
            {step === questions.length ? (<Result correctCount={correctCount} questions={questions} again={again}/>) : (<Game questions={questions} step={step} question={question} onClickVariant={onClickVariant}/>)}
        </div>
    </div>
)
}
