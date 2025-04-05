import { useEffect, useRef } from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import { 
  setupScrollTriggers, 
  setupSmoothScroll, 
  setupParallaxEffects,
  setupCustomSmoothScroll
} from "../lib/animations";

function HomePage() {
  const homeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Setup scroll triggers and animations once the home page is mounted
    if (homeRef.current) {
      // Small timeout to ensure DOM is fully rendered
      let cleanupFunction: (() => void) | undefined;
      
      const timeoutId = setTimeout(() => {
        // Initialize all scroll and parallax animations
        setupScrollTriggers();
        setupSmoothScroll();
        setupParallaxEffects();
        cleanupFunction = setupCustomSmoothScroll();
      }, 100);
      
      return () => {
        clearTimeout(timeoutId);
        // Call cleanup if it exists
        if (cleanupFunction) {
          cleanupFunction();
        }
        // Reset scroll position
        window.scrollTo(0, 0);
      };
    }
    
    return () => {
      // Cleanup any animations on unmount
      window.scrollTo(0, 0);
    };
  }, []);

  return (
    <div ref={homeRef} className="min-h-screen bg-background text-white overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;