
/*
 * @Description: TODO 
 * @Author: zb
 * @Date: 2019-09-04 19:09:17
 * @LastEditors: zb
 * @LastEditTime: 2019-09-05 01:05:10
 */
// Third Lib CSS
import 'swiper/dist/css/swiper.min.css';


import './index.scss'
import { platformInstance, Language, getLangData, Body } from '@/common'
import Swiper from 'swiper'
const headerInstance = platformInstance.header

$(headerInstance.el).addClass('static');

$('.swiper-container').height(450);


new Swiper('.swiper-container', {
   slidesPerView: 1,
   spaceBetween: 30,
   loop: true,
   lazy: true,
   effect: 'fade',
   // autoplay: true,
   pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
   },
   // navigation: {
   //    nextEl: '.swiper-button-next',
   //    prevEl: '.swiper-button-prev',
   //  }
});