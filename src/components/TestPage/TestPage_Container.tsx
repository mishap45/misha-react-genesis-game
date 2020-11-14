import React, {useContext, useState} from "react";
import TestPage from "./TestPage";
import { StepContext, StepContextSet, CashContextSet, CashContext } from "../../context/context";
import { data } from "../../Quiz/questions.json";
import { money } from "../../Quiz/money.json";

const TestPage_Container = () => {

    const currentStep = useContext(StepContext);
    const currentStepSet = useContext(StepContextSet);
    const cash = useContext(CashContext);
    const cashSet = useContext(CashContextSet);
    const [redirect, redirectSet] = useState(false);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return <TestPage currentStep={currentStep} currentStepSet={currentStepSet} cash={cash} cashSet={cashSet}
                     data={data} money={money} redirectSet={redirectSet} redirect={redirect} />;
};

export default TestPage_Container;