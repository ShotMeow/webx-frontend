import React, {useEffect, useState} from "react";
import { NextPage } from "next";
import Layout from "../app/components/Layout/Layout";
import Head from "next/head";
import Main from "../app/pages/Main/Main";
import {ITest} from "../app/types/api.types";
import {getTests} from "../app/api/api";

const Home: NextPage = () => {
    const [tests, setTests] = useState<ITest[]>([]);

    useEffect(() => {
        getTests().then(setTests);
    }, []);

    return (
        <Layout>
            <Head>
                <title>WebX - Главная страница</title>
            </Head>
            <Main tests={tests} />
        </Layout>
    );
};

export default Home;
