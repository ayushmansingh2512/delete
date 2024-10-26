gsap.from("#section1 .page2 h1", {
    y: 30,
    opacity: 0,
    stagger: 0.6,
    delay: 0.2,
    duration: 1
});
// Animate SVG underline path
// First measure the total length of the path
const path = document.querySelector("#underline-path");
const pathLength = path.getTotalLength();

// Set initial state - make path invisible
gsap.set("#underline-path", {
  strokeDasharray: pathLength,
  strokeDashoffset: pathLength
});

// Animate the path
gsap.to("#underline-path", {
  strokeDashoffset: 0,
  duration: 2,
  delay:1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#section1 h1",
    toggleActions: "play none none none"
  }
});
  
gsap.from("#section1 .page2 h3", {
    y: 30,
    opacity: 0,
    stagger: 0.6,
    delay: 0.4,
    duration: 1
});
gsap.from("#section1 .page2 .button", {
    y: 30,
    opacity: 0,
    stagger: 0.6,
    delay: 0.6,
    duration: 1
});

gsap.from("#section1 .page2 .image", {
    y: 30,
    opacity: 0,
    stagger: 0.6,
    delay: 0.8,
    duration: 1
});


gsap.from(".split>div",{
    y:160,
    stagger:0.05,
    ease:"back.out",
    duration:1,
    scrollTrigger:{
        trigger:'.split',
        start:"top 80%",
     
    }
});


gsap.from(".container6 .banto-box", {
    x: -30,
    opacity: 0,
    ease: "back.out",
    duration: 1,
    scrollTrigger: {
        trigger: ".container6", // Use an actual container that exists in the HTML
        start: "top 80%",
        toggleActions: "play none none none" // Ensure it only plays once when in view
    }
});


gsap.from(".container6 .banto-box2", {
    y: -30,
    opacity: 0,
    ease: "back.out",
    duration: 1,
    delay:0.4,
    scrollTrigger: {
        trigger: ".container6", // Use an actual container that exists in the HTML
        start: "top 80%",
        toggleActions: "play none none none" // Ensure it only plays once when in view
    }
});

gsap.from(".container6 .banto-box4", {
    x: 30,
    opacity: 0,
    ease: "back.out",
    duration: 1,
    delay:0.2,
    scrollTrigger: {
        trigger: ".container6", // Use an actual container that exists in the HTML
        start: "top 80%",
        toggleActions: "play none none none" // Ensure it only plays once when in view
    }
});

gsap.from(".container6 .banto-box3", {
    y: 30,
    opacity: 0,
    ease: "back.out",
    duration: 1,
    delay:0.6,
    scrollTrigger: {
        trigger: ".container6", // Use an actual container that exists in the HTML
        start: "top 80%",
        toggleActions: "play none none none" // Ensure it only plays once when in view
    }
});
 