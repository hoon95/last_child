// Main_section2_tech 시작
// const techwrapperSwiper = new Swiper(".tech-wrapper-slide", {
//     // Optional parameters
//     direction: "horizontal",
//     loop: true,

//     // If we need pagination
//     pagination: {
//         el: ".swiper-pagination",
//     },

//     // Navigation arrows
//     navigation: {
//         nextEl: "#tech_tab .slide_btn.prev",
//         prevEl: "#tech_tab .slide_btn.next",
//     },

//     // And if we need scrollbar
//     scrollbar: {
//         el: ".swiper-scrollbar",
//     },
// });
// Main_section2_tech 종료


// Main_section3_esg
$('.esg_hover').css({display: 'none'})
$('.esg_list_exp').hover(
    function(){
        esgNumber();
        $(this).stop().animate({width: '52vw'});
        $(this).find('.esg_hover').css({display:'inline-block'});
        $('.esg_exp').stop().animate({width: '13vw'});
        $('.esg_exp').addClass('align-items-center');
        $('.esg_title').css({writingMode: 'vertical-lr'});
        $('.esg_desc').css({display: 'none'});
        numberFormat($('.esg_hover span'));

    },
    function(){
        $(this).stop().animate({width: '17.3vw'})
        $(this).find('.esg_hover').css({display:'none'});
        $('.esg_exp').stop().animate({width: '47vw'});
        $('.esg_exp').removeClass('align-items-center');
        $('.esg_title').css({writingMode: ''})
        $('.esg_desc').css({display: 'block'});
    }
)

let esgNumber = function(){
    let esgHover = $('.esg_hover > div');
    esgHover.each(function(){
        let changeNum = $(this).find('span')
        let targetNum = changeNum.attr('data-num');
    
        $({num:0}).animate({num:targetNum},{
            duration: 2500,
            progress: function(){
                let change = numberFormat(Math.ceil(this.num));
                changeNum.text(change);
            }
        })
    })
}

function numberFormat(inputNumber) {
   return inputNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}