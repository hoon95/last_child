pushInStart({});
AOS.init();

/* 상생협력_SECTION_01 */
let bar1 = new ProgressBar.Circle(target1, {
    color: '#963131',
    strokeWidth: 6,
    easing: 'easeInOut',
    duration: 1500,
    text: {
      autoStyleContainer: false
    },
    step: function(state, circle) {
      let value = Math.round(circle.value() * 100);
      circle.setText(value);
    }
  });
let bar2 = new ProgressBar.Circle(target2, {
    color: '#0077ff',
    strokeWidth: 6,
    easing: 'easeInOut',
    duration: 1500,
    text: {
      autoStyleContainer: false
    },
    step: function(state, circle) {
      let value = Math.round(circle.value() * 100);
      circle.setText(value);
    }
  });
let bar3 = new ProgressBar.Circle(target3, {
    color: '#ffe600',
    strokeWidth: 6,
    easing: 'easeInOut',
    duration: 1500,
    text: {
      autoStyleContainer: false
    },
    step: function(state, circle) {
      let value = Math.round(circle.value() * 126);
      circle.setText(value);
    }
  });

let isActive = false;
$(window).scroll(function(){
  if(!isActive){
      if($(window).scrollTop() >= $('.rec_desc').offset().top - 500){
          isActive = true;
          bar1.animate(0.39);
          bar2.animate(0.51);
          bar3.animate(0.8);
      }
      
  }
})


