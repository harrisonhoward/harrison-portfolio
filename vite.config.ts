import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        host: "0.0.0.0",
        open: "http://howardfamily.ddns.net:3000/",
        port: 3000,
        strictPort: true,
    },
    build: {
        // Only warn when our build exceeds 1000kB
        chunkSizeWarningLimit: 1000,
        minify: "terser",
        terserOptions: {
            ecma: 2020,
        },
        rollupOptions: {
            output: {
                manualChunks: (id) => {
                    // Use this for getting the file name (DEV_ONLY)
                    const fileNameRegex = /^.*\/(.*)\..*$/;

                    // Split node_modules into vendors
                    if (id.includes("node_modules")) {
                        // Use this for getting the package name (DEV_ONLY)
                        const packageName = id
                            .toString()
                            .split("node_modules/")[1]
                            .split("/")[0]
                            .toString();

                        return "vendor";
                    }
                },
            },
        },
    },
});
