"use client";

import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import Home from "../components/Home/Home";
import { ITest } from "../assets/types/api.types";
import { getTestsCollections } from "../assets/api/api";

const HomePage: NextPage = () => {
    const [tests, setTests] = useState<ITest[]>([]);

    useEffect(() => {
        getTestsCollections().then(setTests);
    }, []);

    return <main>{tests && <Home tests={tests} />}</main>;
};

export default HomePage;
