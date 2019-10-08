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
    `gatsby-plugin-netlify`,
  ],
}

module.exports = config
