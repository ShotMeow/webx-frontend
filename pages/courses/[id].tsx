import React, {useEffect, useState} from 'react';
import {NextPage} from "next";
import {ICourse, ITest} from "../../app/types/api.types";
import {getCourseById, getTestById} from "../../app/api/api";
import Layout from "../../app/components/Layout/Layout";
import Head from "next/head";
import Test from "../../app/pages/Test/Test";
import Course from "../../app/pages/Course/Course";

const CoursePage: NextPage = () => {
    const [course, setCourse] = useState<ICourse | null>(null);

    useEffect(() => {
        const id = window.location.pathname.split("/")[2];
        getCourseById(id).then(setCourse);
    }, []);
    return (
        <Layout>
            <Head>{course && <title>{course.title}</title>}</Head>
            {course && <Course course={course} />}
        </Layout>
    );
};

    export default CoursePage;