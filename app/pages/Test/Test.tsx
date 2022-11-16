import React, { FC } from "react";
import { ITest } from "../../types/api.types";

import styles from "./Test.module.scss";
import Link from "next/link";

interface Props {
    test: ITest;
}

const Test: FC<Props> = ({ test }) => {
    return (
        <section className={styles.test}>
            <div>
                <p className={styles.bread}>
                    <Link href={"../tests"}>Тесты</Link> {">"} {test.title}
                </p>
                <h2 className={styles.heading}>{test.title}</h2>
                <p className={styles.description}>{test.description}</p>
                <p className={styles.difficulty}>
                    Сложность: {test.difficulty}
                </p>
            </div>
            <div>
                <img src={test.image} alt={test.title} />
            </div>
        </section>
    );
};

export default Test;
