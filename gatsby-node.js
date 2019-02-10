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
          allMdx {
            edges {
              node {
                id
                fields {
                  slug
                }
              }
            }
          }
        }
      `).then(result => {
        // reject errors
        if (result.errors) {
          console.log(result.errors)
          return reject(result.errors)
        }

        const posts = result.data.allMarkdownRemark.edges
        const postsPerPage = 6
        const numPages = Math.ceil(posts.length / postsPerPage)
        const blogTemplate = path.resolve('./src/pages/blog/.template.js')
        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
          createPage({
            path: node.fields.slug,
            component: blogTemplate,
            context: {
              slug: node.fields.slug,
            }, // additional data can be passed via context
          })
        })
        const mdxPageTemplate = path.resolve(`./src/components/Skeleton.mdx.js`)
        result.data.allMdx.edges.forEach(({ node }) => {
          createPage({
            path: node.fields.slug,
            component: mdxPageTemplate,
            context: { id: node.id },
          })
        })
      })
    )
  })
}
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  // markdown files
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
  // mdx
  if (node.internal.type === 'Mdx') {
    const value = createFilePath({ node, getNode })
    createNodeField({
      // Name of the field you are adding
      name: 'slug',
      // Individual MDX node
      node,
      // Generated value based on filepath with "blog" prefix
      value: value,
    })
  }
}

exports.onCreateWebpackConfig = ({ stage, getConfig, rules, loaders, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      plugins: [new DirectoryNamedWebpackPlugin()],
    },
  })
}
