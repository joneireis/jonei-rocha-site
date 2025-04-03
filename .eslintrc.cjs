module.exports = {
    root: true,
    env: {
        browser: true,
        es2020: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
    ],
    ignorePatterns: ["dist", ".eslintrc.cjs"],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
    },
    settings: {
        react: {
            version: "18.2",
        },
    },
    rules: {
        "react/react-in-jsx-scope": "off",
        "react/prop-types": "off",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
        "no-console": ["warn", { allow: ["warn", "error"] }],
    },
}; 