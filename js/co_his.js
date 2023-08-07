let co_con = $('.co_his_content .content');
let co_conOST = co_con.offset().top;
let co_conOSB = $('.content_wrap').outerHeight()+co_conOST - $(window).innerHeight();
let blackLine = $('.pc_line #blackLine');
let lineLength = blackLine.find('path').get(0).getTotalLength();
let circleLocation = [];
let co_his_item = co_con.find('.item');
console.log(lineLength);

blackLine.css({
  strokeDasharray: lineLength,
  strokeDashoffset: lineLength
});

$(window).resize(function(){
  let windowW = $(this).innerWidth();

  if(windowW > 768){
    // console.log('pc');
    blackLine = $('.pc_line #blackLine');
    lineLength = blackLine.find('path').get(0).getTotalLength();
    circleLocation = [8142,8757,9807,11037,11892,12867,14007,15192,16257];
    
    line(blackLine,lineLength,circleLocation);
  } else{
    // console.log('mobile, tablet');
    blackLine = $('.tablet_line #blackLine');
    lineLength = blackLine.find('polyline').get(0).getTotalLength();
    circleLocation = [11828,13113,14583,16053,17523,18993,20463,21933,23403];
    
    line(blackLine,lineLength,circleLocation);

  }
});
$(window).trigger('resize');

function line(target,lineLength,location){
  target.css({
    strokeDasharray: lineLength,
    strokeDashoffset: lineLength
  });

  $(window).scroll(function(){
    let sct =$(this).scrollTop();
    let newTop = parseInt($('.co_his_content').css('padding-top')) - sct*0.1;
    let newLineLength = lineLength + sct*0.2;
    console.log(newLineLength);
  
    if(sct > co_conOST-300 && sct < co_conOSB){
      co_con.css({top: newTop});
      console.log(newLineLength);
      target.css({strokeDashoffset: newLineLength});
    }
  
    co_his_item.each(function(idx){
      if(newLineLength+70 >= location[idx]){
        co_his_item.removeClass('active');
        // console.log($(this));
        $(this).addClass('active');
      }
    })
  });
}

/*
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
*/