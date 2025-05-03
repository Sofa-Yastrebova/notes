import { defineConfig } from "vite";
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    base: "./",
    build: {
        minify: false,
        sourcemap: true,
    },
    plugins: [
        tailwindcss(),
    ],
    css: {
        minify: false,
        devSourcemap: true,
    },
});