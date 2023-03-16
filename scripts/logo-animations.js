//Scroll Trigger
gsap.registerPlugin(ScrollTrigger);

var t1 = gsap.timeline({repeat: 0});
t1.from("#a", {y:-100, duration: 3});

var t2 = gsap.timeline({repeat: 0});
t2.from("#body", {y:70, duration: 3});

var t3 = gsap.timeline({repeat: 0, delay: 2.5});
t3.from(".ray", {
    duration: 1,
    opacity: 0,
    stagger: {
      grid: [0,13],
      axis: "x",
      from: "center",
      amount: 1.5
    }
  }); 
  t3.from("#HEY", {
    duration: 2,
    ease: "bounce.out",
    opacity: 0,
    y: -200
  });
  t3.from("#SUNSHINE", {
    duration: 1,
    ease: "back.out",
    opacity: 0,
    x: 200
  });

  var sunshineAnimation = function() { 
    t1.play();
    t2.play();
    t3.play();
};


window.onload = function()
{
   sunshineAnimation();
    //console.log("animation played");
}


var morph = KUTE.fromTo('#heart-1', {path: '#heart-1'}, {path: "#fill"}, {duration: 1000}, {morphPrecision: 2});
var heartAnimation = KUTE.fromTo("#heart-2", {opacity: 0}, {opacity: 1});
morph.chain(heartAnimation);
//letters
var t4 = gsap.timeline({repeat: 0, delay: 2.5});
t4.from(".letter", {
    duration: 1,
    delay: 2,
    opacity: 0,
    stagger: {
      grid: [0,27],
      axis: "x",
      from: "end",
      amount: 1.5
    }
  }); 

  var coffeeAnimation = function() {
    morph.start();
    t4.play();
  } 

ScrollTrigger.create({
    trigger: "#BG",
    onEnter: function() {coffeeAnimation();},
  });