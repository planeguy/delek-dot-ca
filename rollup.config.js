import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import filesize from 'rollup-plugin-filesize';
import copy from 'rollup-plugin-copy';

export default [
    {
        input: 'src/index/index.js',
        output: {
            //sourcemap: true,
            format: 'iife',
            name: 'app',
            file: 'dist/index.js'
        },
        plugins: [
            svelte({
                css: css => { css.write('dist/index.css'); }
            }),
            copy({
                targets: [{src:'src/index/html/*', dest:'dist' }]
            }),
            resolve(),
            commonjs(),
            terser(),
            filesize()
        ]
    },
    {
        input: 'src/post/post.js',
        output: {
            sourcemap: true,
            format: 'iife',
            name: 'app',
            file: 'dist/post/post.js'
        },
        plugins: [
            svelte({
                css: css => { css.write('dist/post/post.css'); }
            }),
            copy({
                targets: [{src:'src/post/html/*', dest:'dist/post'}]
            }),
            resolve(),
            commonjs(),
            //terser(),
            filesize()
        ]
    }
];