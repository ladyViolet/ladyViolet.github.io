//enable scroll trigger
gsap.registerPlugin(ScrollTrigger);

//SUNSHINE ANIMATION
//sunrise
var t1 = gsap.timeline({repeat: 0});
t1.from("#a", {y:-100, duration: 2});

var t2 = gsap.timeline({repeat: 0});
t2.from("#body", {y:70, duration: 2});

//ray sparkle & text pop
var t3 = gsap.timeline({repeat: 0, delay: 1.8});
t3.from(".ray", {
    opacity: 0,
    stagger: {
      grid: [0,13],
      axis: "x",
      from: "center",
      amount: 0.5
    }
  }); 
  t3.from("#HEY", {
    duration: 1.3,
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

  //complete timeline
  var sunshineAnimation = function() { 
    t1.play();
    t2.play();
    t3.play();
};

  var restartSunshineAnimation = function() { 
    t1.restart(true, false);
    t2.restart(true, false);
    t3.restart(true, false);
};

//BUTTERFLY ANIMATION
gsap.from("#left-upper-wing", {scaleX: .7, transformOrigin: 'right', duration: 1, repeat: -1, yoyo: true});
gsap.from("#left-lower-wing", {scaleX: .7, transformOrigin: 'right', duration: 1, repeat: -1, yoyo: true});
gsap.from("#right-upper-wing", {scaleX: .7, transformOrigin: 'left', duration: 1, repeat: -1, yoyo: true});
gsap.from("#right-lower-wing", {scaleX: .7, transformOrigin: 'left', duration: 1, repeat: -1, yoyo: true});
gsap.from("#triangle", {scale: .97, transformOrigin: 'center', repeat: -1, yoyo: true});
var t0 = gsap.timeline({repeat: -1, yoyo: true});
t0.from("#triangle", {
 fill: '#b6ecf0',
 duration: 1,
 yoyo: true
}), 
t0.from("#triangle", {
 fill: '#ffccaa',
 duration: 1,
 yoyo: true
});

//COFFEE ANIMATION
//morph heart into coffee
var morph_1 = KUTE.fromTo(
  "#heart-1",
  { path: "#heart-1" }, // from shape
  { path: "#morph-1" }, // to shape
  {
    easing: "linear",
    repeat: 0,
    yoyo: false,
    duration: 500,
    delay: 500,
    morphPrecision: 1
  }
);

var morph_2 = KUTE.fromTo(
  "#heart-1",
  { path: "#morph-1" },
  { path: "#morph-2" },
  {
    easing: "linear",
    repeat: 0,
    yoyo: false,
    duration: 200,
    morphPrecision: 1
  }
);

var morph_3 = KUTE.fromTo(
  "#heart-1",
  { path: "#morph-2" },
  { path: "#fill" },
  {
    easing: "linear",
    repeat: 0,
    yoyo: false,
    duration: 200,
    morphPrecision: 1
  }
);

morph_1.chain(morph_2);
morph_2.chain(morph_3);

//pop letters
var t4 = gsap.timeline({repeat: 0, delay: 2.5});
t4.from(".letter-1", {
    opacity: 0,
    stagger: {
      grid: [1,9],
      axis: "x",
      from: "end",
      amount: 1
    }
  }), 
  t4.from(".coffee", {
    duration: 1,
    ease: "elastic",
    opacity: 0,
    scale: 0.5
  }),
t4.from(".letter-2", {
    opacity: 0,
    stagger: {
      grid: [1,4],
      axis: "x",
      from: "end",
      amount: 0.5
    }
  }), 
  t4.from(".mornings", {
    duration: 1,
    ease: "elastic",
    opacity: 0,
    scale: 0.5
  });
  
var showHeart = gsap.timeline({repeat: 0, delay: 7});
showHeart.to("#heart-2", {scale: 0.9, opacity: 1, duration: 2, ease: "elastic"});

//complete animation
  var coffeeAnimation = function() {
    morph_1.start();
    t4.play();
    showHeart.play();
  } 

  var restartCoffeeAnimation = function() {
    morph_1.start();
    t4.restart(true, false);
    showHeart.restart(true, false);
  } 

//FLOWER ANIMATION
var flowerAnimation = function() {
  gsap.to(".flower", {
    rotation: 360, transformOrigin:"50% 50%",
    repeat: -1,
    duration: 10,
    stagger: {
      from: "center",
      amount: 1
    }
  }); 
}

var drawSurfsup = function () {
  KUTE.fromTo('#path7390',{draw:'0% 0%'}, {draw:'0% 100%'});

}

//TRIGGER EVENTS
window.onload = function () {
  t0.play();
}
ScrollTrigger.create({
    trigger: "#example-1",
    pin: "#example-1",
    start: "bottom bottom",
    end: "+=2000",
    markers: false,
    onEnter: function() {sunshineAnimation()},
    onEnterBack: function() {restartSunshineAnimation()} 
  });

  ScrollTrigger.create({
    trigger: "#example-2",
    pin: "#example-2",
    start: "bottom bottom",
    end: "+=2000",
    markers: false,
    onEnter: function() {coffeeAnimation()},
    onEnterBack: function() {restartCoffeeAnimation()} //TODO FIX enterBack ISSUE
  });

  ScrollTrigger.create({
    trigger: "#example-3",
    pin: "#example-3",
    start: "bottom bottom",
    end: "+=2000",
    markers: false,
    onEnter: function() {flowerAnimation(), drawSurfsup()} //TODO draw surfsup
  });