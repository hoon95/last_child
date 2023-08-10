/* COMPANY CULTURE */

/* samsung display culture */
let windowHeight = $(window).innerHeight();
let windowWidth = $(window).outerWidth();

let firstSamsung = $('.first_text');
let firstSamsungOST = firstSamsung.find('.h1').offset().top;
let secondDisplay = $('.second_text');
let secondDisplayOST = secondDisplay.find('.h1').offset().top;
let thirdCulture = $('.third_text');
let thirdCultureOST = thirdCulture.find('.h1').offset().top;

/* section3 background */
let sdcCulture = $('.co_culture_section2');
let sdcCultureOST = sdcCulture.offset().top;
let sdcCultureImgOST = sdcCulture.find('img').offset().top;
let mission = $('.co_culture_section3');
let missionOST = mission.offset().top;
let missionImgOST = mission.find('img').offset().top;
let vision = $('.co_culture_section4');
let visionOST = vision.offset().top;
let visionImgOST = vision.find('img').offset().top;

console.log(windowWidth);
$(window).scroll(function(){
  let sct = $(this).scrollTop();
  
  if(sct >= firstSamsungOST - windowHeight){
    firstSamsung.addClass('active');
  }
  if(sct >= secondDisplayOST - windowHeight){
    secondDisplay.addClass('active');
  } 
  if(sct >= thirdCultureOST - windowHeight){
    thirdCulture.addClass('active');
  }
  if(windowWidth >= 768){
    if(sct >= sdcCultureImgOST - windowHeight){
      sdcCulture.addClass('active');
    } else {
      sdcCulture.removeClass('active');
    }
    if(sct >= missionImgOST - windowHeight){
      mission.addClass('active');
    } else {
      mission.removeClass('active');
    }
    if(sct >= visionImgOST - windowHeight){
      vision.addClass('active');
    } else {
      vision.removeClass('active');
    }
  } else {
    if(sct >= sdcCultureOST - windowHeight){
      sdcCulture.addClass('active');
    } else {
      sdcCulture.removeClass('active');
    }
    if(sct >= missionOST - windowHeight){
      mission.addClass('active');
    } else {
      mission.removeClass('active');
    }
    if(sct >= visionOST - windowHeight){
      vision.addClass('active');
    } else {
      vision.removeClass('active');
    }
  }
});
/* active-slide */
const activeSwiper = new Swiper('.co_culture_active-slide', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: true,
    pauseOnMouseEnter: true,
    autoplayResume: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  
  });


