import { useRef, useEffect } from "react";
import { Project } from "@shared/types";
import gsap from "gsap";

interface ProjectCardProps {
  project: Project;
  delay?: number;
}

const ProjectCard = ({ project, delay = 0 }: ProjectCardProps) => {
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
          start: "top 90%",
          toggleActions: "play none none none"
        }
      });
    }
  }, [delay]);

  return (
    <div 
      ref={cardRef}
      className={`project-card rounded-2xl overflow-hidden ${project.backgroundColor}`}
    >
      <div className="aspect-video overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-6">
        <div 
          className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${project.tagBackgroundColor} ${project.tagTextColor}`}
        >
          {project.tag}
        </div>
        
        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
        
        <div className={`mb-4 ${project.textColor}`}>
          {project.description.map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>
        
        {project.launchDate && (
          <p className={project.textColor}>
            {project.launchDateLabel}: {project.launchDate}
          </p>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
