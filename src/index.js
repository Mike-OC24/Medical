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

/*---вариант 1------*/

let servicesDropdown = document.querySelectorAll('.services__dropdown');

servicesDropdown.forEach((item) => {


   let itemDropdownContent = item.querySelector('.dropdown__content')

   let itemHeight = itemDropdownContent.clientHeight;

   itemDropdownContent.style.height = '0px';


   item.querySelector('.dropdown__button').onclick = function() {

      this.classList.toggle('button-active');

      let dropdownContent =  this.closest('.services__dropdown').querySelector('.dropdown__content')

      dropdownContent.classList.toggle('dropdown__content-shown')

      if(dropdownContent.classList.contains('dropdown__content-shown')) {
         itemDropdownContent.style.height = itemHeight + 'px';
      } else 
      {
         itemDropdownContent.style.height = '0px';
      }
      
   }
});



/*---Вариант 2---*/

/*let dropdownHeadline = Array.from(document.querySelectorAll('.dropdown__headline'));

for (let headline of dropdownHeadline) {
   headline.addEventListener('click', () => {
      headline.nextElementSibling.classList.toggle('hidden')
   })
}*/



/*---Вариант 3-- РАБОТАЕТ*/ 

/*let dropdownHeadline = document.querySelectorAll('.dropdown__headline');

for (let i = 0; i < dropdownHeadline.length; i++) {
   dropdownHeadline[i].addEventListener('click',function() {
      
      let dropdownContent = this.nextElementSibling;
      if (dropdownContent.style.display === "flex") {
         dropdownContent.style.display = "none";
      } else {
         dropdownContent.style.display = "flex";
      }

      if (dropdownContent.style.maxHeight) {
         dropdownContent.style.maxHeight = null;
      } else {
         dropdownContent.style.maxHeight = dropdownContent.scrollHeight + 'px';
      }

   });
};
*/












/*let benefitsContentInner = document.querySelector('.benefits__content-inner');

benefitsContentInner.forEach((item) => {

   item.querySelector('.row--two').onclick = function() {

      this.classList.add('row-click');

      let info = this.closest('.benefits__content-inner').querySelector('.info--two')

      info.classList.add('info-visible')
   }
})*/




     
   /*   if ( dropdownButton === 'button-active') {
         dropdownContent.classList.toggle('shown');
      };*/


/*let row = document.querySelectorAll('.row');
let visibleInfo = document.querySelectorAll('.info');

for (let i = 0; i <= row.length; i++) {
   row[i].addEventListener('click',function() {
      this.classList.toggle('row-click');
   });
};*/