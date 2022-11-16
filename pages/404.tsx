import React from "react";
import { NextPage } from "next";

const NotFound: NextPage = () => {
    return (
        <div className="flex items-center justify-center h-3/4">
            <h1 className="text-lg">404 | Страница не найдена</h1>
        </div>
    );
};

export default NotFound;
