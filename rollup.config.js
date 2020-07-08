import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import postcss from "rollup-plugin-postcss";

export const extensions = [".js", ".jsx", ".es6", ".es", ".mjs", ".tsx", ".ts"];

export default {
  input: "src/react-sliding-pane.tsx",
  output: {
    file: "dist/react-sliding-pane.js",
    format: "cjs",
  },
  external: ["react", "react-dom", "react-modal", "prop-types"],
  plugins: [
    babel({
      exclude: "node_modules/**",
      extensions,
    }),
    resolve({
      extensions: [...extensions, ".css"],
    }),
    commonjs(),
    postcss({
      extract: true,
    }),
  ],
};
