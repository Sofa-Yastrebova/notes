import { defineConfig } from "vite";
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    base: "./",
    build: {
        minify: true,
        sourcemap: true,
    },
    plugins: [
        tailwindcss(),
    ],
    css: {
        minify: true,
        devSourcemap: true,
    },
});