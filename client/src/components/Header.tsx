import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { useLocation, Link } from "wouter";
import { useIsMobile } from "@/hooks/use-mobile";
import MobileMenu from "./MobileMenu";
import { animateHeader } from "@/lib/animations";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();
  const [location, setLocation] = useLocation();
  const isHomePage = location === "/";

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
    // If we're not on the home page, navigate home first
    if (!isHomePage) {
      setLocation("/");
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        const headerHeight = document.querySelector("header")?.offsetHeight || 0;
        
        if (section) {
          const targetPosition = section.getBoundingClientRect().top + window.pageYOffset - headerHeight;
          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });
        }
      }, 100);
    } else {
      // We're already on the home page, just scroll
      const section = document.getElementById(sectionId);
      const headerHeight = document.querySelector("header")?.offsetHeight || 0;
      
      if (section) {
        const targetPosition = section.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  const navigateTo = (path: string) => {
    setLocation(path);
    setIsMenuOpen(false);
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
          <Link href="/">
            <a className="flex items-center space-x-2 z-50 relative">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
                <span className="text-xl font-bold text-white">CA</span>
              </div>
              <span className="font-semibold text-white text-lg">Chris Abra</span>
            </a>
          </Link>

          {/* Desktop Navigation - only visible on larger screens */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about">
              <a className="text-white hover:text-indigo-400 transition-colors">About</a>
            </Link>
            <Link href="/projects">
              <a className="text-white hover:text-indigo-400 transition-colors">Projects</a>
            </Link>
            <Link href="/blog">
              <a className="text-white hover:text-indigo-400 transition-colors">Blog</a>
            </Link>
            <Link href="/contact">
              <a className="text-white hover:text-indigo-400 transition-colors">Contact</a>
            </Link>
          </div>

          {/* Menu Button - Always visible on mobile */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-white z-50 relative md:hidden"
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
          if (sectionId.startsWith("/")) {
            navigateTo(sectionId);
          } else {
            scrollToSection(sectionId);
            setIsMenuOpen(false);
          }
        }}
      />
    </>
  );
};

export default Header;
