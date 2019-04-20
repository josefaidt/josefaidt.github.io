if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line global-require
  require('dotenv').config()
}

module.exports = {
  siteMetadata: {
    title: `josef.aidt`,
    description: `Welcome to my personal site.`,
    author: `josefaidt`,
    twitter: `garlicbred`,
    url: `https://josefaidt.me`,
    siteUrl: `https://josefaidt.me`,
    image: '/_images/logo2.png',
    social: {
      twitter: `gatsbyjs`,
      fbAppId: `966242223397117`,
    },
  },
  plugins: [
    `gatsby-plugin-playground`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-eslint`,
    {
      resolve: `gatsby-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js'),
        },
        globalScope: `
          import Header from '${__dirname}/src/components/Header.js'
          import { Paragraph } from '@josef/components'

          export default { Header, Paragraph }
        `,
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: 'pages',
      },
    },
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
              repositories(orderBy: {field: PUSHED_AT, direction: DESC}, first: 5, ownerAffiliations: OWNER, isFork: false) {
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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-134211753-1',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `josefaidt.me`,
        short_name: `josefaidt.me`,
        start_url: `/`,
        background_color: `#172030`,
        theme_color: `#c6797e`,
        display: `minimal-ui`,
        icon: `src/images/logo2.png`, // This path is relative to the root of the site.
        icons: [
          {
            src: `/_images/logo2.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
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
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: ['Josefin Sans', 'Open Sans'],
        },
      },
    },
    `gatsby-plugin-netlify`,
  ],
}
