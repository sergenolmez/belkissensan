import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
// (Opsiyonel) Tailwind
// import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://belkissensan.com.tr', // sitemap için şart
  integrations: [
    sitemap(),
    robotsTxt({
      policy: [{ userAgent: '*', allow: '/' }],
      sitemap: 'https://belkissensan.com.tr/sitemap-index.xml',
    }),
    // tailwind(),
  ],
});