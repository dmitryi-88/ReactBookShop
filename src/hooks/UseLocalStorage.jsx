import { useState } from "react";

const useLocalStorage = () => {
    const [cart, setCart] = useState(() => {
        return localStorage.getItem("cart") || "";
    });

    const addToCart = (item) => {

    }
};
