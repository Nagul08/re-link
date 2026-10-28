import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import HowItWorksSection from './components/HowItWorksSection';
import CommsStackSection from './components/CommsStackSection';
import ObjectivesSection from './components/ObjectivesSection';
import AudienceSection from './components/AudienceSection';
import ImpactRoadmapSection from './components/ImpactRoadmapSection';
import Footer from './components/Footer';

export default function App() {
  // Intersection Observer for scroll reveals (respecting prefers-reduced-motion)
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const cards = document.querySelectorAll('.card, .flow-step-card');
    cards.forEach((el, index) => {
      el.classList.add('reveal-item');
      el.style.transitionDelay = `${(index % 4) * 70}ms`;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.1
      }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relink-app">
      {/* Sticky Translucent Navbar */}
      <Navbar />

      {/* Main Content Sections (1 to 8) */}
      <main id="main-content">
        {/* 1. Hero */}
        <Hero />

        {/* 2. The Problem */}
        <ProblemSection />

        {/* 3. The Solution */}
        <SolutionSection />

        {/* 4. How It Works */}
        <HowItWorksSection />

        {/* 5. Resilient Communication Stack */}
        <CommsStackSection />

        {/* 6. Core Objectives */}
        <ObjectivesSection />

        {/* 7. Who It's For */}
        <AudienceSection />

        {/* 8. Intended Impact + Roadmap */}
        <ImpactRoadmapSection />
      </main>

      {/* 9. Footer */}
      <Footer />
    </div>
  );
}
