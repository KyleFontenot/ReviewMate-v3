import { defineConfig } from "astro/config";
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
  integrations: [ solid(), sitemap(), image(), compress()],
});