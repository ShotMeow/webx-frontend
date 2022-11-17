import React, {FC} from 'react';

import styles from './Socials.module.scss';

import {IoLogoVk, IoLogoInstagram, IoIosMail} from 'react-icons/io'
import {FaTelegramPlane} from 'react-icons/fa';

const Socials: FC = () => {
    return (
        <ul className={styles.socials}>
            <li><a href='#'><IoLogoVk size={24} /></a></li>
            <li><a href='#'><FaTelegramPlane size={24} /></a></li>
            <li><a href='#'><IoLogoInstagram size={24} /></a></li>
            <li><a href='#'><IoIosMail size={24} /></a></li>
        </ul>
    );
};

export default Socials;