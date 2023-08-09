let windowHeight = $(window).innerHeight();
let windowOutHeight = $(window).outerHeight();
/* lcd list */
let lcdItem = $('.lcd_layer_list li');
let lcdItemList = $('.lcd_layer_list');
/* oled list */
let oledItem = $('.oled_layer_list li');
let oledItemList = $('.oled_layer_list');
let lcdItemListSCT = lcdItemList.offset().top; // = oledItemLlstSCT
/* lcd/oled 레이어 이름 */
let layerWrapper = $('.layer_name_wrap');
let layerWrapperSCT = layerWrapper.offset().top;
/* 명암비 */
let conRatio = $('.contrast_ratio');
let conRatioSCT = conRatio.find('.pheight').offset().top;
/* 다이아몬드 픽셀 */
let diaPixel = $('.diamond_fixel');
let diaPixelSCT = diaPixel.find('.dheight').offset().top;
/* 반응속도 */
let rsTitle = $('.reaction_speed_title');
let rsTitleOST = rsTitle.offset().top;
let rsImg = $('.reaction_speed_img');
let rsImgOST = rsImg.offset().top;
/* OLED Reason */
let humanBanner = $('.human_banner');
let humanBannerOST = humanBanner.offset().top;
let protectBanner = $('.protect_banner');
let protectBannerOST = protectBanner.offset().top;
let futureBanner = $('.future_banner');
let futureBannerOST = futureBanner.offset().top;



$(window).scroll(function(){
  let sct = $(this).scrollTop();
  // console.log(sct);

  if(sct >= lcdItemListSCT - windowHeight){
    lcdItem.addClass('active');
    oledItem.addClass('active');
  } else {
    lcdItem.removeClass('active');
    oledItem.removeClass('active');
  }
  
  if(sct >= layerWrapperSCT - windowHeight){
    layerWrapper.addClass('active');
  } else {
    layerWrapper.removeClass('active');
  }

  if(sct >= conRatioSCT - windowHeight){
    conRatio.addClass('active');
  }  else {
    conRatio.removeClass('active');
  }

  if(sct >= diaPixelSCT - windowHeight){
    diaPixel.addClass('active');
  } else {
    diaPixel.removeClassClass('active');
  }

  if(sct >= rsTitleOST - windowHeight){
    rsTitle.addClass('active');
  } else {
    rsTitle.removeClass('active');
  }
  if(sct >= rsImgOST - windowHeight){
    rsImg.addClass('active');
  } else {
    rsImg.removeClass('active');
  }



  if(sct >= protectBannerOST - windowHeight){
    humanBanner.addClass('active');
  } else {
    humanBanner.removeClass('active');
  }
  if(sct >= futureBannerOST - windowHeight){
    protectBanner.addClass('active');
  } else {
    protectBanner.removeClass('active');
  }
  if(sct >= futureBannerOST - windowHeight){
    futureBanner.addClass('active');
  } else {
    futureBanner.removeClass('active');
  }

});

/* Lcd part */
let lcditem = $('.lcd_layer_item');
let lcdList = $('.lcd_layer_list');

$('.layer_name_item_lcd1').hover(function(){
  lcditem.eq(0).find('p').toggleClass('active');
});
$('.layer_name_item_lcd2').hover(function(){
  lcditem.eq(1).find('p').toggleClass('active');
});
$('.layer_name_item_lcd3').hover(function(){
  lcditem.eq(2).find('p').toggleClass('active');
});
$('.layer_name_item_lcd4').hover(function(){
  lcditem.eq(3).find('p').toggleClass('active');
});
$('.layer_name_item_lcd5').hover(function(){
  lcditem.eq(4).find('p').toggleClass('active');
});
$('.layer_name_item_lcd6').hover(function(){
  lcditem.eq(5).find('p').toggleClass('active');
});

/* oled part */
let oleditem = $('.oled_layer_item');

$('.layer_name_item_oled1').hover(function(){
  oleditem.eq(0).find('p').toggleClass('active');
});
$('.layer_name_item_oled2').hover(function(){
  oleditem.eq(1).find('p').toggleClass('active');
});
$('.layer_name_item_oled3').hover(function(){
  oleditem.eq(2).find('p').toggleClass('active');
});
$('.layer_name_item_oled4').hover(function(){
  oleditem.eq(3).find('p').toggleClass('active');
});











