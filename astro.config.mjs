import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.올바른.kr',
  integrations: [sitemap({
    filter: (page) => !['/admin', '/inquiry/view', '/inquiry/write'].some((path) => new URL(page).pathname.startsWith(path))
  })]
});
