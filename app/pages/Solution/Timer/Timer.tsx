import React, { FC, useEffect } from "react";

import styles from "./Timer.module.scss";

interface Props {
    time: number;
    setTime: React.Dispatch<React.SetStateAction<number>>;
}

const Timer: FC<Props> = ({ time, setTime }) => {
    useEffect(() => {
        let interval = setInterval(() => {
            setTime(time + 1);
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [time]);

    return (
        <div className={styles.timer}>
            <span>{("0" + Math.floor((time / 6000) % 60)).slice(-2)}:</span>
            <span>{("0" + Math.floor((time / 100) % 60)).slice(-2)}:</span>
            <span>{("0" + Math.floor(time % 60)).slice(-2)}</span>
        </div>
    );
};

export default Timer;
