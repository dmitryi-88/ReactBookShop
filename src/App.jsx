import styles from "./styles/App.module.scss";

import ThemeContext from "./context/ThemeContext";

import Header from "./components/Header";
import Footer from "./components/Footer";
import MainPage from "./pages/MainPage";
import Orders from "./pages/Orders";
import Cart from "./pages/Cart";

import { Routes, Route } from "react-router-dom";
import { useContext } from "react";

function App() {
    const { theme } = useContext(ThemeContext);

    return (
        <div data-theme={theme} className={styles.appContainer}>
            <Header />

            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
            
            <Footer />
        </div>
    );
}

export default App;
