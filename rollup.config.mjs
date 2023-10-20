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


export default [
    {
        input: "src/index.ts",
        output: [
            {
                file: packageJson.main,
                format: "cjs",
                sourcemap: false,

            },
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: false,
            },
        ],
        plugins: [
            peerDepsExternal(),
            resolve(),
            commonjs(),
            scss(),
            styles(),
            typescript({
                tsconfig: "./tsconfig.json"
            }),
            postcss(),
            image()
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
