import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import Layout from "../../app/components/Layout/Layout";
import Test from "../../app/pages/Test/Test";
import { ITest } from "../../app/types/api.types";
import { getTestById } from "../../app/api/api";
import Head from "next/head";

const TestPage: NextPage = () => {
    const [test, setTest] = useState<ITest | null>(null);

    useEffect(() => {
        const id = window.location.pathname.split("/")[2];
        getTestById(id).then(setTest);
    }, []);
    return (
        <Layout>
            <Head>{test && <title>{test.title}</title>}</Head>
            {test && <Test test={test} />}
        </Layout>
    );
};

export default TestPage;
