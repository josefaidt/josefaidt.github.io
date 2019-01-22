/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')
const { createFilePath, createFileNode } = require(`gatsby-source-filesystem`)
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/pages/blog/.template.js`)
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
