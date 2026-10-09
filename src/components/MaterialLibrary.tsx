import React, { useState } from 'react';
import { MATERIALS_DATA } from '../data/materialsData';
import { ArrowUpRight } from 'lucide-react';
import { getWhatsAppUrl } from '../data/studioData';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './Button';

export const MaterialLibrary: React.FC = () => {
  const [activeMaterialId, setActiveMaterialId] = useState<string>('wood');
  const activeMaterial = MATERIALS_DATA.find((m) => m.id === activeMaterialId) || MATERIALS_DATA[0];

  return (
    <section id="materials" className="py-28 lg:py-36 px-6 lg:px-12 bg-[#F2EED8] border-t border-[#111111]/15 text-[#111111]">
      <div className="max-w-7xl mx-auto space-y-16 lg:space-y-24">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#111111]/15">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#E09290]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#111111]/70 font-semibold font-sans">
                CHAPTER 04 // MATERIAL ARCHIVE
              </span>
              <span className="text-[#111111]/25">|</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#E09290] font-mono">
                TACTILE SWATCHES & FINISHES
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#111111] font-normal leading-[1.03]">
              Materials <br />
              <span className="italic font-serif text-[#111111]/50">felt by hand.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#111111]/80 font-light font-sans">
              We believe a luxury home is experienced first through touch. We source, stabilize, and mill raw materials for longevity in Delhi NCR’s climate.
            </p>
          </div>

          <div className="text-xs text-[#111111]/60 self-start md:self-end font-mono">
            Physical Swatches at <br />
            <span className="text-[#111111] font-semibold">Gaur World SmartStreet Studio (Office 255)</span>
          </div>
        </div>

        {/* Horizontal Material Category Selector */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 border-b border-[#111111]/10">
          {MATERIALS_DATA.map((mat) => {
            const isActive = activeMaterialId === mat.id;
            return (
              <button
                key={mat.id}
                onClick={() => setActiveMaterialId(mat.id)}
                data-cursor="SWATCH"
                className={`px-7 py-3 text-xs uppercase tracking-[0.25em] whitespace-nowrap transition-all duration-300 border font-sans rounded-full ${
                  isActive
                    ? 'bg-[#E09290] text-[#111111] font-bold border-[#E09290] shadow-sm'
                    : 'bg-[#FAF8EE] text-[#111111]/70 hover:text-[#111111] border-[#111111]/10'
                }`}
              >
                {mat.category}
              </button>
            );
          })}
        </div>

        {/* Tactile Material Showcase Viewer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Large Close-up Texture Visual with AnimatePresence */}
          <div className="lg:col-span-7 relative aspect-[4/3] lg:aspect-[16/11] overflow-hidden bg-[#111111] border border-[#111111]/15 group shadow-xl">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeMaterial.id}
                src={activeMaterial.imageUrl}
                alt={activeMaterial.label}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/85 via-transparent to-transparent pointer-events-none" />

            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#E09290] font-mono font-bold">
                  Material Specification
                </p>
                <p className="font-serif text-2xl sm:text-3xl text-[#F2EED8]">
                  {activeMaterial.label}
                </p>
                <p className="text-xs text-[#F2EED8]/70 mt-0.5 font-mono">
                  {activeMaterial.sublabel}
                </p>
              </div>

              <div className="hidden sm:block text-right">
                <span className="text-[10px] uppercase tracking-wider text-[#E09290] block font-mono font-bold">
                  Studio Standard
                </span>
                <span className="text-xs text-[#F2EED8] font-mono">
                  {activeMaterial.studioGuarantee}
                </span>
              </div>
            </div>
          </div>

          {/* Right Editorial Spec & Texture Breakdown */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.25em] text-[#E09290] font-mono font-bold">
                Sensory Profile · {activeMaterial.category}
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#111111] leading-tight">
                {activeMaterial.headline}
              </h3>
            </div>

            <p className="text-sm text-[#111111]/80 leading-relaxed font-light font-sans">
              {activeMaterial.description}
            </p>

            <div className="p-4 bg-[#FAF8EE] border border-[#111111]/10 space-y-1.5 shadow-sm">
              <span className="text-[10px] uppercase tracking-wider text-[#111111]/60 font-mono">
                Tactile Feeling:
              </span>
              <p className="text-xs text-[#111111] italic font-serif text-base">
                "{activeMaterial.tactileFeel}"
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <span className="text-xs uppercase tracking-wider text-[#111111]/60 block font-mono">
                Selected Studio Finishes:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeMaterial.finishes.map((finish, i) => (
                  <div
                    key={i}
                    className="p-2.5 bg-[#FAF8EE] border border-[#111111]/10 text-xs text-[#111111] flex items-center gap-2 font-sans rounded-full"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#E09290]" />
                    <span className="truncate">{finish}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <Button
                variant="secondary"
                size="md"
                href={getWhatsAppUrl(`Hi Elite Studios, I would like to see material swatches for ${activeMaterial.label} at your Gaur World SmartStreet studio.`)}
                target="_blank"
                data-cursor="SWATCH"
                icon={<ArrowUpRight className="w-3.5 h-3.5 text-[#E09290]" />}
              >
                Request Material Swatches
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

