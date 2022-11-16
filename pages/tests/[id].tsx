import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import Test from "../../app/pages/Test/Test";
import { ITest } from "../../app/types/api.types";
import { getTestCollectionById } from "../../app/api/api";
import Head from "next/head";

const TestPage: NextPage = () => {
    const [test, setTest] = useState<ITest | null>(null);

    useEffect(() => {
        const id = window.location.pathname.split("/")[2];
        getTestCollectionById(id).then(setTest);
    }, []);

    return (
        <>
            <Head>{test && <title>WebX - {test.title}</title>}</Head>
            {test && <Test test={test} />}
        </>
    );
};

export default TestPage;
