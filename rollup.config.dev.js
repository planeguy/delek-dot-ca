import resolve from 'rollup-plugin-node-resolve';
import common from 'rollup-plugin-commonjs';
import riot from 'rollup-plugin-riot';
import scss from 'rollup-plugin-scss';

export default [
    {
        input: 'src/index/index.js',
        output: {
            file: 'builds/dev/index.js',
            format: 'esm'
        },
        plugins: [
            riot(),
            resolve(),
            common(),
            scss({
                output: 'builds/dev/index.css'
            })
        ]
    },
    {
        input: 'src/post/post.js',
        output: {
            file: 'builds/dev/post/post.js',
            format: 'esm'
        },
        plugins: [
            riot(),
            resolve(),
            common(),
            scss({
                output: 'builds/dev/post/index.css'
            })
        ]
    }
];