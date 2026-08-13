import styles from "./styles/App.module.scss";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainPage from "./pages/MainPage";
import Orders from "./pages/Orders";

function App() {
    return (
        <div data-theme={"light"} className={styles.appContainer}>
            <Header />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/orders" element={<Orders />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
