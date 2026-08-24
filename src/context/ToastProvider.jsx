import ToastContext from "./ToastContext";
import Toast from "../components/Toast/Toast";
import { useState } from "react";

function ToastProvider({ children }) {
    const [isToast, setIsToast] = useState(null);

    const handlerToast = () => {
        setIsToast(<Toast />);

        setTimeout(() => {
            setIsToast(null);
        }, 1000);
    };

    return (
        <ToastContext.Provider value={{ isToast, handlerToast }}>
            {children}
        </ToastContext.Provider>
    );
}

export default ToastProvider;
