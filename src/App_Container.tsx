import React, {useState} from 'react'
import { StepContext, StepContextSet, CashContext, CashContextSet } from './context/context'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

const App_Container = () => {

    const [step, setStep] = useState(0);
    const [cash, cashStep] = useState(0);

    return (
        <StepContext.Provider value={step}>
            <StepContextSet.Provider value={setStep}>
                <CashContext.Provider value={cash}>
                    <CashContextSet.Provider value={cashStep}>
                        <BrowserRouter>
                            <App />
                        </BrowserRouter>
                    </CashContextSet.Provider>
                </CashContext.Provider>
            </StepContextSet.Provider>
        </StepContext.Provider>
    )
};

export default App_Container