import React from 'react';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { STUDIO_INFO, getWhatsAppUrl } from '../data/studioData';
import { Button } from './Button';
import { getOptimizedImageUrl, getImageSrcSet } from '../utils/imageUrl';

interface ConversionSectionProps {
  onOpenConsultation: () => void;
}

export const ConversionSection: React.FC<ConversionSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section className="relative py-28 lg:py-36 px-6 lg:px-12 bg-[#F2EED8] text-[#111111] overflow-hidden border-t border-[#111111]/15">
      {/* Background Architectural Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-15">
        <img
          src={getOptimizedImageUrl("https://images.unsplash.com/photo-1600607687939-ce8a6c25118c", 1000)}
          srcSet={getImageSrcSet("https://images.unsplash.com/photo-1600607687939-ce8a6c25118c")}
          sizes="(max-width: 768px) 100vw, 1200px"
          loading="lazy"
          decoding="async"
          alt="Elite Studios luxury architectural living"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-grain opacity-40" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-10">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-3 px-4 py-1.5 glass-badge rounded-full">
          <span className="w-2 h-2 rounded-full bg-[#E09290]" />
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#111111] font-mono font-bold">
            Chapter 10 · Next Steps
          </span>
        </div>

        {/* Big Editorial Headline */}
        <h2 className="font-serif text-5xl sm:text-7xl md:text-8xl leading-[1.03] tracking-tight font-normal text-[#111111]">
          “Let’s create a space <br />
          <span className="italic font-serif text-[#111111]/60">that feels like yours.”</span>
        </h2>

        {/* Supporting Copy */}
        <p className="text-base sm:text-xl md:text-2xl text-[#111111]/80 font-light max-w-2xl mx-auto leading-relaxed font-sans">
          Tell us about your space and the interior solutions you're looking for. Visit our flagship studio at Gaur World SmartStreet Mall or schedule an on-site consultation anywhere in Delhi NCR.
        </p>

        {/* Primary and Secondary CTA buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <Button
            variant="secondary"
            size="lg"
            onClick={onOpenConsultation}
            className="w-full sm:w-auto shadow-xl group"
            icon={<ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
          >
            BOOK A CONSULTATION
          </Button>

          <Button
            variant="glass"
            size="lg"
            href={getWhatsAppUrl("Hello Elite Studios team, I would like to schedule a consultation for my home.")}
            target="_blank"
            className="w-full sm:w-auto"
            icon={<MessageCircle className="w-4 h-4 text-[#E09290]" />}
            iconPosition="left"
          >
            WHATSAPP US
          </Button>
        </div>

        {/* Verified Location & Contact Strip */}
        <div className="pt-12 border-t border-[#111111]/15 grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-[#111111]/70 font-sans">
          <div className="space-y-1 text-center sm:text-left">
            <p className="text-[#111111] uppercase tracking-wider font-semibold font-mono">Flagship Studio</p>
            <p>Office 255, 4th Floor, Gaur World SmartStreet, Greater Noida West</p>
          </div>
          <div className="space-y-1 text-center">
            <p className="text-[#111111] uppercase tracking-wider font-semibold font-mono">Visiting Hours</p>
            <p>Tue – Sun: 10:30 AM – 8:00 PM</p>
          </div>
          <div className="space-y-1 text-center sm:text-right">
            <p className="text-[#111111] uppercase tracking-wider font-semibold font-mono">Direct Telephone</p>
            <a href={`tel:${STUDIO_INFO.phone}`} className="text-[#111111] font-semibold hover:text-[#E09290] hover:underline">
              {STUDIO_INFO.displayPhone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

