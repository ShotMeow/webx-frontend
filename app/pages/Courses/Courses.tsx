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
        </section>
    );
};

export default Courses;