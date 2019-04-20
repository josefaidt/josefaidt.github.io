exports.createPages = async ({ graphql, actions }) => {
  const result = await graphql(`
    {
      allFile(filter: { sourceInstanceName: { eq: "pages" } }) {
        edges {
          node {
            name
            childMdx {
              frontmatter {
                title
              }
              code {
                body
              }
            }
          }
        }
      }
    }
  `)

  const pages = result.data.allFile.edges.map(({ node }) => node)

  pages.forEach(page => {
    const pathRoot = page.name === 'index' ? '/' : `/${page.name}`
    actions.createPage({
      path: pathRoot,
      component: require.resolve('./src/templates/page.js'),
      context: {
        meta: page.childMdx.frontmatter,
        body: page.childMdx.code.body,
      },
    })
  })
}
