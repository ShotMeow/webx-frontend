import React, { FC } from "react";
import styles from "./Aside.module.css";
import logo from "../../../assets/images/logo.svg";
import Image from "next/image";
import Navigation from "./Navigation/Navigation";

const Aside: FC = () => {
    return (
        <aside className={styles.aside}>
            <h1 className={styles.logo}>
                <Image src={logo} alt="Логотип" />
                <span className={styles.name}>
                    Web<span>X</span>
                </span>
            </h1>
            <Navigation />
        </aside>
    );
};

export default Aside;
