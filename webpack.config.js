/** 静态资源的打包配置 */
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const htmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const autoprefixer = require('autoprefixer');
const cssLoader = require('css-loader');
const styleLoader = require('style-loader');
const postcssLoader = require('postcss-loader');
const sassLoader = require('sass-loader');
const htmlLoader = require('html-withimg-loader');
const copyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const extractSCSS = new ExtractTextPlugin('stylesheets/[name]-two.css');
module.exports = {
  entry: {
    'mian.js': ['./static/index.ts'],
    'main.style': ['./static/styles.scss']
  },
  watch: true,
  target: 'web',
  externals: [],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        },
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
        }
      }
    },
    runtimeChunk: {
      name: 'runtime'
    }
  },
  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        loader: "babel-loader"
      },
      {
        test: /\.(sc|sa|c)ss$/,
        use: ['style-loader',
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          'css-loader',
          'postcss-loader',
          'sass-loader'],
        include: [path.resolve(__dirname, "static/styles.scss")
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-withimg-loader',
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              publicPath: ''
            }
          }
        ]
      }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', 'html', 'css', 'scss', 'jpg'],
    modules: [
      "./node_modules",

    ],
    symlinks: true,
    mainFields: [
      "browser",
      "module",
      "main"
    ],
    alias: {
      '@img': path.resolve(__dirname, "static/assets/img")
    }
  },
  plugins: [
    new CleanWebpackPlugin({
      root: path.resolve(__dirname, ''),     //根目录
      verbose: true,                         //是否启用控制台输出信息
      dry: false,                            //设置为false,启用删除文件
      cleanAfterEveryBuildPatterns: ['dist']
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new htmlWebpackPlugin({
      template: path.join(__dirname, 'static/service/views/index.html'),
      chunks: [],
      minify: {
        minifyCSS: true,
        minifyJS: true,
        collapseWhitespace: true
      }
    }),
    new copyWebpackPlugin()
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
    chunkFilename: "[id].chunk.js",
    crossOriginLoading: false
  }
};