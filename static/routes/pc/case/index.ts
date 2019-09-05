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
import { platformInstance, Language, getLangData, headerInstance, Body } from '@/common'
import Swiper from 'swiper'
const body = new Body();
const data = getLangData(platformInstance.lang)
body.translate(data);

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