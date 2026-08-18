import { useState } from "react";

const useDebounce = () => {
    const [inputValue, setInputValue] = useState("");

    const setValue = (value) => {
        const timer = setTimeout(() => {
            setInputValue(value);
        }, 500);

        return () => clearTimeout(timer);
    };

    return { inputValue, setValue };
};

export default useDebounce;
