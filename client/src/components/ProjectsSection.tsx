import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ExternalLink } from "lucide-react";

// Register ScrollTrigger with GSAP
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Sample project data
const projectsData = [
  {
    id: 1,
    title: "Share Marketing Platform",
    description: "Collaborative platform for marketing teams",
    imageUrl: "https://dhananjayshahane.vercel.app/assets/grin-website-4a307ae4.png",
    websiteUrl: "https://example.com/project1",
    tags: ["React", "TailwindCSS", "GSAP"]
  },
  {
    id: 2,
    title: "Dashboard Analytics",
    description: "Real-time analytics dashboard",
    imageUrl: "https://dhananjayshahane.vercel.app/assets/eqaaya-website-a9565452.png",
    websiteUrl: "https://example.com/project2",
    tags: ["NextJS", "ChartJS", "Firebase"]
  },
  {
    id: 3,
    title: "Content Management System",
    description: "Custom CMS for digital marketing teams",
    imageUrl: "https://dhananjayshahane.vercel.app/assets/freshfood-0036c625.png",
    websiteUrl: "https://example.com/project3",
    tags: ["TypeScript", "MongoDB", "AWS"]
  }
];

const ProjectsSection = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

  // Setup GSAP animations
  useEffect(() => {
    // Safety check for browser environment
    if (typeof window === "undefined") return;
    
    const ctx = gsap.context(() => {
      // Pin the header
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top+=80px",
        endTrigger: sectionRef.current,
        end: "bottom bottom",
        pin: headerRef.current,
        pinSpacing: false,
        pinReparent: true,
        anticipatePin: 1,
        refreshPriority: 1,
      });

      // Animate cards
      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        
        // Set initial state
        gsap.set(card, { 
          opacity: 0, 
          y: 50 
        });
        
        // Animation on scroll
        gsap.to(card, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            end: "top center",
            toggleActions: "play none none reverse",
          }
        });
      });
    }, sectionRef);
    
    // Cleanup
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 bg-black min-h-screen w-full max-w-7xl mx-auto px-4 md:px-6"
    >
      <div className="grid md:grid-cols-12 grid-cols-1 gap-6">
        {/* Fixed Header */}
        <div className="md:col-span-4 col-span-full">
          <div 
            ref={headerRef} 
            className="bg-black py-6"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-blue-400 mb-2">
              WORK
            </h2>
            <h3 className="text-2xl md:text-3xl font-medium mb-4 text-white">
              A sneak preview of selected
              <br />
              projects between '20—'24
            </h3>
            <p className="text-gray-400 mb-6">
              Explore my portfolio of digital projects focused on modern web technologies.
            </p>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center space-x-2 border border-white rounded-md px-5 py-3 text-white"
            >
              <span className="text-sm font-medium">Resume</span>
            </motion.button>
          </div>
        </div>

        {/* Project Cards */}
        <div className="md:col-span-8 col-span-full">
          <div className="space-y-20">
            {projectsData.map((project, index) => (
              <div
                key={project.id}
                // ref={(el) => addToCardsRef(el, index)}
                className="bg-[#111] rounded-2xl overflow-hidden shadow-xl"
              >
                {/* Project Image & Details */}
                <div className="relative h-100 overflow-hidden">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-4 w-full">
                      <div className="flex justify-between items-center">
                        <h3 className="text-xl font-bold text-white">{project.title}</h3>
                        <a 
                          href={project.websiteUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 bg-blue-600 rounded-full text-white"
                        >
                          <ExternalLink size={16} />
                        </a>
                      </div>
                      <p className="text-gray-300 text-sm mt-2">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {project.tags.map((tag, i) => (
                          <span key={i} className="px-2 py-1 bg-gray-800 text-xs text-gray-300 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;