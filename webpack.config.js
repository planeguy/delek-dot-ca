var path = require('path')
var webpack = require('webpack');

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
