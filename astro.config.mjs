import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import compress from 'astro-compress'
import relativeLinks from 'astro-relative-links'

// console.log("astro.config")

// https://astro.build/config

export default defineConfig({
  // https://docs.astro.build/en/reference/configuration-reference/#output
  output: 'static', // default

  // https://docs.astro.build/en/reference/configuration-reference/#outdir
  outDir: './dist', // default

  // https://docs.astro.build/en/reference/configuration-reference/#build-options
  build: {
    assets: '_astro', // default
  },
  // https://docs.astro.build/en/reference/configuration-reference/#compresshtml
  compressHTML: true, // default

  // https://docs.astro.build/en/reference/configuration-reference/#publicdir
  publicDir: './public', // default

  // https://docs.astro.build/en/reference/configuration-reference/#site
  site: 'https://omundy.github.io/camplajolla',

  // https://docs.astro.build/en/reference/configuration-reference/#base
  // base: './', // confusing

  // https://docs.astro.build/en/reference/configuration-reference/#integrations
  integrations: [mdx(), compress(), relativeLinks()],

  // https://docs.astro.build/en/core-concepts/routing/#configured-redirects
  redirects: {
    // just redirects the base route for two subdirectories
    // *only works if hosted in root of domain
    // '/tour': '/collection',
  },
})
