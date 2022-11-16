import React from "react";
import { NextPage } from "next";
import Home from "../app/pages/Home/Home";
import Head from "next/head";

const HomePage: NextPage = () => {
    return (
        <>
            <Head>
                <title>WebX - Главная страница</title>
            </Head>
            <Home />
        </>
    );
};

export default HomePage;
