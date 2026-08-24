import styles from "./EmptyCart.module.scss";
import { NavLink } from "react-router-dom";

function EmptyCart() {
    return (
        <div className={styles.emptyCartContainer}>
            <h2>В корзине пока пусто</h2>
            <span>
                Загляните на главную - собрали там книги, которые могут вам
                понравиться
            </span>
            <NavLink to={"/"} viewTransition>
                <button>Перейти на главную</button>
            </NavLink>
        </div>
    );
}

export default EmptyCart;
