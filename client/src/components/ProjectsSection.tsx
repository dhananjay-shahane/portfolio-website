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
        
        {/* Featured Project Modal Mockup */}
        <div className="bg-[#f7f7f7] dark:bg-[#111] rounded-2xl overflow-hidden shadow-xl mb-12">
          <div className="bg-[#111] p-4 border-b border-gray-800 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-500"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-gray-400 text-xs">Share Marketing Team</div>
            <div></div>
          </div>
          <div className="p-6 bg-[#111] text-white">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h4 className="text-lg font-medium mb-1">Invite members</h4>
                <p className="text-gray-400 text-xs">Invite members (4)</p>
              </div>
              <button className="text-xs text-gray-400">×</button>
            </div>
            
            {/* Invite form mockup */}
            <div className="mb-6">
              <div className="relative mb-4">
                <input 
                  type="text" 
                  placeholder="Type or paste email addresses" 
                  className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-3 text-sm text-white"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-2 mb-4">
                {['Owner', 'Can edit', 'Can view'].map((role, i) => (
                  <div key={i} className="inline-flex items-center space-x-1">
                    <div className={`h-4 w-4 rounded-full border ${i === 0 ? 'bg-blue-500 border-blue-600' : 'border-gray-600'}`}></div>
                    <span className="text-xs text-gray-300">{role}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Member List */}
            <div className="space-y-4">
              {[
                { name: 'Ray Santos', email: 'ray@example.com', color: 'bg-purple-500' },
                { name: 'Miguel Mills', email: 'miguel@example.com', color: 'bg-red-500' },
                { name: 'Daniel Abreu', email: 'daniel@example.com', color: 'bg-green-500' },
                { name: 'Florence Knoll', email: 'florence@example.com', color: 'bg-blue-500' }
              ].map((member, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className={`w-8 h-8 rounded-full ${member.color} flex items-center justify-center text-xs text-white`}>
                      {member.name.split(' ').map(part => part[0]).join('')}
                    </div>
                    <div>
                      <div className="text-sm text-white">{member.name}</div>
                      <div className="text-xs text-gray-400">{member.email}</div>
                    </div>
                  </div>
                  <select className="bg-gray-800 border border-gray-700 rounded text-xs p-1 text-gray-300">
                    <option>Can edit</option>
                    <option>Can view</option>
                  </select>
                </div>
              ))}
            </div>
            
            <div className="flex justify-between mt-6 pt-4 border-t border-gray-800">
              <button className="text-xs text-gray-400">Cancel</button>
              <button className="bg-blue-600 text-white text-xs px-4 py-2 rounded">Share</button>
            </div>
          </div>
        </div>
        
        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
