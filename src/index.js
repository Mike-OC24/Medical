import "swiper/scss";
import "./index.html";
import "./scss/style.scss";
import 'swiper/scss/navigation';

import { Swiper, Navigation } from 'swiper';

new Swiper('.swiper', {
   modules: [Navigation],
   speed: 1000,
   slidesPerView: 1,
   loop: true,

   navigation: {
      nextEl: '.swiper-button-left',
      prevEl: '.swiper-button-right',
   },
});