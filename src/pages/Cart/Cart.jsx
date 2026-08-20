import styles from "./Cart.module.scss";

import { useReducer, useMemo } from "react";
import { NavLink } from "react-router-dom";

function Cart() {
    return (
        <div className={styles.cartContainer}>
            <div className={styles.chosenProducts}></div>

            <div className={styles.options}>
                <div className={styles.makeOrder}>
                    <span className={styles.total}>Сумма заказа: ₽</span>
                    <button>Оформить заказ</button>
                </div>

                <div className={styles.returnToCatalog}>
                    <NavLink to={'/'}>
                        <button>Вернуться к покупкам</button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default Cart;
