// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://jakeyboy1273.github.io",
  base: "/photo-blog", // This matches the repository name!
  integrations: [mdx()],
  vite: {
    build: {
      rollupOptions: {
        onwarn(warning, warn) {
          // Suppress known Astro internal warning (unused imports in @astrojs/internal-helpers/remote)
          if (
            warning.code === "UNUSED_EXTERNAL_IMPORT" &&
            warning.exporter === "@astrojs/internal-helpers/remote"
          ) {
            return;
          }
          warn(warning);
        },
      },
    },

    plugins: [tailwindcss()],
  },
});
