import React, {FC} from 'react';
import {ITest} from "../../types/api.types";
import styles from './Main.module.css';

const Main: FC<{tests: ITest[]}> = ({tests}) => {
    return (
        <div className={styles.main}>
            <section>
                <h2 className={styles.heading}>Тесты</h2>
            </section>
            <section>
                <h2 className={styles.heading}>Курсы</h2>
            </section>
        </div>
    );
};

export default Main;