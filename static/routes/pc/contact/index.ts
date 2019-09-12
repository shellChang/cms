/*
 * @Description: TODO 
 * @Author: zb
 * @Date: 2019-09-01 16:40:27
 * @LastEditors: zb
 * @LastEditTime: 2019-09-12 20:56:59
 */
import './index.scss'
import { platformInstance, Language, getLangData, Body } from '@/common'

platformInstance.addEventListener('load', () => {
   const headerInstance = platformInstance.header
   const myFullpage = new fullPage('#fullpage', {
      // navigation: true, //是否显示导航（小圆点）
      // navigationPosition: 'right', //设置小圆点位置 left right
      verticalCentered: true,     // 每一页的内容是否垂直居中
      lockAnchors: true,
      scrollOverflow: true,       // 超出是否显示滚动条
      dragAndMove: true,
      // controlArrows: false,
      //  sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'], //   定义背景颜色
      //  autoScrolling: true,
      // paddingTop: '120px',
      // continuousVertical: false,
      css3: true,
      //  parallax: true,
      //  fixedElements: ".ke-nuo-header",
      //是否包含滚动条，设为true，则浏览器自带的滚动条会出现，页面还是按页滚动，但是浏览器滚动条默认行为也有效
      // scrollBar: false,
      onLeave: function (from, to) {
         const headers = $(headerInstance.el);
         if (from.index === 1 && to.index === 0) {
            if (headers.hasClass('hidden')) {
               headers.removeClass('hidden')
            }
         } else {
            if (!headers.hasClass('hidden')) {
               headers.addClass('hidden');
            }
         }
      }
   });

})
