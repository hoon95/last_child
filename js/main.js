/* TECHNOLOGY_SECTION_02 - 기서은 */
let techwrapperSwiper; 
techwrapperSwiper = new Swiper(".tech2-slide", {
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
    nextEl: "#tech_tab .slide_btn.next",
    prevEl: "#tech_tab .slide_btn.prev",
  },
});

techwrapperSwiper.on("slideChange", function () {
  //0console.log(techwrapperSwiper.realIndex);
  activetab(techwrapperSwiper.realIndex);

});

let techMenu = $(".section2 .tec_tab_list > a"); //탭메뉴
let techBar = $(".section2 .tech_bar");

let techPrevBtn = $("#tech_tab .prev");
let techNextBtn = $("#tech_tab .next");

let tectebSlide = $(".tech2-slide .swiper-wrapper > div"); //탭 슬라이드

let techMenuIdx = techMenu.length;
let tectebIndex = tectebSlide.length;


techMenu.on("click", function (e) {
  e.preventDefault();
  //let teBox = techContent.index();
  let activeIndex = $(this).index();
  //console.log("activeIndex" + activeIndex);

  techwrapperSwiper.slideTo(activeIndex);
});

$(window).resize(function() {
  activetab(0);
})

function activetab(idx) {

  let windowWidth = $(window).width();
  let techHeight = techMenu.eq(idx).outerHeight();

  if (windowWidth <= 768) {
    let techBarTop = techMenu.eq(idx).position().left;
    let techWidh = techMenu.eq(idx).outerWidth();
      
    techBar.css({ left: techBarTop, width: techWidh, height: "5px" });
    techBar.css({ top: "auto" });

  } else {
    let techBarTop = techMenu.eq(idx).position().top;
    techBar.css({ top: techBarTop, width: "5px", height: techHeight});
    techBar.css({ left: 0});
  }

  let techIDx = techMenu.eq(idx);
  techIDx.addClass("active").siblings().removeClass("active");
}
/* // TECHNOLOGY_SECTION_02 - 기서은 */


/* ESG_SECTION_03 - 김다훈 */
$('.esg_hover').css({display: 'none'})

$('.esg_list_exp').hover(
  function(){
    esgNumber();
    if($(window).innerWidth() > 768){ 
      $('.esg').css({height: '100vh'});
      $(this).stop().animate({width: '52vw'});
      $(this).find('.esg_hover').css({display:'inline-block'});
      $('.esg_exp').stop().animate({width: '13vw'});
      $('.esg_exp').addClass('align-items-center');
      $('.esg_title').css({writingMode: 'vertical-lr'});
      $('.esg_desc').css({display: 'none'});
      numberFormat($('.esg_hover span'));
    }else{
      $('.esg').css({height: '150vh'});
      $(this).css({width: '100vw'});
      $(this).find('.esg_hover').css({display:'inline-block'});
      $('.esg_desc').css({display: 'none'});
    }
  },
  function(){
    if($(window).innerWidth() > 768){
      $(this).stop().animate({width: '17.3vw'})
      $(this).find('.esg_hover').css({display:'none'});
      $('.esg_exp').stop().animate({width: '47vw'});
      $('.esg_exp').removeClass('align-items-center');
      $('.esg_title').css({writingMode: ''})
      $('.esg_desc').css({display: 'block'});
    }else{
      $('.esg_exp').stop().animate({width: '100vw'});
      $('.esg_desc').css({width: '100vw', display: 'inline-block'});
      $('.esg_hover').css({display: 'none'});
    }
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
    });
  });
}

function numberFormat(inputNumber) {
  return inputNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
/* // ESG_SECTION_03 - 김다훈 */


/* BUSINESS AREA_SECTION_04 - 나서영 */
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
  //console.log(SCT);
});
$(window).trigger('scroll');
/* // BUSINESS AREA_SECTION_04 - 나서영 */


/* DIALOG POPUP - 나서영 */
var popup = $(".popup");
var popup_closeBtn = popup.find("#close");
var popup_input = popup.find("#daycheck");

popup.find('.figma').click(function() {
  window.open('https://www.figma.com/file/SBpYD7PNfQY7D8PyVIq3Kk/%EA%B8%B0%ED%9A%8D?type=design&node-id=99%3A489&mode=design&t=TDF13rdFH2Kk27vs-1', '_blank');
});

popup.find('.git').click(function() {
  window.open('https://github.com/hoon95/last_child', '_blank');
});

//쿠키 있는지 확인해서 popup 보일지 결정
function cookieCheck(name) {
  var cookieArr = document.cookie.split(';');
  var visited = false;

  for (var i = 0; i < cookieArr.length; i++) {
    if (cookieArr[i].indexOf(name) > -1) {
      visited = true;
      break;
    }
  }

  if (!visited) {
    popup.attr('open', '');
  }
}

cookieCheck('samsung');

popup_closeBtn.click(function() {
  popup.removeAttr('open');

  if (popup_input.prop('checked')) {
    setCookie('samsung', 'popup', 1);
  } else {
    setCookie('samsung', 'popup', -1);
  }
});

//쿠키 만들기
function setCookie(name, value, day) {
  var date = new Date();
  date.setDate(date.getDate() + day);

  document.cookie = name + '=' + value + ';expires=' + date.toUTCString();
}
/* // DIALOG POPUP - 나서영 */