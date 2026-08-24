import styles from "./App.module.scss";
// Context
import ThemeContext from "./context/ThemeContext";
// Providers
import CartProvider from "./context/CartProvider";
import ToastProvider from "./context/ToastProvider";
import PageAnimation from "./animation/PageAnimation";
import DescriptionProvider from "./context/DescriptionProvider";
// Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainPage from "./pages/MainPage/MainPage";
import Orders from "./pages/Orders/Orders";
import Cart from "./pages/Cart/Cart";
// Libs
import { Routes, Route } from "react-router-dom";
import { useContext } from "react";

function App() {
    const { theme } = useContext(ThemeContext);

    return (
        <div data-theme={theme} className={styles.appContainer}>
            <CartProvider>
                <Header />

                <Routes>
                    <Route
                        path="/"
                        element={
                            <ToastProvider>
                                <PageAnimation>
                                    <DescriptionProvider>
                                        <MainPage />
                                    </DescriptionProvider>
                                </PageAnimation>
                            </ToastProvider>
                        }
                    />
                    <Route
                        path="/orders"
                        element={
                            <PageAnimation>
                                <Orders />
                            </PageAnimation>
                        }
                    />
                    <Route
                        path="/cart"
                        element={
                            <PageAnimation>
                                <Cart />
                            </PageAnimation>
                        }
                    />
                </Routes>
            </CartProvider>

            <Footer />
        </div>
    );
}

export default App;
