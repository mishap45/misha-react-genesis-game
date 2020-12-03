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
                ? style.moneyCurrent
                : style.money
        }>
            {cash}
        </div>
    );
};

export default MoneyBlock;