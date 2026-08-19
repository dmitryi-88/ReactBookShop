import styles from "./EmptyOrders.module.scss";
import emptyOrderImg from "../../assets/emptyOrders.png";

import { NavLink } from "react-router-dom";

function EmptyOrders() {
    return (
        <div className={styles.emptyOrdersContainer}>
            <h2>Вы еще ничего не заказали ...</h2>
            <img src={emptyOrderImg} alt="" />

            <h2>Самое время сделать первый заказ</h2>
            <NavLink to={'/'}>К покупкам</NavLink>
        </div>
    );
}

export default EmptyOrders;
