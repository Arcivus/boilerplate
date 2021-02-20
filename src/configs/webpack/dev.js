// development config
var merge = require('webpack-merge');
var webpack = require('webpack');
var commonConfig = require('./common');
var {resolve} = require('path');
var {outputPath, entryPath, rootPath} = require("./routes");
var TSLintPlugin = require('tslint-webpack-plugin');

module.exports = merge(commonConfig, {
  mode: 'development',
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch', // activate HMR for React
    'webpack-dev-server/client?http://localhost:8080',// bundle the client for webpack-dev-server and connect to the provided endpoint
    'webpack/hot/only-dev-server', // bundle the client for hot reloading, only- means to only hot reload for successful updates
    entryPath + '/client.tsx' // the entry point of our app
  ],
  output: {
    filename: 'main.js',
    // the output bundle
    path: outputPath,
    publicPath: ''
    // necessary for HMR to know where to load the hot update chunks
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        loaders: [
          {
            loader: "style-loader", options: {
              sourceMap: true
            }
          }, {
            loader: "css-loader", options: {
              sourceMap: true
            }
          }, {
            loader: "sass-loader", options: {
              sourceMap: true
            }
          }
        ]
      },
    ]
  },
  devServer: {
    hot: true, // enable HMR on the server
    contentBase: [entryPath, outputPath],
    publicPath: '',
    port: 8080,
    host: "0.0.0.0",
    disableHostCheck: true
  },
  devtool: 'source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // enable HMR globally
    new webpack.NamedModulesPlugin() // prints more readable module names in the browser console on HMR updates
  ]
});
