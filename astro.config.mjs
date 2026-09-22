// @ts-check

import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  site: 'https://wearefeed.netlify.app',
  integrations: [sitemap()],

  vite: {
      build: {
          // Lightning CSS folds `animation-timeline` into the `animation`
          // shorthand, which browsers reject — that silently breaks the
          // hero's scroll-driven morph. esbuild leaves the longhand alone.
          cssMinify: 'esbuild',
      },
	},

  fonts: [
      {
          // Self-hosted, served from our own origin — never fetched from a CDN
          // at runtime. One neo-grotesk family covers both type roles;
          // --font-display aliases this variable in global.css.
          provider: fontProviders.local(),
          name: 'Inter',
          cssVariable: '--font-body',
          fallbacks: ['system-ui', 'sans-serif'],
          options: {
              variants: [
                  {
                      // Single variable file covers every weight we use (400–800).
                      src: ['./src/assets/fonts/inter-latin.woff2'],
                      weight: '100 900',
                      style: 'normal',
                      display: 'swap',
                  },
              ],
          },
      },
	],

  adapter: netlify(),
});