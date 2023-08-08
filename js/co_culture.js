/* COMPANY CULTURE */

/* pushin */
// pushInStart();

/* samsung display culture */
let windowHeight = $(window).innerHeight();

let firstSamsung = $('.first_text');
let firstSamsungOST = firstSamsung.find('h1').offset().top;
let secondDisplay = $('.second_text');
let secondDisplayOST = secondDisplay.find('h1').offset().top;
let thirdCulture = $('.third_text');
let thirdCultureOST = thirdCulture.find('h1').offset().top;
/* section3 background */
let sdcCulture = $('.co_culture_section2');
let sdcCultureOST = sdcCulture.find('img').offset().top;
let mission = $('.co_culture_section3');
let missionOST = mission.find('img').offset().top;
let vision = $('.co_culture_section4');
let visionOST = vision.find('img').offset().top;

$(window).scroll(function(){
  let sct = $(this).scrollTop();
  console.log(sct);
  if(sct >= firstSamsungOST - windowHeight){
    firstSamsung.addClass('active');
  }
  if(sct >= secondDisplayOST - windowHeight){
    secondDisplay.addClass('active');
  } 
  if(sct >= thirdCultureOST - windowHeight){
    thirdCulture.addClass('active');
  }

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


