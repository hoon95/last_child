// Main_section2_tech 시작
/*
const techwrapperSwiper = new Swiper(".tech-wrapper-slide", {
    // Optional parameters
    direction: "horizontal",
    loop: true,

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
        nextEl: "#tech_tab .slide_btn.prev",
        prevEl: "#tech_tab .slide_btn.next",
    },

    // And if we need scrollbar
    scrollbar: {
        el: ".swiper-scrollbar",
    },
});
*/
// Main_section2_tech 종료


// Main_section4_tech 시작
let sec4_itemContainer = $('.section4 .slide_wrap');
let sec4_item = $('.section4 .slide_wrap li');
let sec4OST = $('.section4').offset().top;


$(window).scroll(function(){
  let SCT = $(this).scrollTop() - sec4OST;
  sec4_item.each(function(){
    let $this = $(this);
    let itemPosTop = $(this).position().top-500;
    if(SCT > itemPosTop){
      $this.addClass('active');
    }
  });
  console.log(SCT);
});
$(window).trigger('scroll');
// Main_section4_tech 종료