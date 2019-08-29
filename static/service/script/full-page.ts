import {headerInstance} from '@/common/script/index';

const myFullpage = new fullPage('#fullpage', {
    verticalCentered: true,
    sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'], //   定义背景颜色
    // controlArrows: true,    // 是否通过箭头来控制slide
    vertical: false,  // 每一页的内容是否垂直居中
    // paddingTop: 0,
    autoScrolling: true,
    lockAnchors: true,
    scrollOverflow: true,       // 超出是否显示滚动条
    // continuousVertical: false,
    css3: true,
    // fixedElements: ".ke-nuo-header",
    //是否包含滚动条，设为true，则浏览器自带的滚动条会出现，页面还是按页滚动，但是浏览器滚动条默认行为也有效
    // scrollBar: false,
    navigation: true, //是否显示导航（小圆点）
    navigationPosition: 'right', //设置小圆点位置 left right
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