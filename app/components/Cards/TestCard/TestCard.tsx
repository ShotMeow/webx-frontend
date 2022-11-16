import React, { FC } from "react";
import { ITest } from "../../../types/api.types";

import styles from "../Card.module.scss";
import classNames from "classnames";

import { IoExtensionPuzzleOutline } from "react-icons/io5";
import Link from "next/link";

interface Props {
    test: ITest;
}

const TestCard: FC<Props> = ({ test }) => {
    return (
        <Link href={`./tests/${test.id}`}>
            <article className={styles.card}>
                <header className={styles.top}>
                    <span
                        className={classNames({
                            [styles.category]: true,
                            [styles.frontend]: test.category === "Frontend",
                            [styles.backend]: test.category === "Backend",
                            [styles.design]: test.category === "Design",
                        })}
                    >
                        {test.category}
                    </span>
                    <img
                        className={styles.image}
                        src={test.image}
                        alt={test.title}
                    />
                </header>
                <footer className={styles.bottom}>
                    <h3 className={styles.title}>{test.title}</h3>
                    <p className={styles.author}>{test.author}</p>
                    <div className={styles.difficulty}>
                        <IoExtensionPuzzleOutline size={20} />
                        <p>{test.difficulty}</p>
                    </div>
                </footer>
            </article>
        </Link>
    );
};

export default TestCard;
