module.exports = {
  siteMetadata: {
    title: `josef.aidt`,
    description: `Welcome to my personal site.`,
    author: `josefaidt`,
    twitter: `josefaidt`,
    url: `https://josefaidt.dev`,
    siteUrl: `https://josefaidt.dev`,
    // image: '/_images/logo2.png',
    social: {
      twitter: `josefaidt`,
    },
  },
  plugins: ['@josef/theme'],
  // plugins: [
  //   {
  //     resolve: '@dschau/gatsby-source-github',
  //     options: {
  //       headers: {
  //         Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
  //       },
  //       queries: [
  //         `{
  //           user(login: "josefaidt") {
  //             id
  //             url
  //             avatarUrl,
  //             name
  //             repositories(orderBy: {field: PUSHED_AT, direction: DESC}, first: 5, ownerAffiliations: OWNER, isFork: false) {
  //               totalCount
  //               edges {
  //                 node {
  //                   id
  //                   name
  //                   description
  //                   url
  //                   homepageUrl

  //                   stargazers {
  //                     totalCount
  //                   }
  //                   watchers {
  //                     totalCount
  //                   }
  //                   forks {
  //                     totalCount
  //                   }
  //                 }
  //               }
  //             }
  //           }
  //         }`,
  //       ],
  //     },
  //   },
  // ],
}
