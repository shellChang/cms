/*
 * @Description: TODO 
 * @Author: zb
 * @Date: 2019-08-31 18:57:40
 * @LastEditors: zb
 * @LastEditTime: 2019-09-12 00:22:47
 */

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
const StyleExtHtmlWebpackPlugin = require('style-ext-html-webpack-plugin')
const ModuleConcatenationPlugin = require('webpack/lib/optimize/ModuleConcatenationPlugin');    //  作用域提升插件, 使代码体积更小

const webpack = require('webpack');
// const extractSCSS = new ExtractTextPlugin('stylesheets/[name]-two.css');

// 创建htmlWebpack插件
const createHtmlWebpackPlugin = function (url, chunkName, filename) {
  return new htmlWebpackPlugin({
    filename: `${filename}`,      // 如果加路径的话就在文件名前面写上你想加的路径， e.g `m/${filename}`
    template: path.join(__dirname, url),
    chunks: [
      'runtime',
      'vendors',
      'main.js',
      'main.css',
      chunkName
    ]
  })
}

// 创建Css 内部打包插件
const createStyleExtWebpackPlugin = function (url, chunkName, filename) {
  return new StyleExtHtmlWebpackPlugin({
    position: 'head-top',
    minify: true,
    // file: filename,
    chunks: [
      chunkName
    ]
  })
}


// 要提取的模板
const htmlWebpackPlugins = function () {
  const htmls = [{ path: 'static/routes/pc/index/index.html', chunkName: 'route.index', filename: 'index.html' },
  { path: 'static/routes/pc/contact/index.html', chunkName: 'route.contact', filename: 'contact.html' },
  { path: 'static/routes/pc/case/index.html', chunkName: 'route.case', filename: 'case.html' },
  { path: 'static/routes/phone/index/index.html', chunkName: 'route.m.index', filename: 'm.index.html' }]

  let htmlWebpacks = []
  htmls.forEach(htmlConfig => {
    htmlWebpacks.push(
      createHtmlWebpackPlugin(htmlConfig.path, htmlConfig.chunkName, htmlConfig.filename)
    )
  })
  return htmlWebpacks
}

// 要提取的样式
const styleExtWebpackPlugins = function () {
  const scsss = [{ path: 'static/routes/pc/index/index.scss', chunkName: 'route.index', filename: 'index.scss' },
  { path: 'static/routes/pc/contact/index.scss', chunkName: 'route.contact', filename: 'contact.scss' },
  { path: 'static/routes/pc/case/index.scss', chunkName: 'route.case', filename: 'case.scss' },
  { path: 'static/routes/phone/index/index.scss', chunkName: 'route.m.index', filename: 'm.index.scss' }]
  let styleWebpacks = []
  scsss.forEach(scssConfig => {
    styleWebpacks.push(
      createStyleExtWebpackPlugin(scssConfig.path, scssConfig.chunkName, scssConfig.filename)
    )
  })
  return styleWebpacks
}


module.exports = {
  entry: {
    'main.js': ['./static/index.ts'],
    'main.css': ['./static/index.scss'],
    'route.index': ['./static/routes/pc/index/index.ts'],
    'route.contact': ['./static/routes/pc/contact/index.ts'],
    'route.case': ['./static/routes/pc/case/index.ts'],
    'route.m.index': ['./static/routes/phone/index/index.ts']
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
      return /(jquery|fullPage|ScrollReveal)\S*.js$/.test(content)
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
          // 'resolve-url-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              sourceMapContents: false
            }
          }]
      },
      {
        test: /\.(ttf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              publicPath: ''
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
            }
          },
          {
            loader: 'url-loader',
            options: {
              name: '[name].[hash:8].[ext]',
              limit: 8192
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-withimg-loader'
          }
        ],
        exclude: /node_modules/
      },
    ],
  },
  resolveLoader: {
    modules: ['node_modules'],      //  去哪个目录下寻找loader
    extensions: ['.js', '.json'],
    mainFields: ['loader', 'main']
  },
  resolve: {
    extensions: ['.ts', 'scss', '.js', 'css', 'jpg', 'html', '.tsx'], // 导入语句没带文件后缀时， Webpack 会自动带上后缀后去尝试访问文件是否存在。
    modules: [      //  配置Webpack 去哪些目录下寻找第三方模块, 默认只会去node_modules 目录下寻找
      "node_modules",
    ],
    symlinks: true,
    mainFields: [   // 配置在package.json文件读取的key值，从而引入相关配置文件
      "jsnext:main",
      "browser",
      "module",
      "main"
    ],
    alias: {
      '@': path.resolve(__dirname, "static/"),
      '@assets': path.resolve(__dirname, "static/assets"),
      '@img': path.resolve(__dirname, "static/assets/img"),
      '@core': path.resolve(__dirname, "static/common/core"),
      '@dom': path.resolve(__dirname, "static/common/dom"),
      '@interface': path.resolve(__dirname, "static/common/interface"),
      '@translate': path.resolve(__dirname, "static/common/translate")
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
    new ModuleConcatenationPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].[hash].css',
      chunkFilename: '[name].[hash].css',
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      fullPage: 'fullpage.js/dist/fullpage.extensions.min.js'
    }),
    ...htmlWebpackPlugins(),
    ...styleExtWebpackPlugins(),
    new copyWebpackPlugin()
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[hash:8].bundle.js',
    chunkFilename: "[name].[hash:8].chunk.js", // 配置无入口的Chunk 在输出时的文件名称
    // publicPath: '',  //..所有文件路径的前缀， 用于配置发布到线上资源的URL 前缀
    crossOriginLoading: false   // 配置项目中JSONP的crossorigin
  }
};