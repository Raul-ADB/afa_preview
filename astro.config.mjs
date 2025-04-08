// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  trailingSlash: 'always',
  base: '',
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'es',
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
    }
  },
});
