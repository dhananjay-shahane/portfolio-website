const Footer = () => {
  return (
    <footer className="py-16 bg-black">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <div className="mb-8">
            <div className="w-16 h-16 mx-auto">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path d="M50 0 L100 50 L50 100 L0 50 Z" fill="#63B3ED" />
                <circle cx="65" cy="35" r="15" fill="#F6AD55" />
                <path d="M25 25 L75 75" stroke="#F56565" strokeWidth="12" />
              </svg>
            </div>
          </div>
          
          {/* Divider line */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-6"></div>
          
          {/* Copyright */}
          <div className="text-sm text-gray-400 mb-4 text-center">
            © 2025 Chris Abra. All right reserved.
          </div>
          
          {/* Land acknowledgment */}
          <div className="text-sm text-gray-400 mb-4 text-center max-w-2xl">
            I am grateful to live, work, and play on the unceded lands of the Songhees, Esquimalt, and W̱SÁNEĆ peoples.
          </div>
          
          {/* Stripe Climate */}
          <div className="text-sm text-gray-400 flex items-center">
            <span>Proud member of </span>
            <a href="https://climate.stripe.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center mx-1 hover:text-white">
              <span className="font-medium">Stripe Climate</span>
            </a>
            <span role="img" aria-label="Green heart" className="ml-1">💚</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
