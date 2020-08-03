const { existsSync: exists, promises: fs } = require('fs')
const path = require('path')
const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx)$/,
})
const recursiveReadDir = require('./support/recursiveReadDir')

async function boostrap() {
  const contentPath = path.join(__dirname, 'content')
  const images = await recursiveReadDir(contentPath, {
    only: ['png', 'jpg', 'jpeg'],
    fullPath: true,
  })
  console.log('IMAGES ARE', images)
  if (!exists('public')) await fs.mkdir('public')
}

boostrap()

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.node = {
      fs: 'empty',
    }
    return config
  },
})
