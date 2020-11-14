import React from "react";
import Hand from "../../assets/img/hand.svg";
import OrangeButton from "../OrangeButton/OrangeButton";
import style from "./startPage.module.css";

const StartPage = () => {
    return (
        <div className={style.App}>
            <div className={style.img}><img src={Hand} alt="Hand with stars"/></div>
            <div>
                <p className={style.text}>Who wants to be a millionaire?</p>
                <div className={style.btn}><OrangeButton textButton={"Start"} urlButton={"/test"}/></div>
            </div>
        </div>
    );
};

export default StartPage;