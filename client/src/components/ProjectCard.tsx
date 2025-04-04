import { useRef, useEffect } from "react";
import { Project, ProjectFeature } from "@shared/types";
import gsap from "gsap";
import { CheckIcon } from "lucide-react";

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
    <article 
      ref={cardRef}
      className="flex flex-col lg:flex-row gap-x-16 gap-y-10"
    >
      {/* Left Side - Image */}
      <div className={`w-full lg:w-2/5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
        <div className="aspect-video rounded-lg overflow-hidden shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      {/* Right Side - Content */}
      <div className={`flex-1 ${isEven ? 'lg:order-1 lg:pr-8' : 'lg:order-2 lg:pl-8'}`}>
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">{project.title}</h3>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag, index) => (
            <span 
              key={index}
              className={`px-3 py-1 rounded-full text-xs font-medium ${tag.bgColor} ${tag.textColor}`}
            >
              {tag.name}
            </span>
          ))}
        </div>
        
        {/* Description */}
        <p className="text-gray-300 mb-8 leading-relaxed">
          {project.description}
        </p>
        
        {/* Features */}
        <div className="mt-6 space-y-3">
          {project.features.map((feature, index) => (
            <FeatureItem key={index} feature={feature} />
          ))}
        </div>
        
        {/* Link - If available */}
        {project.link && (
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block mt-8 px-6 py-3 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 transition-colors duration-200"
          >
            View Project
          </a>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
