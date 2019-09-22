module.exports = {
  siteMetadata: {
    title: `josef.aidt`,
    author: `Josef Aidt`,
    description: `Welcome to my personal site`,
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
    '@josef/theme',
    {
      resolve: `gatsby-theme-blog-core`,
      options: {
        basePath: `/blog`,
        mdx: false,
      },
    },
  ],
}
