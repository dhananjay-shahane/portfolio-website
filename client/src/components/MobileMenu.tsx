import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavItemClick: (sectionId: string) => void;
}

const MobileMenu = ({ isOpen, onClose, onNavItemClick }: MobileMenuProps) => {
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

  return (
    <div 
      className={`mobile-menu fixed inset-y-0 right-0 w-64 bg-gray-900 shadow-lg z-50 ${isOpen ? "open" : ""}`}
    >
      <div className="p-5">
        <Button 
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 text-white"
          onClick={onClose}
        >
          <X className="h-6 w-6" />
        </Button>
        
        <div className="flex flex-col space-y-6 mt-12">
          <a 
            href="#about" 
            className="text-gray-300 hover:text-white transition-colors py-2"
            onClick={(e) => {
              e.preventDefault();
              onNavItemClick("about");
            }}
          >
            About
          </a>
          <a 
            href="#skills" 
            className="text-gray-300 hover:text-white transition-colors py-2"
            onClick={(e) => {
              e.preventDefault();
              onNavItemClick("skills");
            }}
          >
            Skills
          </a>
          <a 
            href="#projects" 
            className="text-gray-300 hover:text-white transition-colors py-2"
            onClick={(e) => {
              e.preventDefault();
              onNavItemClick("projects");
            }}
          >
            Projects
          </a>
          <Button 
            className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-full transition-colors"
            onClick={() => onNavItemClick("contact")}
          >
            Let's Connect
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
