// @ts-check
import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  integrations: [vue()],
  site: 'https://raul-adb.github.io/',
  base: 'afa_preview',
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'es',
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
    }
  },
});
