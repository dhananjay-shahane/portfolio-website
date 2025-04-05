import { useRef, useEffect } from "react";
import { aboutContent, companyInfo } from "../data/about";

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    // Animation is handled by the main setupScrollTriggers function in animations.ts
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef} 
      className="py-20 relative overflow-hidden gsap-reveal"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-400 mb-2">
            ABOUT US
          </h2>
          
          <div className="mt-8 mb-12 space-y-6 text-lg text-gray-300">
            <p>{companyInfo.mission}</p>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Our Values</h3>
              <ul className="list-disc pl-5 space-y-2">
                {companyInfo.values.map((value, index) => (
                  <li key={index}>{value}</li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Featured Team Member */}
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg mb-10">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center text-4xl text-white/30 font-bold">
                {aboutContent[0].name.charAt(0)}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">{aboutContent[0].name}</h3>
                <p className="text-blue-400 mb-3">{aboutContent[0].role}</p>
                <p className="text-gray-300">{aboutContent[0].bio}</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <a href="/about" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300">
              Meet Our Team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
