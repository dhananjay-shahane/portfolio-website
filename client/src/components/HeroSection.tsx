import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  
  useEffect(() => {
    // Animate the heading text on mount
    if (headingRef.current) {
      gsap.from(headingRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.3
      });
    }
    
    // Animate the person image
    if (imageRef.current) {
      gsap.from(imageRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power2.out",
        delay: 0.5
      });
    }
    
    // Animate the container
    if (containerRef.current) {
      gsap.from(containerRef.current, {
        opacity: 0,
        duration: 0.6,
        ease: "power2.out"
      });
    }
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
      ref={containerRef}
      className="min-h-screen flex items-center relative overflow-hidden bg-gray-950"
    >
      {/* Background pattern/grid */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left side - Text */}
          <div className="w-full lg:w-1/2">
            <h1 
              ref={headingRef}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8"
            >
              Hey, I'm <br />
              <span className="text-indigo-500">Chris Abra</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl">
              I'm a freelance Webflow Developer, UI Designer, and No-Code Specialist based in Victoria, BC. I help businesses build beautiful, functional websites and business automation systems.
            </p>
            
            <div className="flex flex-wrap gap-5">
              <Button 
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-7 py-6 rounded-full text-lg font-medium transition-colors"
                onClick={scrollToProjects}
              >
                See my work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline"
                className="border-gray-700 hover:bg-gray-800 text-white px-7 py-6 rounded-full text-lg font-medium transition-colors"
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
          
          {/* Right side - Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="relative overflow-hidden">
                <img 
                  ref={imageRef}
                  src="https://cdn.prod.website-files.com/63957415c9d3c7c02d068332/67e59106600b2658f5ba6de5_Chris.avif"
                  alt="Chris Abra" 
                  className="max-w-full h-auto object-contain transform hover:scale-[1.02] transition-transform duration-700"
                  style={{ maxHeight: "600px" }}
                />
                
                {/* Colored backdrop */}
                <div className="absolute -z-10 -bottom-20 -right-20 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-3xl"></div>
                <div className="absolute -z-10 -top-20 -left-20 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-blue-500/20 via-teal-500/20 to-emerald-500/20 blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
