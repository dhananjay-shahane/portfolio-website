import { useEffect, useRef } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { queryClient } from "./lib/queryClient";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import { 
  setupScrollTriggers, 
  setupSmoothScroll, 
  setupCustomSmoothScroll,
  setupParallaxEffects
} from "./lib/animations";
import { gsapInit } from "./lib/gsap";

function App() {
  const appRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize GSAP
    gsapInit();
    
    // Setup scroll triggers and animations once the app is mounted
    if (appRef.current) {
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
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <div ref={appRef} className="min-h-screen bg-background text-white overflow-x-hidden">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <Footer />
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}

export default App;
