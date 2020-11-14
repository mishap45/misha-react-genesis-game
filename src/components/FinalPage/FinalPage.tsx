import React from "react";
import Hand from "../../assets/img/hand.svg";
import OrangeButton from "../OrangeButton/OrangeButton";
import style from "./finalPage.module.css";

type FinalPageTypes = {
    cashWin: number

    cashWinSet: (cash: number) => void
}

const FinalPage:React.FC<FinalPageTypes> = ({ cashWin, cashWinSet }: FinalPageTypes) => {

    return (
        <div className={style.App}>
            <div className={style.img}><img src={Hand} alt="Hand with stars"/></div>
            <div>
                <p className={style.textTotal}>Total score:</p>
                <p className={style.text}>${cashWin} earned</p>
                <div onClick={() => cashWinSet(0)} className={style.btn}>
                    <OrangeButton textButton={"Try again"} urlButton={"/test"}/>
                </div>
            </div>
        </div>
    );
};

export default FinalPage;