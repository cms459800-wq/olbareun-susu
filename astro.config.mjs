import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Keep internal admin and private inquiry routes out of the public sitemap.
const privateRoutes = ['/admin', '/inquiry/view', '/inquiry/write'];
const isPrivateRoute = (pathname) => privateRoutes.some(
  (route) => pathname === route || pathname.startsWith(route + '/')
);

export default defineConfig({
  site: 'https://www.올바른.kr',
  integrations: [sitemap({
    filter: (page) => !isPrivateRoute(new URL(page).pathname.replace(/\/+$/, '') || '/')
  })]
});
