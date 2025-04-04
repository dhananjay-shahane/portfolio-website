import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, Twitter, Linkedin, Dribbble } from "lucide-react";

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    // Animation is handled by the main setupScrollTriggers function in animations.ts
  }, []);

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-20 bg-background gsap-reveal"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Work Together?</h2>
          <p className="text-xl text-gray-300 mb-8">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>
          
          <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-7 rounded-full text-lg font-medium transition-colors">
            Let's Connect
          </Button>
          
          <div className="mt-12 flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Dribbble className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
