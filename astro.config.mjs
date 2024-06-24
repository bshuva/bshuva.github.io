import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  output: "static",
  integrations: [svelte(), mdx()],
  redirects: {
    "/projects": "/"
  },
  site: 'https://bshuva.net',
})