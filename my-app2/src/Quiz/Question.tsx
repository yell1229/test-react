import React from 'react';

interface QuestionProps{
    question:string;
    options:string[];
    handleAnswer:(answer: string) => void;
}
export default function Question({question, options, handleAnswer}:QuestionProps) {
    return (
        <div>
            <h2>{question}</h2>
            <div className="grid">
                {
                    options.map((option, idx) => (
                        <button onClick={() => handleAnswer(option)} key={option+idx}>{option}</button>
                    ))
                }
            </div>
        </div>
    );
}

