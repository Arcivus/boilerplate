// shared config (dev and prod)
var {resolve} = require('path');
var {CheckerPlugin} = require('awesome-typescript-loader');

var {rootPath} = require('./routes');


module.exports = {
  resolve: {
    alias: {
      "@": rootPath
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx', ".json"]
  },
  context: resolve(__dirname, '..'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader', 'source-map-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.tsx?$/,
        use: ['babel-loader', 'awesome-typescript-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', { loader: 'css-loader', options: { importLoaders: 1 } }],
      },

      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file-loader?hash=sha512&digest=hex&name=img/[hash].[ext]',
          'image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false',
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CheckerPlugin()
  ],
  externals: {

  },
  performance: {
    hints: false
  }
};
