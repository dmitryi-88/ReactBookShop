import ThemeContext from "./ThemeContext";
import useTheme from "../hooks/UseTheme";

function ThemeProvider({ children }) {
    const { theme, toggleTheme } = useTheme();

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;
