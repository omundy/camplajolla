import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import compress from 'astro-compress'
import relativeLinks from 'astro-relative-links'

// https://astro.build/config
// https://docs.astro.build/en/guides/deploy/github/
export default defineConfig({
  // https://docs.astro.build/en/reference/configuration-reference/#output
  output: 'static',

  // build, copy whole build to root
  // "build": "astro build && rm -rf ../dist && mv ./dist ../dist",
  // build, copy individual to root
  // "build": "astro build && cp -R ./dist/{_astro,about,assets,collection,defensonomy,404.html,index.html,manifest_*,robots.txt,site.webmanifest} ../",
  // https://docs.astro.build/en/reference/configuration-reference/#outdir
  outDir: './dist',
  compressHTML: true,
  integrations: [mdx(), compress(), relativeLinks()],
    site: 'https://omundy.github.io/camplajolla',
    base: "./",
})
