import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

// Create an array of roles with different colors
const roles = [
  { text: "DESIGNER", color: "text-amber-400" },
  { text: "PROBLEM", color: "text-gray-500" },
  { text: "SOLVER", color: "text-purple-400" },
  { text: "TECH", color: "text-gray-500" },
  { text: "GENERALIST", color: "text-blue-400" },
  { text: "WEBFLOW", color: "text-gray-500" },
  { text: "DEVELOPER", color: "text-orange-500" },
  { text: "FREELANCE", color: "text-gray-500" },
  { text: "DESIGNER", color: "text-yellow-400" },
  { text: "PROBLEM", color: "text-gray-500" },
  { text: "SOLVER", color: "text-pink-400" },
  { text: "TECH", color: "text-gray-500" },
  { text: "GENERALIST", color: "text-blue-500" },
  { text: "WEBFLOW", color: "text-gray-500" },
  { text: "DEVELOPER", color: "text-red-500" },
  { text: "FREELANCE", color: "text-gray-500" },
  { text: "DESIGNER", color: "text-amber-500" },
  { text: "PROBLEM", color: "text-gray-500" },
  { text: "SOLVER", color: "text-violet-400" },
  { text: "TECH", color: "text-gray-500" },
];

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
        stagger: 0.02,
        duration: 0.8,
        ease: "power2.out"
      }, 0);
    }
    
    // Animate the central elements
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
    
    // Create a subtle scale animation for the text layer
    if (textLayerRef.current) {
      gsap.to(textLayerRef.current, {
        scale: 1.01,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }
    
    return () => {
      tl.kill();
    };
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    const headerHeight = document.querySelector("header")?.offsetHeight || 0;
    
    if (projectsSection) {
      const targetPosition = projectsSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section 
      id="hero" 
      ref={heroRef}
      className="min-h-screen relative overflow-hidden bg-gray-950 flex items-center justify-center"
    >
      {/* Background text overlay */}
      <div 
        ref={textLayerRef}
        className="absolute inset-0 flex flex-wrap justify-center content-center opacity-90"
      >
        <div 
          ref={overlayTextRef}
          className="flex flex-wrap justify-center content-center text-4xl sm:text-5xl md:text-6xl font-extrabold opacity-80 overflow-hidden w-full h-full"
          style={{ 
            lineHeight: '1.1', 
            userSelect: 'none'
          }}
        >
          {roles.map((role, index) => (
            <span key={index} className={`${role.color} mx-1 whitespace-nowrap`}>
              {role.text}.
            </span>
          ))}
        </div>
      </div>
      
      {/* Central content */}
      <div className="container relative z-10 px-4 max-w-6xl mx-auto">
        <div className="flex flex-col items-center">
          {/* Character image */}
          <motion.div 
            className="relative mb-6"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img 
              ref={imageRef}
              src="/images/chris-memoji-heart.svg"
              alt="Chris Abra Memoji" 
              className="w-52 h-52 sm:w-72 sm:h-72 md:w-80 md:h-80 object-contain relative z-10"
            />
          </motion.div>
          
          {/* Central text */}
          <div ref={centralTextRef} className="mb-8 text-center">
            <h1 className="font-extrabold text-white text-3xl md:text-5xl mb-3">
              <span className="text-white">WEBFLOW</span>
              <span className="text-orange-500"> DEVELOPER.</span>
            </h1>
            <h2 className="font-extrabold text-white text-3xl md:text-5xl mb-4">
              <span className="text-yellow-400">FREELANCE</span>
              <span className="text-white"> DESIGNER.</span>
            </h2>
            <h3 className="font-extrabold text-white text-2xl md:text-4xl mb-2">
              <span className="text-purple-500">PROBLEM</span>
              <span className="text-white"> SOLVER.</span>
            </h3>
            <h4 className="font-extrabold text-white text-2xl md:text-4xl">
              <span className="text-blue-500">TECH</span>
              <span className="text-white"> GENERALIST.</span>
            </h4>
          </div>
          
          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Button 
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-7 py-6 rounded-md text-lg font-semibold transition-colors"
              onClick={scrollToProjects}
            >
              See my work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline"
              className="border-gray-700 hover:bg-gray-800 text-white px-7 py-6 rounded-md text-lg font-semibold transition-colors"
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Contact me
            </Button>
          </div>
        </div>
      </div>
      
      {/* Bottom rainbow border */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 via-pink-500 via-red-500 via-yellow-500 to-green-500"></div>
    </section>
  );
};

export default HeroSection;
