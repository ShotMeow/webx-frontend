import React, { FC } from "react";
import { ITest } from "../../../types/api.types";

const SolutionTest: FC<{
    test: ITest;
    setStep: (step: number) => void;
}> = ({ test, setStep }) => {
    return <div></div>;
};

export default SolutionTest;
