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

window.onload = function()
{
    t1.play();
    t2.play();
    t3.play();
    console.log("animation played");
}