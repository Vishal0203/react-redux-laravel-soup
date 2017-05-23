require('dotenv').config();
var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
    './client/approot'
  ],
  output: {
    path: path.join(__dirname, '../server/public/dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: "'production'",
        SERVER_HOST: JSON.stringify(process.env.SERVER_HOST)
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true
      },
      comments: false
    })
  ],
  resolve: {
    alias: {
      Assets: path.resolve(__dirname, 'client/assets'),
      Styles: path.resolve(__dirname, 'client/assets/css'),
      Images: path.resolve(__dirname, 'client/assets/images')
    }
  },
  module: {
    rules: [
      // js
      {
        test: /\.js/,
        loader: 'babel-loader',
        include: path.join(__dirname, 'client')
      },
      // CSS
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ],
        include: [path.join(__dirname, 'client'), /node_modules/]
      },
      // statics
      {
        test: /\.(jpe?g|gif|png|svg)$/,
        loader: 'file-loader',
        options: {
          hash: 'sha512',
          digest: 'hex',
          name: '[hash].[ext]'
        }
      }
    ]
  }
};
