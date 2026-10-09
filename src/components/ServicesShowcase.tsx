import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/servicesData';
import { ArrowUpRight } from 'lucide-react';
import { Button } from './Button';
import { getOptimizedImageUrl, getImageSrcSet } from '../utils/imageUrl';

interface ServicesShowcaseProps {
  onOpenConsultationWithService: (serviceTitle: string) => void;
}

export const ServicesShowcase: React.FC<ServicesShowcaseProps> = ({
  onOpenConsultationWithService
}) => {
  const [activeChapter, setActiveChapter] = useState(0);

  const turnkey = SERVICES_DATA[0];
  const kitchen = SERVICES_DATA[1];
  const furniture = SERVICES_DATA[2];
  const decor = SERVICES_DATA[3];
  const wardrobes = SERVICES_DATA[4];

  return (
    <section id="services" className="bg-[#FAF8EE] text-[#111111] border-t border-[#111111]/15">
      {/* Header Scene */}
      <div className="py-24 lg:py-32 px-6 lg:px-12 bg-[#F2EED8] border-b border-[#111111]/15">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#E09290]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#111111]/70 font-semibold font-sans">
                CHAPTER 03 // FIVE CORE DISCIPLINES
              </span>
              <span className="text-[#111111]/25">|</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#E09290] font-mono">
                SINGLE-SOURCE ACCOUNTABILITY
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#111111] font-normal leading-[1.03]">
              Architectural <br />
              <span className="italic font-serif text-[#111111]/50">disciplines.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#111111]/80 font-light leading-relaxed font-sans">
              Every home project is a sequence of precise disciplines. Explore our 5 core chapters, each engineered and crafted under single-source accountability.
            </p>
          </div>

          {/* Chapter Quick Switcher */}
          <div className="flex flex-wrap gap-2 self-start md:self-end">
            {SERVICES_DATA.map((srv, idx) => (
              <button
                key={srv.id}
                onClick={() => {
                  setActiveChapter(idx);
                  const el = document.getElementById(`service-chapter-${idx}`);
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`px-4 py-2 text-xs font-mono uppercase tracking-wider transition-all border rounded-full ${
                  activeChapter === idx
                    ? 'bg-[#E09290] text-[#111111] font-bold border-[#E09290] shadow-sm'
                    : 'bg-[#FAF8EE] text-[#111111]/60 hover:text-[#111111] border-[#111111]/15'
                }`}
              >
                0{idx + 1} · {srv.title.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 5 Unique Architectural Compositions */}
      <div className="divide-y divide-[#111111]/15">
        {/* Chapter 01: Turnkey Interior Solutions — Cream Canvas with Dusty Rose Accent */}
        <div id="service-chapter-0" className="py-24 lg:py-32 px-6 lg:px-12 bg-[#FAF8EE]">
          <div className="max-w-7xl mx-auto space-y-10">
            <div className="flex items-center justify-between border-b border-[#111111]/10 pb-4">
              <span className="font-mono text-xs text-[#E09290] font-bold tracking-[0.25em] uppercase">
                Chapter 01 · Turnkey Interior Solutions
              </span>
              <span className="text-xs text-[#111111]/60 uppercase tracking-widest font-mono">
                Concept to Staged Handover
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 relative aspect-[16/10] overflow-hidden bg-[#111111] border border-[#111111]/15 shadow-xl group">
                <img
                  src={getOptimizedImageUrl(turnkey.imageUrl, 1000)}
                  srcSet={getImageSrcSet(turnkey.imageUrl)}
                  sizes="(max-width: 768px) 100vw, 800px"
                  alt={turnkey.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-xs font-mono text-[#F2EED8] tracking-wider uppercase px-4 py-2 bg-[#111111]/70 backdrop-blur-md border border-[#F2EED8]/20 rounded-full">
                  Turnkey Villa & Apartment Interiors · Greater Noida West & NCR
                </div>
              </div>

              <div className="lg:col-span-5 space-y-6">
                <h3 className="font-serif text-3xl sm:text-5xl text-[#111111] leading-tight">
                  {turnkey.title}
                </h3>
                <p className="text-base text-[#111111]/70 italic font-serif">
                  "{turnkey.tagline}"
                </p>
                <p className="text-sm text-[#111111]/80 font-light leading-relaxed font-sans">
                  {turnkey.summary}
                </p>

                <div className="space-y-2 pt-2 border-t border-[#111111]/15">
                  <p className="text-xs uppercase tracking-wider text-[#111111]/60 font-mono">Chapter Deliverables:</p>
                  <div className="grid grid-cols-1 gap-2">
                    {turnkey.deliverables.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#111111]/85 font-sans">
                        <span className="text-[#E09290] font-bold">✓</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <Button
                    variant="secondary"
                    size="md"
                    onClick={() => onOpenConsultationWithService(turnkey.title)}
                    data-cursor="DISCUSS"
                    icon={<ArrowUpRight className="w-3.5 h-3.5" />}
                  >
                    Discuss Turnkey Project
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Chapter 02: Modular Kitchens — Dusty Rose Cinematic Scene */}
        <div id="service-chapter-1" className="py-24 lg:py-32 px-6 lg:px-12 bg-[#E09290] text-[#111111]">
          <div className="max-w-7xl mx-auto space-y-10">
            <div className="flex items-center justify-between border-b border-[#111111]/15 pb-4">
              <span className="font-mono text-xs text-[#111111] font-bold tracking-[0.25em] uppercase">
                Chapter 02 · Ergonomic Kitchen Architecture
              </span>
              <span className="text-xs text-[#111111]/75 uppercase tracking-widest font-mono font-semibold">
                German Blum Motion Hardware
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 space-y-6 order-2 lg:order-1">
                <h3 className="font-serif text-3xl sm:text-5xl text-[#111111] leading-tight">
                  {kitchen.title}
                </h3>
                <p className="text-base text-[#111111]/85 italic font-serif">
                  "{kitchen.tagline}"
                </p>
                <p className="text-sm text-[#111111]/80 font-light leading-relaxed font-sans">
                  {kitchen.summary}
                </p>

                <div className="grid grid-cols-2 gap-3 pt-2 border-t border-[#111111]/15">
                  {kitchen.specs.map((spec, i) => (
                    <div key={i} className="p-3.5 bg-[#FAF8EE] border border-[#111111]/10 shadow-sm">
                      <p className="text-[10px] uppercase tracking-wider text-[#111111]/60 font-mono">{spec.label}</p>
                      <p className="text-xs text-[#111111] font-semibold mt-0.5 font-sans">{spec.value}</p>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <Button
                    variant="secondary"
                    size="md"
                    onClick={() => onOpenConsultationWithService(kitchen.title)}
                    data-cursor="DISCUSS"
                    icon={<ArrowUpRight className="w-3.5 h-3.5" />}
                  >
                    Configure Your Kitchen
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-7 relative aspect-[16/10] overflow-hidden bg-[#111111] border border-[#111111]/15 shadow-xl group order-1 lg:order-2">
                <img
                  src={getOptimizedImageUrl(kitchen.imageUrl, 1000)}
                  srcSet={getImageSrcSet(kitchen.imageUrl)}
                  sizes="(max-width: 768px) 100vw, 800px"
                  alt={kitchen.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-xs font-mono text-[#F2EED8] tracking-wider uppercase px-4 py-2 bg-[#111111]/70 backdrop-blur-md border border-[#F2EED8]/20 rounded-full">
                  Blum Tandembox · Anti-Stain Quartz Waterfall Island
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Chapter 03: Custom Wooden Furniture — Cream Quiet Luxury */}
        <div id="service-chapter-2" className="py-24 lg:py-32 px-6 lg:px-12 bg-[#FAF8EE]">
          <div className="max-w-7xl mx-auto space-y-10">
            <div className="flex items-center justify-between border-b border-[#111111]/10 pb-4">
              <span className="font-mono text-xs text-[#E09290] font-bold tracking-[0.25em] uppercase">
                Chapter 03 · In-House Joinery
              </span>
              <span className="text-xs text-[#111111]/60 uppercase tracking-widest font-mono">
                Beds · Dining · Floating TV Consoles
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 relative aspect-[4/3] overflow-hidden bg-[#111111] border border-[#111111]/15 shadow-xl group">
                <img
                  src={getOptimizedImageUrl(furniture.imageUrl, 1000)}
                  srcSet={getImageSrcSet(furniture.imageUrl)}
                  sizes="(max-width: 768px) 100vw, 800px"
                  alt={furniture.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-xs font-mono text-[#F2EED8] tracking-wider uppercase px-4 py-2 bg-[#111111]/70 backdrop-blur-md border border-[#F2EED8]/20 rounded-full">
                  Custom Platform Bed · Smoked Teak & Veneer Joinery
                </div>
              </div>

              <div className="lg:col-span-6 space-y-6">
                <h3 className="font-serif text-3xl sm:text-5xl text-[#111111] leading-tight">
                  {furniture.title}
                </h3>
                <p className="text-base text-[#111111]/70 italic font-serif">
                  "{furniture.tagline}"
                </p>
                <p className="text-sm text-[#111111]/80 font-light leading-relaxed font-sans">
                  {furniture.summary}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 border-t border-[#111111]/15">
                  {furniture.deliverables.map((item, i) => (
                    <div key={i} className="p-3 bg-[#F2EED8] border border-[#111111]/10 flex items-center gap-2 text-xs text-[#111111]/85 font-sans">
                      <span className="text-[#E09290] font-bold">✓</span>
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <Button
                    variant="secondary"
                    size="md"
                    onClick={() => onOpenConsultationWithService(furniture.title)}
                    data-cursor="DISCUSS"
                    icon={<ArrowUpRight className="w-3.5 h-3.5" />}
                  >
                    Request Custom Joinery
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Chapter 04: Wardrobes & Dressing Suites — Cream Scene with Rose Accents */}
        <div id="service-chapter-3" className="py-24 lg:py-32 px-6 lg:px-12 bg-[#F2EED8]">
          <div className="max-w-7xl mx-auto space-y-10">
            <div className="flex items-center justify-between border-b border-[#111111]/15 pb-4">
              <span className="font-mono text-xs text-[#E09290] font-bold tracking-[0.25em] uppercase">
                Chapter 04 · Dressing Architecture
              </span>
              <span className="text-xs text-[#111111]/60 uppercase tracking-widest font-mono">
                Walk-ins & Smoked Glass Vitrines
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 space-y-6">
                <h3 className="font-serif text-3xl sm:text-5xl text-[#111111] leading-tight">
                  {wardrobes.title}
                </h3>
                <p className="text-base text-[#111111]/70 italic font-serif">
                  "{wardrobes.tagline}"
                </p>
                <p className="text-sm text-[#111111]/80 font-light leading-relaxed font-sans">
                  {wardrobes.summary}
                </p>

                <div className="space-y-2 pt-2 border-t border-[#111111]/15">
                  <p className="text-xs uppercase tracking-wider text-[#111111]/60 font-mono">Engineering Details:</p>
                  <div className="grid grid-cols-1 gap-2">
                    {wardrobes.deliverables.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#111111]/85 font-sans">
                        <span className="text-[#E09290] font-bold">✓</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <Button
                    variant="secondary"
                    size="md"
                    onClick={() => onOpenConsultationWithService(wardrobes.title)}
                    data-cursor="DISCUSS"
                    icon={<ArrowUpRight className="w-3.5 h-3.5" />}
                  >
                    Design Wardrobes
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-7 relative aspect-[16/11] overflow-hidden bg-[#111111] border border-[#111111]/15 shadow-xl group">
                <img
                  src={getOptimizedImageUrl(wardrobes.imageUrl, 1000)}
                  srcSet={getImageSrcSet(wardrobes.imageUrl)}
                  sizes="(max-width: 768px) 100vw, 800px"
                  alt={wardrobes.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-xs font-mono text-[#F2EED8] tracking-wider uppercase px-4 py-2 bg-[#111111]/70 backdrop-blur-md border border-[#F2EED8]/20 rounded-full">
                  Floor-to-Ceiling Dressing Suite · Smoked Glass & Sensor LED
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Chapter 05: Home Décor & Tactile Surfaces — Editorial Split */}
        <div id="service-chapter-4" className="py-24 lg:py-32 px-6 lg:px-12 bg-[#FAF8EE]">
          <div className="max-w-7xl mx-auto space-y-10">
            <div className="flex items-center justify-between border-b border-[#111111]/10 pb-4">
              <span className="font-mono text-xs text-[#E09290] font-bold tracking-[0.25em] uppercase">
                Chapter 05 · Tactile Surfaces
              </span>
              <span className="text-xs text-[#111111]/60 uppercase tracking-widest font-mono">
                Louvers · Wallpapers · Motorized Blinds
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 relative aspect-[16/10] overflow-hidden bg-[#111111] border border-[#111111]/15 shadow-xl group">
                <img
                  src={getOptimizedImageUrl(decor.imageUrl, 1000)}
                  srcSet={getImageSrcSet(decor.imageUrl)}
                  sizes="(max-width: 768px) 100vw, 800px"
                  alt={decor.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-xs font-mono text-[#F2EED8] tracking-wider uppercase px-4 py-2 bg-[#111111]/70 backdrop-blur-md border border-[#F2EED8]/20 rounded-full">
                  High-Density Fluted Louvers · Somfy Motorized Blinds
                </div>
              </div>

              <div className="lg:col-span-5 space-y-6">
                <h3 className="font-serif text-3xl sm:text-5xl text-[#111111] leading-tight">
                  {decor.title}
                </h3>
                <p className="text-base text-[#111111]/70 italic font-serif">
                  "{decor.tagline}"
                </p>
                <p className="text-sm text-[#111111]/80 font-light leading-relaxed font-sans">
                  {decor.summary}
                </p>

                <div className="space-y-2 pt-2 border-t border-[#111111]/15">
                  <p className="text-xs uppercase tracking-wider text-[#111111]/60 font-mono">Curated Surfaces:</p>
                  <div className="grid grid-cols-1 gap-2">
                    {decor.deliverables.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#111111]/85 font-sans">
                        <span className="text-[#E09290] font-bold">✓</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <Button
                    variant="secondary"
                    size="md"
                    onClick={() => onOpenConsultationWithService(decor.title)}
                    data-cursor="DISCUSS"
                    icon={<ArrowUpRight className="w-3.5 h-3.5" />}
                  >
                    Explore Tactile Surfaces
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

