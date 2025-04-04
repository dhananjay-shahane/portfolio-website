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
import { setupScrollTriggers, setupSmoothScroll } from "./lib/animations";
import { gsapInit } from "./lib/gsap";

function App() {
  const appRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize GSAP
    gsapInit();
    
    // Setup scroll triggers and smooth scrolling once the app is mounted
    if (appRef.current) {
      // Small timeout to ensure DOM is fully rendered
      setTimeout(() => {
        setupScrollTriggers();
        setupSmoothScroll();
      }, 100);
    }
    
    return () => {
      // Cleanup any animations on unmount
      window.scrollTo(0, 0);
    };
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
