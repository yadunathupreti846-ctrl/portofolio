import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Use environment variable, fallback to a placeholder for local dev
  site: process.env.SITE_URL || 'http://localhost:4321',
  integrations: [tailwind(), sitemap()],
  output: 'static',
  image: {
    domains: [],
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  }
});
