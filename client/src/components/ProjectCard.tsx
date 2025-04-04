import { useRef, useEffect } from "react";
import { Project, ProjectFeature } from "@shared/types";
import gsap from "gsap";
import { CheckIcon } from "lucide-react";
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
    <motion.article 
      ref={cardRef}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-[#111] border border-gray-800 rounded-2xl overflow-hidden shadow-xl p-0"
    >
      {/* Project Card Header with Image */}
      <div className="relative">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-4 right-4 flex space-x-2">
          <div className="bg-black bg-opacity-70 text-white text-xs px-3 py-1 rounded-full">
            {new Date().getFullYear()}
          </div>
          <div className="bg-green-500 bg-opacity-70 text-white text-xs px-3 py-1 rounded-full">
            UI/UX
          </div>
        </div>
      </div>
      
      {/* Project Details */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{project.title}</h3>
            <p className="text-gray-400 text-sm">Marketing Collaboration Platform</p>
          </div>
          
          <div className="flex space-x-2">
            <span className="text-gray-400 text-xs border border-gray-700 rounded-full px-2 py-1">Share</span>
            <span className="text-gray-400 text-xs border border-gray-700 rounded-full px-2 py-1">Details</span>
          </div>
        </div>
        
        {/* Description */}
        <p className="text-gray-300 mb-6 leading-relaxed text-sm">
          {project.description}
        </p>
        
        {/* Team Members */}
        <div className="mt-6 border-t border-gray-800 pt-4">
          <h4 className="text-white text-sm font-medium mb-3">Team Members</h4>
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-[#111] flex items-center justify-center text-xs text-white">JD</div>
            <div className="w-8 h-8 rounded-full bg-green-500 border-2 border-[#111] flex items-center justify-center text-xs text-white">MK</div>
            <div className="w-8 h-8 rounded-full bg-purple-500 border-2 border-[#111] flex items-center justify-center text-xs text-white">SL</div>
            <div className="w-8 h-8 rounded-full bg-orange-500 border-2 border-[#111] flex items-center justify-center text-xs text-white">AR</div>
            <div className="w-8 h-8 rounded-full bg-gray-700 border-2 border-[#111] flex items-center justify-center text-xs text-white">+3</div>
          </div>
        </div>
        
        {/* Actions */}
        <div className="mt-6 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="text-gray-400 flex items-center space-x-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span className="text-xs">San Francisco</span>
            </div>
            <div className="text-gray-400 flex items-center space-x-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
                <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
              </svg>
              <span className="text-xs">12 Tasks</span>
            </div>
          </div>
          
          {project.link && (
            <motion.a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-xs text-white bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Project
            </motion.a>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
