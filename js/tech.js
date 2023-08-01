let techContent = $(".tech_tab_content").bxSlider({
    controls: false,
    pager: false,
});
$(".section2 .tech_wrapper .prev").click(function () {
    techContent.goToPrevSlide();
});
$(".section2 .tech_wrapper .next").click(function () {
    techContent.goToNextSlide();
});

$(".section2 .tec_tab p").click(function (e) {
    let techBarTop = $(this).position().top;
    e.preventDefault();
    techContent.goToSlide($(this).index());

    let techBar = $(".section2 .tech_bar");
    //  let techTab = $(".section2 .tec_tab");

    techBar.css({ top: techBarTop });
    //console.log(techOST);
});
