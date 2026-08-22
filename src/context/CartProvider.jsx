import CartContext from "./CartContext";
import cartReducer from "../reducers/cartReducer";
import { useEffect, useReducer } from "react";

import useLocalStorage from "../hooks/UseLocalStorage";

function CartProvider({ children }) {
    const [savedCart, setSavedCart] = useLocalStorage("cart", []);
    const [cart, dispatch] = useReducer(cartReducer, savedCart);

    useEffect(() => {
        setSavedCart(cart);
    }, [cart, setSavedCart]);

    return (
        <CartContext.Provider value={{ cart, dispatch }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;
