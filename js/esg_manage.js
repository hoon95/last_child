pushInStart();
AOS.init();

/* 경영정책_SECTION_03 */
let scrollAmt = 0;
if(matchMedia('(min-width: 769px)').matches){
    $(window).scroll(function(){
        scrollAmt ++;
        $('.mover').stop().animate({offsetDistance: `${scrollAmt}%`});
    })
}