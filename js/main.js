// Main_section2_tech 시작
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
// Main_section2_tech 종료
