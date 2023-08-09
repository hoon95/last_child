/* 브라우저 너비에 따라 img src 수정 */

let myswitch = false;

$(window).resize(function(){
  let imgtarget = $('.change_img');
  let windowW = $(window).innerWidth();
  if(windowW <= 992){
    // console.log('tablet')
    if(!myswitch){
      imgtarget.each(function(){
        //이미지 경로를 .을 기준으로 배열로 만들기
        let targetSRC = $(this).attr('src').split('.');
        let targetName = targetSRC[0];
        let targetExtension = targetSRC[1];
        
        //이미지의 경로에 _mo를 붙여 모바일전용 사진으로 교체
        $(this).attr('src',`${targetName}_mo.${targetExtension}`);
        
        //resize가 계속 일어나도 한번만 실행되도록 설정
        myswitch = true;
      });
    }
  } else{
    // console.log('pc')
    imgtarget.each(function(){
      let targetSRC =$(this).attr('src');
      //모바일 사진 경로에서 _mo를 제거
      let newSRC = targetSRC.replace('_mo','');
      $(this).attr('src',newSRC);
    });
    
  }
});
$(window).trigger('resize');
/* // 브라우저 너비에 따라 img src 수정 */




/* company 서브페이지 aos 라이브러리 */
AOS.init({
  duration: 600,
  delay: 200
});

let co_introduceItem = $('.co_introduce article');
let co_introItemATTR = co_introduceItem.attr('data-aos');

$(window).resize(function(){
  let windowW = $(this).innerWidth();

  if(windowW <= 768){
    // console.log('tablet')
    co_introduceItem.attr('data-aos','fade-bottom');
    $('.ceo_greeting .content *').attr('data-aos','fade-bottom');
    $('.ceo_greeting .content *:nth-child(1)').removeAttr('data-aos');
  }
});
$(window).trigger('resize');
/* // company 서브페이지 aos 라이브러리 */


/* CO_INFORMATION SECTION1 */
//스크롤 시 타이틀 이동
let co_infoTitle = $('.ceo_greeting .title');

$(window).scroll(function(){
  let scrollMove = 0;
  //스크롤 할때마다 스크롤양의 0.5배를 추가
  scrollMove += $(this).scrollTop()/2;
  //title top값에 반영해 스크롤 속도 빠르게 조절
  co_infoTitle.css({top:`-${scrollMove}px`});
});
/* // CO_INFORMATION SECTION1 */


/* CO_INFORMATION SECTION2 */
// co_info co_image 확대 
let co_imageH = $('.co_image').outerHeight();
let co_imageOST = $('.co_image').offset().top;
let co_imageConH = $('.co_image .content').outerHeight();


$(window).scroll(function(){
  let myScroll = $(window).scrollTop() - co_imageOST + 200;
  let imageWidth = 0.5;
  let mathScroll = myScroll/(co_imageH - co_imageConH) * 100/200;
  
  //img width(scale값)가 1이면
  if(imageWidth == 1){
    //1로 설정(더이상 더하지 않도록)
    imageWidth = 1;
  //아니라면
  } else {
    //스크롤 양 대비한 값을 더하기
    imageWidth += mathScroll;
  }

  $('.co_image img').css({transform:`scale(${imageWidth})`});
});
/* // CO_INFORMATION SECTION2 */


/* CO_INFORMATION SECTION4 */
// co_info business_area 가로스크롤
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

  //현재 스크롤양에서 섹션 offset top값을 빼기
  let myScroll2 = SCT - contentOST ;

  //스크롤양이 섹션안에 머무르고 있다면
  if(myScroll2 > 0 && myScroll2 < getHeight+200){//+200 content오른쪽여백
    //슬라이드의 translate값 조정
    co_slide.css({transform: `translateX(-${myScroll2}px)`});

    //스크롤때마다 변하는 translate값을 lasttras에 담아두기
    lastTras = myScroll2;

  //아니라면
  } else{
    //lastTras값으로 고정
    co_slide.css({transform: `translateX(-${lastTras}px)`});
  }
});
/* // CO_INFORMATION SECTION4 */