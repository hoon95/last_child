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
let mission = $('.co_culture_section3 .co_culture_info');
let missionOST = mission.offset().top;

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
  if(sct >= missionOST - windowHeight){
    mission.addClass('active');
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


/* pushin */
