import "swiper/css";

import React, { FC } from "react";
import { ITest } from "../../assets/types/api.types";

import styles from "./Home.module.scss";
import TestCard from "../Cards/TestCard/TestCard";

interface Props {
    tests: ITest[];
}

const Home: FC<Props> = ({ tests }) => {
    return (
        <div className={styles.home}>
            <section className={styles.tests}>
                <h2>Тесты</h2>
                <div className={styles.container}>
                    {tests.map((test) => (
                        <TestCard key={test.id} test={test} />
                    ))}
                </div>
            </section>
            <section className={styles.courses}>
                <h2>Курсы</h2>
            </section>
        </div>
    );
};

export default Home;
