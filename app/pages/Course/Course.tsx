import React, {FC, useState} from 'react';
import {ICourse} from "../../types/api.types";
import AboutCourse from "./AboutCourse/AboutCourse";
import SolutionCourse from "./SolutionCourse/SolutionCourse";
import ResultCourse from "./ResultCourse/ResultCourse";

const Course: FC<{course: ICourse}> = ({course}) => {
    const [step, setStep] = useState<number>(1);
    return (
        <>
            {step === 1 && <AboutCourse course={course} setStep={setStep} />}
            {step === 2 && <SolutionCourse course={course} setStep={setStep} />}
            {step === 3 && <ResultCourse course={course} setStep={setStep} />}
        </>
    );
};

export default Course;