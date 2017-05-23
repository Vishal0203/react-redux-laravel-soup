require('dotenv').config();
var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    './client/approot'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        SERVER_HOST: JSON.stringify(process.env.SERVER_HOST)
      }
    })
  ],
  resolve: {
    alias: {
      Assets: path.resolve(__dirname, 'client/assets'),
      Styles: path.resolve(__dirname, 'client/assets/css'),
      Images: path.resolve(__dirname, 'client/assets/images')
    }
  },
  node: {
    net: 'empty'
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
