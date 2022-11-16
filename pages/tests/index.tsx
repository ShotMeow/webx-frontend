import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import { getTestsCollections } from "../../app/api/api";
import { ITest } from "../../app/types/api.types";
import Tests from "../../app/pages/Tests/Tests";
import Head from "next/head";

const TestsPage: NextPage = () => {
    const [tests, setTests] = useState<ITest[]>([]);

    useEffect(() => {
        getTestsCollections().then(setTests);
    }, []);

    return (
        <>
            <Head>
                <title>WebX - Тесты</title>
            </Head>
            {tests && <Tests tests={tests} />}
        </>
    );
};

export default TestsPage;
