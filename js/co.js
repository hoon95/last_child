let co_imageH = $('.co_image').outerHeight(); // 2460 <- 1040 + 1420
let co_imageOST = $('.co_image').offset().top; // 2891.703125
let co_imageConH = $('.co_image .content').outerHeight();// 1040


$(window).scroll(function(){
  //2900(시작) 4120(끝) -> 차이 1220
  //200의 출처는.....?
  let scroll = $(window).scrollTop() - co_imageOST + 200;
  let imageWidth = 0.5;
  let mathScroll = scroll/(co_imageH-co_imageConH) * 100/20;
  
  if(imageWidth == 1){
    imageWidth = 1;
  } else if(imageWidth == 0.5){
    imageWidth = 0.5;
  } else {
    imageWidth += mathScroll;
  }
  console.log(imageWidth)
  $('.co_image img').css({transform:`scale(${imageWidth})`});
});