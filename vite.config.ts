import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        minify: "terser",
        terserOptions: {
            ecma: 2020,
        },
        rollupOptions: {
            output: {
                manualChunks: (id) => {
                    if (id.indexOf("node_modules") !== -1) {
                        return "vendor";
                    }
                },
            },
        },
    },
});
