import React, {FC} from 'react';
import {ICourse} from "../../../types/api.types";
import styles from "../Course.module.css";
import Link from "next/link";
import {RatingStar} from "rating-star";
import Button from "../../../components/Button/Button";
import {AiOutlineHeart} from "react-icons/ai";
import classNames from "classnames";

const AboutCourse: FC<{course: ICourse; setStep: (step: number) => void}> = ({course, setStep}) => {
    return (
        <section className={styles.course}>
            <p className={styles.bread}>
                <Link href={"../tests"}>Тесты</Link> {">"}{" "}
                <span>{course.title}</span>
            </p>
            <div className={styles.info}>
                <div className={styles.about}>
                    <h2 className={styles.heading}>{course.title}</h2>
                    <p className={styles.description}>{course.description}</p>
                    <div className={styles.attrs}>
                        <p>Сложность: {course.difficulty}</p>
                        <div className={styles.rating}>
                            <RatingStar
                                id={course.id}
                                noBorder
                                maxScore={5}
                                rating={course.rating}
                            />
                            <p>{course.rating} / 5.0</p>
                        </div>
                    </div>
                    <div className={styles.wrapper}>
                        <Button onClick={() => setStep(2)}>Начать</Button>
                        <button className={styles.favoriteButton}>
                            <AiOutlineHeart size={22} /> В избранное
                        </button>
                    </div>
                </div>
                <div className={styles.card}>
                    <img
                        className={styles.image}
                        src={course.image}
                        alt={course.title}
                    />
                    <span
                        className={classNames({
                            [styles.category]: true,
                            [styles.design]: course.category === "Design",
                            [styles.backend]: course.category === "Backend",
                            [styles.frontend]: course.category === "Frontend",
                        })}
                    >
                        {course.category}
                    </span>
                </div>
            </div>
        </section>
    );
};

export default AboutCourse;