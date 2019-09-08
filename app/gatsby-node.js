/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)

// exports.createPages = ({ actions, graphql }) => {
//   const { createPage } = actions
//   return new Promise((resolve, reject) => {
//     resolve(
//       graphql(`
//         {
//           allMdx {
//             edges {
//               node {
//                 id
//                 fields {
//                   slug
//                 }
//               }
//             }
//           }
//         }
//       `).then(result => {
//         // reject errors
//         if (result.errors) {
//           console.log(result.errors)
//           return reject(result.errors)
//         }
//         // const blogTemplate = path.resolve('./src/pages/blog/.template.js')
//         const mdxPageTemplate = path.resolve(`./src/components/Skeleton.mdx.js`)
//         result.data.allMdx.edges.forEach(({ node }) => {
//           createPage({
//             path: node.fields.slug,
//             component: mdxPageTemplate,
//             context: { id: node.id, slug: node.fields.slug },
//           })
//         })
//       })
//     )
//   })
// }
// exports.onCreateNode = ({ node, getNode, actions }) => {
//   const { createNodeField } = actions
//   const value = createFilePath({ node, getNode })
//   createNodeField({
//     // Name of the field you are adding
//     name: 'slug',
//     // Individual MDX node
//     node,
//     // Generated value based on filepath with "blog" prefix
//     value: value,
//   })
// }
