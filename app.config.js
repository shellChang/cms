/*
 * @Description: TODO 项目配置
 * @Author: zb
 * @Date: 2019-07-26 23:05:38
 * @LastEditors: zb
 * @LastEditTime: 2019-09-13 01:03:08
 */
module.exports = {
    port: 9000,             //  项目的端口号
    host: '127.0.0.1',      //  项目的启动IP
    hot: false,             //  是否热加载
    envirenment: 'dev',
    // base:  '127.0.0.1:9000',
    baseUrl:{                           // 基地址
        phone: 'http://127.0.0.1:9000/m',
        pc: 'http://127.0.0.1:9000'
    }
}   