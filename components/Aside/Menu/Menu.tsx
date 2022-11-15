import React, { FC } from "react";
import { menuData } from "./Menu.data";
import Link from "next/link";

import styles from "./Menu.module.scss";

const Menu: FC = () => {
    return (
        <nav className={styles.menu}>
            <ul>
                {menuData.map((item) => (
                    <li key={item.url}>
                        <Link href={item.url}>{item.name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Menu;
