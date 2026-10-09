import React from 'react';
import { ShieldCheck, Award, Clock, MapPin } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';

export const ValueStrip: React.FC = () => {
  const credentials = [
    {
      icon: Award,
      title: "5.0 Verified Rating",
      subtitle: `${STUDIO_INFO.rating.count} Google Reviews`,
      detail: "Client satisfaction across Greater Noida & NCR"
    },
    {
      icon: ShieldCheck,
      title: "10-Year Warranty",
      subtitle: "Joinery & Marine Plywood",
      detail: "Anti-termite & IS 710 calibrated materials"
    },
    {
      icon: Clock,
      title: "45–60 Day Handover",
      subtitle: "Contractual Delivery",
      detail: "Weekly photo & video progress reporting"
    },
    {
      icon: MapPin,
      title: "Studio at SmartStreet",
      subtitle: "Office 255, 4th Floor",
      detail: "Experience materials, hardware & textures live"
    }
  ];

  return (
    <section className="bg-[#E09290] border-y border-[#111111]/15 py-12 px-6 lg:px-12 text-[#111111] relative overflow-hidden">
      <div className="absolute inset-0 bg-grain-rose opacity-40 pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[#111111]/15">
          {credentials.map((cred, idx) => {
            const Icon = cred.icon;
            return (
              <div
                key={cred.title}
                className={`flex flex-col justify-between space-y-3 ${idx !== 0 ? 'sm:pl-6 lg:pl-8' : ''} ${idx !== 0 ? 'pt-6 sm:pt-0' : ''}`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[#111111]">
                      <Icon className="w-4 h-4 text-[#111111]" />
                      <span className="text-[11px] uppercase tracking-[0.25em] font-bold text-[#111111] font-mono">
                        {cred.title}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-[#111111]/50">0{idx + 1}</span>
                  </div>
                  <p className="text-lg font-serif font-medium text-[#111111] leading-tight">
                    {cred.subtitle}
                  </p>
                </div>
                <p className="text-xs text-[#111111]/80 leading-relaxed font-sans">
                  {cred.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

