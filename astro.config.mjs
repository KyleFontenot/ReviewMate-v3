import { defineConfig } from "astro/config";
import { astroImageTools } from "astro-imagetools";
import solid from "@astrojs/solid-js";
import compress from 'vite-plugin-compress';
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  root: ".",
  srcDir: "./src",
  outDir: "./dist",
  publicDir: "./public",
  trailingSlash: "always",
  site: "https://main--deft-cuchufli-bfd7e3.netlify.app/",
  integrations: [astroImageTools, solid(), sitemap()],
  vite: {
    plugins: [compress]
  }
});