gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline();

tl.from('.hero-design', {
    opacity: 0,
    scale: 0.1,
    duration: 3,
    ease: Power4.easeOut
})

.from('.stagger-1', {
  opacity: 0,
  scale:0.1,
  y: -50,
  stagger: .3,
  ease: Power4.easeOut,
  duration: 2
}, "-=2" /*offset value to get rid of initial delay*/);

gsap.to(".scroll-hint", { y: 10, duration: 2, repeat: -1, ease: "bounce.out", delay: 4 });

var slideInUp = gsap.utils.toArray(".slide-in-up").forEach(function(elem, index) {
  var tlSlideInUp = gsap.timeline({
    scrollTrigger: {
      trigger: elem,
      start: "top 90%",
      markers: false
    },
  })
  .from(elem, {opacity: 0, y: 50, duration: .8, stagger:.3}) 
});

var slideInDown = gsap.utils.toArray(".slide-in-down").forEach(function(elem, index) {
  var tlSlideInDown = gsap.timeline({
    scrollTrigger: {
      trigger: elem,
      start: "top 90%",
      markers: false
    },
  })
  .from(elem, {opacity: 0, y: '-=10', duration: 1, stagger:.1})
});

var slideInRight = gsap.utils.toArray(".slide-in-right").forEach(function(elem, index) {
  var tlSlideInRight = gsap.timeline({
    scrollTrigger: {
      trigger: elem,
      start: "top 90%",
      markers: false
    },
  })
  .from(elem, {opacity: 0, x: 100, duration: .8, stagger:.3}) 
});

var slideInLeft = gsap.utils.toArray(".slide-in-left").forEach(function(elem, index) {
  var tlSlideInLeft = gsap.timeline({
    scrollTrigger: {
      trigger: elem,
      start: "top 90%",
      markers: false
    },
  })
  .from(elem, {opacity: 0, x: -100, duration: .8, stagger:.3}) 
});

//floating animation
var floating = gsap.timeline({
  yoyo: true,
  repeat: -1,
  paused: true
})
.to ('.floating', 3, {y:'+=8', rotation: '+=.5', ease: Sine.easeInOut})
.to ('.floating', 3, {y:'-=8', rotation: '-=.5', ease: Sine.easeInOut})

var fadeIn = gsap.utils.toArray(".fade-in").forEach(function(elem, index) {
  var fadeIN = gsap.timeline({
    onComplete: function(){floating.play()},
    scrollTrigger: {
      trigger: elem,
      start: "top bottom",
      markers: false
    },
  })
  .from(elem, {y: -100, opacity: 0, duration: 3, stagger:.3}) 
});

gsap.from('#sum', {
	scrollTrigger: '#sum',
  y: -50,
  duration: 2,
  delay:  .5,
  ease: 'bounce.out'
});

gsap.timeline({
  scrollTrigger: {
        trigger: '.contact',
        start: "top bottom"
    }
})
.from('#line', {
  opacity: 0,
  attr:{"stroke-dasharray":400}},
  {attr:{"stroke-dashoffset":0}
})
.from('#mail', {
  scale: .2,
    opacity: 0,
})
.to('#closed', {
  opacity: 0
})
.to('#open', {
  opacity: 1
})
.to('#hearts', {
  opacity:1
})
.from("#cursor-pointer", {
  opacity: 0, 
  scale:.5,
  transformOrigin: 'center', 
  repeat: -1, 
  duration: 1, 
  yoyo: true, 
  ease: "bounce.out"
});

function hoveredLetter() {
  var duration = 1;
  gsap.to("#top", {fill: '#cccccc'});
  gsap.to("#open-lower", {fill: '#cccccc'});
  gsap.to("#open-upper", {fill: '#9e9e9e'});
  gsap.to("#mail-body", {fill: '#bababa'});
  gsap.to("#mail", duration / 4, {y:-10, ease:Power2.easeOut});
  gsap.to("#mail", duration / 2, {y:0, ease:Bounce.easeOut, delay:duration / 4});
}

function normalLetter() {
  gsap.to("#top", {fill: '#e6e6e6'});
  gsap.to("#open-lower", {fill: '#e6e6e6'});
  gsap.to("#open-upper", {fill: '#b7b7b7'});
  gsap.to("#mail-body", {fill: '#d3d3d3'});
}