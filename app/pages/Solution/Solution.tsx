import React, { FC, useEffect, useState } from "react";
import { IQuestion } from "../../types/api.types";

import styles from "./Solution.module.scss";
import Button from "../../components/Button/Button";
import classNames from "classnames";
import Timer from "./Timer/Timer";
import { showHoursHelper } from "../../helpers/showHoursHelper";
import { showMinutesHelper } from "../../helpers/showMinutesHelper";
import { showSecondsHelper } from "../../helpers/showSecondsHelper";

interface Props {
    title: string;
    questions: IQuestion[];
}

const Solution: FC<Props> = ({ title, questions }) => {
    const [current, setCurrent] = useState<number>(1);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [trueAnswers, setTrueAnswers] = useState<number>(0);
    const [question, setQuestion] = useState<IQuestion>(questions[0]);
    const [isEnd, setIsEnd] = useState<boolean>(false);
    const [time, setTime] = useState<number>(0);

    useEffect(() => {
        if (questions.length === current - 1) {
            setIsEnd(true);
        }
        const currentQuestion =
            questions.find((question, index) => index === current - 1) ||
            questions[0];
        setQuestion(currentQuestion);
    }, [current]);

    const handleSelectAnswer = (id: number) => () => {
        setSelectedAnswer(id);
    };

    const handleChoiceAnswer = () => {
        if (selectedAnswer === null) return;
        if (question.current === selectedAnswer) {
            setTrueAnswers(trueAnswers + 1);
        }
        setSelectedAnswer(null);
        setCurrent(current + 1);
    };

    const handleResetSolution = () => {
        setCurrent(1);
        setTrueAnswers(0);
        setQuestion(questions[0]);
        setTime(0);
        setIsEnd(false);
    };

    return (
        <>
            {isEnd ? (
                <section className={styles.total}>
                    <h4>{title}</h4>
                    <h3>
                        Поздравляем! Вы ответили правильно на {trueAnswers} из{" "}
                        {questions.length}
                    </h3>
                    <div className={styles.metric}>
                        <p>
                            Точность ответов составляет{" "}
                            {Math.floor((trueAnswers / questions.length) * 100)}
                            %
                        </p>
                        <p>
                            Прохождение заняло у вас {showHoursHelper(time)}{" "}
                            {showMinutesHelper(time)} {showSecondsHelper(time)}
                        </p>
                    </div>
                    <Button onClick={handleResetSolution} primary>
                        Попробовать еще раз
                    </Button>
                </section>
            ) : (
                <section className={styles.solution}>
                    <div className={styles.header}>
                        <div className={styles.about}>
                            <h4>{title}</h4>
                            <p>
                                {current} вопрос из {questions.length}
                            </p>
                        </div>
                        <p>
                            Прошло времени:{" "}
                            <Timer time={time} setTime={setTime} />
                        </p>
                    </div>
                    <div className={styles.question}>
                        <h3>{question.name}</h3>
                        <div className={styles.border}></div>
                        <ul>
                            {question.variants.map((variant, id) => (
                                <li key={variant}>
                                    <button
                                        className={classNames({
                                            [styles.active]:
                                                id === selectedAnswer,
                                        })}
                                        onClick={handleSelectAnswer(id)}
                                    >
                                        {id + 1}. {variant}
                                    </button>
                                </li>
                            ))}
                        </ul>
                        <Button onClick={handleChoiceAnswer} primary>
                            Ответить
                        </Button>
                    </div>
                </section>
            )}
        </>
    );
};

export default Solution;
