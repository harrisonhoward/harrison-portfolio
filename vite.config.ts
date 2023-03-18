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
                manualChunks: (id, api) => {
                    if (id.indexOf("node_modules") !== -1) {
                        const moduleInfo = api.getModuleInfo(id);
                        const chunkSize = moduleInfo.ast.end / 1000;
                        if (chunkSize > 200) {
                            skipChunk = chunksOver + 1;
                            return `vendor-chunk${skipChunk}`;
                        } else if (chunkSize + overallChunkSize > 400) {
                            chunksOver =
                                chunkSize + 1 === skipChunk
                                    ? chunksOver + 2
                                    : chunksOver + 1;
                            overallChunkSize = 0;
                        } else {
                            overallChunkSize += chunkSize;
                        }
                        return `vendor-chunk${chunksOver}`;
                    }
                },
            },
        },
    },
});
