module.exports = options => ({
  siteMetadata: {
    title: 'josef.aidt',
    author: '@josefaidt',
    siteUrl: 'https://josefaidt.dev',
    keywords: ['josef', 'aidt', 'personal', 'portfolio'],
    description: 'Welcome to my personal site',
  },
  plugins: [
    `gatsby-transformer-json`,
    `gatsby-plugin-styled-components`,
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
          default: require.resolve('./src/templates/page.js'),
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
                color: '#c6797ecc',
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
        basePath: `/blog`,
        mdx: false,
      },
    },
  ],
})
