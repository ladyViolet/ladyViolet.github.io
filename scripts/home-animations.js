gsap.registerPlugin(ScrollTrigger);

gsap.from("#left-upper-wing", {scaleX: .7, transformOrigin: 'right', duration: 1, repeat: -1, yoyo: true});
gsap.from("#left-lower-wing", {scaleX: .7, transformOrigin: 'right', duration: 1, repeat: -1, yoyo: true});
gsap.from("#right-upper-wing", {scaleX: .7, transformOrigin: 'left', duration: 1, repeat: -1, yoyo: true});
gsap.from("#right-lower-wing", {scaleX: .7, transformOrigin: 'left', duration: 1, repeat: -1, yoyo: true});

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
duration: 2}, "-=2" /*offset value to get rid of initial delay*/);

gsap.to(".scroll-hint", { y: 10, duration: 2, repeat: -1, ease: "bounce.out", delay: 4 });

gsap.from(".transition2", {
    scrollTrigger: {
        trigger: '.transition2',
        start: "top bottom"
    },
    y: 50,
    opacity: 0,
    duration: 1.2,
    stagger: .3
});

gsap.from(".transition-3", {
  scrollTrigger: {
    trigger: '.featured-title',
    start: "top bottom"
  },
  opacity: 0,
  duration: .5,
  stagger: .1
});

gsap.to("#moon", {opacity: 0, duration: 2, repeat: -1, yoyo: true});
gsap.to("#stars", {opacity: 0, duration: 1, repeat: -1, yoyo: true});
gsap.to('#card-1, #card-2, #card-3', {y: 5, opacity: 0, duration: 3, repeat: -1, yoyo: true, stagger: .3});
gsap.to("#inner-lens", {rotate: 180, transformOrigin: 'center', duration: .5, repeat: -1, yoyo: true, repeatDelay: 1, ease: "bounce.out"});
gsap.to("#outer-lens", {rotate: -180,  transformOrigin: 'center', duration: .5, repeat: -1, yoyo: true, repeatDelay: 1, ease: "bounce.out"});
gsap.to("#curve", {scaleX: .2, transformOrigin: 'center', duration: 2, repeat: -1, ease: "elastic.out(1, 0.3)", yoyo: true});
gsap.to("#ancor", {rotate: 5, transformOrigin: 'center', duration: 2, repeat: -1, ease: "elastic.out(1, 0.3)", yoyo: true});
gsap.to("#pen", {x:5, y:5, repeat: -1, duration: 2, yoyo: true});

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