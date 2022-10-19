gsap.registerPlugin(ScrollTrigger);
//BUTTERFLY LOGO
gsap.from("#left-upper-wing", {scaleX: .7, transformOrigin: 'right', duration: 1, repeat: -1, yoyo: true});
gsap.from("#left-lower-wing", {scaleX: .7, transformOrigin: 'right', duration: 1, repeat: -1, yoyo: true});
gsap.from("#right-upper-wing", {scaleX: .7, transformOrigin: 'left', duration: 1, repeat: -1, yoyo: true});
gsap.from("#right-lower-wing", {scaleX: .7, transformOrigin: 'left', duration: 1, repeat: -1, yoyo: true});

//PAGE UP
//Get pageup button
var mybutton = document.getElementById("pageup");
        
//button shows up when scrolled down 20px from the top of the document
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// scroll to top of page when button is clicked
function pageUpFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//Container Animation
var sections = gsap.utils.toArray(".animated-container").forEach(function(elem) {

  var blocks = elem.querySelectorAll(".transition3");

  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: elem,
      start: "top 50%",
      markers:false,

      //entering,leaving,entering backwards,back past the beginning
      toggleActions: "play"
    },
  })
  // in css .word is 'overflow:hidden'
  .from(blocks, {opacity:0, y: 50, duration: .8, stagger:.2}) 
  })

//FOOTER
gsap.from("#fade-1", {opacity: 0, y:1, repeat: -1, duration: 1, yoyo: true, ease: "bounce.out"});
    gsap.from("#fade-2", {opacity: 0, y:1, repeat: -1, duration: 2, yoyo: true, ease: "bounce.out"});
    gsap.from("#top-heart", {scale:.9,transformOrigin: 'center', repeat: -1, duration: .5, yoyo: true, ease: "bounce.out"})
    

//BACK ARROW
gsap.timeline().from('.back-arrow', {
    opacity: 0,
    scale: 0.1,
    duration: 1,
    ease: Power4.easeOut
})
.from('#arrow', {
    opacity: 0,
    scale: 0.1,
    duration: 1,
    ease: Power4.easeOut
})
.from('.arr-mobile #arrow', {
    x: 5, 
    scaleX: .8,
    duration: 2, 
    repeat: -1, 
    ease: "bounce.out"
})
.from('.arr-desktop #arrow', {
    x:2,
    y: 2, 
    scaleX: .8,
    duration: 2, 
    repeat: -1, 
    ease: "bounce.out"
});

//GRID ELEMENTS STAGGER
var sections = gsap.utils.toArray(".column").forEach(function(elem) {

  var blocks = elem.querySelectorAll(".grid-item");

  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: elem,
      start: "top 50%",
      markers:false,

      //entering,leaving,entering backwards,back past the beginning
      toggleActions: "play reverse play reverse"
    },
  })
  // in css .word is 'overflow:hidden'
  .from(blocks, {opacity:0, scale:.5, duration: 0.5, stagger:0.1}) 
  
  // The total amount of time (in seconds) that gets split among all the staggers.
   //.to(blocks, {xPercent:105,  stagger:{amount:2}}) 
  })
