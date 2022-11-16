import React, { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";
import classNames from "classnames";

import styles from "./Button.module.scss";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    primary?: boolean;
}

const Button: FC<PropsWithChildren<Props>> = ({ primary, children }) => {
    return (
        <button
            className={classNames({
                [styles.button]: true,
                [styles.primary]: primary,
            })}
        >
            {children}
        </button>
    );
};

export default Button;
