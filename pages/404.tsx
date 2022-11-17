import React from "react";
import { NextPage } from "next";

const NotFound: NextPage = () => {
    return (
        <div className="flex items-center justify-center fixed top-1/2 left-1/2">
            <h1 className="text-lg">404 | Страница не найдена</h1>
        </div>
    );
};

export default NotFound;
