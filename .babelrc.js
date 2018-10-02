module.exports = function(api) {
  const presets = ['@babel/preset-env']
  const plugins = ['@babel/plugin-proposal-class-properties']

  let generatorOpts = {
    minified: true,
    comments: false,
    sourceMaps: true
  }

  if (api.env('DEV')) {
    console.log('**************DEVELOPMENT ENABLED**************')
    generatorOpts.minified = false
  }

  return {
    presets,
    plugins,
    generatorOpts
  }
}