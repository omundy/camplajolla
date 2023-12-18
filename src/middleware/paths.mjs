// MIDDLEWARE > Get path info

import { defineMiddleware } from 'astro/middleware'

const domain = {
  // the path is in a subdirectory so included here
  live: 'https://omundy.github.io/camplajolla',
  local: 'http://localhost:4321',
}
// includes "/tour/" and "/collection/"
const subdirectories = /\/tour\/|\/collection\//g

export const paths = defineMiddleware((context, next) => {
  // console.log('middleware')
  //   console.log('context.url', context.url.href)

  // url
  context.locals.href = context.url.href

  // domain
  if (context.url.origin.includes('github')) {
    context.locals.domain = domain.live
  } else {
    context.locals.domain = domain.local
  }

  // relative path to root of project
  if (subdirectories.test(context.url.pathname)) {
    context.locals.relativeRoot = '../'
  } else {
    context.locals.relativeRoot = './'
  }

  // the redirect method in /tour[...id].astro route covers subpaths
  // but not this subdirectory root
  if (context.url.pathname === '/tour') {
    // console.log('🏀 REDIRECT')
    let url = new URL('/collection', context.locals.domain)
    console.log(url)
    return Response.redirect(url)
  }

  //   console.log('context.locals', context.locals)
  return next()
})
