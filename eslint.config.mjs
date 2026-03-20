// @ts-check
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginAstro from 'eslint-plugin-astro';

export default tseslint.config(
  {
    // Global ignores must be in their own object at the start
    ignores: ["dist/", ".astro/", "node_modules/"]
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    rules: {
      // Add any specific "vanilla" overrides here
    }
  }
);