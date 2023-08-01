/* Header menu*/
$('.hamburger-button').on('click', function(event){
  event.preventDefault();
  $(this).toggleClass('active');
  $('.overlay').toggleClass('visible');
  $('body').toggleClass('black');
  $('header').toggleClass('active');
});

let menuList = $('.menu_overlay > li');
let subMenuList = $('.submenu_overlay > li');

menuList.hover(function(){
  $(this).find('.submenu_overlay > li').stop().slideToggle();
  menuList.find('ul').stop().animate({height:'60%'}),
  menuList.css({padding:'calc(var(--base-unit)*2)'});
  $(this).find('.submenu_overlay > li').addClass('visible');
});



/* Go-top btn*/

let $gotop = $('.go_top');
let $gotopInner = $('.inner_top');
let $gotopBtn = $('.go_top_btn');
let topH = $gotop.outerHeight();
let innerH = $gotopInner.outerHeight();
let bodyH = $('body').outerHeight();
let $windowH = $(window).innerHeight();

//console.log(bodyH);

$(window).scroll(function(){
  //현재 지금 높이 - 실제
  let sct = $(this).scrollTop(); 
  // console.log(sct);
   //현재 지금 높이를 퍼센트화 한 후 실제 스크롤 양을 구함

   /* (바디 전체 높이 - 화면 높이) = 실제 스크롤양 */
  let myHeightPercent = sct/(bodyH-$windowH)*100;
  //console.log(myHeightPercent);

  $gotopInner.css({height:`${myHeightPercent}%`});
  if(myHeightPercent >= 100){
    $gotopBtn.css({color:'#fff'});
  }
  /* 스크롤 끝까지 내렸을때 색변경 원할시
  else{
    $gotopBtn.css({color:'#000'});}*/
});

$gotop.click(function(){
  $('html,body').animate({scrollTop : 0}, 400);
});

