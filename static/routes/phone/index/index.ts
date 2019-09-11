/*
 * @Description: TODO 
 * @Author: zb
 * @Date: 2019-09-11 20:02:58
 * @LastEditors: zb
 * @LastEditTime: 2019-09-12 00:06:15
 */
//  import * as mui from '@assets/lib/mui/js/'
import './index.scss'
import { platformInstance, Language, getLangData, headerInstance, Body} from '@/common'
import * as mui from  '@assets/lib/mui/js/mui.min'

const body = new Body();
const data = getLangData(platformInstance.lang)
body.translate(data);

 //mui初始化
 mui.init({
    swipeBack: true //启用右滑关闭功能
});
 