import React from "react";
import Hand from "../../assets/img/hand.svg";
import Button from "../Utils/Button/Button";
import style from "./finalPage.module.css";
import Header from "../Utils/Header/Header";
import Footer from "../Utils/Footer/Footer";

type FinalPageTypes = {
    cashWin: number

    cashWinSet: (cash: number) => void
}

const FinalPage:React.FC<FinalPageTypes> = ({ cashWin, cashWinSet }: FinalPageTypes) => {

    return (
        <div className={style.App}>
            <Header/>

            <div className={style.mainWrapper}>
                <div>
                    <p className={style.textTotal}>Your prize: <br/> ${cashWin}</p>

                    <div onClick={() => cashWinSet(0)}>
                        <Button textButton={"Replay"} urlButton={"/test"}/>
                    </div>
                </div>
            </div>

            <div className={style.footerWrapper}>
                <Footer/>
            </div>
        </div>
    );
};

export default FinalPage;