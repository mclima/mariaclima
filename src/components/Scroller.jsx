import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Helper function to safely execute DOM operations and resolve bug in FF
const safelyExecute = (fn) => {
  try {
    return fn();
  } catch (error) {
    console.warn('ScrollTrigger operation failed:', error);
    return null;
  }
};

const Scroller = ({ triggerRef }) => {
    const elementsRef = useRef([]);

    useEffect(() => {
    const elements = document.querySelectorAll('.scrollEl');
    elementsRef.current = elements;

    elements.forEach(element => {
        safelyExecute(() => {
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
    });

    // Function to update scrollTrigger positions dynamically
    const updateScrollTrigger = () => {
        safelyExecute(() => {
            ScrollTrigger.refresh();
        });
    };

    // Watch for changes in the size of the dynamic height element (#portfolio)
    let resizeObserver = null;
    const portfolioElement = document.getElementById('portfolio');
    
    if (portfolioElement) {
        try {
            resizeObserver = new ResizeObserver(updateScrollTrigger);
            resizeObserver.observe(portfolioElement);
        } catch (error) {
            console.warn('ResizeObserver failed:', error);
        }
    }

    // Cleanup function
    return () => {
        if (resizeObserver) {
            safelyExecute(() => {
                resizeObserver.disconnect();
            });
        }
    };
}, []);

    return null; 
};

export default Scroller;