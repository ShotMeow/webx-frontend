import React, { FC } from "react";
import styles from "./Header.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import User from "./User/User";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.search}>
        <AiOutlineSearch size={25} />
        <input type="text" placeholder="Поиск..." />
      </div>
      <User />
    </header>
  );
};

export default Header;
