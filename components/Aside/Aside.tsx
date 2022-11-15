import React, { FC } from "react";

import styles from "./Aside.module.scss";
import Logo from "../Logo/Logo";
import Menu from "./Menu/Menu";

const Aside: FC = () => {
    return (
        <aside className={styles.aside}>
            <Logo />
            <Menu />
        </aside>
    );
};

export default Aside;
