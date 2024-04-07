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
                    const fileNameRegex = /^.*\/(.*)\..*$/;

                    // Split node_modules into vendors
                    if (id.includes("node_modules")) {
                        // dev-icons are massive in file size so we need to split the icons into individual chunks (8MB+ combined)
                        if (id.includes("devicons") && id.includes("icons")) {
                            const iconName = fileNameRegex.exec(id)?.[1];
                            return `vendor-devicon-${iconName}`;
                        } else {
                            const packageName = id
                                .toString()
                                .split("node_modules/")[1]
                                .split("/")[0]
                                .toString();

                            // We are now only going to split into separate chunks packages that are problematic with size
                            if (packageName.includes("react-dom")) {
                                return "vendor-react";
                            }

                            return "vendor";
                        }
                    }
                },
            },
        },
    },
});
