// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---docs-index-mdx": () => import("./../../docs/index.mdx" /* webpackChunkName: "component---docs-index-mdx" */),
  "component---docs-pages-props-mdx": () => import("./../../docs/pages/props.mdx" /* webpackChunkName: "component---docs-pages-props-mdx" */),
  "component---docs-pages-demo-mdx": () => import("./../../docs/pages/demo.mdx" /* webpackChunkName: "component---docs-pages-demo-mdx" */),
  "component---src-pages-404-js": () => import("./../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */)
}

