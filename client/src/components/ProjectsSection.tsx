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
      className="py-20 bg-pink-500 gsap-reveal"
    >
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-pink-900">WHAT I'M WORKING ON</h2>
        <h3 className="text-3xl md:text-5xl font-bold mb-6 text-white">Current Projects</h3>
        
        <p className="text-lg text-pink-100 mb-12 max-w-3xl">
          I'm keeping this section updated with a selection of the projects I am currently tackling as a 
          web designer and digital designer. From website overhauls to business automation systems 
          to side projects, this will offer a glimpse into my current daily work and the type of projects I 
          am currently focused on.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
