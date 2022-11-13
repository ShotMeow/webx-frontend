import React, { FC } from "react";
import { ITest } from "../../types/api.types";
import styles from "./TestCard.module.css";
import classNames from "classnames";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import Link from "next/link";

const TestCard: FC<{ test: ITest }> = ({ test }) => {
    return (
        <Link href={`./tests/${test.id}`}>
            <article className={styles.test}>
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
                <div className={styles.content}>
                    <h3 className={styles.heading}>{test.title}</h3>
                    <p className={styles.developer}>{test.developer}</p>
                    <p className={styles.difficulty}>
                        <IoExtensionPuzzleOutline size={20} />
                        {test.difficulty}
                    </p>
                </div>
            </article>
        </Link>
    );
};

export default TestCard;
