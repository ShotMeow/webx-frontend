import React, { FC } from "react";
import {ICourse, ITest} from "../../types/api.types";
import styles from "./CourseCard.module.css";
import classNames from "classnames";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import Link from "next/link";

const CourseCard: FC<{ course: ICourse }> = ({ course }) => {
    return (
        <Link href={`./courses/${course.id}`}>
            <article className={styles.course}>
                <img
                    className={styles.image}
                    src={course.image}
                    alt={course.title}
                />
                <span
                    className={classNames({
                        [styles.category]: true,
                        [styles.design]: course.category === "Design",
                        [styles.backend]: course.category === "Backend",
                        [styles.frontend]: course.category === "Frontend",
                    })}
                >
                    {course.category}
                </span>
                <div className={styles.content}>
                    <h3 className={styles.heading}>{course.title}</h3>
                    <p className={styles.developer}>{course.developer}</p>
                    <p className={styles.difficulty}>
                        <IoExtensionPuzzleOutline size={20} />
                        {course.difficulty}
                    </p>
                </div>
            </article>
        </Link>
    );
};

export default CourseCard;
