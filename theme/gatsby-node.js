const path = require('path')
const fs = require('fs')
const mkdirp = require('mkdirp')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onPreBootstrap = ({ store, reporter }) => {
  const { program } = store.getState()

  const contentPath = path.join(program.directory, 'content')
  const paths = [
    contentPath,
    path.join(contentPath, 'pages'),
    path.join(contentPath, 'assets/images'),
    path.join(program.directory, 'content/assets/images/favicon.png'),
  ]
  const defaultFaviconPath = path.join(__dirname, 'content/assets/images/favicon.png')

  paths.forEach(p => {
    if (!fs.existsSync(p)) {
      reporter.info(`${p} directory does not exist, creating...`)
      mkdirp.sync(p)
      if (p.includes('favicon.png')) {
        reporter.info(`Copying default favicon...`)
        fs.copyFileSync(defaultFaviconPath, p)
      }
    }
  })
}
