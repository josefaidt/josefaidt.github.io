module.exports = options => ({
  siteMetadata: {
    title: '',
    author: '',
    description: '',
  },
  plugins: [
    `gatsby-transformer-json`,
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
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/templates/page.js'),
        },
        gatsbyRemarkPlugins: [
          `gatsby-remark-smartypants`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1300,
            },
          },
        ],
        plugins: [`gatsby-remark-images`],
      },
    },
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: ['Josefin Sans', 'Open Sans'],
        },
      },
    },
  ],
})
