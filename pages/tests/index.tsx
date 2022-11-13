import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import Tests from "../../app/pages/Tests/Tests";
import Layout from "../../app/components/Layout/Layout";
import { ITest } from "../../app/types/api.types";
import { getTests } from "../../app/api/api";

const TestsPage: NextPage = () => {
    const [tests, setTests] = useState<ITest[]>([]);

    useEffect(() => {
        getTests().then(setTests);
    }, []);

    return <Layout>{tests && <Tests tests={tests} />}</Layout>;
};

export default TestsPage;
