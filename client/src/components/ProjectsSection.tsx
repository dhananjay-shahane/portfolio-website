import { useRef, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

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
        <h2 className="text-sm md:text-base font-medium mb-2 text-indigo-400 uppercase tracking-wider">WHAT I'VE BUILT</h2>
        <h3 className="text-4xl md:text-5xl font-bold mb-6 text-white">Case Studies</h3>
        
        <p className="text-lg text-gray-300 mb-16 max-w-3xl">
          Here are a few small case studies of some of my favourite projects that I have completed in
          the past few years. I've tried to select a variety of projects, including complex business
          automation systems, website designs, and more unique web application style builds.
        </p>
        
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
