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

const webpack = require('webpack');
// const extractSCSS = new ExtractTextPlugin('stylesheets/[name]-two.css');

const getScssPath = function()  {

}


module.exports = {
  entry: {
    'main.js': ['./static/index.ts'],
    'main.css': ['./static/index.scss'],
    'route.index':['./static/service/script/index.ts']
    // 'index.style':'./static/service/styles/index.scss'
  },
  watch: true,
  context: path.resolve(__dirname), // 处理项目文件的基目录
  target: 'web',
  externals: [],
  optimization: {
    splitChunks: {
      chunks: "async",
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '-',
      name: true,

      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
          priority: -10
        },
        // styles: {
        //   test: /\.css$/,
        //   name: 'styles',
        //   chunks: 'all'

        // },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    },
    runtimeChunk: 'single'  // single or true , single:  creates a runtime file to be shared for all generated chunks. true:adds an additonal chunk to each entrypoint containing only the runtime.
  },
  module: {
    noParse: (content) => {            //  让Webpack 忽略对部分没采用模块化的文件的递归解析和处理
      return /(jquery|fullPage)\S*.js$/.test(content)
    },
    rules: [
      {
        test: require.resolve('fullpage.js/dist/fullpage.extensions.min.js'),
        loader: 'exports-loader?window.fullpage!script-loader'
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /(node_modules)|(src)/,
        include: [path.resolve(__dirname, "static")]
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
          'resolve-url-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              sourceMapContents: false
            }
          }]
        // include: [path.resolve(__dirname, "static/index.scss"),
        //           path.resolve(__dirname, "static/service/styles/index.scss")
        // ],
        // exclude: /node_modules/
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-withimg-loader',
          }
        ],
        exclude: /node_modules/
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
    extensions: [ '.ts', 'scss','.js',  'css', 'jpg', 'html','.tsx'], // 导入语句没带文件后缀时， Webpack 会自动带上后缀后去尝试访问文件是否存在。
    modules: [      //  配置Webpack 去哪些目录下寻找第三方模块, 默认只会去node_modules 目录下寻找
      "node_modules",   

    ],
    symlinks: true,
    mainFields: [   // 配置在package.json文件读取的key值，从而引入相关配置文件
      "browser",
      "module",
      "main"
    ],
    alias: {
      '@': path.resolve(__dirname, "static/"),
      '@img': path.resolve(__dirname, "static/assets/img")
    },
    descriptionFiles: ['package.json'],  //  配置描述第三方模块的文件名称，也就是package.json 文件
    enforceExtension: false       //  导入语句是否必须带文件后缀
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
      filename: '[name].[hash].css',
      chunkFilename: '[id].css',
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      fullPage:'fullpage.js/dist/fullpage.extensions.min.js'
    }),
    new htmlWebpackPlugin({
      template: path.join(__dirname, 'static/service/views/index.html'),
      chunks: [
        'runtime',
        'vendors',
        'main.js',
        'main.css',
        'route.index'

      ],
      minify: {
        minifyCSS: false,
        minifyJS: false,
        collapseWhitespace: false
      }
    }),
    new copyWebpackPlugin()
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
    chunkFilename: "[id].chunk.js", // 配置无入口的Chunk 在输出时的文件名称
    // publicPath: '',  //..所有文件路径的前缀， 用于配置发布到线上资源的URL 前缀
    crossOriginLoading: false   // 配置项目中JSONP的crossorigin
  }
};