import { defineConfig } from 'astro/config';
import { siteUrl } from './src/data/site.ts';

export default defineConfig({
  site: siteUrl,
  output: 'static',
  trailingSlash: 'always',
});
