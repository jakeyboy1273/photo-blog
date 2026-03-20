// @ts-check

import eslint from "@eslint/js";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";

export default defineConfig(
  {
    // This object acts as your global ignore list
    ignores: ["dist/", ".astro/", "node_modules/"],
  },
  eslint.configs.recommended,
  tseslint.configs.recommended,
);
