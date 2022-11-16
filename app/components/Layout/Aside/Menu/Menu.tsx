import React, { FC } from "react";
import { menuData } from "./Menu.data";
import Link from "next/link";

import styles from "./Menu.module.scss";
import { useRouter } from "next/router";
import classNames from "classnames";

const Menu: FC = () => {
    const { pathname } = useRouter();
    return (
        <nav className={styles.menu}>
            <ul>
                {menuData.map((item) => (
                    <li key={item.url}>
                        <Link
                            className={classNames({
                                [styles.active]: pathname === item.url,
                            })}
                            href={item.url}
                        >
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Menu;
