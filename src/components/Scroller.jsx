import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Scroller = () => {
    useEffect(() => {
        const elements = document.querySelectorAll('.scrollEl');

        elements.forEach(element => {
        let timeline = gsap.timeline({
            scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "bottom 80%",
            toggleActions: "restart none none reset"
            }
        });

        timeline.fromTo(element, { autoAlpha: 0, y: 100 }, { duration: 1, autoAlpha: 1, y: 0 });
    });
})};

export default Scroller;
