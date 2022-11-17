import React, {useEffect, useState} from "react";
import { NextPage } from "next";
import Home from "../app/pages/Home/Home";
import Head from "next/head";
import {ITest} from "../app/types/api.types";
import {getTestsCollections} from "../app/api/api";

const HomePage: NextPage = () => {
    const [tests, setTests] = useState<ITest[]>([]);

    useEffect(() => {
        getTestsCollections().then(setTests);
    }, []);

    return (
        <>
            <Head>
                <title>WebX - Главная страница</title>
            </Head>
            <Home tests={tests} />
        </>
    );
};

export default HomePage;
