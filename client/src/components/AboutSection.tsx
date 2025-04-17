import { useRef, useEffect } from "react";
import { aboutContent } from "../data/about";

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    // Animation is handled by the main setupScrollTriggers function in animations.ts
  }, []);

  return (
    <section 
      id="about" 
      // ref={sectionRef} 
      className="py-20 relative overflow-hidden gsap-reveal"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-400 mb-2">
            ABOUT ME
          </h2>
          
          <div className="mt-8 space-y-6 text-lg text-gray-300 text-center">
            {aboutContent.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
