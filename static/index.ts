/*
 * @description: 每个页面必须引用的公用js文件
 *   reason: 该应用是自适应的， 在window和android环境下分别运行了2套代码，
 *   这套配置将2份代码打包在了一起，代码体积较大，到上线时期，可以将项目分为2个项目，在不同域名下运行
 * @author: zb
 * @update: zb
 * @Date: 2019-07-08 08:42:59
 * @LastEditors: zb
 * @LastEditTime: 2019-09-04 21:38:41
 */

//  import Third lib
import 'fullpage.js/vendors/scrolloverflow'
import 'fullpage.js/dist/fullpage.extensions.min'
import ScrollReveal from 'scrollreveal'
import 'normalize.css'
import '@assets/lib/mui/js/mui.min'
// Common Script
import {headerInstance, platformInstance} from '@/common';

headerInstance.bootstrap();

console.log(`平台运行在${platformInstance.deviceName()} ${platformInstance.langName()}`)