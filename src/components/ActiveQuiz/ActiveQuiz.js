import React from "react";
import './ActiveQuiz.css'
import AnswerList from "./AnswerList/AnswerList";

const ActiveQuiz = props =>(
    <div className={'ActiveQuiz'}>
        <p className={'Question'}>
            <span>
                <strong>{props.answerNumber}.</strong>&nbsp;
                {props.question}
            </span>
            <small>{props.answerNumber} из {props.quizLength}</small>
        </p>
        <AnswerList
            state={props.state}
            answers={props.answers}
            onAnswerClick={props.onAnswerClick}
        />
    </div>
)
export default ActiveQuiz