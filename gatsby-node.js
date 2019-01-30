/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    resolve(
      graphql(`
        {
          allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000) {
            edges {
              node {
                fields {
                  slug
                }
                frontmatter {
                  title
                }
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          console.log(result.errors)
          return reject(result.errors)
        }
        const posts = result.data.allMarkdownRemark.edges
        const postsPerPage = 6
        const numPages = Math.ceil(posts.length / postsPerPage)
        // Array.from({ length: numPages }).forEach((_, i) => {
        //   createPage({
        //     path: i === 0 ? `/blog` : `/blog/${i + 1}`,
        //     component: path.resolve('./src/pages/blog/.template.js'),
        //     context: {
        //       limit: postsPerPage,
        //       skip: i * postsPerPage
        //     }
        //   })
        // })
        const blogTemplate = path.resolve('./src/pages/blog/.template.js')
        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
          createPage({
            path: node.fields.slug,
            component: blogTemplate,
            context: {
              slug: node.fields.slug
            } // additional data can be passed via context
          })
        })
      })
    )
  })
}
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug
    })
  }
}

exports.onCreateWebpackConfig = ({ stage, getConfig, rules, loaders, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      plugins: [new DirectoryNamedWebpackPlugin()]
    }
  })
}
