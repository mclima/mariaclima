import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Scroller = ({ triggerRef }) => {
    const elementsRef = useRef([]);

    useEffect(() => {
    const elements = document.querySelectorAll('.scrollEl');
    elementsRef.current = elements;

    ScrollTrigger.create({
        preventOverlaps: true,
        fastScrollEnd: true,
        invalidateOnRefresh: true
    });

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

    // Function to update scrollTrigger positions dynamically
    const updateScrollTrigger = () => {
        elementsRef.current.forEach(element => {
            ScrollTrigger.refresh();
        });
    };

    // Watch for changes in the size of the dynamic height element (#portfolio)
    const resizeObserver = new ResizeObserver(updateScrollTrigger);
    resizeObserver.observe(document.getElementById('portfolio')); // Use the correct ID

    // Cleanup function
    return () => {
        resizeObserver.disconnect();
    };
}, []);

    return null; 
};

export default Scroller;