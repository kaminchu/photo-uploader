const config = require('./webpack.config');

module.exports = {
  ...config,
  devtool: 'source-map',
  devServer: {
    contentBase: 'public',
    port: 3000
  }
};