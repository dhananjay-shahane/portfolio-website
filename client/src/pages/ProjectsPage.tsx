import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { projects } from "../data/projects";
import { motion } from "framer-motion";

function ProjectsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-white overflow-x-hidden">
      <Header />
      <main>
        <section className="py-24 bg-gray-900">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Projects</h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Explore our portfolio of work across various industries and platforms.
                Each project represents our commitment to excellence and innovation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title} 
                      className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className={`px-2 py-1 rounded-full text-xs font-medium ${tag.bgColor} ${tag.textColor}`}
                        >
                          {tag.name}
                        </span>
                      ))}
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{project.description.substring(0, 120)}...</p>
                    
                    <div className="mt-6 flex justify-between items-center">
                      <span className="text-xs text-gray-500">
                        {project.features.length} Features
                      </span>
                      
                      {project.link && (
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors duration-200"
                        >
                          View Details →
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default ProjectsPage;