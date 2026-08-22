import "./index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import ThemeProvider from "./context/ThemeProvider.jsx";
import QueryProvider from "./QueryClientProvider.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <ThemeProvider>
                <QueryProvider>
                    
                    <App />
                </QueryProvider>
            </ThemeProvider>
        </BrowserRouter>
    </StrictMode>,
);
