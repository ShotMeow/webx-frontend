import React, { FC } from "react";
import {
    AiOutlineHeart,
    AiOutlineShoppingCart,
    AiOutlineUser,
} from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";

import styles from "./User.module.css";

const User: FC = () => {
    return (
        <div className={styles.user}>
            <button className={styles.action}>
                <AiOutlineHeart size={25} />
            </button>
            <button className={styles.action}>
                <AiOutlineShoppingCart size={25} />
            </button>
            <button className={styles.action}>
                <IoMdNotificationsOutline size={25} />
            </button>
            <button className={styles.profile}>
                <span>
                    <AiOutlineUser size={25} />
                </span>
                <span>Авторизоваться</span>
            </button>
        </div>
    );
};

export default User;
