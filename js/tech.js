$(window).scroll(function() {
  let $this = $(this).scrollTop();
  let qddotOST = $(".perspective").offset().top;
  let isActive = false;
  if($this >= qddotOST) {
    if(!isActive) {
      $(".qd_dot_ani > div").addClass("animate");
      isActive = true;
    } else {
      $(".qd_dot_ani > div").removeClass("animate");
    }
  }
})