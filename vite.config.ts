import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

let overallChunkSize = 0;
let chunksOver = 0;
let skipChunk = -1;

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react({})],
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
