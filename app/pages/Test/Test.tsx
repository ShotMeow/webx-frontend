import React, { FC, useState } from "react";
import { ITest } from "../../types/api.types";
import AboutTest from "./AboutTest/AboutTest";
import SolutionTest from "./SolutionTest/SolutionTest";
import ResultTest from "./ResultTest/ResultTest";

const Test: FC<{ test: ITest }> = ({ test }) => {
    const [step, setStep] = useState<number>(1);
    return (
        <>
            {step === 1 && <AboutTest test={test} setStep={setStep} />}
            {step === 2 && <SolutionTest test={test} setStep={setStep} />}
            {step === 3 && <ResultTest test={test} setStep={setStep} />}
        </>
    );
};

export default Test;
