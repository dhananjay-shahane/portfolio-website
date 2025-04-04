const Footer = () => {
  return (
    <footer className="py-8 bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full overflow-hidden bg-gradient-to-r from-blue-400 via-pink-500 to-orange-500 flex items-center justify-center">
                <span className="text-sm font-bold text-white">CA</span>
              </div>
              <span className="text-lg font-bold">Chris Abra</span>
            </a>
          </div>
          
          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
