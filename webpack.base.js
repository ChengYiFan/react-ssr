module.exports = {
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
};
