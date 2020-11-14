import React, { useState } from "react";
import style from "./testPage.module.css";
import MoneyBlock from "./MoneyBlock/MoneyBlock";
import { Redirect } from "react-router-dom";
import Burger from "../../assets/icons/Menu.svg";
import Close from "../../assets/icons/Close.svg";

type answersType = {
    answer: string
    letter: string
}

type dataType = {
    id: number
    question: string
    answers: Array<answersType>
    correctAnswer: string
}

type moneyType = {
    id: number
    cash: string
    cashNumber: number
}

type TestPageTypes = {
    currentStep: number
    data: Array<dataType>
    money: Array<moneyType>
    redirect: boolean
    cash: number

    currentStepSet: (id: number) => void
    redirectSet: (redirect: boolean) => void
    cashSet: (cash: number) => void
}

const TestPage:React.FC<TestPageTypes> = ({ data, currentStep, currentStepSet, money, redirect ,
                                              redirectSet, cash, cashSet }: TestPageTypes) => {

    const [answerColor, setAnswerColor] = useState("");
    const [answerLetter, setAnswerLetter] = useState("");
    const [menu, setMenu] = useState(false);

    const answerFun = (an: string) => {
        if (an === "uncorrect") {
            setAnswerColor("uncorrect");
            setTimeout(() => {redirectSet(true); setAnswerColor("");}, 1000);
        } else if (an === "correctUnique") {
            setAnswerColor("correct");
            cashSet(cash + money[currentStep].cashNumber);
            setTimeout(() => {redirectSet(true); setAnswerColor("");}, 1000);
        } else {
            setAnswerColor("correct");
            cashSet(cash + money[currentStep].cashNumber);
            setTimeout(() => {currentStepSet(currentStep + 1); setAnswerColor("");}, 1000);
        }
    };

    const checkAnswer = ( answer: string ) => {
        return answer === data[currentStep].correctAnswer
            ? currentStep === 11 ? answerFun("correctUnique") : answerFun("correct")
            : answerFun("uncorrect");
    };

    if(redirect) {
        currentStepSet(0);
        return <Redirect to={"/finalPage"}/>;
    }

    return (
        <div className={style.testBlock}>

            {document.body.offsetWidth <= 500 && <img className={style.menu}
                                                      onClick={() => menu ? setMenu(false) : setMenu(true)}
                                                      src={menu ? Close : Burger} alt="menu" />}

            <div style={document.body.offsetWidth <= 500 && menu ? {display: "none"} : {display: "block"}}>
                <p className={style.question}>{data[currentStep].question}</p>

                <div className={style.answerBlock}>
                    {data[currentStep].answers.map( a =>
                        <div className={style.auto} key={a.letter} >
                            <div className={answerLetter === a.letter ? answerColor === "correct"
                            ? style.answerWrapCorrect
                            : answerColor === "uncorrect"
                                ? style.answerWrapUnCorrect
                                : style.answerWrap
                            : style.answerWrap}>
                            <div key={a.letter} className={answerLetter === a.letter ? answerColor === "correct"
                                ? style.answerCorrect
                                : answerColor === "uncorrect"
                                    ? style.answerUnCorrect
                                    : style.answer
                                : style.answer} onClick={() => {setAnswerLetter(a.letter); checkAnswer(a.answer);}}>
                                <p style={{ color: "#FF8B37", paddingRight: 8, cursor: "pointer" }}>
                                    {a.letter}</p>{a.answer}
                            </div>
                        </div></div>)}
                </div>
            </div>

            <div className={document.body.offsetWidth <= 500 ? menu ? style.moneyBlock : style.none : style.moneyBlock}>
                <div>
                    {money.map( m => {
                        return <MoneyBlock key={m.id} id={m.id} cash={m.cash} currentStep={currentStep} />;
                    }).reverse()}
                </div>
            </div>
        </div>
    );
};

export default TestPage;