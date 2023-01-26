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

/*---section__modules---*/

let servicesDropdown = document.querySelectorAll('.services__dropdown');
servicesDropdown.forEach((item) => {

   let itemDropdownContent = item.querySelector('.dropdown__content')
   let itemHeight = itemDropdownContent.clientHeight;
   itemDropdownContent.style.height = '0px';

   item.querySelector('.dropdown__headline').onclick = function () {

      this.classList.toggle('button-active');
      let dropdownContent = this.closest('.services__dropdown').querySelector('.dropdown__content')
      dropdownContent.classList.toggle('dropdown__content-shown')

      if (dropdownContent.classList.contains('dropdown__content-shown')) {
         itemDropdownContent.style.height = itemHeight + 'px';
      } else {
         itemDropdownContent.style.height = '0px';
      }
   }

});

/*-----Tabs-----*/

let tabs = document.querySelectorAll('.tab');
let tabsInfo = document.querySelectorAll('.tabs__info');

for (let elem of tabs) {
   elem.addEventListener('mouseover', function () {
      let tabId = elem.getAttribute('data-tab');
      let currentTab = document.querySelector(tabId);

      for (let elem of tabs) {
         elem.classList.remove('active');
      }
      for (let elem of tabsInfo) {
         elem.classList.remove('tabs__info-active');
      }

      elem.classList.add('active');
      currentTab.classList.add('tabs__info-active');

   })

   /*   elem.addEventListener('mouseout', function() {
         elem.classList.add('active');
         currentTab.classList.add('tabs__info-active');
      })*/
}

/*---по клику---*/

// let tabs = document.querySelectorAll('.tab');
// let tabsInfo = document.querySelectorAll('.tabs__info');

// for (let elem of tabs) {
//    elem.addEventListener('click', function () {
//       let tabId = elem.getAttribute("data-tab");
//       let currentTab = document.querySelector(tabId);

//       if (!elem.classList.contains('active')) {

//          for (let elem of tabs) {
//             elem.classList.remove('active');
//          }
//          for (let elem of tabsInfo) {
//             elem.classList.remove('tabs__info-active');
//          }

//          elem.classList.add('active');
//          currentTab.classList.add('tabs__info-active');
//       }

//    })
// }
