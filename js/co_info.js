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
  scrollMove += $(this).scrollTop()/2;
  // console.log(co_infoTitle);
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
let co_slideContainer = $('.business_area'),
    windowW = $(window).innerWidth(), //1903 viewport width <- 전체화면 기준
    co_slide = co_slideContainer.find('.content'), 
    co_slideW = co_slide.outerWidth(),//2740
    co_slideH = co_slide.outerHeight(); //767.609 <- 전체화면 기준

let getHeight = co_slideW - windowW;//837 <- 전체화면 기준
co_slideContainer.css({height:`${co_slideH + getHeight + 500}px`});//+500체류시간


let windowH = $(window).innerHeight(),//931
    contentOST = co_slide.offset().top,//9564.296875
    lastTras = 0;

$(window).scroll(function(){
  let SCT = $(this).scrollTop();
  let myScroll2 = SCT - contentOST ;
  console.log(myScroll2);
  if(myScroll2 > 0 && myScroll2 < getHeight+100){//+100 content오른쪽여백
    co_slide.css({transform: `translateX(-${myScroll2}px)`});
    lastTras = myScroll2;
  } else{
    co_slide.css({transform: `translateX(-${lastTras}px)`});
  }
});

/*
//화면 사이즈를 조절하면 슬라이드가 끝까지 안가는 오류...
if($(window).scrollTop() > contentOST-200){
  $(window).resize(function(){
    $('body').css('opacity',0);
    location.reload();
    $(window).scrollTop(contentOST-windowH);
    $('body').css('opacity',1);
  });
}
*/
