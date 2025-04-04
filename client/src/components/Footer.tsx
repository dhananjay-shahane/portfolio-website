import { motion } from "framer-motion";
import { FiTwitter, FiBookOpen } from "react-icons/fi";
import { AiOutlineLinkedin } from "react-icons/ai";
import { SiSubstack } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="py-16 bg-black">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Information - Left Column */}
          <div className="space-y-6">
            <div>
              <h3 className="text-white text-xl font-bold mb-3">Contact</h3>
              <p className="text-gray-400 text-sm">
                Reach out for work, collab, or<br />
                mentoring: hola@oriol.design
              </p>
            </div>

            <div>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center space-x-2 bg-black border border-white rounded-full px-5 py-2 text-white"
              >
                <span className="text-sm">Book intro</span>
              </motion.button>
            </div>

            {/* Logo */}
            <div className="mt-8">
              <div className="flex">
                <div className="relative w-40 h-40">
                  <div className="absolute w-full h-full rounded-full bg-black flex items-center justify-center">
                    <div className="w-20 h-20 rotate-45 bg-red-500"></div>
                  </div>
                </div>
                <div className="relative ml-4 h-40">
                  <div className="w-24 h-full bg-black flex items-end">
                    <div className="w-full h-1/3 bg-purple-400"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Need Leadership - Right Column */}
          <div className="flex flex-col justify-between">
            <div className="space-y-6">
              <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight">
                NEED KIND<br />LEADERSHIP?
              </h2>

              <div className="space-y-3">
                <p className="text-white text-lg font-medium">Find me elsewhere in the internet</p>
                <div className="flex flex-wrap gap-4">
                  <a href="#" className="flex items-center text-gray-300 hover:text-white transition-colors">
                    <AiOutlineLinkedin className="mr-1" /> LinkedIn
                  </a>
                  <a href="#" className="flex items-center text-gray-300 hover:text-white transition-colors">
                    <FiTwitter className="mr-1" /> Twitter
                  </a>
                  <a href="#" className="flex items-center text-gray-300 hover:text-white transition-colors">
                    <SiSubstack className="mr-1" /> Substack
                  </a>
                  <a href="#" className="flex items-center text-gray-300 hover:text-white transition-colors">
                    <span className="mr-1">⊕</span> ADPList
                  </a>
                  <a href="#" className="flex items-center text-gray-300 hover:text-white transition-colors">
                    <FiBookOpen className="mr-1" /> Read.cv
                  </a>
                </div>
              </div>
            </div>

            {/* Logo Brand ORIOL at the bottom */}
            <div className="mt-10 md:mt-0">
              <div className="flex items-end">
                {/* O */}
                <div className="relative w-32 h-32 bg-black flex items-center justify-center border-8 border-black rounded-full">
                  <div className="w-14 h-14 rotate-45 bg-red-500"></div>
                </div>
                {/* R */}
                <div className="h-32 w-14 bg-black relative ml-2">
                  <div className="absolute bottom-0 right-0 w-full h-1/4 bg-purple-400"></div>
                </div>
                {/* I */}
                <div className="h-32 w-14 bg-black ml-2 relative">
                  <div className="absolute top-1/2 w-full h-1/4 bg-yellow-400"></div>
                </div>
                {/* O */}
                <div className="relative w-32 h-32 bg-black flex items-center justify-center border-8 border-black rounded-full ml-2">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <div className="w-1/2 h-full bg-green-500 absolute left-0"></div>
                  </div>
                </div>
                {/* L */}
                <div className="h-32 w-14 bg-black ml-2 relative">
                  <div className="absolute bottom-0 right-0 w-full h-1/4 bg-purple-400"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright line */}
        <div className="mt-10 pt-6 border-t border-gray-800 text-gray-500 text-xs text-center">
          Designed & developed with love from Barcelona
          <span className="float-right">©2024</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
