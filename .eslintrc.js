module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    ignorePatterns: ["/dist", "node_modules", "*.stories.tsx"],
    parserOptions: {
        project: true,
        tsconfigRootDir: __dirname,
    },
    extends: ["eslint-config-directai", "plugin:storybook/recommended"],
};
