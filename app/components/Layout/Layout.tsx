import React, { FC, PropsWithChildren } from "react";
import Aside from "./Aside/Aside";
import Header from "./Header/Header";

const Layout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className="wrapper">
            <Aside />
            <div className="main">
                <Header />
                {children}
            </div>
        </div>
    );
};

export default Layout;
