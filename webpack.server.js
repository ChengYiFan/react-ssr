const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'development',
  target: 'node',   // webpack 打包服务器端代码
  entry: {
    index: path.join(__dirname, './src', 'index.js'),
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, './build')
  },
  externals: [nodeExternals()],
  module: {
    rules: [{
      test: /\.js?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      options: {
        presets: [                  // 设置编译的规则
          [
            '@babel/preset-env',    // 设置打包的版本对浏览器对兼容情况
            {
              "useBuiltIns": "entry",
              "corejs": 3,
            }
          ],
          '@babel/preset-react',
        ]
      }
    }]
  }
}
