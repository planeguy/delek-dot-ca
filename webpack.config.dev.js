var path = require('path')
var webpack = require('webpack');
var CommonsPlugin = new require("webpack/lib/optimize/CommonsChunkPlugin")

module.exports = {
  entry: {
    main: './src/main.js',
    post: './src/post.js'
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
    })
  ],
  module:{
    loaders:[
      { 
        test: /\.tag$/,
        exclude: /node_modules/,
        loader: 'riotjs-loader',
        query: { type: 'none' },
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
