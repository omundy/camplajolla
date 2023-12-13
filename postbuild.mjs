// https://futurewebdesign.au/posts/gh-pages/
// import ghpages from 'gh-pages'
/**
 * Given the following directory structure:
 *
 *   dist/
 *     index.html
 *     js/
 *       site.js
 *
 * The usage below will create a `gh-pages` branch that looks like this:
 *
 *   index.html
 *   js/
 *     site.js
 *
 */

// ghpages.publish(
//   'dist',
//   { dotfiles: true, nojekyll: true, message: 'Auto-generated commit' },
//   {
//     /* callback */
//   }
// )

// POSTBUILD - FIXES IN PROGRESS BUT I FOUND ANOTHER FIX
// - fixes URLs paths in files
// - Add to package like:
//  "post": "node ./postbuild.mjs -path https://omundy.example.io/camplajolla/",
// - Source: https://dev.to/jonas_duri/use-astro-with-gitlab-pages-or-github-pages-3eb7
import fs from 'fs'
import path from 'path'
import astroConfig from './astro.config.mjs'

const PUBLIC_DIR = astroConfig.outDir || 'dist'
const argvs = process.argv.slice(2)
let info = {
  total: {
    count: 0,
    changed: 0,
  },
  html: {
    count: 0,
    changed: 0,
  },
  css: {
    count: 0,
    changed: 0,
  },
  js: {
    count: 0,
    changed: 0,
  },
  mjs: {
    count: 0,
    changed: 0,
  },
  json: {
    count: 0,
    changed: 0,
  },
}

async function main() {
  if ((argvs[0] === '--p' || argvs[0] === '-path') && argvs[1]) {
    let files = []
    const extensions = ['.html', '.css', '.js', '.mjs', '.json']
    const PRODUCTION_URL = argvs[1]

    const replaceUrlsInFiles = function (dirPath, arrayOfFiles) {
      files = fs.readdirSync(dirPath)

      files.forEach(function (file) {
        info.total.count++
        const current = fs.statSync(dirPath + '/' + file)

        if (current.isDirectory()) {
          replaceUrlsInFiles(dirPath + '/' + file, arrayOfFiles)
        } else {
          const filePath = path.join(path.dirname(import.meta.url.replace(/file\:/, '')), dirPath, '/', file)
          let ext = path.extname(filePath)

          if (extensions.includes(ext)) {
            ext = ext.replace('.', '')
            // console.log(ext, filePath)
            try {
              if (ext) info[ext].count++
            } catch (err) {
              console.error(err)
            }
            let content = fs.readFileSync(filePath)
            console.log(filePath)
            // console.log(String(content))

            // LAST ISSUE - NONE OF THESE WORK!!!!?

            // search for "." as first char
            content = String(content).match(/src=["'][.]{0,1}\//g)
            if (content) {
              info[ext].changed++
            }
            content = String(content).match(/href=["'][.]{0,1}\//g)
            if (content) {
              info[ext].changed++
            }
            content = String(content).match(/url=["'][.]{0,1}\//g)
            if (content) {
              info[ext].changed++
            }

            // search for "/" as first char
            content = String(content).match(/(?:href|src|url)=["']?[.\/]{0,1}\//g)
            if (content) {
              info[ext].changed++
            }

            content = String(content).match(/http/g)
            if (content) {
              console.log(content)
              info[ext].changed++
            }

            content = String(content).match(/href=["']?[\/]{0,1}\//g)
            if (content) {
              info[ext].changed++
            }
            content = String(content).match(/url=["'][/]{0,1}\//g)
            if (content) {
              info[ext].changed++
            }

            //     //   content = String(content).replace(/src="\//g, `src="${PRODUCTION_URL}`)
            //     //   content = String(content).replace(/href="\//g, `href="${PRODUCTION_URL}`)
            //     //   content = String(content).replace(/url\("\//g, `url("${PRODUCTION_URL}`)
            //     //   content = String(content).replace(/src='\//g, `src='${PRODUCTION_URL}`)
            //     //   content = String(content).replace(/href='\//g, `href='${PRODUCTION_URL}`)
            //     //   content = String(content).replace(/url\('\//g, `url('${PRODUCTION_URL}`)
            // content = String(content).replace(/src=["'][.]{0,1}\//g, `src="${PRODUCTION_URL}`)
            // content = String(content).replace(/href=["'][.]{0,1}\//g, `href="${PRODUCTION_URL}`)
            // content = String(content).replace(/url\(["'][.]{0,1}\//g, `url("${PRODUCTION_URL}`)
            // fs.writeFileSync(filePath, content)
          }
        }
      })
    }

    if (PRODUCTION_URL) {
      replaceUrlsInFiles(PUBLIC_DIR, files)
    } else {
      console.log('skip postbuild')
      process.exit(0)
    }
  } else {
    console.error('please provide a path argument "-path", "--p"')
    process.exit(1)
  }
}
;(async function () {
  await main()
  setTimeout(function () {
    console.log('\n\n', 111, info)
  }, 1000)
})()
