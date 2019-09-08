if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line global-require
  require('dotenv').config()
}

module.exports = {
  siteMetadata: {
    title: `josef.aidt`,
    description: `Welcome to my personal site.`,
    author: `josefaidt`,
    twitter: `josefaidt`,
    url: `https://josefaidt.dev`,
    siteUrl: `https://josefaidt.dev`,
    image: '/_images/logo2.png',
  },
  plugins: [`@josef/gatsby-theme`],
}
