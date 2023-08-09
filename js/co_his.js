/* CO_HISTORY SECTION2 */
let co_con = $('.co_his_content .content');
let co_conOST = co_con.offset().top;
let co_conOSB = $('.content_wrap').outerHeight()+co_conOST - $(window).innerHeight();
let blackLine = $('.pc_line #blackLine1');
let lineLength = blackLine.find('path').get(0).getTotalLength();
let circleLocation = [];
let co_his_item = co_con.find('.item');
// console.log(lineLength);


$(window).resize(function(){
  let windowW = $(this).innerWidth();

  if(windowW > 768){
    // console.log('pc');
    blackLine = $('.pc_line #blackLine1');
    lineLength = blackLine.find('path').get(0).getTotalLength();
    circleLocation = [8142,8757,9807,11037,11892,12867,14007,15192,16257]; //각 item이 만나는 지점
    
    line(blackLine,lineLength,circleLocation,0.18,0.32);
  } else{
    // console.log('mobile, tablet');
    blackLine = $('.tablet_line #blackLine2');
    lineLength = blackLine.find('polyline').get(0).getTotalLength();
    circleLocation = [11828,13113,14583,16053,17523,18993,20463,21933,23403]; //각 item이 만나는 지점
    
    line(blackLine,lineLength,circleLocation,0.17,0.32);

  }
});
$(window).trigger('resize');


function line(target,lineLength,location,duration,lineDuration){
  //blackline svg의 길이만큼 dasharray와 dashoffset을 설정해 보이지 않도록
  target.css({
    strokeDasharray: lineLength,
    strokeDashoffset: lineLength
  });

  //스크롤을 하면
  $(window).scroll(function(){
    let sct =$(this).scrollTop();
    let newTop = parseInt($('.co_his_content').css('padding-top')) - sct*duration; //sticky top값에서 스크롤이 내려가는 속도비율을 곱해 빼주기 
    let newLineLength = lineLength + sct*lineDuration; //스크롤양과 라인이 채워지는 속도비율을 곱해 기존의 라인길이에 더해주기
    // console.log(newLineLength);
    

    //스크롤양이 section2 공간이라면
    if(sct > co_conOST-300 && sct < co_conOSB){
      //top값을 조절해 스크롤 속도 조절
      co_con.css({top: newTop});
      //svg dashoffset을 조절해 라인이 채워지도록 조절
      target.css({strokeDashoffset: newLineLength});
    }
    

    //각 item
    co_his_item.each(function(idx){
      //각 index에 해당하는 item값보다 채워지는 라인길이가 더 커지면
      //+70 : 해당 location보다 조금 더 앞에서 active되도록
      if(newLineLength+70 >= location[idx]){
        //모든 item에서 active를 제거하고
        co_his_item.removeClass('active');
        //해당하는 item만 active 추가하기
        $(this).addClass('active');
      }
    })
  });
}
/* // CO_HISTORY SECTION2 */