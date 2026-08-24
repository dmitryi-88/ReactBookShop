import ToastContext from "./ToastContext";
import Toast from "../components/Toast/Toast";
import { useState, useRef, useEffect } from "react";

function ToastProvider({ children }) {
    const [isToast, setIsToast] = useState(null);

    const timer = useRef(null);

    const handlerToast = () => {
        setIsToast(<Toast />);

        clearTimeout(timer.current);

        setTimeout(() => {
            setIsToast(null);
        }, 1000);
    };

    useEffect(() => {
        clearTimeout(timer.current);
    }, []);

    return (
        <ToastContext.Provider value={{ isToast, handlerToast }}>
            {children}
        </ToastContext.Provider>
    );
}

export default ToastProvider;
