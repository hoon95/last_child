AOS.init();

/* ESG 전략_SECTION_01 */
$('.content > *').lettering();

let target = $('.s3');
let scrollCount = 0;
let isScrolling = false;
  
$(window).scroll(function() {
  let targetSection = $('.s3');
  if(targetSection.offset().top <= $(window).scrollTop()){
    if(!targetSection.hasClass('active')){
      if (!isScrolling) {
        let letters = targetSection.find('span');
        if(scrollCount < letters.length){
          letters.eq(scrollCount++).addClass('active');
          isScrolling = true;
    
          // 500ms의 간격으로 스크롤 이벤트 체크
          setTimeout(function() {
            isScrolling = false;
          }, 100);

          if(scrollCount === letters.length){
            scrollCount = 0;
            targetSection.addClass('active');
            $(window).off('scroll');
            scrollToNextSection();
          }
        }
      }
    }
  }
  function scrollToNextSection() {
    if (targetSection.next().length > 0) {
      let nextSection = targetSection.next();
      $('html, body').animate({ scrollTop: nextSection.offset().top }, 500, function() {
      });
    }
  }
});


/* ESG 전략_SECTION_03 */
var swiper = new Swiper('.value_slide_container', {
  spaceBetween: 0,
  centeredSlides: true,
  speed: 4000,
  autoplay: {
    delay: 1
  },
  loop: true,
  loopedSlides: 1,
  slidesPerView: 'auto',
  disableOnInteraction: true,
  allowTouchMove: false,
  initialSlide: 3
});

let slideHeight = $('.value_slide_container').outerHeight();
$(window).resize(function(){
  $('.value_bottom').css({height: slideHeight})
});
$(window).trigger('resize');

