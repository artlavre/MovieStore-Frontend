import globals from "globals"
import react from "eslint-plugin-react"
import reactRefresh from "eslint-plugin-react-refresh"
import tseslint from "typescript-eslint"

export default [
  { ignores: ["build"] },
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parser: tseslint.parser,
      parserOptions: {
        project: "./tsconfig.json",
        sourceType: "module",
      },
    },
    settings: { react: { version: "18.3" } },
    plugins: {
      react,
      "react-refresh": reactRefresh,
    },
    rules: {
      "quotes": ["error", "double", { avoidEscape: true }],
      "react/jsx-tag-spacing": [
          "error",
        {
          closingSlash: "never",
          beforeSelfClosing: "always",
          afterOpening: "never",
          beforeClosing: "never",
        }
      ],
    },
  },
]
