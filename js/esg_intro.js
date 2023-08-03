// let sustainWidth = $('.sustain .s3_title').width(),
//     sustainContentWidth = $('.sustain .s3_content').width();

// $('.sustain .s3_content').css({marginLeft: `${sustainWidth - sustainContentWidth}px`});

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

// $('.s3_title').lettering();
// $('.s3_content').lettering();
// $('.value_title').lettering();
// $('.value_content').lettering();
// $('.value_list_title').lettering();
// $('.value_list_content p').lettering();

    // $(window).scroll(function(){
    //     scrollFill($('.s3_title span'), 'white')
    //     scrollFill($('.s3_content span'), 'white')
    //     scrollFill($('.value_title span'), '#121212')
    //     scrollFill($('.value_content span'), '#121212')
    //     scrollFill($('.value_list_title span'), '#121212')
    //     scrollFill($('.value_list_content p span'), '#121212')
    // })

    // function scrollFill(scrVar, scrColor) {
    //     let scrollAmt = $(window).scrollTop() - scrVar.offset().top,
    //     currentIdx = Math.floor(scrollAmt / 20);
  
    //     scrVar.each(function(idx) {
    //       if(idx === currentIdx){
    //           $(this).css({color: scrColor})
    //       }
    //     });
    //   }

    let target = $('.target');
    $('.content > *').lettering();
    
    
    // console.log(letters);
    
    let lastScrollTop = 0;
    let scrollCount = 0;
    let isScrolling = false;
      
      $(window).scroll(function() {
        let currentScrollTop = $(this).scrollTop();    
    
        if (currentScrollTop > lastScrollTop) {
    
            target.each(function(){
              let targetSection = $(this);
              if(targetSection.offset().top <= currentScrollTop){
                if(!targetSection.hasClass('active')){
                  if (!isScrolling) {      
                          
                    let letters = targetSection.find('span');
                    if(scrollCount < letters.length){
                      letters.eq(scrollCount++).addClass('active');
                      isScrolling = true;
                
                      // 500ms의 간격으로 스크롤 이벤트 체크
                      setTimeout(function() {
                        isScrolling = false;
                      }, 100);
        
                      if(scrollCount ===letters.length){
                        scrollCount = 0;
                        targetSection.addClass('active');
                      }
                    }              
                    console.log(scrollCount);
                  }
                }else{
                    $('.target').css({position: 'relative'})
                    $('.blank').css({height: 0})
                    $('html').animate({scrollTop: $('.value article').offset().top}, 400)
                }
              }        
            });
        } 
        
        lastScrollTop = currentScrollTop; // 이전 스크롤 위치 갱신
      });