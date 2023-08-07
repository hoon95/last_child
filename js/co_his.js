/*
let co_wrap = $('.co_his_content .content_wrap'),
    co_wrapH = co_wrap.outerHeight(),
    co_con = co_wrap.find('.content'),
    co_conH = co_con.outerHeight(),
    co_conOST = co_con.offset().top;

$(window).scroll(function(){
  let coSCT = $(this).scrollTop() - co_conOST;
  let myScroll = coSCT*co_conH/co_wrapH;
  
  console.log(myScroll);
  // console.log($(this).scrollTop());
  if($(this).scrollTop() > co_conOST){
    co_wrap.css({transform:`translateY(-${myScroll}px)`});
  }
});
*/

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
let co_con = $('.co_his_content .content');
let co_conOST = co_con.offset().top;
let co_conOSB = $('.content_wrap').outerHeight()+co_conOST - $(window).innerHeight();
let blackLine = $('#blackLine');
let lineLength = blackLine.find('path').get(0).getTotalLength();
let circleLocation = [8142,8757,9807,11037,11892,12867,14007,15192,16257];
let co_his_item = co_con.find('.item');
console.log(lineLength);

blackLine.css({
  strokeDasharray: lineLength,
  strokeDashoffset: lineLength
});

$(window).scroll(function(){
  let sct =$(this).scrollTop();
  let newTop = parseInt($('.co_his_content').css('padding-top')) - sct*0.08;
  let newLineLength = lineLength + sct*0.15;

  if(sct > co_conOST-300 && sct < co_conOSB){
    co_con.css({top: newTop});
    console.log(newLineLength);
    blackLine.css({strokeDashoffset: newLineLength});
  }

  co_his_item.each(function(idx){
    if(newLineLength+70 >= circleLocation[idx]){
      co_his_item.removeClass('active');
      // console.log($(this));
      $(this).addClass('active');
    }
  })
});