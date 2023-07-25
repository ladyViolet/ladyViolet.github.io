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

var coffeeAnimation = gsap.timeline({repeat: -1, repeatDelay: 0});
coffeeAnimation.add( function(){ morph_1.start() } ),//pop letters
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
  rotation: -800, 
  transformOrigin: "50% 50%", 
  duration: 5,
  ease: "none"
},0),
vanAnimation.fromTo("#vito", {x: -500}, {x: 500, duration: 5},0);

//MORPHING-OBJECTS ANIMATION
//morph shell into monstera
var morph_object_1_1 = KUTE.fromTo(
  "#teil-7",
  { path: "#teil-7" }, // from shape
  { path: "#blatt-7" }, // to shape
  {
    easing: "linear",
    repeat: 0,
    yoyo: false,
    duration: 1000,
    delay: 1500,
    morphPrecision: 1
  }
);
var morph_object_2_1 = KUTE.fromTo(
  "#teil-6",
  { path: "#teil-6" }, // from shape
  { path: "#blatt-6" }, // to shape
  {
    easing: "linear",
    repeat: 0,
    yoyo: false,
    duration: 1000,
    delay: 1500,
    morphPrecision: 1
  }
);
var morph_object_3_1 = KUTE.fromTo(
  "#teil-5",
  { path: "#teil-5" }, // from shape
  { path: "#blatt-5" }, // to shape
  {
    easing: "linear",
    repeat: 0,
    yoyo: false,
    duration: 1000,
    delay: 1500,
    morphPrecision: 1
  }
);
var morph_object_4_1 = KUTE.fromTo(
  "#teil-4",
  { path: "#teil-4" }, // from shape
  { path: "#blatt-4" }, // to shape
  {
    easing: "linear",
    repeat: 0,
    yoyo: false,
    duration: 1000,
    delay: 1500,
    morphPrecision: 1
  }
);
var morph_object_5_1 = KUTE.fromTo(
  "#teil-3",
  { path: "#teil-3" }, // from shape
  { path: "#blatt-3" }, // to shape
  {
    easing: "linear",
    repeat: 0,
    yoyo: false,
    duration: 1000,
    delay: 1500,
    morphPrecision: 1
  }
);
var morph_object_6_1 = KUTE.fromTo(
  "#teil-2",
  { path: "#teil-2" }, // from shape
  { path: "#blatt-2" }, // to shape
  {
    easing: "linear",
    repeat: 0,
    yoyo: false,
    duration: 1000,
    delay: 1500,
    morphPrecision: 1
  }
);
var morph_object_7_1 = KUTE.fromTo(
  "#teil-1",
  { path: "#teil-1" }, // from shape
  { path: "#blatt-1" }, // to shape
  {
    easing: "linear",
    repeat: 0,
    yoyo: false,
    duration: 1000,
    delay: 1500,
    morphPrecision: 1
  }
);

//morph monstera into swallowtail
var morph_object_1_2 = KUTE.fromTo(
  "#teil-7",
  { path: "#blatt-7" }, // from shape
  { path: "#fuehler-re" }, // to shape
  {
    easing: "linear",
    repeat: 0,
    yoyo: false,
    duration: 1000,
    delay: 1500,
    morphPrecision: 1
  }
);
var morph_object_2_2 = KUTE.fromTo(
  "#teil-6",
  { path: "#blatt-6" }, // from shape
  { path: "#fluegel-re-o" }, // to shape
  {
    easing: "linear",
    repeat: 0,
    yoyo: false,
    duration: 1000,
    delay: 1500,
    morphPrecision: 1
  }
);
var morph_object_3_2 = KUTE.fromTo(
  "#teil-5",
  { path: "#blatt-5" }, // from shape
  { path: "#fluegel-re-u" }, // to shape
  {
    easing: "linear",
    repeat: 0,
    yoyo: false,
    duration: 1000,
    delay: 1500,
    morphPrecision: 1
  }
);
var morph_object_4_2 = KUTE.fromTo(
  "#teil-4",
  { path: "#blatt-4" }, // from shape
  { path: "#body-butterfly" }, // to shape
  {
    easing: "linear",
    repeat: 0,
    yoyo: false,
    duration: 1000,
    delay: 1500,
    morphPrecision: 1
  }
);
var morph_object_5_2 = KUTE.fromTo(
  "#teil-3",
  { path: "#blatt-3" }, // from shape
  { path: "#fluegel-li-u" }, // to shape
  {
    easing: "linear",
    repeat: 0,
    yoyo: false,
    duration: 1000,
    delay: 1500,
    morphPrecision: 1
  }
);
var morph_object_6_2 = KUTE.fromTo(
  "#teil-2",
  { path: "#blatt-2" }, // from shape
  { path: "#fluegel-li-o" }, // to shape
  {
    easing: "linear",
    repeat: 0,
    yoyo: false,
    duration: 1000,
    delay: 1500,
    morphPrecision: 1
  }
);
var morph_object_7_2 = KUTE.fromTo(
  "#teil-1",
  { path: "#blatt-1" }, // from shape
  { path: "#fuehler-li" }, // to shape
  {
    easing: "linear",
    repeat: 0,
    yoyo: false,
    duration: 1000,
    delay: 1500,
    morphPrecision: 1
  }
);

//morph swallowtail into fishtail
var morph_object_1_3 = KUTE.fromTo(
  "#teil-7",
  { path: "#fluegel-li-o" }, // from shape
  { path: "#li-o" }, // to shape
  {
    easing: "linear",
    repeat: 0,
    yoyo: false,
    duration: 1000,
    delay: 1500,
    morphPrecision: 1
  }
);
var morph_object_2_3 = KUTE.fromTo(
  "#teil-6",
  { path: "#fluegel-re-o" }, // from shape
  { path: "#re-o" }, // to shape
  {
    easing: "linear",
    repeat: 0,
    yoyo: false,
    duration: 1000,
    delay: 1500,
    morphPrecision: 1
  }
);
var morph_object_3_3 = KUTE.fromTo(
  "#teil-5",
  { path: "#fluegel-li-u" }, // from shape
  { path: "#bod-li-u" }, // to shape
  {
    easing: "linear",
    repeat: 0,
    yoyo: false,
    duration: 1000,
    delay: 1500,
    morphPrecision: 1
  }
);
var morph_object_4_3 = KUTE.fromTo(
  "#teil-4",
  { path: "#fluegel-re-u" }, // from shape
  { path: "#bod-re-u" }, // to shape
  {
    easing: "linear",
    repeat: 0,
    yoyo: false,
    duration: 1000,
    delay: 1500,
    morphPrecision: 1
  }
);
var morph_object_5_3 = KUTE.fromTo(
  "#teil-3",
  { path: "#fuehler-li"}, // from shape
  { path: "#bod-li-o"}, // to shape
  {
    easing: "linear",
    repeat: 0,
    yoyo: false,
    duration: 1000,
    delay: 1500,
    morphPrecision: 1
  }
);
var morph_object_6_3 = KUTE.fromTo(
  "#teil-2",
  { path: "#fuehler-re" }, // from shape
  { path: "#bod-re-o"}, // to shape
  {
    easing: "linear",
    repeat: 0,
    yoyo: false,
    duration: 1000,
    delay: 1500,
    morphPrecision: 1
  }
);
var morph_object_7_3 = KUTE.fromTo(
  "#teil-1",
  { path: "#body-butterfly" }, // from shape
  { path: "#fake-body"}, // to shape
  {
    easing: "linear",
    repeat: 0,
    yoyo: false,
    duration: 1000,
    delay: 1500,
    morphPrecision: 1
  }
);

//morph whale into shell
var morph_object_1_4 = KUTE.fromTo(
  "#teil-7",
  { path: "#li-o" }, // from shape
  { path: "#teil-7" }, // to shape
  {
    easing: "linear",
    repeat: 0,
    yoyo: false,
    duration: 1000,
    delay: 1500,
    morphPrecision: 1
  }
);
var morph_object_2_4 = KUTE.fromTo(
  "#teil-6",
  { path: "#re-o" }, // from shape
  { path: "#teil-6" }, // to shape
  {
    easing: "linear",
    repeat: 0,
    yoyo: false,
    duration: 1000,
    delay: 1500,
    morphPrecision: 1
  }
);
var morph_object_3_4 = KUTE.fromTo(
  "#teil-5",
  { path: "#bod-li-u" }, // from shape
  { path: "#teil-5" }, // to shape
  {
    easing: "linear",
    repeat: 0,
    yoyo: false,
    duration: 1000,
    delay: 1500,
    morphPrecision: 1
  }
);
var morph_object_4_4 = KUTE.fromTo(
  "#teil-4",
  { path: "#bod-re-u" }, // from shape
  { path: "#teil-4" }, // to shape
  {
    easing: "linear",
    repeat: 0,
    yoyo: false,
    duration: 1000,
    delay: 1500,
    morphPrecision: 1
  }
);
var morph_object_5_4 = KUTE.fromTo(
  "#teil-3",
  { path: "#bod-li-o"}, // from shape
  { path: "#teil-3"}, // to shape
  {
    easing: "linear",
    repeat: 0,
    yoyo: false,
    duration: 1000,
    delay: 1500,
    morphPrecision: 1
  }
);
var morph_object_6_4 = KUTE.fromTo(
  "#teil-2",
  { path: "#bod-re-o" }, // from shape
  { path: "#teil-2"}, // to shape
  {
    easing: "linear",
    repeat: 0,
    yoyo: false,
    duration: 1000,
    delay: 1500,
    morphPrecision: 1
  }
);
var morph_object_7_4 = KUTE.fromTo(
  "#teil-1",
  { path: "#fake-body" }, // from shape
  { path: "#teil-1"}, // to shape
  {
    easing: "linear",
    repeat: 0,
    yoyo: false,
    duration: 1000,
    delay: 1500,
    morphPrecision: 1
  }
);

morph_object_1_1.chain(morph_object_1_2);
morph_object_2_1.chain(morph_object_2_2);
morph_object_3_1.chain(morph_object_3_2);
morph_object_4_1.chain(morph_object_4_2);
morph_object_5_1.chain(morph_object_5_2);
morph_object_6_1.chain(morph_object_6_2);
morph_object_7_1.chain(morph_object_7_2);
morph_object_1_2.chain(morph_object_1_3);
morph_object_2_2.chain(morph_object_2_3);
morph_object_3_2.chain(morph_object_3_3);
morph_object_4_2.chain(morph_object_4_3);
morph_object_5_2.chain(morph_object_5_3);
morph_object_6_2.chain(morph_object_6_3);
morph_object_7_2.chain(morph_object_7_3);
morph_object_1_3.chain(morph_object_1_4);
morph_object_2_3.chain(morph_object_2_4);
morph_object_3_3.chain(morph_object_3_4);
morph_object_4_3.chain(morph_object_4_4);
morph_object_5_3.chain(morph_object_5_4);
morph_object_6_3.chain(morph_object_6_4);
morph_object_7_3.chain(morph_object_7_4);
morph_object_7_2.chain(morph_object_7_3);
morph_object_1_4.chain(morph_object_1_1);
morph_object_2_4.chain(morph_object_2_1);
morph_object_3_4.chain(morph_object_3_1);
morph_object_4_4.chain(morph_object_4_1);
morph_object_5_4.chain(morph_object_5_1);
morph_object_6_4.chain(morph_object_6_1);
morph_object_7_4.chain(morph_object_7_1);


//SUN-MOON-MORPH ANIMATION
var morphSun = KUTE.fromTo(
  "#morphSun",
  { path: "#morphSun" }, // from shape
  { path: "#morphMoon" }, // to shape
  {
    easing: "linear",
    yoyo: false,
    duration: 1000,
    delay: 1500,
    morphPrecision: 1
  }
);
var morphMoon = KUTE.fromTo(
  "#morphSun",
  { path: "#morphMoon" }, // from shape
  { path: "#morphSun" }, // to shape
  {
    easing: "linear",
    yoyo: false,
    duration: 1000,
    delay: 1500,
    morphPrecision: 1
  }
);

var morphSunAnimation = gsap.timeline({repeat: -1, repeatDelay: 2});
morphSunAnimation.to("#morphSun", {
  opacity: 1,
  duration: 1.5
},0),
morphSunAnimation.to("#rays", {
  opacity: 1,
  duration: 1.5
},0),
morphSunAnimation.to(".smallRay", {
  opacity: .1, 
  stagger: {
    grid: "auto",
    from: "center",
    amount: 1.5
  }
},1),
morphSunAnimation.to(".bigRay", {
  opacity:.1, 
  stagger: {
    grid: "auto",
    from: "center",
    amount: 1.5
  }
},1),
morphSunAnimation.to(".smallRay", {
  opacity: .5, 
  stagger: {
    grid: "auto",
    from: "center",
    amount: 1.5
  }
},2),
morphSunAnimation.to(".bigRay", {
  opacity:.5, 
  stagger: {
    grid: "auto",
    from: "center",
    amount: 1.5
  }
},2),
morphSunAnimation.to("#rays", {
  opacity: 0,
  duration: 1
},"+=1", 4),
morphSunAnimation.add( function(){ morphSun.start() },"-=1",5), //sun to moon,
morphSunAnimation.to("#example-6",
{backgroundColor: '#000047', ease:"linear"},"+=1",4),
morphSunAnimation.to(".starz", {
  opacity: 1, 
  stagger: {
    amount: 1.5
  }
},"+=2", 6),
morphSunAnimation.to(".starz", {
  opacity: 0,
  duration: .8
},"+=1", 7),
morphSunAnimation.to("#morphSun", {
  opacity: 0,
  duration: .8
},"-=1", 7),
morphSunAnimation.add( function(){ morphMoon.start()},"-=1",7); //morph moon back to sun

var yinSurfAnimation = gsap.timeline({repeat: -1, repeatDelay: 2});
yinSurfAnimation.from("#yinSurf", {
  opacity: 0,
  rotation: -720,
  transformOrigin: "center",
  scale: .1,
  duration: 1.5
},0),
//TRIGGER EVENTS
window.onload = function () {
  sunriseAnimation.play();
  butterflyAnimation.play();
  flowerAnimation();
  //drawSurfsup();
  coffeeAnimation.play();
  vanAnimation.play();
  morph_object_1_1.start();
  morph_object_2_1.start();
  morph_object_3_1.start();
  morph_object_4_1.start();
  morph_object_5_1.start();
  morph_object_6_1.start();
  morph_object_7_1.start();
  morphSunAnimation.play();
}