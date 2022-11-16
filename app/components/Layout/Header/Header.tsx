import React, { FC } from "react";

import Search from "./Search/Search";
import Widgets from "./Widgets/Widgets";

import styles from "./Header.module.scss";
import Profile from "./Profile/Profile";

const Header: FC = () => {
    return (
        <header className={styles.header}>
            <Search />
            <div className={styles.actions}>
                <Widgets />
                <Profile />
            </div>
        </header>
    );
};

export default Header;
