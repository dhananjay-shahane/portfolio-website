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
  
  // Enhance project cards with staggered animations
  const projectCards = document.querySelectorAll('.project-card');
  if (projectCards.length) {
    gsap.fromTo(
      projectCards,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: projectCards[0].parentElement,
          start: "top 75%",
        }
      }
    );
  }
  
  // Enhance skill pills with staggered animations
  const skillPills = document.querySelectorAll('.skill-pill');
  if (skillPills.length) {
    gsap.fromTo(
      skillPills,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        stagger: 0.05,
        duration: 0.5,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: skillPills[0].parentElement,
          start: "top 80%",
        }
      }
    );
  }
};

// Off-canvas menu animations
export const setupOffcanvasMenu = (isOpen: boolean, menuItems: HTMLElement[], socialIcons: HTMLElement[]) => {
  if (isOpen) {
    // Animate menu items when opened - staggered entrance for larger text items
    gsap.fromTo(
      menuItems,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        delay: 0.3
      }
    );

    // Animate social icons with delay
    gsap.fromTo(
      socialIcons,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.08,
        ease: "power2.out",
        delay: 0.9 // Increased delay to ensure menu items are visible first
      }
    );
  } else {
    // Optional: animate items out when closing
    gsap.to([...menuItems, ...socialIcons], {
      opacity: 0,
      y: -20,
      duration: 0.3,
      stagger: 0.05,
      ease: "power2.in"
    });
  }
};

// Header entrance animation
export const animateHeader = (header: HTMLElement) => {
  gsap.from(header, {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });
};

// Setup smooth scroll for navigation links
export const setupSmoothScroll = () => {
  const anchors = document.querySelectorAll('a[href^="#"]');
  
  anchors.forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      
      const anchorElement = anchor as HTMLAnchorElement;
      const targetId = anchorElement.getAttribute('href');
      
      if (targetId) {
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          const headerHeight = document.querySelector('header')?.offsetHeight || 0;
          const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });
};
