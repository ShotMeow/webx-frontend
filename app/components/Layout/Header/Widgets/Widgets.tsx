import React, { FC } from "react";
import Widget from "./Widget/Widget";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";

import styles from "./Widgets.module.scss";

const Widgets: FC = () => {
    return (
        <div className={styles.actions}>
            <Widget>
                <MdOutlineFavoriteBorder size={24} />
            </Widget>
            <Widget>
                <AiOutlineShoppingCart size={24} />
            </Widget>
            <Widget>
                <IoMdNotificationsOutline size={24} />
            </Widget>
        </div>
    );
};

export default Widgets;
