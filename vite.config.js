import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            // "@styles": "ReactBookShop/src/styles",
            // "@variables": "./src/styles/_Variables.scss",
        },
    },
});
