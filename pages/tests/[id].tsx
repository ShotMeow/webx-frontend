import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import Layout from "../../app/components/Layout/Layout";
import Test from "../../app/pages/Test/Test";
import { ITest } from "../../app/types/api.types";
import { getTestById } from "../../app/api/api";

const TestPage: NextPage = () => {
    const [test, setTest] = useState<ITest | null>(null);

    useEffect(() => {
        const id = window.location.pathname.split("/")[2];
        getTestById(id).then(setTest);
    }, []);
    return <Layout>{test && <Test test={test} />}</Layout>;
};

export default TestPage;
