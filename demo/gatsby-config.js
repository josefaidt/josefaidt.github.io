module.exports = {
  siteMetadata: {
    title: 'gatsby-theme',
    author: '@josefaidt',
    siteUrl: 'https://gatsby-theme.josefaidt.dev',
    keywords: ['josef', 'aidt', 'gatsby', 'theme'],
    description: 'Welcome to @josefaidt/gatsby-theme',
    social: [
      {
        name: `Twitter`,
        url: `https://twitter.com/josefaidt`,
      },
      {
        name: `GitHub`,
        url: `https://github.com/josefaidt/josefaidt.github.io/tree/master/theme`,
      },
    ],
  },
  plugins: ['@josefaidt/gatsby-theme', 'gatsby-plugin-sitemap', 'gatsby-plugin-netlify'],
}
