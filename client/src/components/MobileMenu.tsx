import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          
          {/* Menu */}
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-y-0 right-0 w-72 bg-gray-900 shadow-lg z-50 overflow-y-auto"
          >
            <div className="p-6">
              <Button 
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 text-white hover:bg-gray-800"
                onClick={onClose}
              >
                <X className="h-6 w-6" />
              </Button>
              
              <div className="mt-16 mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-white">CA</span>
                </div>
                <h2 className="text-white text-xl font-bold">Chris Abra</h2>
                <p className="text-gray-400 text-sm mt-1">Webflow Developer & Designer</p>
              </div>
              
              <div className="flex flex-col space-y-6">
                <a 
                  href="#about" 
                  className="text-gray-200 hover:text-white transition-colors py-2 text-lg font-medium border-b border-gray-800 pb-3"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavItemClick("about");
                  }}
                >
                  About
                </a>
                <a 
                  href="#skills" 
                  className="text-gray-200 hover:text-white transition-colors py-2 text-lg font-medium border-b border-gray-800 pb-3"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavItemClick("skills");
                  }}
                >
                  Skills
                </a>
                <a 
                  href="#projects" 
                  className="text-gray-200 hover:text-white transition-colors py-2 text-lg font-medium border-b border-gray-800 pb-3"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavItemClick("projects");
                  }}
                >
                  Projects
                </a>
                
                <div className="pt-4">
                  <Button 
                    className="bg-indigo-600 hover:bg-indigo-700 text-white w-full py-6 rounded-md transition-colors text-lg font-medium"
                    onClick={() => onNavItemClick("contact")}
                  >
                    Contact Me
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
