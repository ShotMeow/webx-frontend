import React, { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";
import styles from "./Button.module.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FC<PropsWithChildren<Props>> = ({ children }) => {
    return <button className={styles.button}>{children}</button>;
};

export default Button;
