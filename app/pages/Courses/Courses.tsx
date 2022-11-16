<<<<<<< HEAD
import React, { FC } from "react";

import styles from "./Courses.module.scss";

const Courses: FC = () => {
    return (
        <section className={styles.courses}>
            <h2>Курсы</h2>
=======
import React, {FC} from 'react';
import {ICourse} from "../../types/api.types";
import styles from "../Tests/Tests.module.css";
import TestCard from "../../components/TestCard/TestCard";
import CourseCard from "../../components/CourseCard/CourseCard";

const Courses: FC<{courses: ICourse[]}> = ({courses}) => {
    return (
        <section>
            <h2 className={styles.heading}>Курсы</h2>
            <div className={styles.tests}>
                {courses &&
                courses.map((course) => <CourseCard course={course} key={course.id} />)}
            </div>
>>>>>>> a58668ef10c8025c9a506bcad0b7a011075a1f94
        </section>
    );
};

<<<<<<< HEAD
export default Courses;
=======
export default Courses;
>>>>>>> a58668ef10c8025c9a506bcad0b7a011075a1f94
