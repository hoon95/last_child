let co_wrap = $('.co_his_content .content_wrap'),
    co_wrapH = co_wrap.outerHeight(),
    co_con = co_wrap.find('.content'),
    co_conH = co_con.outerHeight(),
    co_conOST = co_con.offset().top;

$(window).scroll(function(){
  let coSCT = $(this).scrollTop() - co_conOST;
  let myScroll = co_conH/(co_wrapH-co_conH)*coSCT;
  
  console.log(coSCT);
  console.log($(this).scrollTop());
  if(myScroll > 0){
    co_wrap.css({transform:`translateY(-${myScroll}px)`});
  }
});

/*
let co_wrap = $('.co_his_content .content_wrap'),
    co_wrapH = co_wrap.outerHeight(),
    co_con = co_wrap.find('.content'),
    co_conH = co_con.outerHeight(),
    co_conOST = co_con.offset().top-110,
    lastSCT = co_conOST+co_wrapH-co_conH
    scrollRatio = (co_wrapH-co_conH)/lastSCT;

    console.log(scrollRatio);
$(window).scroll(function(){
  let coSCT = ($(this).scrollTop() - co_conOST)*scrollRatio;
  let myScroll = co_conH/(co_wrapH-co_conH)*coSCT;

  console.log(coSCT);
  if(myScroll > 0){
    co_wrap.css({transform:`translateY(-${myScroll}px)`});
  }
});
*/