import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import scss from "rollup-plugin-scss";
import packageJson from "./package.json" assert { type: 'json' };
import styles from "rollup-plugin-styles";
import postcss from 'rollup-plugin-postcss';
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import image from '@rollup/plugin-image';
import font from "rollup-plugin-font";
import autoprefixer from "autoprefixer";
import url from '@rollup/plugin-url';
import css from "rollup-plugin-css-only";
import postcssImport from "postcss-import";
import postcssUrl from "postcss-url";
import cssnano from "cssnano";
import postcssPartialImport from "postcss-partial-import";
import stylelint from "stylelint";
import postcssFontMagician from "postcss-font-magician";
import sourcemaps from "rollup-plugin-sourcemaps";


export default [
    {
        input: "src/index.ts",
        output: [
            {
                file: packageJson.main,
                format: "cjs",
                sourcemap: true,

            },
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: true,
            },
        ],
        plugins: [
            peerDepsExternal(),
            postcss({
                use: ["sass"],
                plugins: [
                    postcssImport(),
                    postcssFontMagician(),
                    autoprefixer(),
                    //cssnano(),
                ],
                extract: true,
                autoModules: true,
                sourceMap: true
            }),
            resolve(),
            commonjs(),
            typescript({
                tsconfig: "./tsconfig.json"
            }),
            image(),
        ],
        external: ["react", "react-dom", "styled-components"],
    },
    {
        input: "dist/esm/types/index.d.ts",
        output: [{ file: "dist/index.d.ts", format: "esm" }],
        plugins: [dts()],
        external: [/\.css$/, /\.scss$/],
    },
];
