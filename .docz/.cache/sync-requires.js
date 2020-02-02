const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---docs-index-mdx": hot(preferDefault(require("/Users/pranesh.g/Documents/opensource/use-key-capture-2/docs/index.mdx"))),
  "component---docs-pages-demo-mdx": hot(preferDefault(require("/Users/pranesh.g/Documents/opensource/use-key-capture-2/docs/pages/demo.mdx"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/pranesh.g/Documents/opensource/use-key-capture-2/.docz/src/pages/404.js")))
}

