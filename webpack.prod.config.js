/*
 * @Description: TODO 中文说明   生产环境下的webpack配置
 * @Author: zb
 * @Date: 2019-07-26 23:05:39
 * @LastEditors: zb
 * @LastEditTime: 2019-09-04 22:05:40
 */
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const baseWebpackConfig = require('./webpack.config');
const prodWebpackConfig = merge(baseWebpackConfig, {
    mode: 'production',
    plugins: [
        new UglifyJsPlugin({
            parallel: true
        })
    ]
})

module.exports = new Promise((resolve, reject) => {
    resolve(prodWebpackConfig)
})
