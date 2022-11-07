import React, { FC, PropsWithChildren } from "react";
import styles from "./Layout.module.css";
import Header from "./Header/Header";
import Aside from "./Aside/Aside";

const Layout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className={styles.layout}>
            <Aside />
            <div className={styles.main}>
                <Header />
                <main>{children}</main>
            </div>
        </div>
    );
};

export default Layout;
