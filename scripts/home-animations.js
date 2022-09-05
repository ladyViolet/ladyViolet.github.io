gsap.registerPlugin(ScrollTrigger);
        var tl = gsap.timeline();

        tl.from('.plopp', {
            opacity: 0,
            scale: 0.1,
            duration: 2,
            ease: Power4.easeOut
        });

        tl.from('.stagger-1', {
        opacity: 0,
        scale:0.1,
        y: -50,
        stagger: .3,
        ease: Power4.easeOut,
        duration: 4}, "-=2" /*offset value to get rid of initial delay*/);

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

        gsap.to("#moon", {opacity: 0, duration: 2, repeat: -1, yoyo: true});
        gsap.to("#stars", {opacity: 0, duration: 1, repeat: -1, yoyo: true});
        gsap.to('#card-1, #card-2, #card-3', {y: 5, opacity: 0, duration: 3, repeat: -1, yoyo: true, stagger: .3});
        //gsap.to("#homepage", {y: 10, repeat: -1, duration: 2, yoyo: true});
        gsap.to("#inner-lens", {rotate: 180, transformOrigin: 'center', duration: .5, repeat: -1, yoyo: true, repeatDelay: 1, ease: "bounce.out"});
        gsap.to("#outer-lens", {rotate: -180,  transformOrigin: 'center', duration: .5, repeat: -1, yoyo: true, repeatDelay: 1, ease: "bounce.out"});
        gsap.to("#curve", {scaleX: .2, transformOrigin: 'center', duration: 2, repeat: -1, ease: "elastic.out(1, 0.3)", yoyo: true});
        gsap.to("#ancor", {rotate: 5, transformOrigin: 'center', duration: 2, repeat: -1, ease: "elastic.out(1, 0.3)", yoyo: true});
        gsap.to("#pen", {x:5, y:5, repeat: -1, duration: 2, yoyo: true});
        gsap.from("#fade-1", {opacity: 0, y:1, repeat: -1, duration: 1, yoyo: true, ease: "bounce.out"});
        gsap.from("#fade-2", {opacity: 0, y:1, repeat: -1, duration: 2, yoyo: true, ease: "bounce.out"});
        gsap.from("#top-heart", {scale:.9,transformOrigin: 'center', repeat: -1, duration: .5, yoyo: true, ease: "bounce.out"})

        gsap.from(".transition3", {
            scrollTrigger: {
                trigger: '.transition3',
                start: "top bottom"
            },
            y: 50,
            opacity: 0,
            duration: 1.2,
            stagger: .3
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
        });

        function hoveredLetter() {
          var duration = 1;
          console.log("letter hovered");
          gsap.to("#top", {fill: '#d5a65d'});
          gsap.to("#open-lower", {fill: '#e7b86f'});
          gsap.to("#open-upper", {fill: '#b8945b'});
          gsap.to("#mail-body", {fill: '#d5a65d'});
          gsap.to("#mail", duration / 4, {y:-10, ease:Power2.easeOut});
          gsap.to("#mail", duration / 2, {y:0, ease:Bounce.easeOut, delay:duration / 4});
        }

        function normalLetter() {
          console.log("back to normal (;")
          gsap.to("#top", {fill: '#ebbf7a'});
          gsap.to("#open-lower", {fill: '#f7cf90'});
          gsap.to("#open-upper", {fill: '#d6af72'});
          gsap.to("#mail-body", {fill: '#ebbf7a'});
        }