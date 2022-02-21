const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'development',
  target: 'web',
  entry: {
    index: './src/index.js', //can add more entry points
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HTMLWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html'
    }),
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [{
        from: "src/header.html", to: "" //can add more pages to dist
      }],
    }),
    new MiniCssExtractPlugin({ //load css to file
      filename: '[name].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'] //style import
      },
      {
        test: /\.(png|jpg|svg)$/,
        use: 'file-loader?name=[name].[ext]' //images import
      }
    ]
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 8080,
    liveReload: false
  },
  optimization: {
    splitChunks: {
      chunks: 'all' //optimization for libraries load
    },
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: true, //false to remove comments from bundled files
          },
        },
        extractComments: false, //false to remove license files
      }),
    ],
  }
}