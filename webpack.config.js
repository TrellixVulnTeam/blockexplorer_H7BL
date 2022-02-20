const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js', //можно добавлять точки входа
    header: './src/header/header.js'
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
      filename: 'index.html',
      template: 'src/index.html'
    }),
    new HTMLWebpackPlugin({  
      filename: 'header.html',
      template: 'src/header/header.html'
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
  },
  devServer: {
    hot: false
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false,
          },
        },
        extractComments: false,
      }),
    ],
  }
}