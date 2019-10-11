const path = require('path')
const fs = require('fs')
const mkdirp = require('mkdirp')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onPreBootstrap = ({ store, reporter }) => {
  const { program } = store.getState()

  const paths = [
    path.join(program.directory, 'content'),
    path.join(program.directory, 'content/pages'),
    path.join(program.directory, 'content/assets/images'),
  ]

  // const files = [
  //   path.join(program.directory, 'content/assets/images/favicon.png'),
  //   path.join(program.directory, 'content/pages/index.mdx'),
  //   path.join(program.directory, 'content/pages/nav.json'),
  // ]

  const files = [
    'content/assets/images/favicon.png',
    'content/assets/images/canyonlands.jpg',
    'content/pages/nav.json',
    'content/pages/index.mdx',
    'content/pages/about.mdx',
  ]

  const defaultFaviconPath = path.join(__dirname, 'content/assets/images/favicon.png')

  paths.forEach(async p => {
    if (!fs.existsSync(p)) {
      reporter.info(`${p} directory does not exist, creating...`)
      await mkdirp.sync(p)
    }
  })

  files.forEach(async f => {
    if (!fs.existsSync(path.join(program.directory, f))) {
      reporter.info(`Copying default file: ${f.split('/').pop()}`)
      await fs.copyFileSync(path.join(__dirname, f), path.join(program.directory, f))
    }
  })
}
