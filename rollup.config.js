import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss'

export default {
    input: 'src/index.js',
    output: {
        file: 'dist/react-sliding-pane.js',
        format: 'esm',
    },
    external: [
        'react',
        'react-dom',
        'react-modal',
        'prop-types',
    ],
    plugins: [
        babel({
            exclude: "node_modules/**"
        }),
        resolve(),
        commonjs(),
        postcss({
            extract: true
        }),
    ],
};