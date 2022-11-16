import React, { FC } from "react";
import { FiSearch } from "react-icons/fi";

import styles from "./Search.module.scss";

const Search: FC = () => {
    return (
        <label className={styles.search}>
            <FiSearch size={20} />
            <input type="text" placeholder="Поиск..." />
        </label>
    );
};

export default Search;
