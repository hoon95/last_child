let ctrSlide = $('article').bxSlider({
    minSlides: 2,
    maxSlides: 4,
    slideWidth: 1000,
    ticker: true,
    tickerHover: true,
    speed: 50000
  });
// let SwiperTicker = new Swiper('.ctr_main', {
//   spaceBetween: 0,
//   centeredSlides: true,
//   speed: 6000,
//   autoplay: {
//     delay: 1,
//   },
//   loop: true,
//   slidesPerView:'auto',
//   allowTouchMove: false,
//   disableOnInteraction: true
// });

let swiper = new Swiper('.mySwiper', {
  effect: "cards",
  grabCursor: true,
});