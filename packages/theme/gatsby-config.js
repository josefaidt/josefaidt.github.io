const path = require('path')
if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line global-require
  require('dotenv').config()
}

module.exports = options => ({
  siteMetadata: {
    title: `josef.aidt`,
    description: `Welcome to my personal site`,
    author: `josefaidt`,
    twitter: `josefaidt`,
    url: `https://josefaidt.dev`,
    siteUrl: `https://josefaidt.dev`,
  },
  plugins: [
    `gatsby-plugin-playground`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve('./src/templates/page.js'),
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: path.resolve('src/pages'),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: path.resolve('blog'),
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
    `gatsby-plugin-netlify`,
  ],
})
