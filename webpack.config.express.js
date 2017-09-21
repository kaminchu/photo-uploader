const webpack = require('webpack');
const config = require('./webpack.config');

module.exports = {
  ...config,
  entry: [config.entry, 'webpack-hot-middleware/client'],
  devtool: 'source-map',
  devServer: {
    contentBase: 'public',
    port: 3000
  },
  plugins: [
    ...config.plugins,
    new webpack.HotModuleReplacementPlugin(),
  ]
};