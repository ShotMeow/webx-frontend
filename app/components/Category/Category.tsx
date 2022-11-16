import React, { FC, PropsWithChildren } from "react";
import classNames from "classnames";

import styles from "./Category.module.scss";

interface Props {
    category: string;
}

const Category: FC<Props> = ({ category }) => {
    return (
        <span
            className={classNames({
                [styles.category]: true,
                [styles.frontend]: category === "Frontend",
                [styles.backend]: category === "Backend",
                [styles.design]: category === "Design",
            })}
        >
            {category}
        </span>
    );
};

export default Category;
