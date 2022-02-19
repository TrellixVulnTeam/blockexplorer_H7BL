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
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
},
  plugins: [
    new HTMLWebpackPlugin({
      title: 'BlockExplorer',
      template: './src/index.html'
    }),
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'] //добавляем ипорт стилей
    },
    {
      test: /\.(png|jpg|svg)$/,
      use: ['file-loader']
    }
  ]
  }
}