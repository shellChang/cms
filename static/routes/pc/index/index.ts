import ScrollReveal from 'scrollreveal';
import './index.scss'
import { platformInstance, Language, getLangData, headerInstance, Body} from '@/common'
const body = new Body();
const data = getLangData(platformInstance.lang)
body.translate(data);



 new fullPage('#fullpage', {
   verticalCentered: true,     // 每一页的内容是否垂直居中
   lockAnchors: true,
   dragAndMove: true,
   css3: true,
   scrollBar: true,
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


// 滚动动画

const titleAnimate = new ScrollReveal({
   duration: 1500,
   // // 延迟时间
   delay: 500,
   // // 动画开始的位置，'bottom', 'left', 'top', 'right'
   origin: 'left',
   // 回滚的时候是否再次触发动画
   reset: false,
   // // 在移动端是否使用动画
   mobile: true,
   // 滚动的距离，单位可以用%，rem等
   distance: '200px',
   // 其他可用的动画效果
   opacity: 0,
   // 开始角度
   totate: {x: 45, y: 45, z: 45},

   easing: 'ease-out',
   // 缩放值
   scale: 0.2,

   container: document.getElementById('section1')
});
titleAnimate.reveal('.title')

// console.log(sr)
// sr.reveal('#section1 .title')

// new ScrollReveal().reveal('#section2 .about_desc figure',{
//    duration: 1500,
//    // // 延迟时间
//    delay: 200,
//    // // 动画开始的位置，'bottom', 'left', 'top', 'right'
//    origin: 'left',
//    // 回滚的时候是否再次触发动画
//    reset: true,
//    // // 在移动端是否使用动画
//    mobile: true,
//    // 滚动的距离，单位可以用%，rem等
//    distance: '2000px',
//    // 其他可用的动画效果
//    opacity: 0,
//    // 开始角度
//    totate: {x: 45, y: 45, z: 45},
   
//    easing: 'ease-out',
//    // 缩放值
//    scale: 0.2,

//    container: document.getElementById('section2')
// })