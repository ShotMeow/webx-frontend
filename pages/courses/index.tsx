import React, {useEffect, useState} from "react";
import { NextPage } from "next";
<<<<<<< HEAD
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
=======
import Layout from "../../app/components/Layout/Layout";
import Head from "next/head";
import {ICourse, ITest} from "../../app/types/api.types";
import {getCourses, getTests} from "../../app/api/api";
import Courses from "../../app/pages/Courses/Courses";

const CoursesPage: NextPage = () => {
    const [courses, setCourses] = useState<ICourse[]>([]);

    useEffect(() => {
        getCourses().then(setCourses);
    }, []);


    return <Layout>
      <Head>
          <title>WebX - Тесты</title>
      </Head>
      {courses && <Courses courses={courses} />}
  </Layout>;
>>>>>>> a58668ef10c8025c9a506bcad0b7a011075a1f94
};

export default CoursesPage;
