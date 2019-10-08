if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line global-require
  require('dotenv').config()
}

const config = {
  siteMetadata: {
    title: 'josef.aidt',
    author: '@josefaidt',
    siteUrl: 'https://josefaidt.dev',
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
  plugins: [
    '@josefaidt/gatsby-theme',
    {
      resolve: '@dschau/gatsby-source-github',
      options: {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        },
        queries: [
          `{
        user(login: "josefaidt") {
          id
          url
          avatarUrl,
          name
          repositories(orderBy: {field: PUSHED_AT, direction: DESC}, first: 8, ownerAffiliations: OWNER, isFork: false, privacy: PUBLIC) {
            totalCount
            edges {
              node {
                id
                name
                description
                url
                homepageUrl
                
                stargazers {
                  totalCount
                }
                watchers {
                  totalCount
                }
                forks {
                  totalCount
                }
              }
            }
          }
        }
      }`,
        ],
      },
    },
  ],
}

const prodPlugins = [
  `gatsby-plugin-sitemap`,
  `gatsby-plugin-netlify`,
  {
    resolve: `gatsby-plugin-offline`,
    options: {
      cacheId: `gatsby-plugin-offline`,
      // Don't cache-bust JS or CSS files, and anything in the static directory,
      // since these files have unique URLs and their contents will never change
      dontCacheBustUrlsMatching: /(\.css.js$|static\/)/,
      runtimeCaching: [
        {
          // Use cacheFirst since these don't need to be revalidated (same RegExp
          // and same reason as above)
          urlPattern: /(\.css.js$|static\/)/,
          handler: `cacheFirst`,
        },
        {
          urlPattern: /(\.js$)/,
          handler: `staleWhileRevalidate`,
        },
        {
          // Add runtime caching of various other page resources
          urlPattern: /^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/,
          handler: `staleWhileRevalidate`,
        },
        {
          // Google Fonts CSS (doesn't end in .css so we need to specify it)
          urlPattern: /^https?:\/\/fonts\.googleapis\.com\/css/,
          handler: `staleWhileRevalidate`,
        },
      ],
      skipWaiting: true,
      clientsClaim: true,
    },
  },
]

if (process.env.NODE_ENV.toLowerCase() === 'production') {
  config.plugins.push(...prodPlugins)
}

module.exports = config
