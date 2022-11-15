import React, { FC, PropsWithChildren } from "react";
import "./styles/globals.scss";

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <html lang="ru">
            <body>{children}</body>
        </html>
    );
};

export default RootLayout;
