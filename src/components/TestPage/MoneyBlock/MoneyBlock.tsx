import React from "react";
import style from "./moneyBlock.module.css";

type MoneyBlockTypes = {
    id: number
    cash: string
    currentStep: number
}

const MoneyBlock:React.FC<MoneyBlockTypes> = ({ currentStep, id, cash }: MoneyBlockTypes) => {
    return (
        <div className={
            currentStep === id
                ? style.moneyWrapCurrent
                : style.moneyWrap
        }>
            <div className={
                currentStep === id
                    ? style.moneyCurrent
                    : currentStep > id
                    ? style.moneyPassed
                    : style.money
            }>
                {cash}
            </div>
        </div>
    );
};

export default MoneyBlock;