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


let dropdownButton = document.querySelectorAll('.dropdown__button');
let dropdownContent = document.querySelectorAll('.dropdown__content');



for (let i = 0; i <= dropdownButton.length; i++) {
   dropdownButton[i].addEventListener('click',function() {
      this.classList.toggle('button-active');

         if ([i]) {
            dropdownContent.classList.toggle('shown');
         };
         
      });
   };

