import React from 'react';
import { STUDIO_INFO, getWhatsAppUrl } from '../data/studioData';
import { ArrowUp } from 'lucide-react';
import { Button } from './Button';

interface FooterProps {
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111111] border-t border-[#F2EED8]/15 pt-20 pb-28 md:pb-16 px-6 lg:px-12 text-xs text-[#F2EED8]/65">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Top Call to Action Banner */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-16 border-b border-[#F2EED8]/10">
          <div className="space-y-4 max-w-2xl">
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#E09290] font-mono font-bold block">
              Begin Your Project
            </span>
            <h3 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F2EED8] font-normal leading-tight">
              Ready to craft a home <br />
              <span className="italic font-serif text-[#E09290]">worth coming home to?</span>
            </h3>
            <p className="text-sm text-[#F2EED8]/75 font-light font-sans">
              Visit our studio at Gaur World SmartStreet Mall or schedule an on-site consultation anywhere across Greater Noida West & Delhi NCR.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <Button
              variant="primary"
              size="md"
              onClick={onOpenConsultation}
              className="shadow-md text-center"
            >
              Book Studio Consultation
            </Button>
            <Button
              variant="glass"
              size="md"
              href={getWhatsAppUrl()}
              target="_blank"
              className="text-center"
            >
              Chat on WhatsApp
            </Button>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Studio Brand */}
          <div className="lg:col-span-2 space-y-4">
            <div className="space-y-1">
              <span className="font-serif text-2xl tracking-[0.2em] uppercase text-[#F2EED8] block">
                {STUDIO_INFO.name}
              </span>
              <p className="text-[11px] uppercase tracking-[0.25em] text-[#F2EED8]/60 font-mono">
                {STUDIO_INFO.eyebrow}
              </p>
            </div>
            <p className="text-xs text-[#F2EED8]/75 font-light max-w-sm leading-relaxed font-sans">
              Turnkey interior architecture, precision modular kitchens, and custom wooden furniture crafted for high-standard residences in Greater Noida West and Delhi NCR.
            </p>
            <div className="pt-2 text-[11px] text-[#E09290] font-mono font-bold">
              5.0 ★ Rated · 17 Verified Client Reviews
            </div>
          </div>

          {/* Offerings */}
          <div className="space-y-3 font-sans">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#F2EED8] font-bold font-mono">
              What We Create
            </p>
            <ul className="space-y-2 text-xs text-[#F2EED8]/70">
              <li><a href="#services" className="hover:text-[#E09290] transition-colors">Turnkey Interiors</a></li>
              <li><a href="#services" className="hover:text-[#E09290] transition-colors">Modular Kitchens</a></li>
              <li><a href="#services" className="hover:text-[#E09290] transition-colors">Custom Furniture</a></li>
              <li><a href="#services" className="hover:text-[#E09290] transition-colors">Wallpapers & Louvers</a></li>
              <li><a href="#services" className="hover:text-[#E09290] transition-colors">Motorized Blinds</a></li>
              <li><a href="#materials" className="hover:text-[#E09290] transition-colors">Material Library</a></li>
            </ul>
          </div>

          {/* Navigation */}
          <div className="space-y-3 font-sans">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#F2EED8] font-bold font-mono">
              Studio
            </p>
            <ul className="space-y-2 text-xs text-[#F2EED8]/70">
              <li><a href="#projects" className="hover:text-[#E09290] transition-colors">Selected Projects</a></li>
              <li><a href="#process" className="hover:text-[#E09290] transition-colors">Our 4-Step Process</a></li>
              <li><a href="#estimator" className="hover:text-[#E09290] transition-colors">Cost Estimator</a></li>
              <li><a href="#studio" className="hover:text-[#E09290] transition-colors">Studio Location</a></li>
              <li><a href="tel:+919818854320" className="hover:text-[#E09290] transition-colors">Direct Phone</a></li>
            </ul>
          </div>

          {/* Location & Contact */}
          <div className="space-y-3 font-sans">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#F2EED8] font-bold font-mono">
              Flagship Studio
            </p>
            <p className="text-xs text-[#F2EED8]/85 leading-relaxed">
              Office No. 255, 4th Floor, <br />
              Gaur World SmartStreet Mall, <br />
              Greater Noida West, UP 201318
            </p>
            <p className="text-[11px] text-[#F2EED8]/60 pt-1 font-mono">
              Tue – Sun: 10:30 AM – 8:00 PM
            </p>
            <p className="text-xs text-[#F2EED8] font-semibold">
              {STUDIO_INFO.displayPhone}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#F2EED8]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-sans">
          <p>© {new Date().getFullYear()} Elite Studios. All rights reserved. Greater Noida West & Delhi NCR.</p>

          <button
            onClick={scrollToTop}
            className="glass-button rounded-full px-4 py-2 flex items-center gap-1.5 text-[#F2EED8] transition-colors uppercase tracking-wider font-mono font-bold text-[10px]"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

