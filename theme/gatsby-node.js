const path = require('path')
const fs = require('fs')
const mkdirp = require('mkdirp')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onPreBootstrap = ({ store, reporter }) => {
  const { program } = store.getState()

  const contentPath = path.join(program.directory, 'content')
  const dirs = [contentPath, path.join(contentPath, 'pages')]

  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      reporter.info(`${dir} directory does not exist, creating...`)
      mkdirp.sync(dir)
    }
  })
}
