import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
        className={`fixed top-0 left-0 right-0 z-50 py-4 border-b border-gray-800 transition-all duration-300 ${
          isScrolled ? "bg-background/95 backdrop-blur-sm" : "bg-background"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2" onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}>
            <div className="w-10 h-10 rounded-full overflow-hidden bg-gradient-to-r from-blue-400 via-pink-500 to-orange-500 flex items-center justify-center">
              <span className="text-xl font-bold text-white">CA</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          {!isMobile && (
            <nav className="flex items-center space-x-8">
              <a 
                href="#about" 
                className="text-gray-300 hover:text-white transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("about");
                }}
              >
                About
              </a>
              <a 
                href="#skills" 
                className="text-gray-300 hover:text-white transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("skills");
                }}
              >
                Skills
              </a>
              <a 
                href="#projects" 
                className="text-gray-300 hover:text-white transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("projects");
                }}
              >
                Projects
              </a>
              <Button 
                className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-full transition-colors"
                onClick={() => scrollToSection("contact")}
              >
                Let's Connect
              </Button>
            </nav>
          )}

          {/* Mobile menu button */}
          {isMobile && (
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          )}
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
        onNavItemClick={(sectionId) => {
          scrollToSection(sectionId);
          setIsMobileMenuOpen(false);
        }}
      />
    </>
  );
};

export default Header;
