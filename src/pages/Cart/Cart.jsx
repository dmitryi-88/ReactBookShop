import styles from "./Cart.module.scss";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import CartItem from "../../components/CartItem/CartItem";
import EmptyCart from "../../components/EmptyCart/EmptyCart";

function Cart() {
    const { cart, dispatch } = useContext(CartContext);

    return cart.length !== 0 ? (
        <div className={styles.cartContainer}>
            <div className={styles.chosenProducts}>
                {cart.map((book, index) => (
                    <CartItem key={index} book={book} />
                ))}
            </div>

            <div className={styles.options}>
                <div className={styles.makeOrder}>
                    <span>Всего товаров: </span>
                    <span className={styles.total}>Итого: ₽</span>
                    <button>Оформить заказ</button>
                    <button
                        onClick={() =>
                            dispatch({
                                type: "CLEAR",
                            })
                        }
                    >
                        Очистить корзину
                    </button>
                </div>

                <div className={styles.returnToCatalog}>
                    <NavLink to={"/"} viewTransition>
                        <button>Вернуться к покупкам</button>
                    </NavLink>
                </div>
            </div>
        </div>
    ) : (
        <EmptyCart />
    );
}

export default Cart;
