import { useRef, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";
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
      className="py-20 bg-black gsap-reveal"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <div>
            <h2 className="text-sm md:text-base font-medium mb-2 text-gray-400 uppercase tracking-wider">Work</h2>
            <h3 className="text-2xl md:text-3xl font-medium mb-3 text-white">
              A sneak preview of selected<br />
              projects between '20—'24
            </h3>
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="mt-4 md:mt-0 flex items-center justify-center space-x-2 border border-white rounded-md px-5 py-3 text-white"
          >
            <span className="text-sm font-medium">Request folio</span>
          </motion.button>
        </div>
        
        {/* Featured Project Showcase */}
        <div className="bg-[#f7f7f7] dark:bg-[#111] rounded-2xl overflow-hidden shadow-xl mb-16">
          <div className="relative">
            <img 
              src="/images/project4.png" 
              alt="Featured Project" 
              className="w-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <div className="bg-white rounded-full p-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        {/* Project Cards */}
        <div className="space-y-20">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              delay={index * 0.2}
              isEven={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
