const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
const path = require('path');
module.exports = {
  devtool: 'null',
  entry: __dirname + '/app/main.js',
  output: {
    path: __dirname + '/public',
    filename: 'bundle-[hash].js'
  },
  devServer: {
    contentBase: './public',
    historyApiFallback: true,
    inline: true,
    hot: true,
    port: '8088'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader'
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true
              }
            },
            {
              loader: 'postcss-loader'
            }
          ]
        })
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin('版权所有，翻版必究 @ymb'),
    new HtmlWebpackPlugin({
      template: __dirname + '/index.html'
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin('style.css'),
    new OptimizeCSSPlugin({
      safe: true, map: { inline: false }
    }),
    new CleanWebpackPlugin('public/*.*', {
      root: __dirname,
      verbose: true,
      dry: false
    })
  ]
}