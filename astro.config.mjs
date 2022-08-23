import { defineConfig } from "astro/config";
import { astroImageTools } from "astro-imagetools";
import solid from "@astrojs/solid-js";
// import compress from 'vite-plugin-compress';
import sitemap from "@astrojs/sitemap";
import image from "@astrojs/image";

import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  root: ".",
  srcDir: "./src",
  outDir: "./dist",
  publicDir: "./public",
  // trailingSlash: "always",
  site: "https://review-mate.com/",
  integrations: [astroImageTools, solid(), sitemap(), image(), compress()],
});