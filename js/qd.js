$(window).scroll(function() {
  let $this = $(this).scrollTop();
  let qddotOST = $(".qd_dot").offset().top-200;
  //let isActive = false;
  if($this >= qddotOST) {
    $(".qd_dot_ani > div").addClass("animate");
  }else {
      $(".qd_dot_ani > div").removeClass("animate");
  }

  let qdoledOST = $(".qd_oled_box").offset().top - 400;
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

  let qddragOST = $(".qd_drag_box").offset().top - 500;
  if($this >= qddragOST) {
    $(".qd_drag_box").addClass("animate");
  }else {
    $(".qd_drag_box").removeClass("animate");
  }
})

// var drag1Width = $(".drag1").width(); // drag1 이미지의 너비
// var drag2Width = $(".drag2").width(); // drag2 이미지의 너비

// var containmentArray1 = [0, 0, 200.5, 0]; // drag1 이미지의 범위
// var containmentArray2 = [0, 0, drag2Width, 0]; // drag2 이미지의 범위

// $(".drag1").draggable({
//   axis: "x",
//   containment: containmentArray1,
//   cancel: false
// });

// $(".drag2").draggable({
//   axis: "x",
//   containment: containmentArray2,
//   cancel: false
// });


pushInStart();
