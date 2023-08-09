AOS.init();

/* 사회공헌_SECTION_01 */
let ctrSlide = $('article').bxSlider({
    minSlides: 1,
    maxSlides: 4,
    slideWidth: 635,
    ticker: true,
    tickerHover: true,
    speed: 50000
  });

/* 사회공헌_SECTION_03 */
let swiper = new Swiper('.mySwiper', {
  effect: "cards",
  grabCursor: true,
  direction: 'horizontal',
  slideShadows: false,
  initialSlide: 2
});