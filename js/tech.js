$(window).scroll(function() {
  let $this = $(this).scrollTop();
  let qddotOST = $(".qd_dot").offset().top;
  //let isActive = false;
  if($this >= qddotOST) {
    $(".qd_dot_ani > div").addClass("animate");
  }else {
      $(".qd_dot_ani > div").removeClass("animate");
  }

  let qdoledOST = $(".qd_oled_box").offset().top - 150;
  if($this >= qdoledOST) {
    $(".qd_oled_box").addClass("animate");
  }else {
      $(".qd_oled_box").removeClass("animate");
  }

  let qdrowOST = $(".qd.row").offset().top - 350;
  if($this >= qdrowOST) {
    $(".qd_oled_tv").addClass("animate");
    $(".qd_display_od ").addClass("animate");
  }else {
      $(".qd_oled_tv").removeClass("animate");
      $(".qd_display_od").removeClass("animate");
  }
})