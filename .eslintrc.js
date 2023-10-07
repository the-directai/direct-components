module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: true,
        tsconfigRootDir: __dirname,
    },
    extends: ["eslint-config-directai"],
};
