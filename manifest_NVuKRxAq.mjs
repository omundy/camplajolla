import"@astrojs/internal-helpers/path";import"cookie";import"kleur/colors";import"string-width";import"./chunks/astro_zRWj_KEs.mjs";import"clsx";import{compile}from"path-to-regexp";if("undefined"!=typeof process){let a=process;"argv"in a&&Array.isArray(a.argv)&&(a.argv.includes("--verbose")||a.argv.includes("--silent"))}function getRouteGenerator(a,e){const t=a.map((a=>"/"+a.map((a=>a.spread?`:${a.content.slice(3)}(.*)?`:a.dynamic?`:${a.content}`:a.content.normalize().replace(/\?/g,"%3F").replace(/#/g,"%23").replace(/%5B/g,"[").replace(/%5D/g,"]").replace(/[.*+?^${}()|[\]\\]/g,"\\$&"))).join(""))).join("");let o="";"always"===e&&a.length&&(o="/");return compile(t+o)}function deserializeRouteData(a){return{route:a.route,type:a.type,pattern:new RegExp(a.pattern),params:a.params,component:a.component,generate:getRouteGenerator(a.segments,a._meta.trailingSlash),pathname:a.pathname||void 0,segments:a.segments,prerender:a.prerender,redirect:a.redirect,redirectRoute:a.redirectRoute?deserializeRouteData(a.redirectRoute):void 0,fallbackRoutes:a.fallbackRoutes.map((a=>deserializeRouteData(a)))}}function deserializeManifest(a){const e=[];for(const t of a.routes){e.push({...t,routeData:deserializeRouteData(t.routeData)});t.routeData=deserializeRouteData(t.routeData)}const t=new Set(a.assets),o=new Map(a.componentMetadata),s=new Map(a.clientDirectives);return{...a,assets:t,componentMetadata:o,clientDirectives:s,routes:e}}const manifest=deserializeManifest({adapterName:"",routes:[{file:"",links:[],scripts:[{type:"inline",value:"\n"}],styles:[{type:"external",src:"/_astro/about._cohhpgT.css"}],routeData:{route:"/",type:"page",pattern:"^\\/$",segments:[],params:[],component:"src/pages/index.astro",pathname:"/",prerender:!1,fallbackRoutes:[],_meta:{trailingSlash:"ignore"}}},{file:"",links:[],scripts:[{type:"external",value:"/_astro/hoisted.OdOYRl64.js"}],styles:[{type:"inline",content:"#cy[data-astro-cid-jjprrnwg]{width:100%;height:600px;display:block}\n"},{type:"external",src:"/_astro/about._cohhpgT.css"}],routeData:{route:"/defensonomy",type:"page",pattern:"^\\/defensonomy\\/?$",segments:[[{content:"defensonomy",dynamic:!1,spread:!1}]],params:[],component:"src/pages/defensonomy.astro",pathname:"/defensonomy",prerender:!1,fallbackRoutes:[],_meta:{trailingSlash:"ignore"}}},{file:"",links:[],scripts:[{type:"inline",value:'let t=document.querySelector("#map").dataset;const a=L.map("map").setView([t.lat,t.lng],13),o="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.{ext}";L.tileLayer(o,{minZoom:0,maxZoom:20,attribution:\'&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors\',ext:"png"}).addTo(a);L.marker([t.lat,t.lng]).addTo(a).bindPopup("<b>Hello world!</b><br />I am a popup.");let p=L.popup();function n(e){p.setLatLng(e.latlng).setContent(`You clicked the map at ${e.latlng.toString()}`).openOn(a)}a.on("click",n);\n'}],styles:[{type:"external",src:"/_astro/about._cohhpgT.css"},{type:"inline",content:"img[data-astro-cid-6kov3kig]{width:100%;height:auto}img[data-astro-cid-6kov3kig] a[data-astro-cid-6kov3kig]{text-decoration:none}#map[data-astro-cid-kbkfje74]{width:100%;height:600px}span[data-astro-cid-zb6l73xs].taxonomy,span[data-astro-cid-epjbycyz].taxonomy{display:inline-block}table[data-astro-cid-yhwhmvo5].post-table [data-astro-cid-yhwhmvo5]{border-color:#ccc;background-color:transparent!important}.title[data-astro-cid-yhwhmvo5]{width:25%}\n"}],routeData:{route:"/collection/[post]",type:"page",pattern:"^\\/collection\\/([^/]+?)\\/?$",segments:[[{content:"collection",dynamic:!1,spread:!1}],[{content:"post",dynamic:!0,spread:!1}]],params:["post"],component:"src/pages/collection/[post].astro",prerender:!1,fallbackRoutes:[],_meta:{trailingSlash:"ignore"}}},{file:"",links:[],scripts:[{type:"inline",value:"\n"}],styles:[{type:"inline",content:".card[data-astro-cid-dohjnao5]{--bs-card-border-width: 0 !important;border-left:.4rem solid var(--background);overflow:hidden;background-color:var(--background-50);height:90px;transition-property:transform;transition-duration:.2s;filter:grayscale(1)}.card[data-astro-cid-dohjnao5] a[data-astro-cid-dohjnao5]{color:var(--text-color);text-decoration:none}.card[data-astro-cid-dohjnao5]:hover,.card[data-astro-cid-dohjnao5]:focus,.card[data-astro-cid-dohjnao5]:focus-within,.card[data-astro-cid-dohjnao5]:focus-within a[data-astro-cid-dohjnao5]:focus{box-shadow:none!important;background-color:var(--background-50)}.card[data-astro-cid-dohjnao5]:hover,.card[data-astro-cid-dohjnao5]:focus,.card[data-astro-cid-dohjnao5]:focus-within{border-left:.43rem solid var(--orange);filter:saturate(1.1)}.card[data-astro-cid-dohjnao5] .card-img[data-astro-cid-dohjnao5]{width:100%;height:160px;background-repeat:none;background-size:cover;background-position:center center}.card[data-astro-cid-dohjnao5] .card-img[data-astro-cid-dohjnao5]{width:100%;height:100px}.card[data-astro-cid-dohjnao5] .card-title[data-astro-cid-dohjnao5]{box-sizing:border-box;font-size:.9rem;padding:.5rem}.pagination[data-astro-cid-d776pwuy]{--bs-pagination-color: var(--bs-link-color);--bs-pagination-hover-color: var(--bs-link-hover-color);--bs-pagination-focus-color: var(--bs-link-hover-color);--bs-pagination-active-bg: #0d6efd}.items[data-astro-cid-uzmmrzwh]{display:grid;grid-template-columns:repeat(1,1fr);grid-gap:1rem}@media (min-width: 576px){.items[data-astro-cid-uzmmrzwh]{grid-template-columns:repeat(2,1fr);grid-gap:1rem}}@media (min-width: 768px){.items[data-astro-cid-uzmmrzwh]{grid-template-columns:repeat(3,1fr);grid-gap:1rem}}@media (min-width: 992px){.items[data-astro-cid-uzmmrzwh]{grid-template-columns:repeat(4,1fr)}}@media (min-width: 1200px){.items[data-astro-cid-uzmmrzwh]{grid-template-columns:repeat(5,1fr)}}@media (min-width: 1400px){.items[data-astro-cid-uzmmrzwh]{grid-template-columns:repeat(6,1fr)}}\n"},{type:"external",src:"/_astro/about._cohhpgT.css"}],routeData:{route:"/collection/[...page]",type:"page",pattern:"^\\/collection(?:\\/(.*?))?\\/?$",segments:[[{content:"collection",dynamic:!1,spread:!1}],[{content:"...page",dynamic:!0,spread:!0}]],params:["...page"],component:"src/pages/collection/[...page].astro",prerender:!1,fallbackRoutes:[],_meta:{trailingSlash:"ignore"}}},{file:"",links:[],scripts:[{type:"inline",value:"\n"}],styles:[{type:"external",src:"/_astro/about._cohhpgT.css"}],routeData:{route:"/mdx-page",type:"page",pattern:"^\\/mdx-page\\/?$",segments:[[{content:"mdx-page",dynamic:!1,spread:!1}]],params:[],component:"src/pages/mdx-page.mdx",pathname:"/mdx-page",prerender:!1,fallbackRoutes:[],_meta:{trailingSlash:"ignore"}}},{file:"",links:[],scripts:[{type:"inline",value:"\n"}],styles:[{type:"external",src:"/_astro/about._cohhpgT.css"}],routeData:{route:"/about",type:"page",pattern:"^\\/about\\/?$",segments:[[{content:"about",dynamic:!1,spread:!1}]],params:[],component:"src/pages/about.md",pathname:"/about",prerender:!1,fallbackRoutes:[],_meta:{trailingSlash:"ignore"}}},{file:"",links:[],scripts:[{type:"inline",value:"\n"}],styles:[{type:"external",src:"/_astro/about._cohhpgT.css"}],routeData:{route:"/404",type:"page",pattern:"^\\/404\\/?$",segments:[[{content:"404",dynamic:!1,spread:!1}]],params:[],component:"src/pages/404.astro",pathname:"/404",prerender:!1,fallbackRoutes:[],_meta:{trailingSlash:"ignore"}}}],site:"https://omundy.github.io/camplajolla",base:"/",trailingSlash:"ignore",compressHTML:!0,componentMetadata:[["/Users/owenmundy/Sites/camplajolla.org/www/camplajolla/src/pages/about.md",{propagation:"none",containsHead:!0}],["/Users/owenmundy/Sites/camplajolla.org/www/camplajolla/src/pages/mdx-page.mdx",{propagation:"none",containsHead:!0}],["/Users/owenmundy/Sites/camplajolla.org/www/camplajolla/src/pages/404.astro",{propagation:"none",containsHead:!0}],["/Users/owenmundy/Sites/camplajolla.org/www/camplajolla/src/pages/collection/[...page].astro",{propagation:"none",containsHead:!0}],["/Users/owenmundy/Sites/camplajolla.org/www/camplajolla/src/pages/collection/[post].astro",{propagation:"none",containsHead:!0}],["/Users/owenmundy/Sites/camplajolla.org/www/camplajolla/src/pages/defensonomy.astro",{propagation:"none",containsHead:!0}],["/Users/owenmundy/Sites/camplajolla.org/www/camplajolla/src/pages/index.astro",{propagation:"none",containsHead:!0}]],renderers:[],clientDirectives:[["idle",'(()=>{var i=t=>{let e=async()=>{await(await t())()};"requestIdleCallback"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event("astro:idle"));})();'],["load",'(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event("astro:load"));})();'],["media",'(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener("change",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event("astro:media"));})();'],["only",'(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event("astro:only"));})();'],["visible",'(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event("astro:visible"));})();']],entryModules:{"\0@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\0@astro-page:src/pages/defensonomy@_@astro":"pages/defensonomy.astro.mjs","\0@astro-page:src/pages/collection/[post]@_@astro":"pages/collection/_post_.astro.mjs","\0@astro-page:src/pages/collection/[...page]@_@astro":"pages/collection/_---page_.astro.mjs","\0@astro-page:src/pages/mdx-page@_@mdx":"pages/mdx-page.astro.mjs","\0@astro-page:src/pages/about@_@md":"pages/about.astro.mjs","\0@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\0@astro-renderers":"renderers.mjs","\0empty-middleware":"_empty-middleware.mjs","/src/pages/collection/[post].astro":"chunks/pages/_post__WSSr2rnh.mjs","/src/pages/defensonomy.astro":"chunks/pages/defensonomy_kXkeSgCt.mjs","/src/pages/index.astro":"chunks/pages/index_rcPleVgK.mjs","/src/pages/mdx-page.mdx":"chunks/pages/mdx-page_-eXrD4ZX.mjs","\0@astrojs-manifest":"manifest_NVuKRxAq.mjs","/astro/hoisted.js?q=2":"_astro/hoisted.w40geAFS.js","/astro/hoisted.js?q=1":"_astro/hoisted.mF4flkkM.js","/astro/hoisted.js?q=0":"_astro/hoisted.OdOYRl64.js","astro:scripts/before-hydration.js":""},assets:[]});export{manifest};