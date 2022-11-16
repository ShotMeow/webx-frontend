import React, { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";

import styles from "./Widget.module.scss";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Widget: FC<PropsWithChildren<Props>> = ({ children }) => {
    return <button className={styles.widget}>{children}</button>;
};

export default Widget;
