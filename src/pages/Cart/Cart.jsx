import styles from "./Cart.module.scss";

import CartContext from "../../context/CartContext";
import CartItem from "../../components/CartItem/CartItem";
import EmptyCart from "../../components/EmptyCart/EmptyCart";

import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useMemo } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createOrder, UpdateStock } from "../../API/UseApi.js";

function Cart() {
    const queryClient = useQueryClient();

    const { cart, dispatch } = useContext(CartContext);

    const total = useMemo(() => {
        return cart.reduce((sum, book) => {
            return sum + book.price * book.quantity;
        }, 0);
    }, [cart]);

    const countUnits = useMemo(() => {
        return cart.reduce((sum, book) => {
            return sum + book.quantity;
        }, 0);
    }, [cart]);

    const navigate = useNavigate();

    const { mutate } = useMutation({
        mutationFn: createOrder,
        onSuccess: async () => {
            await Promise.all(
                cart.map((book) => {
                    const newStock = book.stock - book.quantity;
                    return UpdateStock(book.id, newStock);
                }),
            );

            dispatch({ type: "CLEAR" });

            await queryClient.invalidateQueries({
                queryKey: ["orders"],
            });

            await queryClient.invalidateQueries({
                queryKey: ["books"],
            });

            navigate("/orders");
        },
    });

    const handleSubmitOrder = () => {
        mutate({
            items: cart,
            total: total,
            createdAt: new Date(Date.now()).toLocaleString(),
        });
    };

    return cart.length !== 0 ? (
        <div className={styles.cartContainer}>
            <div className={styles.chosenProducts}>
                {cart.map((book, index) => (
                    <CartItem key={index} book={book} />
                ))}
            </div>

            <div className={styles.options}>
                <div className={styles.makeOrder}>
                    <span>Всего товаров: {countUnits}</span>
                    <span className={styles.total}>Итого: {total}₽</span>

                    <button onClick={handleSubmitOrder}>Оформить заказ</button>

                    <button
                        onClick={() =>
                            dispatch({
                                type: "CLEAR",
                            })
                        }
                    >
                        Очистить корзину
                    </button>

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
