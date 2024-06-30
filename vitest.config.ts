import {defineConfig} from "vite";
import path from 'path'
import Vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [Vue()],
    test: {
        exclude: ['node_modules', 'tests/e2e'],
        globals: true,
        environment: "jsdom",
        // setupFiles: path.resolve(__dirname, './vitest.setup.js') // моки лежали
    },
    root: '.',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    },
})