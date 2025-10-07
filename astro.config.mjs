// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://ph-portafolio.vercel.app",
  integrations: [sitemap(), mdx()],

  vite: {
    plugins: [tailwindcss()],
  },

  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    routing: {
      prefixDefaultLocale: true,
    },
  },

  adapter: vercel(),
});