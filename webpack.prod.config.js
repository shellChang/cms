/**
 * @description: 中文说明   生产环境下的webpack配置
 * @author: zb
 * @update: zb
 * @Date: 2019-07-24 09:19:09
 * @LastEditors: zb
 * @LastEditTime: 2019-07-24 12:43:56
 */
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.config');
const prodWebpackConfig = merge(baseWebpackConfig, {
    mode: 'production'
})

module.exports = new Promise((resolve, reject) => {
    resolve(prodWebpackConfig)
})
