import { useRef, useEffect } from "react";
import SkillPill from "./SkillPill";
import { currentSkills, learningSkills } from "../data/skills";

const SkillsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    // Animation is handled by the main setupScrollTriggers function in animations.ts
  }, []);

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-20 bg-gray-900 gsap-reveal"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-5xl mx-auto">
          {currentSkills.map((skill, index) => (
            <SkillPill 
              key={index} 
              skill={skill.name} 
              color={skill.color}
              delay={index * 0.03}
            />
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto text-center gsap-reveal">
          <p className="text-xl text-gray-300 mb-8">
            In addition to my existing skills/knowledge, I am currently focusing 
            on expanding my expertise in the following areas and tools:
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-8">
            {learningSkills.map((skill, index) => (
              <SkillPill 
                key={index} 
                skill={skill.name} 
                color={skill.color}
                delay={(index * 0.05) + 0.5}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
