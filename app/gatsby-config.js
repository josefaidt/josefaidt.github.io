const config = {
  siteMetadata: {
    title: 'josef.aidt',
    author: '@josefaidt',
    url: 'https://josefaidt.dev',
    keywords: ['josef', 'aidt', 'personal', 'portfolio'],
    description: 'Welcome to my personal site',
    social: [
      {
        name: `Twitter`,
        url: `https://twitter.com/josefaidt`,
      },
      {
        name: `GitHub`,
        url: `https://github.com/josefaidt`,
      },
    ],
  },
  plugins: ['@josef/gatsby-theme'],
}

const prodPlugins = [
  `gatsby-plugin-sitemap`,
  `gatsby-plugin-netlify`,
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `josefaidt.dev`,
      short_name: `josefaidt.dev`,
      start_url: `/`,
      background_color: `#172030`,
      theme_color: `#c6797e`,
      display: `minimal-ui`,
      // icon: `src/images/logo2.png`, // This path is relative to the root of the site.
      // icons: [
      //   {
      //     src: `/_images/logo2.png`,
      //     sizes: `512x512`,
      //     type: `image/png`,
      //   },
      // ],
    },
  },
  // {
  //   resolve: `gatsby-plugin-offline`,
  //   options: {
  //     cacheId: `gatsby-plugin-offline`,
  //     // Don't cache-bust JS or CSS files, and anything in the static directory,
  //     // since these files have unique URLs and their contents will never change
  //     dontCacheBustUrlsMatching: /(\.css.js$|static\/)/,
  //     runtimeCaching: [
  //       {
  //         // Use cacheFirst since these don't need to be revalidated (same RegExp
  //         // and same reason as above)
  //         urlPattern: /(\.css.js$|static\/)/,
  //         handler: `cacheFirst`,
  //       },
  //       {
  //         urlPattern: /(\.js$)/,
  //         handler: `staleWhileRevalidate`,
  //       },
  //       {
  //         // Add runtime caching of various other page resources
  //         urlPattern: /^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/,
  //         handler: `staleWhileRevalidate`,
  //       },
  //       {
  //         // Google Fonts CSS (doesn't end in .css so we need to specify it)
  //         urlPattern: /^https?:\/\/fonts\.googleapis\.com\/css/,
  //         handler: `staleWhileRevalidate`,
  //       },
  //     ],
  //     skipWaiting: true,
  //     clientsClaim: true,
  //   },
  // },
]

if (process.env.NODE_ENV.toLowerCase() === 'production') {
  config.plugins.push(prodPlugins)
}

module.exports = config
