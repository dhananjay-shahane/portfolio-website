import { useEffect, useRef } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";

// Create an array of roles with different colors - exact match to reference UI
const backgroundRoles = [
  { text: "DESIGNER", color: "#8A8A8A" },
  { text: "PROBLEM", color: "#8A8A8A" },
  { text: "SOLVER", color: "#A15DE0" },
  { text: "TECH", color: "#8A8A8A" },
  { text: "GENERALIST", color: "#61A0FF" },
  { text: "WEBFLOW", color: "#8A8A8A" },
  { text: "DEVELOPER", color: "#FF7F48" },
  { text: "FREELANCE", color: "#8A8A8A" },
  { text: "DESIGNER", color: "#E0AE34" },
];

// Duplicate the roles array to fill the screen (9 roles per row, 6-7 rows)
const roles = Array(6).fill(backgroundRoles).flat();

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textLayerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const overlayTextRef = useRef<HTMLDivElement>(null);
  const centralTextRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Main animation timeline
    const tl = gsap.timeline();
    
    // Animate the background text
    if (overlayTextRef.current) {
      tl.from(overlayTextRef.current.children, {
        opacity: 0,
        stagger: 0.01,
        duration: 0.6,
        ease: "power2.out"
      }, 0);
    }
    
    // Animate the central text elements
    if (centralTextRef.current) {
      tl.from(centralTextRef.current.children, {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.6,
        ease: "power2.out"
      }, 0.4);
    }
    
    // Animate the character image with a slight bounce
    if (imageRef.current) {
      tl.from(imageRef.current, {
        opacity: 0,
        y: 40,
        scale: 0.95,
        duration: 1.2,
        ease: "back.out(1.2)"
      }, 0.2);
    }
    
    // Create a subtle floating animation for the character
    gsap.to(imageRef.current, {
      y: "-8px",
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
    
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section 
      id="hero" 
      ref={heroRef}
      className="h-screen relative overflow-hidden flex items-center justify-center"
      style={{
        background: "#121212" // Exact black background from reference
      }}
    >
      {/* Background text pattern - Fixed positioning to fill the screen */}
      <div 
        ref={textLayerRef}
        className="absolute inset-0 overflow-hidden z-0"
        style={{ backgroundColor: "#121212" }}
      >
        <div 
          ref={overlayTextRef}
          className="hero-bg-pattern w-full h-full p-6 opacity-80"
        >
          {roles.map((role, index) => (
            <span 
              key={index} 
              style={{ 
                color: role.color,
                whiteSpace: 'nowrap'
              }}
              className="truncate"
            >
              {role.text}.
            </span>
          ))}
        </div>
      </div>
      
      {/* Central content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        {/* Character image */}
        <motion.div 
          className="mb-6"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <picture>
            <source srcSet="/images/chris-avatar.avif" type="image/avif" />
            <source srcSet="/images/chris-avatar.webp" type="image/webp" />
            <img 
              ref={imageRef}
              src="/images/chris-avatar.webp"
              alt="Chris Abra" 
              className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 object-contain"
              style={{ maxWidth: '250px' }}
            />
          </picture>
        </motion.div>
        
        {/* Central text - Exact match to reference UI */}
        <div ref={centralTextRef} className="text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-1" style={{ lineHeight: 1.1 }}>
            <span className="text-white">WEBFLOW</span>
            <span style={{ color: "#FF7F48" }}> DEVELOPER.</span>
          </h1>
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-1" style={{ lineHeight: 1.1 }}>
            <span style={{ color: "#FFD954" }}>FREELANCE</span>
            <span className="text-white"> DESIGNER.</span>
          </h2>
          <h3 className="text-4xl sm:text-5xl font-extrabold mb-1" style={{ lineHeight: 1.1 }}>
            <span style={{ color: "#A15DE0" }}>PROBLEM</span>
            <span className="text-white"> SOLVER.</span>
          </h3>
          <h4 className="text-4xl sm:text-5xl font-extrabold" style={{ lineHeight: 1.1 }}>
            <span style={{ color: "#61A0FF" }}>TECH</span>
            <span className="text-white"> GENERALIST.</span>
          </h4>
        </div>
      </div>
      
      {/* Rainbow border at bottom - exact colors from reference */}
      <div className="absolute bottom-0 left-0 right-0 h-3 z-20" 
        style={{ 
          background: "linear-gradient(to right, #8B5CF6, #EC4899, #EF4444, #F59E0B, #10B981, #3B82F6)"
        }}>
      </div>
    </section>
  );
};

export default HeroSection;