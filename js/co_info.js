/* company 서브페이지 aos 라이브러리 */
AOS.init({
  duration: 600,
  delay: 200
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
let co_business = $('.business_area .content'), 
    co_businessW = co_business.outerWidth(),//2740
    co_businessLeft = co_business.position().left,//41.5
    windowW = $(window).innerWidth(),//1043
    co_businessSlideH = co_business.height(),//787.969
    co_businessOST = co_business.offset().top,//9596.296875
    co_addHeight = (co_businessW - co_businessLeft - windowW) + 17*8; //1760


console.log(co_addHeight);
$('.business_area .slide').css({height:co_businessSlideH+co_addHeight});
$(window).scroll(function(){
  let myScroll = $(window).scrollTop() - co_businessOST;
  if(myScroll > 0 || myScroll < $('footer').offset().top){
    co_business.css({transform:`translateX(-${myScroll}px)`});
  }
});



