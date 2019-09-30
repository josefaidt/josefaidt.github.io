module.exports = {
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `josefaidt.dev`,
        short_name: `josefaidt.dev`,
        start_url: `/`,
        background_color: `#172030`,
        theme_color: `#c6797e`,
        display: `minimal-ui`,
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-netlify`,
  ],
}
