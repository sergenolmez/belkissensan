import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
// (Opsiyonel) Tailwind
// import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://www.ornekdoman.com', // sitemap için şart
  integrations: [
    sitemap(),
    robotsTxt({
      policy: [{ userAgent: '*', allow: '/' }],
      sitemap: 'https://www.ornekdoman.com/sitemap-index.xml',
    }),
    // tailwind(),
  ],
});