import { defineConfig } from 'astro/config';
import { astroImageTools } from "astro-imagetools";
import solidJs from "@astrojs/solid-js";
import sitemap from "@astrojs/sitemap";

import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  root: ".",
  srcDir: "./src",
  outDir: "./dist",
  publicDir: "./public",
  site: "https://review-mate.com/",
  integrations: [astroImageTools, solidJs(), sitemap(), compress()]
});