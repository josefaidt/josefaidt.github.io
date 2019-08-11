const path = require('path')
const fs = require('fs')
const mkdirp = require('mkdirp')

exports.onPreBootstrap = ({ store, reporter, themeOptions }) => {
  const { program } = store.getState()

  // const envFile = path.join(program.directory, '.env.development')
  const dirs = [path.join(program.directory, 'src/pages')]

  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      reporter.info(
        `${dir.slice(dir.indexOf('src') - 1, dir.length)} directory does not exist, creating...`
      )
      mkdirp.sync(dir)
    }
  })
  // if (!process.env.API_KEY) {
  //   reporter.panic(
  //     `DarkSky API key is required to retrieve data\nSign up for a free API key: https://darksky.net/dev\n`,
  //     new Error('Missing API Key')
  //   )
  // }

  // if (!fs.existsSync(envFile) && process.env.NODE_ENV === 'development') {
  //   reporter.warn(`ENV file does not exist, creating...`)
  //   fs.writeFile(envFile, 'API_KEY=your-key-here', err => {
  //     if (err) throw new Error(err)
  //     reporter.info(`successfully created ENV file`)
  //     reporter.panic(
  //       `DarkSky API key is required to retrieve data\nSign up for a free API key: https://darksky.net/dev\n`,
  //       new Error('Missing API Key')
  //     )
  //   })
  // }
}

// exports.createPages = async ({ graphql, actions }) => {
//   const result = await graphql(`
//     {
//       allFile(filter: { sourceInstanceName: { eq: "pages" } }) {
//         edges {
//           node {
//             name
//             childMdx {
//               frontmatter {
//                 title
//               }
//               code {
//                 body
//               }
//             }
//           }
//         }
//       }
//     }
//   `)

//   const pages = result.data.allFile.edges.map(({ node }) => node)

//   pages.forEach(page => {
//     const pathRoot = page.name === 'index' ? '/' : `/${page.name}`
//     actions.createPage({
//       path: pathRoot,
//       component: require.resolve('./src/templates/page.js'),
//       context: {
//         meta: page.childMdx.frontmatter,
//         body: page.childMdx.code.body,
//       },
//     })
//   })
// }
