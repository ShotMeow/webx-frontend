import React, {FC} from 'react';
import Logo from "../../Logo/Logo";
import SecondMenu from "./SecondMenu/SecondMenu";
import Socials from "./Socials/Socials";

import styles from './Footer.module.scss';

const Footer: FC = () => {
    return (
        <footer className={styles.footer}>
            <Logo />
            <SecondMenu />
            <Socials />
            <p>© 2022 WebX, Inc.</p>
        </footer>
    );
};

export default Footer;