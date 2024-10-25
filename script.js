gsap.from("#section1 .page2 h1", {
    y: 30,
    opacity: 0,
    stagger: 0.6,
    delay: 0.2,
    duration: 1
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