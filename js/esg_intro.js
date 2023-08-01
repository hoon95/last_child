let sustainWidth = $('.sustain .s3_title').width(),
    sustainContentWidth = $('.sustain .s3_content').width();

$('.sustain .s3_content').css({marginLeft: `${sustainWidth - sustainContentWidth}px`});

// $('.tlt1').textillate({
//     in: {
//         effect: 'rollIn'
//     }
// });

/*
$(window).scroll(function(){
    let scrollPosition = $(window).scrollTop();
    let textAnimationData = { title: "SUSTAIN"};

    if (scrollPosition > 0) {
        $('.tlt1').textillate({
            in: { effect: "fadeIn" },
            type: "char",
            initialDelay: 0
        });

        let template = "<h2 class='h2'><%= title %></h2>";
        let html = ejs.render(template, textAnimationData);
        $("#text-container").html(html);
    }
});
*/

$('.s3_title').lettering();
$('.s3_content').lettering();

// $(window).scroll(function(){
//     let scrollAmt = $(window).scrollTop(),
//         sTitle = $('.s3_title span'),
//         sTitleLen = sTitle.length;

//     sTitle.each(function(i){
//         if(scrollAmt > i * sTitleLen){
//             sTitle.eq(sTitleLen).css({color:'white'});
//         }
        
//     })
// })
    // Lettering.js로 분리된 각 문자를 숨깁니다.

    // 스크롤 이벤트를 처리하는 함수
    let txtEvent = function handleScroll() {
      // 현재 스크롤 위치를 가져옵니다.
      let scrollAmt = $(window).scrollTop();

      // 화면에 표시할 문자의 인덱스를 계산합니다.
      let currentIdx = Math.floor(scrollAmt / 50);

      // Lettering.js로 분리된 각 문자를 순회하며, 선택할 문자는 보이게 하고, 나머지 문자는 숨깁니다.
      $('.s3_title span').each(function(idx) {
        if(idx === currentIdx){
            $(this).css({color: '#121212'})
        }
        // $(this).css("opacity", index === currentIndex ? 1 : 0);
      });



    }

    

    // 스크롤 이벤트 핸들러를 연결합니다.
    $(window).on('scroll', txtEvent);
