import React, { FC } from "react";
import TestCard from "../../components/TestCard/TestCard";
import { ITest } from "../../types/api.types";
import styles from "./Tests.module.css";

const Tests: FC<{ tests: ITest[] }> = ({ tests }) => {
    return (
        <section>
            <h2 className={styles.heading}>Тесты</h2>
            <div className={styles.tests}>
                {tests &&
                    tests.map((test) => <TestCard test={test} key={test.id} />)}
            </div>
        </section>
    );
};

export default Tests;
