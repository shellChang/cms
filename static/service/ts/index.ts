<<<<<<< HEAD
// tslint:disable-next-line: eofline
import './full-page.ts';
=======
import '../styles/index.scss'

const myFullpage = new fullPage('#fullpage', {
    sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'], //   定义背景颜色
    controlArrows: true,    // 是否通过箭头来控制slide
    vertical: true,  // 每一页的内容是否垂直居中
    paddingTop: 0,
    anchors: ['firstPage', 'scecondPage', '3rdPage', '4thpage', 'lastPage'],
    continuousVertical: false,
    navigation: true, //是否显示导航（小圆点）
    navigationPosition: 'right', //设置小圆点位置 left right
  });
>>>>>>> c8c96947760f766d0277693d4748a1e7eed7ec8a
