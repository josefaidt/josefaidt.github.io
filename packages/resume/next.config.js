if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line global-require
  require('dotenv').config()
}

module.exports = {
  env: {
    GITHUB_TOKEN: process.env.GITHUB_TOKEN,
  },
}
