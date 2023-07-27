// let $top = document.querySelector('.top');
// let top_inner = $top.querySelector('.inner_top');
// let topH = $top.offsetHeight;
// let innerH = top_inner.offsetHeight;
// let bodyH = document.body.offsetHeight;

// console.log(bodyH);

// window.addEventListener('scroll',()=>{
//   let sct = window.scrollY;
//   // console.log(sct);
//   let myHeight = 100*sct/bodyH;
//   console.log(myHeight);
//   top_inner.style.height = `${myHeight}%`;
// });

let $gotop = $('.go_top');
let $gotopInner = $('.inner_top');
let $gotopBtn = $('.go_top_btn');
let topH = $gotop.outerHeight();
let innerH = $gotopInner.outerHeight();
let bodyH = $('body').outerHeight();
let $windowH = $(window).innerHeight();

console.log(bodyH);

$(window).scroll(function(){
  //현재 지금 높이 - 실제
  let sct = $(this).scrollTop(); 
  // console.log(sct);
   //현재 지금 높이를 퍼센트화 한 후 실제 스크롤 양을 구함

   /* (바디 전체 높이 - 화면 높이) = 실제 스크롤양 */
  let myHeightPercent = sct/(bodyH-$windowH)*100;
  console.log(myHeightPercent);

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


$('.slide_btn').click(function(){
  $(this).addClass('active');
}).mouseleave(function(){
  $(this).removeClass('active');
})