import React, { FC } from "react";
import { ITest } from "../../assets/types/api.types";
import TestCard from "../Cards/TestCard/TestCard";

import styles from "./Tests.module.scss";

interface Props {
    tests: ITest[];
}

const Tests: FC<Props> = ({ tests }) => {
    return (
        <section className={styles.tests}>
            <h2>Тесты</h2>
            <div className={styles.container}>
                {tests.map((test) => (
                    <TestCard key={test.id} test={test} />
                ))}
            </div>
        </section>
    );
};

export default Tests;
