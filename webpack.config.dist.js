var path = require('path')
var webpack = require('webpack');
var CommonsPlugin = new require("webpack/lib/optimize/CommonsChunkPlugin");
var UglifyJsPlugin = new require("webpack/lib/optimize/UglifyJsPlugin");

module.exports = {
  entry: {
    main: './src/main.js',
    post: './src/post.js'
  },
  output: {
    path: __dirname + '/builds/dist',
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
    new webpack.optimize.UglifyJsPlugin()
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
