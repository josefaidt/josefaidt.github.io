module.exports = ({ offline = false, blogPath = '/blog', themeColor = '#c6797e' }) => {
  const config = {
    siteMetadata: {
      title: 'gatsby-theme',
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
          url: `https://github.com/josefaidt/josefaidt.github.io/tree/master/src/theme`,
        },
      ],
    },
    plugins: [
      `gatsby-transformer-json`,
      `gatsby-plugin-styled-components`,
      `gatsby-plugin-react-helmet`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `content/assets`,
          path: `content/assets`,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `content/pages`,
          path: `content/pages`,
        },
      },
      {
        resolve: `gatsby-plugin-page-creator`,
        options: {
          path: `content/pages`,
        },
      },
      'gatsby-plugin-sharp',
      {
        resolve: 'gatsby-plugin-mdx',
        options: {
          defaultLayouts: {
            default: require.resolve('./src/layouts/page.js'),
          },
          gatsbyRemarkPlugins: [
            {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 1300,
                linkImagesToOriginal: false,
                withWebp: true,
                showCaptions: false,
                backgroundColor: 'transparent',
                wrapperStyle: `
                  border-radius: 1rem;
                  overflow: hidden;
                `,
                tracedSVG: {
                  color: themeColor ? `${themeColor}cc` : '#c6797ecc',
                  borderRadius: '1rem',
                  turnPolicy: 'TURNPOLICY_MAJORITY',
                },
              },
            },
            `gatsby-remark-smartypants`,
            `gatsby-remark-copy-linked-files`,
          ],
          plugins: [`gatsby-remark-images`],
          // eslint-disable-next-line global-require
          remarkPlugins: [require(`remark-slug`)],
        },
      },
      {
        resolve: `gatsby-theme-blog-core`,
        options: {
          basePath: blogPath || `/blog`,
          mdx: false,
        },
      },
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: `josefaidt.dev`,
          icon: 'content/assets/images/favicon.png',
          short_name: `josefaidt.dev`,
          start_url: `/`,
          background_color: 'white',
          theme_color: themeColor || '#c6797e',
          display: `minimal-ui`,
        },
      },
      offline && {
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
    ].filter(Boolean),
  }

  return config
}
