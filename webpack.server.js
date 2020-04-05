const path = require('path');
const nodeExternals = require('webpack-node-externals');  // node拓展，在node使用非express语法
const merge = require('webpack-merge');
const config = require('./webpack.base.js');

const serverConfig = {
  mode: 'development',
  target: 'node',   // webpack 打包服务器端代码
  entry: {
    index: path.join(__dirname, './src', 'index.js'),
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, './build')
  },
  externals: [nodeExternals()]
};

module.exports = merge(config, serverConfig);
