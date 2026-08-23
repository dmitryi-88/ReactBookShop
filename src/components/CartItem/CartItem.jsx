import styles from "./CartItem.module.scss";
import { useContext } from "react";
import CartContext from "../../context/CartContext";

function CartItem({ book }) {
    const { dispatch } = useContext(CartContext);

    const handleIncrease = () => {
        dispatch({ type: "INCREASE_QUANTITY", payload: { ...book } });
    };

    const handeDecrease = () => {
        dispatch({ type: "DECREASE_QUANTITY", payload: { ...book } });
    };

    const handleRemove = () => {
        dispatch({ type: "REMOVE", payload: { ...book } });
    };

    return (
        <div className={styles.cartItemContainer}>
            <div className={styles.image}>
                <img src={book.image} alt="" />
            </div>

            <div className={styles.description}>
                <span className={styles.title}>{book.title}</span>
                <span className={styles.author}>{book.author}</span>
                <div className={styles.info}>
                    <span className={styles.price}>Цена: {book.price}₽</span>
                    <span className={styles.stock}>
                        Осталось в наличии: {book.stock}
                    </span>
                </div>
            </div>

            <div className={styles.options}>
                <button onClick={handeDecrease}>-</button>
                <span>{book.quantity}</span>
                <button onClick={handleIncrease}>+</button>
                <button onClick={handleRemove}>
                    <i className="fa-solid fa-trash"></i>
                </button>
            </div>

            <hr />
        </div>
    );
}

export default CartItem;
