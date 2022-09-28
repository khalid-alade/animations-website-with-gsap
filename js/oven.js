var controller = new ScrollMagic.Controller();
var controller1 = new ScrollMagic.Controller();
var controller2 = new ScrollMagic.Controller();

var tl1 = gsap.timeline()
var tl2 = gsap.timeline()
var tlone = gsap.timeline()
var tltwo = gsap.timeline()
var tlthree = gsap.timeline()
var tlfour = gsap.timeline()
var tlcontent1 = gsap.timeline()
var tlcontent2 = gsap.timeline()
var tlcontent3 = gsap.timeline()
var tlcontent4 = gsap.timeline()


tl1.to(".creamyCakes", { top: -250 + "%", ease: Linear.easeNone }, 'start')
    .to(".bakedFresh", { bottom: 110 + "%", ease: Linear.easeNone }, 'start')
    .to(".creamyCakesMobile", { top: -110 + "%", ease: Linear.easeNone }, 'start')
    .to(".bakedFreshMobile", { top: -250 + "%", ease: Linear.easeNone }, 'start')

tl2.from("#hannah", { duration: 0.5, y: 100 + '%' })
tlone.from("#one", { duration: 0.5, y: 140 + '%' })
tltwo.from("#two", { duration: 0.5, y: 140 + '%' })
tlthree.from("#three", { duration: 0.5, y: 140 + '%' })
tlfour.from("#four", { duration: 0.5, y: 140 + '%' })

tlcontent1.from('#cont1', { duration: 3, y: 180 + '%', ease: Linear.easeNone }, 'start')
    .from('#cont2', { duration: 3, y: 800 + '%', ease: Linear.easeNone }, 'start')

tlcontent2.from('#cont12', { duration: 3, y: 180 + '%', ease: Linear.easeNone }, 'start')
    .from('#cont22', { duration: 3, y: 800 + '%', ease: Linear.easeNone }, 'start')

tlcontent3.from('#cont13', { duration: 3, y: 180 + '%', ease: Linear.easeNone }, 'start')
    .from('#cont23', { duration: 3, y: 800 + '%', ease: Linear.easeNone }, 'start')

tlcontent4.from('#cont14', { duration: 3, y: 180 + '%', ease: Linear.easeNone }, 'start')
    .from('#cont24', { duration: 3, y: 800 + '%', ease: Linear.easeNone }, 'start')



new ScrollMagic.Scene({
    triggerElement: ".homePic",
    triggerHook: 0,
})
    .duration('200%')
    .setTween(tl1)
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#header1",
    triggerHook: "onLeave",
})
    .setPin("#header1")
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: ".herself",
    offset: 130,
})
    .setTween(tl2)
    .addTo(controller1);

new ScrollMagic.Scene({
    triggerElement: "#one",
    offset: 60,
    triggerHook: 'onEnter'
})
    .setTween(tlone)
    .addTo(controller1);


new ScrollMagic.Scene({
    triggerElement: "#two",
    offset: 60,
    triggerHook: 'onEnter'
})
    .setTween(tltwo)
    .addTo(controller1);

new ScrollMagic.Scene({
    triggerElement: "#three",
    offset: 60,
    triggerHook: 'onEnter'
})
    .setTween(tlthree)
    .addTo(controller1);


new ScrollMagic.Scene({
    triggerElement: "#four",
    offset: 60,
    triggerHook: 'onEnter'
})
    .setTween(tlfour)
    .addTo(controller1);


new ScrollMagic.Scene({
    triggerElement: "#wrap1",
    triggerHook: 'onEnter'
})
    .duration('150%')
    .setTween(tlcontent1)
    .addTo(controller2);


new ScrollMagic.Scene({
    triggerElement: "#wrap2",
    triggerHook: 'onEnter'
})
    .duration('150%')
    .setTween(tlcontent2)
    .addTo(controller2);


new ScrollMagic.Scene({
    triggerElement: "#wrap3",
    triggerHook: 'onEnter'
})
    .duration('150%')
    .setTween(tlcontent3)
    .addTo(controller2);

new ScrollMagic.Scene({
    triggerElement: "#wrap4",
    triggerHook: 'onEnter'
})
    .duration('150%')
    .setTween(tlcontent4)
    .addTo(controller2);