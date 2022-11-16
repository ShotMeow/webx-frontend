import React, { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";
import classNames from "classnames";

import styles from "./Button.module.scss";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    primary?: boolean;
}

const Button: FC<PropsWithChildren<Props>> = (props) => {
    return (
        <button
            className={classNames({
                [styles.button]: true,
                [styles.primary]: props.primary,
            })}
            {...props}
        >
            {props.children}
        </button>
    );
};

export default Button;
