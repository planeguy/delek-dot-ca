import resolve from 'rollup-plugin-node-resolve';
import common from 'rollup-plugin-commonjs';
import riot from 'rollup-plugin-riot';
import scss from 'rollup-plugin-scss';

export default [
    {
        input: 'src/index/index.js',
        output: {
            file: 'builds/dist/index.js',
            format: 'esm'
        },
        plugins: [
            riot(),
            resolve(),
            common(),
            scss({
                output: 'builds/dist/index.css'
            })
        ]
    },
    {
        input: 'src/post/post.js',
        output: {
            file: 'builds/dist/post/post.js',
            format: 'esm'
        },
        plugins: [
            riot(),
            resolve(),
            common(),
            scss({
                output: 'builds/dist/post/index.css'
            })
        ]
    }
];