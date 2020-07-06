const fs = require('fs').promises
const path = require('path')
module.exports = async function recursiveReadDir(basePath, { only = ['mdx'], fullPath = false }) {
  const result = []
  const crawl = async filePath => {
    const files = await fs.readdir(filePath, { withFileTypes: true })
    for (const file of files) {
      const _path = path.join(filePath, file.name)
      if (file.isDirectory()) await crawl(_path)
      else if (only.some(o => file.name.endsWith(o))) {
        if (fullPath) {
          result.push(_path)
        } else {
          result.push(path.dirname(_path).replace(basePath, ''))
        }
      }
    }
  }
  await crawl(basePath)
  return result
}
