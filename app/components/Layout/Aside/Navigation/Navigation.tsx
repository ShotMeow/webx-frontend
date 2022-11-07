import React, { FC } from "react";
import { NavigationData } from "./Navigation.data";
import Link from "next/link";
import styles from "./Navigation.module.css";
import { useRouter } from "next/router";

const Navigation: FC = () => {
  const { pathname } = useRouter();
  return (
    <nav className={styles.nav}>
      <ul>
        {NavigationData.map((item) => (
          <li key={item.id}>
            <Link
              className={pathname === item.src ? styles.active : styles.item}
              href={item.src}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
