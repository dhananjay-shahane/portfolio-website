import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, Linkedin, Github, Mail, Home } from "lucide-react";
import { setupOffcanvasMenu } from "@/lib/animations";
import { useLocation } from "wouter";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavItemClick: (sectionId: string) => void;
}

const MobileMenu = ({ isOpen, onClose, onNavItemClick }: MobileMenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const menuItemsRef = useRef<HTMLDivElement>(null);
  const [location] = useLocation();
  const isHomePage = location === "/";

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
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-40"
            onClick={onClose}
          />
          
          {/* Offcanvas Menu */}
          <div 
            ref={menuRef}
            className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
          >
            <div ref={menuItemsRef} className="container max-w-6xl mx-auto px-6 py-20 relative">
              {/* Menu items */}
              <div className="flex flex-col items-center md:items-start space-y-8 text-center md:text-left">
                {/* Home link - only show if not on home page */}
                {!isHomePage && (
                  <a 
                    href="/"
                    className="menu-item text-white hover:text-indigo-400 transition-colors text-4xl md:text-6xl font-bold"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavItemClick("/");
                    }}
                  >
                    Home
                  </a>
                )}
                
                {/* Conditional navigation - show either page links or section links */}
                {isHomePage ? (
                  // Section links when on home page
                  <>
                    <a 
                      href="#about" 
                      className="menu-item text-white hover:text-indigo-400 transition-colors text-4xl md:text-6xl font-bold"
                      onClick={(e) => {
                        e.preventDefault();
                        onNavItemClick("about");
                      }}
                    >
                      About
                    </a>
                    <a 
                      href="#skills" 
                      className="menu-item text-white hover:text-indigo-400 transition-colors text-4xl md:text-6xl font-bold"
                      onClick={(e) => {
                        e.preventDefault();
                        onNavItemClick("skills");
                      }}
                    >
                      Skills
                    </a>
                    <a 
                      href="#projects" 
                      className="menu-item text-white hover:text-indigo-400 transition-colors text-4xl md:text-6xl font-bold"
                      onClick={(e) => {
                        e.preventDefault();
                        onNavItemClick("projects");
                      }}
                    >
                      Projects
                    </a>
                    <a 
                      href="#contact" 
                      className="menu-item text-white hover:text-indigo-400 transition-colors text-4xl md:text-6xl font-bold"
                      onClick={(e) => {
                        e.preventDefault();
                        onNavItemClick("contact");
                      }}
                    >
                      Contact
                    </a>
                  </>
                ) : (
                  // Page links when not on home page
                  <>
                    <a 
                      href="/about"
                      className="menu-item text-white hover:text-indigo-400 transition-colors text-4xl md:text-6xl font-bold"
                      onClick={(e) => {
                        e.preventDefault();
                        onNavItemClick("/about");
                      }}
                    >
                      About
                    </a>
                    <a 
                      href="/projects"
                      className="menu-item text-white hover:text-indigo-400 transition-colors text-4xl md:text-6xl font-bold"
                      onClick={(e) => {
                        e.preventDefault();
                        onNavItemClick("/projects");
                      }}
                    >
                      Projects
                    </a>
                    <a 
                      href="/blog"
                      className="menu-item text-white hover:text-indigo-400 transition-colors text-4xl md:text-6xl font-bold"
                      onClick={(e) => {
                        e.preventDefault();
                        onNavItemClick("/blog");
                      }}
                    >
                      Blog
                    </a>
                    <a 
                      href="/contact"
                      className="menu-item text-white hover:text-indigo-400 transition-colors text-4xl md:text-6xl font-bold"
                      onClick={(e) => {
                        e.preventDefault();
                        onNavItemClick("/contact");
                      }}
                    >
                      Contact
                    </a>
                  </>
                )}
                
                {/* Social links */}
                <div className="flex flex-wrap justify-center md:justify-start space-x-5 pt-10 mt-6 border-t border-gray-800 w-full">
                  <a href="#" className="social-icon text-gray-400 hover:text-white transition-colors p-2">
                    <Instagram size={24} />
                  </a>
                  <a href="#" className="social-icon text-gray-400 hover:text-white transition-colors p-2">
                    <Linkedin size={24} />
                  </a>
                  <a href="#" className="social-icon text-gray-400 hover:text-white transition-colors p-2">
                    <Github size={24} />
                  </a>
                  <a href="mailto:hello@chrisabra.co" className="social-icon text-gray-400 hover:text-white transition-colors p-2">
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
