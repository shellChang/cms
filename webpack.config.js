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
  entry: ['webpack/hot/poll?100', './static/js/index.js'],
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
        test: /\.css$/,
        use:['style-loader', 'css-loader']
      },
      {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader','postcss-loader','sass-loader'],
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
      template: path.join(__dirname, 'src/assets/views/index.html')
    })
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'server.js',
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000,
    host: '127.0.0.1',
    hot: true,
    index: 'index.html',
    open: true
  }
};