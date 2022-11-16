import React, { FC } from "react";

import { AiOutlineUser } from "react-icons/ai";

import styles from "./Profile.module.scss";

const Profile: FC = () => {
    return (
        <button className={styles.profile}>
            <div>
                <AiOutlineUser size={24} />
            </div>
            Авторизация
        </button>
    );
};

export default Profile;
