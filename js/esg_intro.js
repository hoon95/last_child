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

$('.content > *').lettering();

let target = $('.s3');
let scrollCount = 0;
let isScrolling = false;
  
  $(window).scroll(function() {
    let targetSection = $('.s3');
    if(targetSection.offset().top <= $(window).scrollTop()){
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

            if(scrollCount === letters.length){
              scrollCount = 0;
              targetSection.addClass('active');
              $(window).off('scroll');
              scrollToNextSection();
            }
          }
        }
      }
    }
    // if(targetSection.hasClass('active')){
    //   let valueHeight = $('.value').offset().top;
    //   targetSection.css({height:'100vh', position: 'relative'});
    //   $(window).scrollTop(valueHeight);
    //   $(window).off('scroll');
    // }
    function scrollToNextSection() {
      if (targetSection.next().length > 0) {
        let nextSection = targetSection.next();
        $('html, body').animate({ scrollTop: nextSection.offset().top }, 500, function() {
        });
      }
    }
  });


  // swiper
  var swiper = new Swiper('.value_slide_container', {
    spaceBetween: 0,
    centeredSlides: true,
    speed: 4000,
    autoplay: {
      delay: 1
    },
    loop: true,
    loopedSlides: 1,
    slidesPerView: 'auto',
    disableOnInteraction: true,
    allowTouchMove: false,
    initialSlide: 3
  });

  let slideHeight = $('.value_slide_container').outerHeight();
  $(window).resize(function(){
    $('.value_bottom').css({height: slideHeight})
  });
  $(window).trigger('resize');

  AOS.init();