exports.onPreBootstrap = ({ reporter, ...rest }) => {
  reporter.info(rest)
}
