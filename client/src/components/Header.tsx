import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import MobileMenu from "./MobileMenu";
import { animateHeader } from "@/lib/animations";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Initialize header animation on mount
  useEffect(() => {
    const header = headerRef.current;
    if (header) {
      // Use our animation utility for header entrance
      animateHeader(header);
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    const headerHeight = document.querySelector("header")?.offsetHeight || 0;
    
    if (section) {
      const targetPosition = section.getBoundingClientRect().top + window.scrollY - headerHeight;
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
        className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${
          isScrolled ? "bg-black/95 shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 max-w-7xl flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2 z-50 relative group" onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}>
            <div className="w-10 h-10 rounded-full overflow-hidden bg-indigo-600 flex items-center justify-center">
              <span className="text-xl font-bold text-white">CA</span>
            </div>
            <span className="font-semibold text-white text-lg">Chris Abra</span>
          </a>

          {/* Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-white hover:bg-transparent hover:text-indigo-300 transition-colors"
            onClick={toggleMenu}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
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
};

export default Header;
