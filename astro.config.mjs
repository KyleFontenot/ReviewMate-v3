// import astroImagePlugin from "astro-imagetools/plugin";
import { astroImageTools } from "astro-imagetools";
import { defineConfig } from "astro/config";

import solid from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  root: ".",
  srcDir: "./src",
  // pages: "./src/pages",
  outDir: "./dist",
  publicDir: "./public",
  site: "https://main--deft-cuchufli-bfd7e3.netlify.app/",
  integrations: [astroImageTools, solid()]
});