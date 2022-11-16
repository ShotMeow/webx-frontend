import React from "react";
import { NextPage } from "next";
import Courses from "../../app/pages/Courses/Courses";
import Head from "next/head";

const CoursesPage: NextPage = () => {
    return (
        <>
            <Head>
                <title>WebX - Курсы</title>
            </Head>
            <Courses />
        </>
    );
};

export default CoursesPage;
