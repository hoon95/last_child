/* company 서브페이지 aos 라이브러리 */
AOS.init({
  duration: 600,
  delay: 200
});

/* co_info title 이동 */
let co_infoTitle = $('.ceo_greeting .title');
let moveTop = 2467;

$(window).scroll(function(){
  let scrollMove = 0;
  scrollMove += $(this).scrollTop()/2.5;
  console.log(co_infoTitle);
  co_infoTitle.css({top:`-${scrollMove}px`});
});



/* co_info co_image 확대 */
let co_imageH = $('.co_image').outerHeight(); // 4291 <- 1040 + 3251
let co_imageOST = $('.co_image').offset().top; // 3016.296875
let co_imageConH = $('.co_image .content').outerHeight();// 791

// console.log(co_imageConH);
$(window).scroll(function(){
  //2900(시작) 4120(끝) -> 차이 1220
  //200의 출처는.....?
  let myScroll = $(window).scrollTop() - co_imageOST + 200;
  let imageWidth = 0.5;
  let mathScroll = myScroll/(co_imageH - co_imageConH) * 100/200;
  
  if(imageWidth == 1){
    imageWidth = 1;
  } else {
    imageWidth += mathScroll;
  }
  // console.log(mathScroll);
  $('.co_image img').css({transform:`scale(${imageWidth})`});
});


/* co_info business_area 가로스크롤 */
let co_business = $('.business_area .slide'), 
    co_businessW = co_business.find('.content').outerWidth(),//2740
    windowW = $(window).innerWidth(),//1043
    co_businessSlideH = co_business.height(),//787.969
    co_businessOST = co_business.offset().top,//9596.296875
    co_addHeight = co_businessW - windowW; //1760


console.log(co_businessW);
console.log(windowW);
$('.business_area .slide').css({height:`${co_businessSlideH+co_addHeight}px`});

$(window).scroll(function(){
  let myScroll = $(window).scrollTop() - co_businessOST + 17*8;
  if($(window).scrollTop() > myScroll || myScroll > $('footer').offset().top){
    $('.business_area .content').css({transform:`translateX(-${myScroll}px)`});
  }
});



