import React from "react";
import Scrug from "../../assets/img/scrug.png";
import Button from "../Utils/Button/Button";
import style from "./startPage.module.css";
import Header from "../Utils/Header/Header";
import Footer from "../Utils/Footer/Footer";

const StartPage = () => {
    return (
        <div className={style.App}>
            <Header/>

            <div className={style.mainWrapper}>
                <div className={style.main}>
                    <div>
                        <img className={style.img} src={Scrug} alt="Scrug"/>
                    </div>

                    <div>
                        <p className={style.mainText}>Who wants to<br/> be a millionaire?</p>
                        <p className={style.text}>Answer all questions correctly<br/> and become a millionaire</p>

                        <Button textButton={"Start 🤑"} urlButton={"/test"}/>
                    </div>
                </div>
            </div>

            <div className={style.footerWrapper}>
                <Footer/>
            </div>
        </div>
    );
};

export default StartPage;