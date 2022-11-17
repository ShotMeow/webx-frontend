import React, { FC } from "react";

import 'swiper/css';
import "swiper/css/navigation";

import styles from "./Home.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import TestCard from "../../components/Cards/TestCard/TestCard";
import {ITest} from "../../types/api.types";

interface Props {
    tests: ITest[]
}

const Home: FC<Props> = ({tests}) => {
    return (
        <section className={styles.home}>
            <h2>Главная страница</h2>
            <div className={styles.container}>
                <h3>Тесты</h3>
                <Swiper navigation={true} slidesPerView={4} spaceBetween={40} modules={[Navigation]}>
                    {tests.map((test) => (
                        <SwiperSlide key={test.id}><TestCard key={test.id} test={test} /></SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Home;
