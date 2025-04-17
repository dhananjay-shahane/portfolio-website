import { useRef, useEffect } from "react";
import gsap from "gsap";

interface SkillPillProps {
  skill: string;
  color: string;
  delay?: number;
}

const SkillPill = ({ skill, color, delay = 0 }: SkillPillProps) => {

  return (
    <div 
      className="px-4 py-2 rounded-full text-sm md:text-base font-medium text-white"
      style={{ backgroundColor: color }}
    >
      {skill}
    </div>
  );
};

export default SkillPill;
