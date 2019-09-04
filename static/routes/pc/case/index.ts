// Third Lib CSS
import 'swiper/dist/css/swiper.min.css';


import './index.scss'
import { platformInstance, Language, getLangData, headerInstance, Body } from '@/common'
import Swiper from 'swiper'
const body = new Body();
const data = getLangData(platformInstance.lang)
body.translate(data);

$('.swiper-container').height($(document).height());


new Swiper('.swiper-container', {
   slidesPerView: 1,
   spaceBetween: 30,
   loop: true,
   effect: 'fade',
   pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
   },
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
});