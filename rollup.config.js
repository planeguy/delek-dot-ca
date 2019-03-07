import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

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
                //dev: !production,
                css: css => { css.write('dist/index.css'); }
            }),
            resolve(),
            commonjs(),
            //minify in production
            terser()
        ]
    }
    // ,
    // {
    //     input: 'src/post/post.js',
    //     output: {
    //         file: 'builds/dev/post/post.js',
    //         format: 'esm'
    //     },
    //     plugins: [
    //         riot(),
    //         resolve(),
    //         common(),
    //         scss({
    //             output: 'builds/dev/post/index.css'
    //         })
    //     ]
    // }
];