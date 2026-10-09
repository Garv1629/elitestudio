import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Button } from './Button';
import { getOptimizedImageUrl, getImageSrcSet } from '../utils/imageUrl';

interface WhyEliteProps {
  onOpenConsultation: () => void;
}

export const WhyElite: React.FC<WhyEliteProps> = ({ onOpenConsultation }) => {
  const pillars = [
    {
      title: "Turnkey Execution",
      tagline: "One team from design to handover.",
      description: "No shifting blame between architects and carpenters. We take complete commercial, structural, and aesthetic responsibility under a unified contract."
    },
    {
      title: "In-House Joinery",
      tagline: "Furniture created around your space.",
      description: "We don't buy generic catalog furniture. Our dedicated manufacturing facility crafts beds, dining tables, and cabinetry to the millimeter with premium PU finishes."
    },
    {
      title: "Climate-Tested Materials",
      tagline: "Aesthetics engineered for longevity.",
      description: "IS 710 calibrated marine ply, anti-termite treatments, and heat-resistant quartz selected specifically to withstand Delhi NCR's intense summers and monsoon humidity."
    },
    {
      title: "Local NCR Presence",
      tagline: "Gaur World SmartStreet Mall studio.",
      description: "Conveniently located in Greater Noida West with an active design studio, material library, and sample gallery you can visit any day of the week."
    }
  ];

  return (
    <section className="py-28 lg:py-36 px-6 lg:px-12 bg-[#F2EED8] border-t border-[#111111]/15 text-[#111111]">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Why Elite Grid */}
        <div className="space-y-16">
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E09290]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#111111]/70 font-semibold font-sans">
                Chapter 06 · Verified Studio Principles
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#111111] font-normal leading-[1.05]">
              Designed beautifully. <br />
              <span className="italic font-serif text-[#111111]/60">Executed properly.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#111111]/80 font-light leading-relaxed font-sans">
              Elite Studios integrates architectural design direction with direct in-house manufacturing and on-site engineering across Greater Noida West and Delhi NCR.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar, idx) => (
              <div
                key={pillar.title}
                className="p-8 bg-[#FAF8EE] border border-[#111111]/10 space-y-4 flex flex-col justify-between shadow-sm"
              >
                <div className="space-y-3">
                  <span className="font-mono text-xs text-[#E09290] font-bold block">
                    0{idx + 1}
                  </span>
                  <h3 className="font-serif text-2xl text-[#111111]">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-[#E09290] uppercase tracking-wider font-mono font-bold">
                    {pillar.tagline}
                  </p>
                  <p className="text-xs text-[#111111]/75 font-light leading-relaxed pt-2 font-sans">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#111111]/10 flex items-center gap-2 text-[11px] text-[#111111]/60 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E09290]" />
                  <span>Guaranteed Studio Standard</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section: About The Studio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center pt-16 border-t border-[#111111]/15">
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.25em] text-[#E09290] block font-mono font-bold">
                The Elite Philosophy
              </span>
              <h3 className="font-serif text-3xl sm:text-5xl text-[#111111] leading-tight">
                Behind every space <br />
                <span className="italic font-serif text-[#111111]/60">is a quiet story.</span>
              </h3>
            </div>

            <p className="text-sm sm:text-base text-[#111111]/85 font-light leading-relaxed font-sans">
              Elite Studios is a Greater Noida West–based interior architecture studio delivering turnkey interior solutions across Delhi NCR. From modular kitchens and wardrobes to custom solid-wood furniture, European wallpapers, and architectural louvers, we bring design vision and factory-grade execution together under one roof.
            </p>

            <p className="text-xs sm:text-sm text-[#111111]/65 leading-relaxed font-sans">
              We operate our flagship studio at <strong className="text-[#111111] font-semibold">Office no. 255, 4th Floor, Gaur World SmartStreet Mall</strong>. Unlike agency brokers who outsource work to random sub-contractors, our in-house designers, site engineers, and master carpenters are full-time team members.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button
                variant="secondary"
                size="md"
                onClick={onOpenConsultation}
                icon={<ArrowUpRight className="w-4 h-4" />}
              >
                Schedule Studio Visit
              </Button>

              <Button
                variant="glass"
                size="md"
                href="#studio"
              >
                View Studio Details
              </Button>
            </div>
          </div>

          <div className="lg:col-span-6 relative aspect-[4/3] overflow-hidden bg-[#111111] border border-[#111111]/15 shadow-xl">
            <img
              src={getOptimizedImageUrl("https://images.unsplash.com/photo-1497366216548-37526070297c", 800)}
              srcSet={getImageSrcSet("https://images.unsplash.com/photo-1497366216548-37526070297c")}
              sizes="(max-width: 768px) 100vw, 600px"
              loading="lazy"
              decoding="async"
              alt="Elite Studios Design Experience Lounge"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div>
                <p className="text-xs uppercase tracking-widest text-[#E09290] font-mono font-bold">
                  Physical Experience Center
                </p>
                <p className="font-serif text-xl text-[#F2EED8]">
                  Gaur World SmartStreet Mall
                </p>
                <p className="text-xs text-[#F2EED8]/70 font-sans">
                  Greater Noida West, UP 201318
                </p>
              </div>

              <div className="glass-badge text-xs text-[#111111] px-4 py-1.5 font-mono font-bold rounded-full">
                5.0 ★ Rated
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

