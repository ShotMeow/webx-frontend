import React, { FC, PropsWithChildren } from "react";
import Aside from "./Aside/Aside";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Layout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className="wrapper">
            <Aside />
            <div className="main">
                <div>
                    <Header />
                    {children}
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Layout;
