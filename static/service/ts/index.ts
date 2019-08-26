
import '../styles/index.scss'

const myFullpage = new fullPage('#fullpage', {
    sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'], //   定义背景颜色
    controlArrows: true,    // 是否通过箭头来控制slide
    vertical: true,  // 每一页的内容是否垂直居中
    paddingTop: 0,
    autoScrolling: true,
    anchors: ['first', 'scecondPage', 'last'],
    continuousVertical: false,
    // fixedElements: ".ke-nuo-header",
    //是否包含滚动条，设为true，则浏览器自带的滚动条会出现，页面还是按页滚动，但是浏览器滚动条默认行为也有效
    scrollBar: false,
    navigation: true, //是否显示导航（小圆点）
    navigationPosition: 'right', //设置小圆点位置 left right
    onLeave: function(from, to) { 
       const headers = $('.ke-nuo-header');
       if(from.index === 0 && to.index === 1) {
          headers.toggleClass('hidden');
       } else if( from.index === 1 && to.index  === 0) {
          headers.toggleClass('hidden')
       }
    }
  });
