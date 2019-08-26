import React from "react";
import { Card } from "../style/styled";
import { QuestionListButton, QuestionListCard } from "../style/preposttest";

interface Questions {
    id: Number;
    q: string;
}

interface AnswerList {
    id: string;
    value: string;
}

type Props = {
    answerList: AnswerList[];
    questions: Questions[];
    current: number;
    setQuestion: Function;
}

const QuestionList = ({answerList, questions, current, setQuestion}: Props) => {


    return(
        <QuestionListCard>
            <div>Questions</div>
            {questions.map((q, i) => 
                <QuestionListButton 
                    onClick={() => setQuestion(i)}
                    key={i}
                    value={answerList[i] === undefined? null : answerList[i].value} >
                    {i+1}. {answerList[i] === undefined? "unanswered": answerList[i].value}
                </QuestionListButton>    
            )}
        </QuestionListCard>
    );
}

export default QuestionList;