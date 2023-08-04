// Main_section2_tech 시작
let techwrapperSwiper = new Swiper(".tech2-slide", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: "#tech_tab .slide_btn.prev",
        prevEl: "#tech_tab .slide_btn.next",
    },
});

let techMenu = $(".section2 .tec_tab_list > a"); //탭메뉴
let techBar = $(".section2 .tech_bar");

techMenu.on("click", function (e) {
    e.preventDefault();
    let techBarTop = $(this).position().top;
    //let teBox = techContent.index();
    let activeIndex = $(this).index();

    techwrapperSwiper.slideTo(activeIndex);

    //  let techTab = $(".section2 .tec_tab");

    $(this).addClass("active").siblings().removeClass("active");

    // if(techwrapp.hasClass("swiper-slide-active")) {
    //     techBar.css({ top: techBarTop });
    // }

    techBar.css({ top: techBarTop });
    //techwrapperSwiper.slideTo(idx);
    //swiper-slide-active
});
// Main_section2_tech 종료