import React from "react";
import { NextPage } from "next";
import Layout from "../app/components/Layout/Layout";
import Head from "next/head";

const Home: NextPage = () => {
    return (
        <Layout>
            <Head>
                <title>WebX - Главная страница</title>
            </Head>
        </Layout>
    );
};

export default Home;
