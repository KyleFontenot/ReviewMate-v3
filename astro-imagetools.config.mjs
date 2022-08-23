import { defineConfig } from "astro-imagetools/config";

export default defineConfig({
	format: "webp",
	breakpoints: [320, 640, 1020, 1580, 2070],
});
