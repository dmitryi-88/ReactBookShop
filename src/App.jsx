import styles from "./App.module.scss";

import ThemeContext from "./context/ThemeContext";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainPage from "./pages/MainPage/MainPage";
import Orders from "./pages/Orders/Orders";
import Cart from "./pages/Cart/Cart";
import CartProvider from "./context/CartProvider";

import { Routes, Route } from "react-router-dom";
import { useContext } from "react";

function App() {
    const { theme } = useContext(ThemeContext);

    return (
        <div data-theme={theme} className={styles.appContainer}>
            <CartProvider>
                <Header />

                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </CartProvider>

            <Footer />
        </div>
    );
}

export default App;
