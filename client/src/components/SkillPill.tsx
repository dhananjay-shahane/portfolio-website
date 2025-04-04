import { useRef, useEffect } from "react";
import gsap from "gsap";

interface SkillPillProps {
  skill: string;
  color: string;
  delay?: number;
}

const SkillPill = ({ skill, color, delay = 0 }: SkillPillProps) => {
  const pillRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Add individual animation for each pill
    if (pillRef.current) {
      gsap.from(pillRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: "power1.out",
        delay,
        scrollTrigger: {
          trigger: pillRef.current,
          start: "top 90%",
          toggleActions: "play none none none"
        }
      });
    }
  }, [delay]);

  return (
    <div 
      ref={pillRef}
      className="skill-pill px-4 py-2 rounded-full text-sm md:text-base font-medium text-white"
      style={{ backgroundColor: color }}
    >
      {skill}
    </div>
  );
};

export default SkillPill;
