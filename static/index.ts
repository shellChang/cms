
/*
 * @description: 每个页面必须引用的公用js文件
 * @author: zb
 * @update: zb
 * @Date: 2019-07-08 08:42:59
 * @LastEditors: zb
 * @LastEditTime: 2019-08-30 22:21:27
 */

//  import Third lib
import 'fullpage.js/vendors/scrolloverflow'
import 'fullpage.js/dist/fullpage.extensions.min'

// Common Script
import {headerInstance, platformInstance} from '@/common';

headerInstance.bootstrap();

console.log(`平台运行在${platformInstance.deviceName()} ${platformInstance.langName()}`)