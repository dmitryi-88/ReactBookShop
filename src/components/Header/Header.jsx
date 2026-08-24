import styles from "./Header.module.scss";
// Libs
import { NavLink } from "react-router-dom";
import { useContext } from "react";
// Context
import CartContext from "../../context/CartContext";
import ThemeContext from "../../context/ThemeContext";
// Components
import CartButtonOnHeader from "../../microComponents/CartButtonOnHeader";

function Header() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { cart } = useContext(CartContext);

    return (
        <header className={styles.header}>
            <NavLink to={"/"} className={styles.logo}>
                Books Place
            </NavLink>

            <div className={styles.options}>
                <div className={styles.themeContainer}>
                    <button
                        onClick={toggleTheme}
                        className={styles.themeButton}
                    >
                        {theme === "light" ? (
                            <i className="fa-regular fa-moon"></i>
                        ) : (
                            <i className="fa-regular fa-sun"></i>
                        )}
                    </button>
                </div>

                <div className={styles.ordersContainer}>
                    <NavLink to={"/orders"} className={styles.orders}>
                        Мои заказы
                    </NavLink>
                </div>

                <div className={styles.cartContainer}>
                    <NavLink to={"/cart"} className={styles.cart}>
                        <CartButtonOnHeader productsCount={cart.length} />

                        <span className={styles.counter}></span>
                    </NavLink>
                </div>
            </div>
        </header>
    );
}

export default Header;
