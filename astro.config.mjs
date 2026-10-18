import sitemap from '@astrojs/sitemap'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: 'https://itmarck.com',
  integrations: [sitemap()],
  output: 'static',
  vite: {
    // Lightning CSS adds vendor prefixes (e.g. -webkit-backdrop-filter) only for these targets.
    build: { cssTarget: ['chrome111', 'edge111', 'firefox114', 'safari16.4', 'ios16.4'] },
  },
})
