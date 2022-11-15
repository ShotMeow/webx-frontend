"use client";

import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import { ITest } from "../../assets/types/api.types";
import { getTestsCollections } from "../../assets/api/api";
import Tests from "../../components/Tests/Tests";

const TestsPage: NextPage = () => {
    const [tests, setTests] = useState<ITest[]>([]);

    useEffect(() => {
        getTestsCollections().then(setTests);
    }, []);
    return <main>{tests && <Tests tests={tests} />}</main>;
};

export default TestsPage;
