import React from 'react';
import { Compass, Sparkles, Wrench, KeyRound } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const stages = [
    {
      number: "01",
      title: "DISCOVER",
      headline: "Understanding your space & lifestyle",
      description: "We analyze how you cook, live, host, and relax. We review floorplans, perform site measurements, and understand your functional requirements and aesthetic vision.",
      focus: "Space audit & requirements brief",
      icon: Compass
    },
    {
      number: "02",
      title: "DESIGN",
      headline: "3D concepts & material selection",
      description: "Develop the comprehensive design direction. Review photorealistic 3D perspectives, test layout options, and explore physical wood, stone, and fabric samples at our studio.",
      focus: "3D visualization & material boards",
      icon: Sparkles
    },
    {
      number: "03",
      title: "EXECUTE",
      headline: "Precision milling & civil coordination",
      description: "Coordinate the agreed interior work. Modular cabinetry is precision-manufactured, custom wooden furniture is handcrafted, and on-site engineering is actively supervised.",
      focus: "In-house joinery & milestone tracking",
      icon: Wrench
    },
    {
      number: "04",
      title: "HANDOVER",
      headline: "Completed work & final presentation",
      description: "Present the completed work according to the agreed project scope. Every detail is inspected, staged, and handed over move-in ready with documentation.",
      focus: "Detailed inspection & walkthrough",
      icon: KeyRound
    }
  ];

  return (
    <section id="process" className="py-28 lg:py-36 px-6 lg:px-12 bg-[#FAF8EE] text-[#111111] border-t border-[#111111]/15 relative overflow-hidden">
      {/* Grain texture */}
      <div className="absolute inset-0 bg-grain pointer-events-none opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto space-y-20 lg:space-y-24">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-8 border-b border-[#111111]/15">
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E09290]" />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#111111]/70 font-sans">
                Chapter 05 · Turnkey Methodology
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#111111] font-normal leading-[1.05]">
              Design to <br />
              <span className="italic text-[#111111]/60">execution.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#111111]/80 font-light leading-relaxed font-sans">
              A structured, transparent four-stage process that transforms an empty shell into an enduring living sanctuary.
            </p>
          </div>

          <div className="text-xs text-[#111111]/60 font-mono self-start md:self-end">
            4-Stage Systematic Delivery
          </div>
        </div>

        {/* Horizontal Progress Line for Desktop */}
        <div className="relative">
          <div className="hidden lg:block absolute top-10 left-12 right-12 h-[1px] bg-[#111111]/15 z-0" />

          {/* Process Stage Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {stages.map((stage) => {
              const Icon = stage.icon;
              return (
                <div
                  key={stage.number}
                  className="bg-[#F2EED8] border border-[#111111]/10 p-8 space-y-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#E09290] font-bold">
                        Stage {stage.number}
                      </span>
                      <div className="w-9 h-9 rounded-full bg-[#FAF8EE] border border-[#111111]/15 flex items-center justify-center group-hover:border-[#E09290] group-hover:bg-[#E09290]/10 transition-colors">
                        <Icon className="w-4 h-4 text-[#111111] group-hover:text-[#E09290] transition-colors" />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-serif text-3xl text-[#111111] tracking-wide">
                        {stage.title}
                      </h3>
                      <p className="text-xs text-[#111111]/60 uppercase tracking-wider font-mono">
                        {stage.headline}
                      </p>
                    </div>

                    <p className="text-xs text-[#111111]/80 font-light leading-relaxed font-sans">
                      {stage.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#111111]/10 space-y-1">
                    <span className="text-[10px] uppercase tracking-wider text-[#111111]/60 block font-mono">
                      Core Scope:
                    </span>
                    <p className="text-xs text-[#111111] font-semibold font-sans">
                      {stage.focus}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

