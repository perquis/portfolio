import nextConfig from "eslint-config-next/core-web-vitals";
import storybook from "eslint-plugin-storybook";
import typescriptPlugin from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";

export default [
  {
    ignores: [
      "**/*.test.ts",
      "**/*.test.tsx",
      "**/*.spec.ts",
      "**/*.spec.tsx",
      "**/__tests__/**",
      "tailwind.config.ts",
      "jest.config.ts"
    ]
  },
  ...nextConfig,
  ...storybook.configs["flat/recommended"],
  {
    plugins: { "@typescript-eslint": typescriptPlugin },
    languageOptions: { parser: typescriptParser },
    rules: {
      "eqeqeq": "error",
      "no-console": ["error", { "allow": ["warn", "error"] }],
      "no-loop-func": "error",
      "max-depth": ["error", 4],
      "block-scoped-var": "error",
      "func-name-matching": "error",
      "no-unreachable-loop": "warn",
      "array-callback-return": "error",
      "@typescript-eslint/ban-types": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-require-imports": "warn",
      "@typescript-eslint/prefer-enum-initializers": "warn",
      "@typescript-eslint/no-duplicate-enum-values": "warn",
      "@typescript-eslint/triple-slash-reference": ["error", { "path": "always", "types": "always", "lib": "always" }],
      "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_", "destructuredArrayIgnorePattern": "^_" }]
    }
  }
];
