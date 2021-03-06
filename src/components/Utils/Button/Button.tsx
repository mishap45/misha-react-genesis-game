import React from "react";
import style from "./button.module.css";
import { Link }  from "react-router-dom";

type OrangeButtonTypes = {
    textButton: string
    urlButton: string
}

const Button:React.FC<OrangeButtonTypes> = ({ textButton, urlButton }: OrangeButtonTypes) => {
    return (
        <Link className={style.button} to={urlButton}>{ textButton }</Link >
    );
};

export default Button;