import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { Star } from "lucide-react";

const HeroSection = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Animate the heading text lines on mount
    if (headingRef.current) {
      const headingSpans = headingRef.current.querySelectorAll("span");
      
      gsap.from(headingSpans, {
        opacity: 0,
        y: 50,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.5
      });
    }
    
    // Animate the container
    if (containerRef.current) {
      gsap.from(containerRef.current, {
        opacity: 0,
        duration: 1,
        ease: "power2.out"
      });
    }
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    const headerHeight = document.querySelector("header")?.offsetHeight || 0;
    
    if (contactSection) {
      const targetPosition = contactSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;
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
      className="min-h-screen flex items-center relative pt-24 pb-16 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background opacity-90"></div>
        {/* Background grid pattern */}
        <div className="absolute inset-0 grid-bg-pattern"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-12">
          <div className="md:w-1/2 gsap-reveal">
            <div className="text-4xl md:text-7xl font-bold mb-6">
              <h1 ref={headingRef} className="leading-tight">
                <span className="block">WEBFLOW</span>
                <span className="block">DEVELOPER.</span>
                <span className="block text-orange-500">FREELANCE</span>
                <span className="block text-yellow-400">DESIGNER.</span>
                <span className="block text-purple-500">PROBLEM</span>
                <span className="block">SOLVER.</span>
                <span className="block text-blue-500">TECH</span>
                <span className="block">GENERALIST.</span>
              </h1>
            </div>

            <div className="mt-8">
              <Button 
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-6 rounded-full text-lg font-medium transition-colors"
                onClick={scrollToContact}
              >
                Let's Connect
              </Button>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center md:justify-end gsap-reveal">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-4 border-gray-800">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" 
                  alt="Developer Portrait" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Premium partner badge */}
              <div className="absolute -bottom-3 -right-3 bg-white text-black px-3 py-1 rounded-lg text-sm font-medium flex items-center">
                <Star className="w-4 h-4 mr-1 text-blue-500" />
                Premium Partner
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
