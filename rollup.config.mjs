import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import packageJson from "./package.json" assert { type: "json" };
import postcss from "rollup-plugin-postcss";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import image from "@rollup/plugin-image";
import autoprefixer from "autoprefixer";
import postcssImport from "postcss-import";
import postcssFontMagician from "postcss-font-magician";
import json from "@rollup/plugin-json";

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
                plugins: [postcssImport(), postcssFontMagician(), autoprefixer()],
                extract: false,
                autoModules: true,
                sourceMap: true,
                minimize: true,
            }),
            resolve(),
            commonjs(),
            json(),
            typescript({
                tsconfig: "./tsconfig.json",
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
