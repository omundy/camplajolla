
# README


## TODO

- Launch Notes
    - Edit all records
    - Regenerate all slugs


<!-- ## Dev Notes

Built on top of this theme 
- https://github.com/markteekman/accessible-astro-starter
- https://accessible-astro.netlify.app/
- https://accessible-astro.dev/accessible-components
- Components
    - `SiteMeta.astro` SEO component for setting custom meta data on different pages
    - `[...page].astro` and `[post].astro` demonstrate the use of dynamic routes and provide a basic blog (or collection) with breadcrumbs and pagination
    - Replaces all [accessible-astro-components](https://github.com/markteekman/accessible-astro-components) with Bootstrap components 
        - https://getbootstrap.com/docs/5.3/components/breadcrumb/
        - https://getbootstrap.com/docs/5.3/components/buttons/
        - https://getbootstrap.com/docs/5.3/components/card/
        - Also https://leafletjs.com/
- Relative links are kind of a pain
    - Manage them manually, or use...
    - https://www.npmjs.com/package/astro-relative-links -->





## Deploy Astro to Github Pages

[Deploying](https://docs.astro.build/en/guides/deploy/github/) to Github Pages is easy *if* all your resources are online. This was not my case.

### Gotchas

1. **Local data** - All my data came from a local MySQL database, so [none](https://github.com/withastro/github-pages) of the Github Pages [deploy scripts](https://github.com/withastro/action) worked (they couldn't get the data!)
1. **Deploying to a subpath** - the repo was not my main `omundy.github.io` but `omundy.github.io/camplajolla` which makes the root paths difficult to set up. (see this [postbuild](https://dev.to/jonas_duri/use-astro-with-gitlab-pages-or-github-pages-3eb7) article)
1. **Dotfiles** - Github Pages doesn't [automatically publish dotfiles](https://futurewebdesign.au/posts/gh-pages/). So the required `.nojekyll` file wasn't in the root directory of the build
1. **Managing builds** - W/o remote deployment I woud have build files in the main directory. The [gh-pages package](https://www.npmjs.com/package/gh-pages) automatically builds and deploys your site to a `gh-pages` branch. ([other uses](https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f)) so it doesn't pollute the project. You can add the `--dotfiles` flag.



```bash
  # build, copy whole build to root
  "build": "astro build && rm -rf ../dist && mv ./dist ../dist",
  # build, copy individual to root
  "build": "astro build && cp -R ./dist/{_astro,about,assets,collection,defensonomy,404.html,index.html,manifest_*,robots.txt,site.webmanifest} ../",
  ```

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




## Astro Resources

- Astro documentation https://docs.astro.build/
- Astro themes https://astro.new/
- [Discord](https://discord.com/channels/830184174198718474/)








<!-- 
## ♿ (Accessibility) Features


- Prettier integration with `prettier-plugin-astro`
- ESLint integration with strict accessibility settings for `eslint-plugin-jsx-a11y`
- Markdown and MDX support with examples included in the theme
- Uses the awesome `astro-icon` package for the icons
- Excellent Lighthouse/PageSpeed scores
- Accessible landmarks such as `header`, `main`, `footer`, `section` and `nav`
- `404.astro` provides a custom 404 error page which you can adjust to your needs
- `Header.astro` component included in the `DefaultLayout.astro` layout
- `Footer.astro` component included in the `DefaultLayout.astro` layout
- `SkipLinks.astro` component to skip to either the main menu or the main content
- `Navigation.astro` component with keyboard accessible (dropdown) navigation (arrow keys, escape key)

- `.sr-only` utility class for screen reader only text content (hides text visually)
- `prefers-reduced-motion` disables animations for users that have this preference turned on

 -->
