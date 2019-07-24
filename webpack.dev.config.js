/**
 * @description: 中文说明   开发环境下的webpack配置
 * @author: zb
 * @update: zb
 * @Date: 2019-07-24 09:16:55
 * @LastEditors: zb
 * @LastEditTime: 2019-07-24 17:21:57
 */
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const portfinder = require('portfinder');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

const baseWebpackConfig = require('./webpack.config');
const config = require('./app.config');

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'tslint-loader'
          },
        ],
        exclude: /node_modules/,
      }
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new BundleAnalyzerPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    host: '127.0.0.1',
    hot: false,
    hotOnly: false,
    index: 'index.html',
    open: true,
    watchOptions: {
      poll: true
    }
  }
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port

      // add host to devServer config
      devWebpackConfig.devServer.host = config.host || devWebpackConfig.devServer.host

      devWebpackConfig.devServer.hot = config.hot || devWebpackConfig.devServer.hot
      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(
        new FriendlyErrorsPlugin({
          compilationSuccessInfo: {
            messages: [
              `Your application is running here: http://${
              devWebpackConfig.devServer.host
              }:${port}`
            ]
          },
          onErrors: config.notifyOnErrors
            ? utils.createNotifierCallback()
            : undefined
        })
      )
      resolve(devWebpackConfig)
    }
  })
})
