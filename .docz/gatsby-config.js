const { mergeWith } = require('lodash/fp')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Use Key Capture',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: ['README.md'],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: false,
        o: false,
        open: false,
        'open-browser': false,
        root: '/Users/pranesh.g/Documents/opensource/use-key-capture-2/.docz',
        base: '/',
        source: './',
        src: './',
        files: '**/*.{md,markdown,mdx}',
        public: './public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Use Key Capture',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: '/Users/pranesh.g/Documents/opensource/use-key-capture-2',
          templates:
            '/Users/pranesh.g/Documents/opensource/use-key-capture-2/node_modules/docz-core/dist/templates',
          docz: '/Users/pranesh.g/Documents/opensource/use-key-capture-2/.docz',
          cache:
            '/Users/pranesh.g/Documents/opensource/use-key-capture-2/.docz/.cache',
          app:
            '/Users/pranesh.g/Documents/opensource/use-key-capture-2/.docz/app',
          appPackageJson:
            '/Users/pranesh.g/Documents/opensource/use-key-capture-2/package.json',
          gatsbyConfig:
            '/Users/pranesh.g/Documents/opensource/use-key-capture-2/gatsby-config.js',
          gatsbyBrowser:
            '/Users/pranesh.g/Documents/opensource/use-key-capture-2/gatsby-browser.js',
          gatsbyNode:
            '/Users/pranesh.g/Documents/opensource/use-key-capture-2/gatsby-node.js',
          gatsbySSR:
            '/Users/pranesh.g/Documents/opensource/use-key-capture-2/gatsby-ssr.js',
          importsJs:
            '/Users/pranesh.g/Documents/opensource/use-key-capture-2/.docz/app/imports.js',
          rootJs:
            '/Users/pranesh.g/Documents/opensource/use-key-capture-2/.docz/app/root.jsx',
          indexJs:
            '/Users/pranesh.g/Documents/opensource/use-key-capture-2/.docz/app/index.jsx',
          indexHtml:
            '/Users/pranesh.g/Documents/opensource/use-key-capture-2/.docz/app/index.html',
          db:
            '/Users/pranesh.g/Documents/opensource/use-key-capture-2/.docz/app/db.json',
        },
        htmlContext: { favicon: '/public/public/images/favicon.png' },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
