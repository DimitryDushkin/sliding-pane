import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss'
import replace from 'rollup-plugin-replace'
import {uglify} from 'rollup-plugin-uglify'
import path from 'path';

export default {
    input: 'docs/src/app.js',
    output: {
        file: path.resolve(__dirname, "docs/dist/bundle.js"),
        format: 'cjs',
        sourcemap: true,
    },
    plugins: [
        babel({
            exclude: "node_modules/**"
        }),
        resolve(),
        commonjs({
            include: 'node_modules/**',
            namedExports: {
                'node_modules/react/index.js': ['Component', 'PureComponent', 'Fragment', 'Children', 'createElement'],
                'node_modules/react-dom/index.js': ['render']
            }
        }),
        replace({
            "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || 'development')
        }),
        postcss(),
        (process.env.NODE_ENV === 'production' && uglify()),
    ],
};