import { useRef, useEffect } from "react";
import { Project, ProjectFeature } from "@shared/types";
import gsap from "gsap";
import { CheckIcon, ChevronDown, Users, Bell, Calendar, MoreHorizontal, Search } from "lucide-react";
import { motion } from "framer-motion";

interface FeatureItemProps {
  feature: ProjectFeature;
}

const FeatureItem = ({ feature }: FeatureItemProps) => {
  const colorClasses: { [key: string]: string } = {
    blue: "text-blue-500",
    yellow: "text-yellow-500",
    pink: "text-pink-500"
  };

  return (
    <div className="flex items-start mt-4">
      <div className={`flex-shrink-0 mt-1 mr-3 ${colorClasses[feature.color] || "text-blue-500"}`}>
        <CheckIcon className="w-5 h-5" />
      </div>
      <div>
        <h4 className="font-medium text-white">{feature.title}</h4>
        <p className="text-gray-300 text-sm mt-1">{feature.description}</p>
      </div>
    </div>
  );
};

interface ProjectCardProps {
  project: Project;
  delay?: number;
  isEven?: boolean;
}

const ProjectCard = ({ project, delay = 0, isEven = false }: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Add individual animation for each card
    if (cardRef.current) {
      gsap.from(cardRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power2.out",
        delay,
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      });
    }
  }, [delay]);

  return (
    <motion.div 
      ref={cardRef}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden shadow-lg"
    >
      {/* Dashboard Header */}
      <div className="border-b border-gray-200 dark:border-gray-800 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-blue-600 rounded text-white flex items-center justify-center font-bold text-sm">E</div>
            <h3 className="font-semibold dark:text-white">Entra Studio</h3>
            <ChevronDown className="h-4 w-4 text-gray-500 dark:text-gray-300" />
          </div>
          
          <div className="flex items-center space-x-2">
            <button className="p-1.5 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
              <Bell className="h-4 w-4" />
            </button>
            <button className="p-1.5 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
              <Users className="h-4 w-4" />
            </button>
            <button className="p-1.5 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
              <Calendar className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Toolbar */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center space-x-2">
          <button className="text-xs font-medium py-1.5 px-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md">
            Home
          </button>
          <button className="text-xs font-medium py-1.5 px-3 text-gray-500 dark:text-gray-400 rounded-md">
            Forms
          </button>
          <button className="text-xs font-medium py-1.5 px-3 text-gray-500 dark:text-gray-400 rounded-md">
            Integrations
          </button>
          <button className="text-xs font-medium py-1.5 px-3 text-gray-500 dark:text-gray-400 rounded-md">
            Brand KPI
          </button>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-800">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-sm font-semibold dark:text-white">Marketing Team</h4>
          <button className="p-1.5 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800">
            <MoreHorizontal className="h-4 w-4" />
          </button>
        </div>
        
        <div className="relative flex items-center mb-4">
          <Search className="h-4 w-4 absolute left-3 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search" 
            className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-md text-gray-800 dark:text-gray-200"
          />
        </div>
        
        <div className="grid grid-cols-5 gap-2 text-xs text-gray-500 dark:text-gray-400 font-medium border-b border-gray-200 dark:border-gray-800 pb-2">
          <div>Title</div>
          <div>Owner</div>
          <div>Status</div>
          <div>Due date</div>
          <div>Categories</div>
        </div>
      </div>
      
      {/* Member List */}
      <div className="max-h-72 overflow-y-auto">
        {/* Member Row 1 */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-800 flex items-center text-xs">
          <div className="w-1/5">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                <span className="text-red-600 text-xs">M</span>
              </div>
              <span className="dark:text-white">Marketing Campaign</span>
            </div>
          </div>
          <div className="w-1/5">
            <div className="flex items-center space-x-1">
              <div className="w-5 h-5 rounded-full bg-purple-500 flex items-center justify-center text-[10px] text-white">RS</div>
              <span className="dark:text-gray-300">Ray Santos (You)</span>
            </div>
          </div>
          <div className="w-1/5">
            <span className="px-2 py-1 rounded-full bg-green-100 text-green-800 text-[10px]">25%</span>
          </div>
          <div className="w-1/5 dark:text-gray-300">23 Aug 2023</div>
          <div className="w-1/5 flex items-center space-x-1">
            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
            <div className="w-2 h-2 rounded-full bg-pink-500"></div>
          </div>
        </div>
        
        {/* Member Row 2 */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-800 flex items-center text-xs">
          <div className="w-1/5">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="text-blue-600 text-xs">W</span>
              </div>
              <span className="dark:text-white">Website Redesign</span>
            </div>
          </div>
          <div className="w-1/5">
            <div className="flex items-center space-x-1">
              <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-[10px] text-white">JP</div>
              <span className="dark:text-gray-300">Jean Proust</span>
            </div>
          </div>
          <div className="w-1/5">
            <span className="px-2 py-1 rounded-full bg-yellow-100 text-yellow-800 text-[10px]">50%</span>
          </div>
          <div className="w-1/5 dark:text-gray-300">11 Aug 2023</div>
          <div className="w-1/5 flex items-center space-x-1">
            <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
          </div>
        </div>
        
        {/* Member Row 3 */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-800 flex items-center text-xs">
          <div className="w-1/5">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                <span className="text-green-600 text-xs">S</span>
              </div>
              <span className="dark:text-white">Social Media Plan</span>
            </div>
          </div>
          <div className="w-1/5">
            <div className="flex items-center space-x-1">
              <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-[10px] text-white">DA</div>
              <span className="dark:text-gray-300">Daniel Adler</span>
            </div>
          </div>
          <div className="w-1/5">
            <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-800 text-[10px]">30%</span>
          </div>
          <div className="w-1/5 dark:text-gray-300">9 Aug 2023</div>
          <div className="w-1/5 flex items-center space-x-1">
            <div className="w-2 h-2 rounded-full bg-purple-500"></div>
            <div className="w-2 h-2 rounded-full bg-orange-500"></div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-800 flex justify-center">
        <button className="text-xs text-gray-500 dark:text-gray-400 hover:underline">
          View all tasks
        </button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
