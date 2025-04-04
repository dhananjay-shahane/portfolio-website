import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-16 bg-black">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <div className="mb-8">
            <motion.div 
              className="w-16 h-16 mx-auto"
              initial={{ rotate: 0 }}
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <defs>
                  <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4F46E5" />
                    <stop offset="50%" stopColor="#EC4899" />
                    <stop offset="100%" stopColor="#F59E0B" />
                  </linearGradient>
                </defs>
                <path d="M50 0 L100 50 L50 100 L0 50 Z" fill="url(#logoGradient)" />
                <circle cx="70" cy="30" r="12" fill="#FFF" fillOpacity="0.3" />
              </svg>
            </motion.div>
          </div>
          
          {/* Divider line */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8"></div>
          
          {/* Copyright */}
          <div className="text-sm text-gray-400 mb-5 text-center">
            © 2025 Chris Abra. All rights reserved.
          </div>
          
          {/* Land acknowledgment */}
          <div className="text-xs text-gray-500 mb-6 text-center max-w-2xl">
            I am grateful to live, work, and play on the unceded lands of the Songhees, Esquimalt, and W̱SÁNEĆ peoples.
          </div>
          
          {/* Stripe Climate */}
          <div className="flex items-center justify-center space-x-2 border border-gray-800 rounded-full py-2 px-4 bg-gray-900">
            <span className="text-xs text-gray-400">Proud member of</span>
            <a 
              href="https://climate.stripe.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center hover:text-white transition-colors duration-200"
            >
              <span className="text-xs font-semibold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-600">
                Stripe Climate
              </span>
            </a>
            <span role="img" aria-label="Green heart" className="text-xs">💚</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
