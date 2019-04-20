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
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    // `gatsby-plugin-offline`,
    `gatsby-transformer-json`,
    `gatsby-plugin-playground`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: true,
              noInlineHighlight: false,
            },
          },
        ],
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-mdx`,
      options: {
        extensions: ['.mdx'],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
        // ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `components`,
        path: `${__dirname}/src/components/`,
        // ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog/`,
        // ignore: [`**/\.*`], // ignore files starting with a dot
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
              repositories(orderBy: {field: PUSHED_AT, direction: DESC}, first: 12, ownerAffiliations: OWNER, isFork: false) {
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
