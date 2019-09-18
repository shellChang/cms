/*
 * @Description: TODO 
 * @Author: zb
 * @Date: 2019-09-11 20:02:58
 * @LastEditors: zb
 * @LastEditTime: 2019-09-13 00:07:43
 */
import './index.scss'
import { platformInstance, Language, getLangData } from '@/common'
import * as mui from '@assets/lib/mui/js/mui.min'

platformInstance.addEventListener('load', () => {
    const headerInstance = platformInstance.header
    //mui初始化
    mui.init({
        swipeBack: true //启用右滑关闭功能
    });

    //侧滑容器父节点
    var offCanvasWrapper = mui('#offCanvasWrapper');

    //Android暂不支持整体移动动画
    if (!mui.os.android) {
        document.getElementById("move-togger") &&  document.getElementById("move-togger").classList.remove('mui-hidden');
        var spans = document.querySelectorAll('.android-only');
        for (var i = 0, len = spans.length; i < len; i++) {
            spans[i]['style'].display = "none";
        }
    }

    //主界面和侧滑菜单界面均支持区域滚动；
    mui('#offCanvasSideScroll').scroll();
    mui('#offCanvasContentScroll').scroll();
    mui('.mui-bar-transparent').transparent();
    //实现ios平台的侧滑关闭页面；
    if (mui.os.plus && mui.os.ios) {
        offCanvasWrapper[0].addEventListener('shown', function (e) { //菜单显示完成事件
            plus.webview.currentWebview().setStyle({
                'popGesture': 'none'
            });
        });
        offCanvasWrapper[0].addEventListener('hidden', function (e) { //菜单关闭完成事件
            plus.webview.currentWebview().setStyle({
                'popGesture': 'close'
            });
        });
    }

    //      setting the frist slider's height
    $('.main-page li:first-child').height(platformInstance.clientHeight - 250);

    // new fullPage('#fullpage', {
    //    verticalCentered: true,     // 每一页的内容是否垂直居中
    //    lockAnchors: true,
    //    dragAndMove: true,
    //    css3: true,
    //    scrollBar: true,
    //    onLeave: function (from, to) {
    //       const headers = $(headerInstance.el);
    //       if (from.index === 1 && to.index === 0) {
    //          if (headers.hasClass('hidden')) {
    //             headers.removeClass('hidden')
    //          }
    //       } else {
    //          if (!headers.hasClass('hidden')) {
    //             headers.addClass('hidden');
    //          }
    //       }
    //    }
    // });
})