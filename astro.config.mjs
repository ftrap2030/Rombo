// @ts-check
import { defineConfig } from 'astro/config';

// Update `site` to the final public URL before deploying — it is used to build
// absolute URLs for the sitemap, canonical link and social share tags.
export default defineConfig({
  site: 'https://example.com',
  build: {
    inlineStylesheets: 'auto',
  },
});
