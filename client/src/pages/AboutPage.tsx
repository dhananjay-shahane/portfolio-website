import Header from "../components/Header";
import Footer from "../components/Footer";
import { aboutContent } from "../data/about";
import { useEffect } from "react";
import { motion } from "framer-motion";

function AboutPage() {
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">About Us</h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                We're a team of designers and developers passionate about creating 
                exceptional digital experiences that help businesses grow.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gray-800 rounded-xl p-8 shadow-lg"
              >
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-gray-300 leading-relaxed">
                  Our mission is to empower businesses with innovative digital solutions that drive growth and 
                  success. We believe in creating design-forward experiences that don't just look great, but also 
                  deliver measurable results.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gray-800 rounded-xl p-8 shadow-lg"
              >
                <h2 className="text-2xl font-bold mb-4">Our Process</h2>
                <p className="text-gray-300 leading-relaxed">
                  We follow a collaborative and iterative approach to every project. We start by understanding your 
                  business goals, then craft solutions that align with your vision while incorporating the latest 
                  design trends and technologies.
                </p>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-20"
            >
              <h2 className="text-3xl font-bold mb-10 text-center">Our Team</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {aboutContent.map((member, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.8 + (index * 0.1) }}
                    className="bg-gray-800 rounded-xl overflow-hidden shadow-lg"
                  >
                    <div className="bg-indigo-600 h-40 flex items-center justify-center">
                      <span className="text-6xl font-bold text-white/30">{member.name.charAt(0)}</span>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                      <p className="text-indigo-400 text-sm mb-4">{member.role}</p>
                      <p className="text-gray-400 text-sm">{member.bio}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default AboutPage;