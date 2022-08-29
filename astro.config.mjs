import { defineConfig } from "astro/config";
import solid from "@astrojs/solid-js";
import sitemap from "@astrojs/sitemap";
// import image from "@astrojs/image";
import compress from "astro-compress";
import { astroImageTools } from "astro-imagetools";

// https://astro.build/config
export default defineConfig({
  root: ".",
  srcDir: "./src",
  outDir: "./dist",
  publicDir: "./public",
  site: "https://review-mate.com/",
  integrations: [astroImageTools, solid(), sitemap(), compress()],
});