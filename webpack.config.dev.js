var path = require('path')
var webpack = require('webpack');
var CommonsPlugin = new require("webpack/lib/optimize/CommonsChunkPlugin")
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    'post/post':'./src/post.js'
  },
  output: {
    path: __dirname + '/builds/dev',
    filename: '[name].js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      riot: 'riot'
    }),
    new CommonsPlugin({
      minChunks: 2,
      name: "common"
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new ExtractTextPlugin('styles.css')
  ],
  module:{
    loaders:[
      { 
        test: /\.tag$/,
        exclude: /node_modules/,
        loader: 'riot-tag-loader',
        query: {
          hot: false
        },
        enforce: 'pre'
      },
      {
        test: /\.js$|\.tag$/,
        loader:'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
}
