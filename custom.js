//homepage GSAP slide animation
document.addEventListener('DOMContentLoaded', (event) => {
    gsap.registerPlugin(ScrollTrigger);
    let sections = gsap.utils.toArray(".panel");

    gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: ".sec--home-service-suite",
        pin: true,
        scrub: 1,
        // snap: 1 / (sections.length - 1),
        // markers: true,
        pinSpacing: false,
    }
    });
});
