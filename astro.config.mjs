import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import compress from 'astro-compress'
import relativeLinks from 'astro-relative-links'

// https://astro.build/config

export default defineConfig({
  // https://docs.astro.build/en/reference/configuration-reference/#output
  output: 'static',

  // https://docs.astro.build/en/reference/configuration-reference/#outdir
  outDir: './dist',
  compressHTML: true,
  integrations: [mdx(), compress(), relativeLinks()],
  site: 'https://omundy.github.io/camplajolla',
  //   base: './',
  build: {
    assets: '_astro',
  },
})
