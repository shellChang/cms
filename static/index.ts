
/*
 * @description: 每个页面必须引用的公用js文件
 * @author: zb
 * @update: zb
 * @Date: 2019-07-08 08:42:59
<<<<<<< HEAD
 * @LastEditors: Do not edit
 * @LastEditTime: 2019-08-30 13:28:50
=======
 * @LastEditors: zb
 * @LastEditTime: 2019-08-30 22:21:27
>>>>>>> 740c81f2bef896023a0a37454a3b1201429e5ada
 */

//  import Third lib
import 'fullpage.js/vendors/scrolloverflow'
import 'fullpage.js/dist/fullpage.extensions.min'

// Common Script
<<<<<<< HEAD
import {headerInstance} from '@/common';
=======
import {headerInstance, platformInstance} from '@/common/script/index';
import { Device } from './common/script/platform';
>>>>>>> 740c81f2bef896023a0a37454a3b1201429e5ada
headerInstance.bootstrap();