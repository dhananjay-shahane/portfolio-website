import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export const setupScrollTriggers = () => {
  // Find all elements with gsap-reveal class
  const revealElements = document.querySelectorAll('.gsap-reveal');
  
  // Set up animations for each reveal element
  revealElements.forEach(element => {
    gsap.fromTo(element, 
      { opacity: 0, y: 30, visibility: "hidden" }, 
      { 
        opacity: 1, 
        y: 0, 
        visibility: "visible",
        duration: 0.8, 
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      }
    );
  });
};

// Setup smooth scroll for navigation links
export const setupSmoothScroll = () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        const headerHeight = document.querySelector('header')?.offsetHeight || 0;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
};
