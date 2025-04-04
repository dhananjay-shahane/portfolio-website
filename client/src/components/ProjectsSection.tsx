import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    // Animation is handled by the main setupScrollTriggers function in animations.ts
  }, []);

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-20 bg-white gsap-reveal"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <div>
            <h2 className="text-base font-semibold mb-2 text-black">Work</h2>
            <h3 className="text-lg font-normal text-gray-600">
              A sneak preview of selected<br />
              projects between '20—'24
            </h3>
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="mt-4 md:mt-0 flex items-center justify-center space-x-2 border border-black rounded-md px-5 py-2 text-black"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="18" height="18" x="3" y="3" rx="2" />
              <path d="M8 12h8" />
              <path d="M12 8v8" />
            </svg>
            <span className="text-sm font-medium">Request folio</span>
          </motion.button>
        </div>
        
        {/* Marketing Team UI Mockup */}
        <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg">
          {/* Header with Browser UI */}
          <div className="bg-gray-200 p-3 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="bg-white rounded-md px-3 py-1 text-xs text-gray-500">
              Frames Studio →
            </div>
            <div className="flex space-x-2">
              <div className="w-6 h-6 flex items-center justify-center bg-gray-300 rounded-full text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" x2="12" y1="8" y2="12" />
                  <line x1="12" x2="12.01" y1="16" y2="16" />
                </svg>
              </div>
              <div className="w-6 h-6 flex items-center justify-center bg-gray-300 rounded-full text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="4 17 10 11 4 5" />
                  <line x1="12" x2="20" y1="19" y2="19" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="flex bg-white">
            {/* Sidebar */}
            <div className="hidden md:block w-48 bg-white border-r border-gray-200 p-3">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-gray-600 text-xs font-medium">Home</div>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-gray-600 text-xs font-medium">Frames</div>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-gray-600 text-xs font-medium">Integrations</div>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-blue-600 text-xs font-medium border-b-2 border-blue-500 pb-1">Shared</div>
                </div>
              </div>
              
              <div className="bg-gray-100 rounded-md p-2 mb-4">
                <div className="text-xs text-gray-600 font-medium">+ Create new item</div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  <div className="text-xs text-gray-600">Recent</div>
                </div>
                <div className="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  <div className="text-xs text-gray-600">Active</div>
                </div>
              </div>
            </div>
            
            {/* Main Content Area */}
            <div className="flex-1 p-4">
              <div className="mb-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium">Marketing Team</h3>
                  <div className="flex items-center space-x-2 text-xs text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    <span>Invite</span>
                  </div>
                </div>
              </div>
              
              {/* Share Modal */}
              <div className="bg-white rounded-lg shadow-2xl p-4 border border-gray-200 max-w-md mx-auto">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-md font-medium">Share Marketing Team</h4>
                  <button className="text-gray-400 hover:text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                </div>
                
                <div className="mb-4">
                  <div className="flex justify-between mb-2">
                    <div className="text-xs font-medium">Invite members</div>
                    <div className="text-xs text-blue-600 font-medium">or members (4)</div>
                  </div>
                  
                  {/* Team Member List */}
                  <div className="space-y-3">
                    {/* Member 1 */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs">RS</div>
                        <div>
                          <div className="text-xs font-medium">Ray Santos (You)</div>
                          <div className="text-xs text-gray-500">ray@example.com</div>
                        </div>
                      </div>
                      <div className="bg-gray-100 rounded px-2 py-1 text-xs">Owner</div>
                    </div>
                    
                    {/* Member 2 */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white text-xs">MM</div>
                        <div>
                          <div className="text-xs font-medium">Miguel Mills · Saginaw</div>
                          <div className="text-xs text-gray-500">miguel@example.com</div>
                        </div>
                      </div>
                      <div className="bg-gray-100 rounded px-2 py-1 text-xs">Can view</div>
                    </div>
                    
                    {/* Member 3 */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs">DG</div>
                        <div>
                          <div className="text-xs font-medium">Daniel Gray</div>
                          <div className="text-xs text-gray-500">daniel@example.com</div>
                        </div>
                      </div>
                      <div className="bg-gray-100 rounded px-2 py-1 text-xs">Can edit</div>
                    </div>
                    
                    {/* Member 4 */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">FP</div>
                        <div>
                          <div className="text-xs font-medium">Florence Patel</div>
                          <div className="text-xs text-gray-500">florence.patel@example.com</div>
                        </div>
                      </div>
                      <div className="bg-gray-100 rounded px-2 py-1 text-xs">Admin</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between pt-4 border-t border-gray-200">
                  <button className="text-xs text-gray-600 py-1 px-4 rounded border border-gray-300">
                    Cancel
                  </button>
                  <button className="text-xs text-white py-1 px-4 rounded bg-black">
                    Share
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
