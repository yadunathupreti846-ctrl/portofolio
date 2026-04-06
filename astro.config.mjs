import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://your-portfolio.netlify.app',
  integrations: [tailwind(), sitemap()],
  output: 'static',
  image: {
    domains: [],
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  }
});