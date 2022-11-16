import React, {useEffect, useState} from "react";
import { NextPage } from "next";
import Home from "../app/pages/Home/Home";
import Head from "next/head";
import Main from "../app/pages/Main/Main";
import {ITest} from "../app/types/api.types";
import {getTests} from "../app/api/api";

<<<<<<< HEAD
const HomePage: NextPage = () => {
=======
const Home: NextPage = () => {
    const [tests, setTests] = useState<ITest[]>([]);

    useEffect(() => {
        getTests().then(setTests);
    }, []);

>>>>>>> a58668ef10c8025c9a506bcad0b7a011075a1f94
    return (
        <>
            <Head>
                <title>WebX - Главная страница</title>
            </Head>
<<<<<<< HEAD
            <Home />
        </>
=======
            <Main tests={tests} />
        </Layout>
>>>>>>> a58668ef10c8025c9a506bcad0b7a011075a1f94
    );
};

export default HomePage;
