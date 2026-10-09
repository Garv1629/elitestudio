/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StudioIntro } from './components/StudioIntro';
import { ValueStrip } from './components/ValueStrip';
import { SelectedProjects } from './components/SelectedProjects';
import { ServicesShowcase } from './components/ServicesShowcase';
import { MaterialLibrary } from './components/MaterialLibrary';
import { ProcessSection } from './components/ProcessSection';
import { WhyElite } from './components/WhyElite';
import { ProjectEstimator } from './components/ProjectEstimator';
import { TestimonialsSection } from './components/TestimonialsSection';
import { StudioLocation } from './components/StudioLocation';
import { ConversionSection } from './components/ConversionSection';
import { PersistentConsultationBar } from './components/PersistentConsultationBar';
import { Footer } from './components/Footer';

const ConsultationFunnel = React.lazy(() =>
  import('./components/ConsultationFunnel').then(m => ({ default: m.ConsultationFunnel }))
);

export default function App() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [consultationInitialStep, setConsultationInitialStep] = useState(1);
  const [consultationContext, setConsultationContext] = useState('');

  const handleOpenConsultation = (step: number = 1, context: string = '') => {
    setConsultationInitialStep(step);
    setConsultationContext(context);
    setConsultationOpen(true);
  };

  const handleExploreWork = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenEstimator = () => {
    const el = document.getElementById('estimator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F2EED8] text-[#111111] selection:bg-[#E09290] selection:text-[#111111]">
      {/* Interactive Micro-Interactions */}
      <CustomCursor />
      <ScrollProgressBar />

      {/* Editorial Luxury Navigation */}
      <Navbar
        onOpenConsultation={(step) => handleOpenConsultation(step || 1)}
        onOpenEstimator={handleOpenEstimator}
      />

      <main>
        {/* Scene 01 — Cinematic Opening Hero */}
        <Hero
          onOpenConsultation={() => handleOpenConsultation(1)}
          onExploreWork={handleExploreWork}
        />

        {/* Scene 02 — Studio Introduction Statement (Warm Editorial Section) */}
        <StudioIntro
          onOpenConsultation={() => handleOpenConsultation(1)}
        />

        {/* Trust & Verified Benchmark Strip */}
        <ValueStrip />

        {/* Scene 03 — Selected Projects Showcase (Editorial Asymmetrical Layout & Case Studies) */}
        <SelectedProjects
          onOpenConsultationWithProject={(projectTitle) =>
            handleOpenConsultation(1, `Interested in case study style of ${projectTitle}`)
          }
        />

        {/* Scene 04 — Services as Cinematic Chapters (Turnkey, Kitchens, Furniture, Décor, Wardrobes) */}
        <ServicesShowcase
          onOpenConsultationWithService={(serviceTitle) =>
            handleOpenConsultation(2, `Interested in ${serviceTitle}`)
          }
        />

        {/* Scene 05 — Materials and Craftsmanship (Tactile Surface Library) */}
        <MaterialLibrary />

        {/* Scene 06 — The Design-to-Execution Process (Warm Ivory 4-Stage Sequence) */}
        <ProcessSection />

        {/* Scene 07 — Why Elite Studios (Verified Studio Positioning) */}
        <WhyElite
          onOpenConsultation={() => handleOpenConsultation(1)}
        />

        {/* The Project Estimator (High-Converting Transparency Tool) */}
        <ProjectEstimator
          onOpenConsultationWithEstimate={(estimateSummary) =>
            handleOpenConsultation(3, estimateSummary)
          }
        />

        {/* Scene 08 — Client Testimonials (Verified Homeowner Experiences) */}
        <TestimonialsSection />

        {/* Scene 09 — Studio and Location (Gaur World SmartStreet Flagship Presence) */}
        <StudioLocation
          onOpenConsultation={() => handleOpenConsultation(1)}
        />

        {/* Scene 10 — Final Cinematic Conversion */}
        <ConversionSection
          onOpenConsultation={() => handleOpenConsultation(1)}
        />
      </main>

      {/* Editorial Footer */}
      <Footer
        onOpenConsultation={() => handleOpenConsultation(1)}
      />

      {/* Floating Luxury WhatsApp & Consultation Conversion Triggers */}
      <PersistentConsultationBar
        onOpenConsultation={() => handleOpenConsultation(1)}
      />

      {/* Multi-step High-Converting Consultation Booking Modal */}
      {consultationOpen && (
        <React.Suspense fallback={null}>
          <ConsultationFunnel
            isOpen={consultationOpen}
            onClose={() => setConsultationOpen(false)}
            initialStep={consultationInitialStep}
            initialContext={consultationContext}
          />
        </React.Suspense>
      )}
    </div>
  );
}
