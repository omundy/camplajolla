
# Camp La Jolla

(cc) 2008-present Owen Mundy




## Dev Notes

- Uses Astro SSG (static site generation)
    - `[...page].astro` and `[post].astro` enable dynamic routes and provide a basic blog (or collection) with breadcrumbs and pagination
- Based on [accessible-astro-starter](https://github.com/markteekman/accessible-astro-starter) theme 
- Uses Bootstrap and replaces all [accessible-astro-components](https://github.com/markteekman/accessible-astro-components) with Bootstrap components like: [breadcrumb](https://getbootstrap.com/docs/5.3/components/breadcrumb/), [buttons](https://getbootstrap.com/docs/5.3/components/buttons/), [card](https://getbootstrap.com/docs/5.3/components/card/)
- Uses [Leaflet.js](https://leafletjs.com/) for the map 
- Relative links are kind of a pain. Manage them manually, or use [astro-relative-links](https://www.npmjs.com/package/astro-relative-links ) 






## Deploying Astro to Github Pages 

[Deploying](https://docs.astro.build/en/guides/deploy/github/) to Github Pages is easy *if* all your resources are online. Otherwise you need to do something different...

- **Local database** - All project data is stored in a local MySQL database, so [none](https://github.com/withastro/github-pages) of the Github Pages [deploy scripts](https://github.com/withastro/action) worked (they couldn't access the data!). ✅ So I had to build locally somehow...
- **Deploying to a subpath** - the repo was not my main URL `omundy.github.io` but a repo `omundy.github.io/camplajolla` which makes the root paths difficult to set up. (✅ see this [postbuild](https://dev.to/jonas_duri/use-astro-with-gitlab-pages-or-github-pages-3eb7) article)
- **Dotfiles** - Github Pages doesn't [automatically publish dotfiles](https://futurewebdesign.au/posts/gh-pages/). So the required `.nojekyll` file wasn't in the root directory of the build. ✅ Adding it manually fixed the issue.
- **Managing builds** - W/o remote deployment I woud have to push build files in the main directory, where the source code lives. ✅ The [gh-pages package](https://www.npmjs.com/package/gh-pages) automatically builds and deploys your site to a `gh-pages` branch. ([other uses](https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f)) so it doesn't pollute the project. You can add the `--dotfiles` flag.


<!--
Previous now unused attempt to build to root dir

```bash
# build, copy whole build to root
"build": "astro build && rm -rf ../dist && mv ./dist ../dist",
# build, copy individual to root
"build": "astro build && cp -R ./dist/{_astro,about,assets,collection,defensonomy,404.html,index.html,manifest_*,robots.txt,site.webmanifest} ../",
```
-->

### How to publish a locally built project to Github Pages

1. Mark output as static in config `output: "static"`
1. Install `npm install gh-pages -D`
1. Add these to your package.json
    1. `npm run dev` - Start dev server `localhost:4321`
    1. `npm run build`  - Build static site to `./dist/` and copies git files
    1. `npm run deploy` - uses gh-pages package to publish to gh-pages branch, includes dotfiles

```json
{
    "scripts": {
        "build": "astro build && cp ./{.gitattributes,.gitignore} ./dist",
        "predeploy": "npm run build",
        "deploy": "gh-pages -d dist --branch gh-pages --dotfiles"
    }
}    
```






## Pagefind notes

- Awesome, dig in the code for implementation and docs https://pagefind.app/docs/
- Copy built files to public for local testing https://chrispennington.blog/blog/pagefind-static-search-for-astro-sites/
- Add URL query params to the box and start search https://kiko.io/post/Pagefind-UI-and-URL-Parameters/

