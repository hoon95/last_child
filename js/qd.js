$(window).scroll(function() {

 	/* qd_main_section2_qd_dot  */
  let $this = $(this).scrollTop();
  let qddotOST = $(".qd_dot").offset().top-500;
  //let isActive = false;
  if($this >= qddotOST) {
    $(".qd_dot_ani > div").addClass("animate");
  }else {
    $(".qd_dot_ani > div").removeClass("animate");
  }
  /* //qd_main_section2_qd_dot  */


  /* qd_main_section4_qd_oled  */
  let qdoledOST = $(".qd_oled_box").offset().top - 400;
  if($this >= qdoledOST) {
    $(".qd_oled_box").addClass("animate");
  }else {
    $(".qd_oled_box").removeClass("animate");
  }
  /* //qd_main_section4_qd_oled  */


  /* qd_main_section5_qd_compare  */
  let qdrowOST = $(".qd_compare .row").offset().top - 350;
  if($this >= qdrowOST) {
    $(".qd_oled_tv").addClass("animate");
    $(".qd_display_od ").addClass("animate");
  }else {
    $(".qd_oled_tv").removeClass("animate");
    $(".qd_display_od").removeClass("animate");
  }
  /* //qd_main_section5_qd_compare  */


  /* qd_main_section6_qd_drag  */
  let qddragOST = $(".qd_drag_box").offset().top - 500;
  if($this >= qddragOST) {
    $(".qd_drag_box").addClass("animate");
  }else {
    $(".qd_drag_box").removeClass("animate");
  }
  /* //qd_main_section6_qd_drag  */
})

/* qd_main_section1_pushin  */
pushInStart();

