export default{
    root: 'src',
    build: {
        outDir: '../dist',
    },
    base: "/website",
};

/*
import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    base: "/website"
  },
});


export default{
    root: 'src',
    build: {
        outDir: '../dist',
    },
    base: "/website",
};
*/
/*
import {resolve} from 'path'
import {defineConfig} from 'vite'

export default defineConfig
(
    {
        root: './',
        build: {
        outDir: 'dist',
        rollupOptions: {
            input: {
            main: resolve(__dirname, 'src/index.html')
            },
        },
        base: "/website"
 },
})*/