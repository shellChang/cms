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
 