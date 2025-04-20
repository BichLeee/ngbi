import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
    { ignores: ["dist"] },
    {
        extends: [js.configs.recommended, ...tseslint.configs.recommended],
        files: ["**/*.{ts,tsx}"],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
        plugins: {
            "react-hooks": reactHooks,
            "react-refresh": reactRefresh,
        },
        rules: {
            "no-unused-vars": "warn",
            "@typescript-eslint/no-unused-vars": "warn",
            "@typescript-eslint/no-unused-expressions": "warn",
            "@typescript-eslint/no-explicit-any": "off",
            "jsx-a11y/alt-text": "off",
            "import/first": "off",
            "import/order": "off",
            "react-hooks/rules-of-hooks": "off",
            "react-hooks/exhaustive-deps": "off",
            "jsx-a11y/img-redundant-alt": "off",
            "@typescript-eslint/no-require-imports": "off",
            "react/prop-types": "off",
            "no-constant-binary-expression": "off",
            "no-undef": "error",
            "react/display-name": "off",
            "no-case-declarations": "off",
        },
    }
);
