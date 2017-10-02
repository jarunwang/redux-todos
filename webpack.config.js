require('es6-promise').polyfill()
module.exports = function(webpackConfig) {
  webpackConfig.module.loaders.forEach(function(loader) {
    return loader;
  });

  // Fix ie8 compatibility
  webpackConfig.module.loaders.unshift({
    test: /\.jsx?$/,
    loader: 'es3ify',
  });
  webpackConfig.module.loaders.unshift({
    test: /\.js$/,
    include: /linebreak/,
    loader: "transform?brfs"
  });
  return webpackConfig;
};
