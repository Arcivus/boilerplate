// production config
var merge = require('webpack-merge');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var commonConfig = require('./common');
var {rootPath, entryPath, outputPath} = require("./routes");

module.exports = merge(commonConfig, {
  mode: 'production',
  entry: ['babel-polyfill', entryPath + '/client.tsx'],
  output: {
    filename: 'main.js',
    path: outputPath,
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        loaders: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development'
            }
          },

          { loader: 'css-loader', options: { importLoaders: 1 } },
          'sass-loader'

        ]
      },
      {
        test: /\.ejs$/,
        exclude: /node_modules/,
        loader: "ejs-webpack-loader",
        options: {
          data: {
            tmp: Math.random().toString(36).substring(2, 15)
          }
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      chunkFilename: "../../dist/[name].css",
      filename: "../../dist/bundle.css"
    }),
    new HtmlWebpackPlugin({
      template: entryPath + '/prod.ejs',
      filename: outputPath + '/index.html',
      inject: false
    })
  ]

});
