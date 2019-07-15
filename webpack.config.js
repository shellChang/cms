/** 静态资源的打包配置 */
const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const htmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require('autoprefixer');
const cssLoader = require('css-loader');
const styleLoader = require('style-loader');
const postcssLoader = require('postcss-loader');
const sassLoader = require('sass-loader');
// const extractSCSS = new ExtractTextPlugin('stylesheets/[name]-two.css');

module.exports = {
  entry: ['webpack/hot/poll?100', './static/index.js', './static/styles.scss'],
  watch: true,
  target: 'web',
  externals: [
    nodeExternals({
      whitelist: ['webpack/hot/poll?100'],
    }),
  ],
  module: {
    rules: [
      // {
      //   test: /.tsx?$/,
      //   use: 'ts-loader',
      //   exclude: /node_modules/,
      // },
      {
        test: /.scss$/,
        use: 'css-loader!style-loader!posscss-loader!sass-loader',
        include: path.resolve(__dirname,"src/styles.scss"),
      }
    ],
  },
  mode: 'development',
  resolve: {
    extensions: ['.tsx', '.ts', '.js', 'html', 'css', 'scss', 'jpg'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new htmlWebpackPlugin({
      template: './static/index.html'
    })
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]-bundles.js',
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  }
};