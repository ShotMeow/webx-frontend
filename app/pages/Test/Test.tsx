import React, { FC } from "react";
import { ITest } from "../../types/api.types";
import styles from "./Test.module.css";
import { AiOutlineHeart } from "react-icons/ai";
import { RatingStar } from "rating-star";
import classNames from "classnames";

const Test: FC<{ test: ITest }> = ({ test }) => {
    return (
        <section className={styles.test}>
            <div className={styles.info}>
                <div className={styles.about}>
                    <h2 className={styles.heading}>{test.title}</h2>
                    <p className={styles.description}>{test.description}</p>
                    <div className={styles.attrs}>
                        <p>Сложность: {test.difficulty}</p>
                        <div className={styles.rating}>
                            <RatingStar
                                id={test.id}
                                noBorder
                                maxScore={5}
                                rating={test.rating}
                            />
                            <p>{test.rating} / 5.0</p>
                        </div>
                    </div>
                    <div className={styles.wrapper}>
                        <button className={styles.startButton}>Начать</button>
                        <button className={styles.favoriteButton}>
                            <AiOutlineHeart size={22} /> В избранное
                        </button>
                    </div>
                </div>
                <div className={styles.card}>
                    <img
                        className={styles.image}
                        src={test.image}
                        alt={test.title}
                    />
                    <span
                        className={classNames({
                            [styles.category]: true,
                            [styles.design]: test.category === "Design",
                            [styles.backend]: test.category === "Backend",
                            [styles.frontend]: test.category === "Frontend",
                        })}
                    >
                        {test.category}
                    </span>
                </div>
            </div>
        </section>
    );
};

export default Test;
