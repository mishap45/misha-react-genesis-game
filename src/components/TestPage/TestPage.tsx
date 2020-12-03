import React, { useState } from "react";
import style from "./testPage.module.css";
import MoneyBlock from "./MoneyBlock/MoneyBlock";
import { Redirect } from "react-router-dom";
import Header from "../Utils/Header/Header";
import Footer from "../Utils/Footer/Footer";

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
            <Header/>

            <div className={style.main}>
                <div className={style.moneyWrapper}>
                    {money.map( m => {
                        return <MoneyBlock key={m.id} id={m.id} cash={m.cash} currentStep={currentStep} />;
                    })}
                </div>

                <div>
                    <p className={style.question}>{data[currentStep].question}</p>

                    <div className={style.answerBlock}>
                        {data[currentStep].answers.map(a =>
                            <div key={a.letter}>
                                <div className={answerLetter === a.letter ? answerColor === "correct"
                                    ? style.answerCorrect
                                    : answerColor === "uncorrect"
                                        ? style.answerUnCorrect
                                        : style.answer
                                    : style.answer} onClick={() => {
                                    setAnswerLetter(a.letter);
                                    checkAnswer(a.answer);
                                }}>
                                    {a.answer}
                                </div>
                            </div>)}
                    </div>
                </div>
            </div>

            <div className={style.footerWrapper}>
                <Footer/>
            </div>
        </div>
    );
};

export default TestPage;