import { useContext } from "react";
import styles from "../styles/Header.module.scss";
import { NavLink } from "react-router-dom";

function Header() {
    // const [theme, toggleTheme] = useContext('')

    return (
        <header className={styles.header}>
            <NavLink to={"/"} className={styles.logo}>
                Books Place
            </NavLink>

            <div className={styles.options}>
                <div className={styles.themeContainer}>
                    <button className={styles.themeButton}>
                        {/* {theme} */}
                    </button>
                </div>

                <div className={styles.ordersContainer}>
                    <NavLink to={"/orders"} className={styles.orders}>
                        Мои заказы
                    </NavLink>
                </div>

                <div className={styles.cartContainer}>
                    <NavLink to={"/cart"} className={styles.cart}>
                        <svg
                            width="28"
                            height="28"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M3 4H5L7 16H19L21 8H6"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <circle
                                cx="9"
                                cy="20"
                                r="1.5"
                                fill="currentColor"
                            />
                            <circle
                                cx="17"
                                cy="20"
                                r="1.5"
                                fill="currentColor"
                            />
                        </svg>

                        <span className={styles.counter}></span>
                    </NavLink>
                </div>
            </div>
        </header>
    );
}

export default Header;
