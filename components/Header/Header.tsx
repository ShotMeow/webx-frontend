import React, { FC } from "react";

import styles from "./Header.module.scss";
import Search from "./Search/Search";
import Actions from "./Actions/Actions";

const Header: FC = () => {
    return (
        <header className={styles.header}>
            <Search />
            <Actions />
        </header>
    );
};

export default Header;
