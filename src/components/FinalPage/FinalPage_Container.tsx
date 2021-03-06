import React, {useContext} from "react";
import FinalPage from "./FinalPage";
import { CashContext, CashContextSet } from "../../context/context";

const FinalPage_Container = () => {

    const cashWin = useContext(CashContext);
    const cashWinSet = useContext(CashContextSet);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return <FinalPage cashWin={cashWin} cashWinSet={cashWinSet} />;
};

export default FinalPage_Container;