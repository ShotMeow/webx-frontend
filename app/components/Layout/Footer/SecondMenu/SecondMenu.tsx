import React, {FC} from 'react';

import styles from './SecondMenu.module.scss';

import Link from "next/link";

const SecondMenu: FC = () => {
    return (
        <ul className={styles.menu}>
            <li><Link href='/'>О нас</Link></li>
            <li><Link href='/'>Сотрудничество</Link></li>
            <li><Link href='/'>Условия использования</Link></li>
            <li><Link href='/'>Политика конфиденциальности</Link></li>
        </ul>
    );
};

export default SecondMenu;