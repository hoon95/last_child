/* COMPANY CULTURE */

/* active-slide */
const activeSwiper = new Swiper('.active-slide', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: true,
    pauseOnMouseEnter: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });