import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import Test from "../../../app/pages/Test/Test";
import { ITest } from "../../../app/types/api.types";
import { getTestCollectionById } from "../../../app/api/api";
import Head from "next/head";
import { getIdHelper } from "../../../app/helpers/getIdHelper";

const TestPage: NextPage = () => {
    const [test, setTest] = useState<ITest | null>(null);

    useEffect(() => {
        const id = getIdHelper();
        getTestCollectionById(id).then(setTest);
    }, []);

    return (
        <>
            {test && (
                <>
                    <Head>
                        <title>WebX - {test.title}</title>
                    </Head>
                    <Test test={test} />
                </>
            )}
        </>
    );
};

export default TestPage;
