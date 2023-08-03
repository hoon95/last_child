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
  techMenu.on("click", function(e) {
    e.preventDefault();
    let techBarTop = $(this).position().top;
    //let teBox = techContent.index();
    techwrapperSwiper.slideTo($(this).index());
    let techBar = $(".section2 .tech_bar");
    //  let techTab = $(".section2 .tec_tab");
  
    techBar.css({ top: techBarTop });
    //console.log(techOST);
  
    $(this).addClass('active').siblings().removeClass('active')
  
    //techwrapperSwiper.slideTo(idx); 
  
  });