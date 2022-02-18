const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js', //можно добавлять точки входа
  },
  output: {
    filename:'[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: 'BlockExplorer',
      template: './src/index.html'
    }),
    new CleanWebpackPlugin()
  ]
}