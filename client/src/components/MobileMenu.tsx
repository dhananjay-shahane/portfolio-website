import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, Linkedin, Github, Mail, X } from "lucide-react";
import { setupOffcanvasMenu } from "@/lib/animations";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavItemClick: (sectionId: string) => void;
}

const MobileMenu = ({ isOpen, onClose, onNavItemClick }: MobileMenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const menuItemsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Prevent body scroll when menu is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // GSAP animation for menu items
  useEffect(() => {
    if (menuItemsRef.current) {
      const menuItems = Array.from(menuItemsRef.current.querySelectorAll(".menu-item")) as HTMLElement[];
      const socialIcons = Array.from(menuItemsRef.current.querySelectorAll(".social-icon")) as HTMLElement[];
      
      // Use the animation utility for consistent animations
      setupOffcanvasMenu(isOpen, menuItems, socialIcons);
    }
  }, [isOpen]);

  // Function to handle close button click
  const handleCloseClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent event from bubbling up
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-40"
            onClick={onClose}
          />
          
          {/* Close button - fixed position */}
          <div className="fixed top-5 right-4 md:right-6 z-[60]">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-white hover:bg-transparent hover:text-indigo-300"
              onClick={handleCloseClick}
              aria-label="Close menu"
            >
              <div className="menu-icon open">
                <span className="block w-6 h-0.5 bg-white transition-all duration-300 rotate-45 translate-y-1.5"></span>
                <span className="block w-6 h-0.5 bg-white mt-1.5 transition-all duration-300 opacity-0"></span>
                <span className="block w-6 h-0.5 bg-white mt-1.5 transition-all duration-300 -rotate-45 -translate-y-1.5"></span>
              </div>
            </Button>
          </div>
          
          {/* Offcanvas Menu */}
          <div 
            ref={menuRef}
            className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
          >
            <div ref={menuItemsRef} className="container max-w-6xl mx-auto px-6 py-20 relative md:pl-10">
              {/* Menu items */}
              <div className="flex flex-col justify-center h-full pt-10 md:pt-0">
                <div className="flex flex-col space-y-3 text-left mb-auto">
                  <a 
                    href="#about" 
                    className="menu-item text-white hover:text-indigo-400 transition-colors text-6xl md:text-8xl font-bold leading-tight"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavItemClick("about");
                    }}
                  >
                    About
                  </a>
                  <a 
                    href="#skills" 
                    className="menu-item text-white hover:text-indigo-400 transition-colors text-6xl md:text-8xl font-bold leading-tight"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavItemClick("skills");
                    }}
                  >
                    Skills
                  </a>
                  <a 
                    href="#projects" 
                    className="menu-item text-white hover:text-indigo-400 transition-colors text-6xl md:text-8xl font-bold leading-tight"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavItemClick("projects");
                    }}
                  >
                    Projects
                  </a>
                  <a 
                    href="#contact" 
                    className="menu-item text-white hover:text-indigo-400 transition-colors text-6xl md:text-8xl font-bold leading-tight"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavItemClick("contact");
                    }}
                  >
                    Contact
                  </a>
                </div>
                
                {/* Social links */}
                <div className="flex space-x-6 pt-10 mt-10 border-t border-gray-800/30 w-full">
                  <a href="#" className="social-icon text-gray-400 hover:text-white transition-colors">
                    <Instagram size={24} />
                  </a>
                  <a href="#" className="social-icon text-gray-400 hover:text-white transition-colors">
                    <Linkedin size={24} />
                  </a>
                  <a href="#" className="social-icon text-gray-400 hover:text-white transition-colors">
                    <Github size={24} />
                  </a>
                  <a href="mailto:hello@chrisabra.co" className="social-icon text-gray-400 hover:text-white transition-colors">
                    <Mail size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
