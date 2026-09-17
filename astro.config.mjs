// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://jakeyboy1273.github.io",
  base: "/photo-blog",
  integrations: [mdx(), react(), sitemap()],
  build: {
    inlineStylesheets: "always",
  },
  vite: {
    server: {
      watch: {
        ignored: ["**/.lighthouseci/**"],
      },
    },
    build: {
      rollupOptions: {
        onwarn(warning, warn) {
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
