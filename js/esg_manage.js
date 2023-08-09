AOS.init({});

pushInStart({
});

let scrollAmt = 0;

if(matchMedia('(min-width: 769px)').matches){
    $(window).scroll(function(){
        scrollAmt ++;
        $('.mover').stop().animate({offsetDistance: `${scrollAmt}%`});
    })
}