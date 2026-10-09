import React, { useState } from 'react';
import { REVIEWS_DATA } from '../data/reviewsData';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';

export const TestimonialsSection: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const currentReview = REVIEWS_DATA[activeIdx];

  return (
    <section className="py-28 lg:py-36 px-6 lg:px-12 bg-[#E09290] border-t border-[#111111]/15 text-[#111111]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#111111]/15">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#111111]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#111111] font-bold font-mono">
                Chapter 08 · Verified Client Experiences
              </span>
              <span className="text-[#111111]/40">·</span>
              <span className="text-xs text-[#111111] font-mono font-semibold">
                {STUDIO_INFO.rating.score.toFixed(1)} / 5.0 Rating ({STUDIO_INFO.rating.count} Verified Reviews)
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#111111] font-normal leading-[1.05]">
              What our clients <br />
              <span className="italic text-[#111111]/70">remember.</span>
            </h2>
          </div>

          <div className="flex items-center gap-2 self-start md:self-end">
            <button
              onClick={() => setActiveIdx((prev) => (prev === 0 ? REVIEWS_DATA.length - 1 : prev - 1))}
              className="p-3 rounded-full glass-button-light text-[#111111] transition-all shadow-sm"
              aria-label="Previous Testimonial"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setActiveIdx((prev) => (prev === REVIEWS_DATA.length - 1 ? 0 : prev + 1))}
              className="p-3 rounded-full glass-button-light text-[#111111] transition-all shadow-sm"
              aria-label="Next Testimonial"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Large Editorial Review Feature */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-8">
            <Quote className="w-12 h-12 text-[#111111]/25" />

            <blockquote className="font-serif text-2xl sm:text-4xl md:text-5xl text-[#111111] font-normal leading-[1.2] tracking-tight">
              "{currentReview.quote}"
            </blockquote>

            <div className="space-y-1 pt-4 border-t border-[#111111]/15">
              <p className="text-base text-[#111111] font-bold font-sans">
                {currentReview.author}
              </p>
              <p className="text-xs text-[#111111]/75 font-sans">
                {currentReview.role} · <strong className="text-[#111111] font-semibold">{currentReview.society}</strong> ({currentReview.location})
              </p>
              <p className="text-[11px] text-[#111111] pt-1 uppercase tracking-wider font-mono font-bold">
                Scope: {currentReview.scope}
              </p>
            </div>
          </div>

          {/* Review Index Badges */}
          <div className="lg:col-span-4 space-y-4">
            <p className="text-xs uppercase tracking-[0.2em] text-[#111111]/75 font-mono font-bold">
              Verified Homeowner Stories:
            </p>
            <div className="space-y-2">
              {REVIEWS_DATA.map((rev, idx) => (
                <div
                  key={rev.id}
                  onClick={() => setActiveIdx(idx)}
                  className={`p-4 rounded-2xl cursor-pointer border transition-all text-left ${
                    activeIdx === idx
                      ? 'bg-[#FAF8EE] border-[#111111] text-[#111111] shadow-sm'
                      : 'bg-[#FAF8EE]/60 border-[#111111]/10 text-[#111111]/70 hover:bg-[#FAF8EE]'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-[#111111] font-sans">{rev.author}</span>
                    <span className="text-[10px] text-[#111111] font-mono font-bold">5.0 ★</span>
                  </div>
                  <p className="text-xs text-[#111111]/70 truncate mt-1 font-sans">
                    {rev.society}
                  </p>
                  <p className="text-[11px] text-[#111111]/85 italic mt-1 font-serif">
                    "{rev.highlight}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

