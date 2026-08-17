import { useState } from "react";

const useTheme = () => {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light";
    });

    const toggleTheme = () => {
        setTheme((prevTheme) => {
            const newtheme = prevTheme === "light" ? "dark" : "light";
            localStorage.setItem("theme", newtheme);
            return newtheme;
        });
    };

    return { theme, toggleTheme };
};

export default useTheme;
