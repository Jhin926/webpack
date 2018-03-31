console.log('当前路径：' + __dirname);
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
  devtool: 'source-map',
  entry: __dirname + '/app/main.js',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
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
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]__[local]--[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin('版权所有，翻版必究 @ymb'),
    new HtmlWebpackPlugin({
      template: __dirname + '/index.html'
    }),
    new webpack.HotModuleReplacementPlugin() // 热加载插件
  ]
}