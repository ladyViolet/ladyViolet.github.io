//enable scroll trigger
//gsap.registerPlugin(ScrollTrigger);

//SUNSHINE ANIMATION
var sunriseAnimation = gsap.timeline({repeat: -1, repeatDelay: 3});

sunriseAnimation.from("#a", {y:-100, duration: 2},0), //the "0" marks the same starting point of clip-path & path
sunriseAnimation.from("#body", {y:70, duration: 2},0),
sunriseAnimation.from(".ray", {
  opacity: 0,
  stagger: {
    grid: [0,13],
    axis: "x",
    from: "center",
    amount: 0.5
  }
}),
sunriseAnimation.from("#HEY", {
  duration: 1.3,
  ease: "bounce.out",
  opacity: 0,
  y: -200
}),
sunriseAnimation.from("#SUNSHINE", {
  duration: 1,
  ease: "back.out",
  opacity: 0,
  x: 200
});

//BUTTERFLY ANIMATION
gsap.from("#left-upper-wing", {scaleX: .7, transformOrigin: 'right', duration: 1, repeat: -1, yoyo: true});
gsap.from("#left-lower-wing", {scaleX: .7, transformOrigin: 'right', duration: 1, repeat: -1, yoyo: true});
gsap.from("#right-upper-wing", {scaleX: .7, transformOrigin: 'left', duration: 1, repeat: -1, yoyo: true});
gsap.from("#right-lower-wing", {scaleX: .7, transformOrigin: 'left', duration: 1, repeat: -1, yoyo: true});
gsap.from("#triangle", {scale: .97, transformOrigin: 'center', repeat: -1, yoyo: true});
var butterflyAnimation = gsap.timeline({repeat: -1, yoyo: true});
butterflyAnimation.from("#triangle", {
 fill: '#b6ecf0',
 duration: 1,
 yoyo: true
}), 
butterflyAnimation.from("#triangle", {
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
var coffeeAnimation = gsap.timeline({repeat: -1, repeatDelay: 2});
coffeeAnimation.add( function(){ morph_1.start() } ),
coffeeAnimation.from(".letter-1", {
  opacity: 0,
  delay: 2.5,
  stagger: {
    grid: [1,9],
    axis: "x",
    from: "end",
    amount: 1
  }
}), 
coffeeAnimation.from(".coffee", {
  duration: 1,
  ease: "elastic",
  opacity: 0,
  scale: 0.5
}),
coffeeAnimation.from(".letter-2", {
  opacity: 0,
  stagger: {
    grid: [1,4],
    axis: "x",
    from: "end",
    amount: 0.5
  }
}), 
coffeeAnimation.from(".mornings", {
  duration: 1,
  ease: "elastic",
  opacity: 0,
  scale: 0.5
}),
coffeeAnimation.to("#heart-2", {
  scale: 0.9, 
  opacity: 1, 
  duration: 2, 
  ease: "elastic"
});
  
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

//VAN-ANIMATION
var vanAnimation = gsap.timeline({repeat: -1});
vanAnimation.from(".wheels", { 
  rotation: -660, 
  transformOrigin: "50% 50%", 
  duration: 5,
  ease: "none"
},0),
vanAnimation.fromTo("#vito", {x: -500}, {x: 500, duration: 5},0);

//TRIGGER EVENTS
window.onload = function () {
  sunriseAnimation.play();
  butterflyAnimation.play();
  flowerAnimation();
  //drawSurfsup();
  coffeeAnimation.play();
  vanAnimation.play();
}