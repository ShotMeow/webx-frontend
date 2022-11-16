import React, { FC } from "react";

import styles from "./Home.module.scss";

const Home: FC = () => {
    return (
        <section className={styles.home}>
            <h2>Главная страница</h2>
        </section>
    );
};

export default Home;
