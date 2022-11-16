import React, { FC } from "react";
import { ITest } from "../../types/api.types";

import { MdOutlineFavoriteBorder } from "react-icons/md";

import styles from "./Test.module.scss";
import Link from "next/link";
import Category from "../../components/Category/Category";
import Button from "../../components/Button/Button";

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
                <h3 className={styles.heading}>{test.title}</h3>
                <p className={styles.description}>{test.description}</p>
                <p className={styles.difficulty}>
                    Сложность: {test.difficulty}
                </p>
                <div className={styles.actions}>
                    <Link href={`./${test.id}/solution`}>
                        <Button primary>Начать</Button>
                    </Link>
                    <Button>
                        <MdOutlineFavoriteBorder size={24} />В избранное
                    </Button>
                </div>
            </div>
            <div className={styles.image}>
                <Category category={test.category} />
                <img src={test.image} alt={test.title} />
            </div>
        </section>
    );
};

export default Test;
