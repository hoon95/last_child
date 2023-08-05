gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);
gsap.config({trialWarn: false});    // 콘솔 경고창 비활성화

// ScrollTrigger.defaults({
//     markers: false
// });

let tl = gsap.timeline();
let mySplitText = new SplitText(".line", { type: "lines, words" });
let chars = mySplitText.chars;

// gsap.set(".sustain", { perspective: 400 });


// tl.from(chars, {
//   duration: 5,
//   opacity: 0,
//   scale: 0,
//   y: 80,
//   rotationX: 180,
//   transformOrigin: "0% 50% -50",
//   ease: "back",
//   stagger: 0.01
// });

function runSplit(){
    let currentElement = $('.split-lines');
    text = new SplitType(currentElement, {types: 'lines, words'});
    $('.line').append(`<div class='line-mask'></div>`)
}


runSplit();

$(window).resize(function(){
    text.revert();
    runSplit();
})

$('.line').each(function(){
    let triggerElement = $(this);
    let targetElement = $(this).find('.line-mask');

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: triggerElement,
            // trigger element- viewport
            start: "top center",
            end: "bottom center",
            scrub: 1
        }
    });
    tl.to(targetElement, {
        width: "0",
        duration: 1
    })
})




// $('#animate').click(function(){
//     tl.restart();
// })