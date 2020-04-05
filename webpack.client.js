const path = require('path');
const merge = require('webpack-merge');
const config = require('./webpack.base.js');

const clientConfig = {
  mode: 'development',
  entry: {
    index: path.join(__dirname, './src/client', 'index.js'),
  },
  output: {
    filename: 'index.js',
    path: path.join(__dirname, './public')
  }
};

module.exports = merge(config, clientConfig);
