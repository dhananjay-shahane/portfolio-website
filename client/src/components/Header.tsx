import { useState, useEffect, useRef, forwardRef, ForwardedRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import MobileMenu from "./MobileMenu";
import { animateHeader } from "@/lib/animations";

const Header = forwardRef<HTMLElement, {}>((props, ref) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const innerHeaderRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();
  
  // Combine refs (external and internal)
  const headerRef = (node: HTMLElement) => {
    if (typeof ref === 'function') {
      ref(node);
    } else if (ref) {
      ref.current = node;
    }
    
    // @ts-ignore - This is safe because we're just assigning the node
    innerHeaderRef.current = node;
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // We don't need this effect anymore since the App component will handle it
  // useEffect(() => {
  //   const header = innerHeaderRef.current;
  //   if (header) {
  //     // Use our animation utility for header entrance
  //     animateHeader(header);
  //   }
  // }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    const headerHeight = document.querySelector("header")?.offsetHeight || 0;
    
    if (section) {
      const targetPosition = section.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <header 
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 py-5 transition-all duration-300 ${
          isScrolled ? "bg-gray-950/90 backdrop-blur-sm border-b border-gray-800" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 max-w-6xl flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2 z-50 relative" onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}>
            <div className="w-10 h-10 rounded-full overflow-hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
              <span className="text-xl font-bold text-white">CA</span>
            </div>
            <span className="font-semibold text-white text-lg">Chris Abra</span>
          </a>

          {/* Menu Button - Always visible regardless of device */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-white z-50 relative"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`}>
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-white mt-1.5 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-white mt-1.5 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </Button>
        </div>
      </header>

      {/* Offcanvas Navigation Menu */}
      <MobileMenu 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
        onNavItemClick={(sectionId) => {
          scrollToSection(sectionId);
          setIsMenuOpen(false);
        }}
      />
    </>
  );
});

Header.displayName = 'Header';

export default Header;
