/* eslint-disable import/no-extraneous-dependencies */
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
import replace from '@rollup/plugin-replace';
import path from 'path';

const extensions = ['.js', '.jsx', '.es6', '.es', '.mjs', '.tsx', '.ts'];

export default {
  input: 'docs/src/app.tsx',
  output: {
    file: path.resolve(__dirname, 'docs/dist/bundle.js'),
    format: 'iife',
    sourcemap: true,
  },
  plugins: [
    postcss(),

    replace({
      'process.env.NODE_ENV': JSON.stringify('development'),
      preventAssignment: true,
    }),
    babel({
      exclude: 'node_modules/**',
      extensions,
    }),
    resolve({
      extensions: [...extensions, '.css'],
    }),
    commonjs({
      include: 'node_modules/**',
    }),
  ],
};
