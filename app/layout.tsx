import React, { FC, PropsWithChildren } from "react";
import "../assets/styles/globals.scss";
import Aside from "../components/Aside/Aside";
import Header from "../components/Header/Header";

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <html lang="ru">
            <body>
                <div className="wrapper">
                    <Aside />
                    <div>
                        <Header />
                        <main>{children}</main>
                    </div>
                </div>
            </body>
        </html>
    );
};

export default RootLayout;
