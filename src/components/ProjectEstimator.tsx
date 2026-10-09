import React, { useState } from 'react';
import { ArrowRight, MessageCircle, ShieldCheck } from 'lucide-react';
import { getWhatsAppUrl } from '../data/studioData';
import { Button } from './Button';

interface ProjectEstimatorProps {
  onOpenConsultationWithEstimate: (estimateSummary: string) => void;
}

export const ProjectEstimator: React.FC<ProjectEstimatorProps> = ({
  onOpenConsultationWithEstimate
}) => {
  const [propertyType, setPropertyType] = useState<'2bhk' | '3bhk' | '4bhk' | 'villa'>('3bhk');
  const [carpetArea, setCarpetArea] = useState<number>(1850);
  const [scope, setScope] = useState<{
    kitchen: boolean;
    wardrobes: boolean;
    livingWall: boolean;
    ceilingLighting: boolean;
    louversWallpapers: boolean;
    civilPlumbing: boolean;
  }>({
    kitchen: true,
    wardrobes: true,
    livingWall: true,
    ceilingLighting: true,
    louversWallpapers: true,
    civilPlumbing: false
  });
  const [qualityGrade, setQualityGrade] = useState<'premium' | 'signature' | 'luxury'>('signature');

  // Handle property type changes with reasonable default sq ft
  const handlePropertyChange = (type: '2bhk' | '3bhk' | '4bhk' | 'villa') => {
    setPropertyType(type);
    if (type === '2bhk') setCarpetArea(1150);
    if (type === '3bhk') setCarpetArea(1850);
    if (type === '4bhk') setCarpetArea(2700);
    if (type === 'villa') setCarpetArea(4200);
  };

  const calculateEstimate = () => {
    let baseRate = 1200; // per sq ft base
    if (qualityGrade === 'premium') baseRate = 1200;
    if (qualityGrade === 'signature') baseRate = 1650;
    if (qualityGrade === 'luxury') baseRate = 2250;

    // Multipliers based on checked scope
    let scopeWeight = 0.35; // base
    if (scope.kitchen) scopeWeight += 0.20;
    if (scope.wardrobes) scopeWeight += 0.20;
    if (scope.livingWall) scopeWeight += 0.12;
    if (scope.ceilingLighting) scopeWeight += 0.13;
    if (scope.louversWallpapers) scopeWeight += 0.10;
    if (scope.civilPlumbing) scopeWeight += 0.15;

    const calculatedTotal = carpetArea * baseRate * Math.min(1.25, scopeWeight);

    // Provide a sensible range (low to high in Lakhs)
    const lowLakhs = (calculatedTotal * 0.92) / 100000;
    const highLakhs = (calculatedTotal * 1.10) / 100000;

    return {
      low: lowLakhs.toFixed(1),
      high: highLakhs.toFixed(1),
      average: ((lowLakhs + highLakhs) / 2).toFixed(1)
    };
  };

  const estimate = calculateEstimate();

  const propertyLabels = {
    '2bhk': '2 BHK Apartment',
    '3bhk': '3 BHK Apartment',
    '4bhk': '4 BHK Apartment',
    'villa': 'Independent Villa'
  };

  const gradeLabels = {
    'premium': 'Essential Elegance',
    'signature': 'Studio Signature (Most Selected)',
    'luxury': 'Bespoke Architectural Luxury'
  };

  const activeScopeItems = [
    scope.kitchen && 'Modular Kitchen',
    scope.wardrobes && 'Custom Wardrobes',
    scope.livingWall && 'Living Room & TV Panelling',
    scope.ceilingLighting && 'False Ceiling & Cove Lighting',
    scope.louversWallpapers && 'Architectural Louvers & Wallpapers',
    scope.civilPlumbing && 'Civil & Plumbing Alterations'
  ].filter(Boolean) as string[];

  const estimateSummaryText = `${propertyLabels[propertyType]} (~${carpetArea} sq ft) · ${gradeLabels[qualityGrade]} · Scope: ${activeScopeItems.join(', ')} · Estimated Range: ₹${estimate.low}L – ₹${estimate.high}L`;

  const whatsappMessage = `Hi Elite Studios, I used your online estimator for my ${propertyLabels[propertyType]} (${carpetArea} sq ft) in Delhi NCR. My estimated range is ₹${estimate.low}L - ₹${estimate.high}L (${gradeLabels[qualityGrade]}). I would like to schedule a detailed consultation at your Gaur World SmartStreet studio.`;

  return (
    <section id="estimator" className="py-24 lg:py-32 px-6 lg:px-12 bg-[#F2EED8] border-t border-[#111111]/15 text-[#111111]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#111111]/15">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E09290]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#111111]/70 font-semibold font-sans">
                Chapter 07 · Investment Transparency
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl text-[#111111] font-normal leading-[1.05]">
              Estimate your <br />
              <span className="italic text-[#111111]/60">project scope.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#111111]/80 font-light font-sans">
              Get an instant, realistic budget forecast for your turnkey interior in Greater Noida West & Delhi NCR based on actual craftsmanship benchmarks.
            </p>
          </div>

          <div className="text-xs text-[#111111]/60 self-start md:self-end font-mono">
            100% Transparent · No Hidden Contractor Surprises
          </div>
        </div>

        {/* The Estimator Tool Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 bg-[#FAF8EE] border border-[#111111]/10 p-6 sm:p-10 lg:p-12 shadow-sm">
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-8">
            {/* Step 1: Property Type */}
            <div className="space-y-3">
              <label className="text-xs uppercase tracking-[0.2em] text-[#E09290] block font-mono font-bold">
                01 · Select Property Typology
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {(['2bhk', '3bhk', '4bhk', 'villa'] as const).map((type) => (
                  <button
                    key={type}
                    onClick={() => handlePropertyChange(type)}
                    className={`py-3 px-3 text-xs uppercase tracking-wider transition-all border font-sans rounded-full ${
                      propertyType === type
                        ? 'bg-[#E09290] text-[#111111] font-bold border-[#E09290] shadow-sm'
                        : 'bg-[#F2EED8] text-[#111111]/70 border-[#111111]/10 hover:border-[#111111]/30'
                    }`}
                  >
                    {type === '2bhk' && '2 BHK'}
                    {type === '3bhk' && '3 BHK'}
                    {type === '4bhk' && '4 BHK'}
                    {type === 'villa' && 'Villa'}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Carpet Area Slider */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="uppercase tracking-[0.2em] text-[#E09290] font-mono font-bold">
                  02 · Approximate Carpet Area
                </span>
                <span className="font-mono text-sm text-[#111111] font-bold">
                  {carpetArea.toLocaleString()} sq ft
                </span>
              </div>
              <input
                type="range"
                min={800}
                max={5000}
                step={50}
                value={carpetArea}
                onChange={(e) => setCarpetArea(Number(e.target.value))}
                className="w-full accent-[#E09290] bg-[#F2EED8] h-2 cursor-pointer rounded-full"
              />
              <div className="flex justify-between text-[11px] text-[#111111]/60 font-mono">
                <span>800 sq ft</span>
                <span>2,500 sq ft</span>
                <span>5,000+ sq ft</span>
              </div>
            </div>

            {/* Step 3: Scope Checklist */}
            <div className="space-y-3">
              <label className="text-xs uppercase tracking-[0.2em] text-[#E09290] block font-mono font-bold">
                03 · Required Project Inclusions
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  { key: 'kitchen', label: 'Modular Kitchen (Blum Hardware)' },
                  { key: 'wardrobes', label: 'Wardrobes & Custom Joinery' },
                  { key: 'livingWall', label: 'Living Room Fluted Panelling' },
                  { key: 'ceilingLighting', label: 'False Ceiling & Architectural Cove' },
                  { key: 'louversWallpapers', label: 'Wallpapers, Louvers & Blinds' },
                  { key: 'civilPlumbing', label: 'Civil Alterations & Tile Masonry' }
                ].map((item) => {
                  const isChecked = scope[item.key as keyof typeof scope];
                  return (
                    <button
                      key={item.key}
                      onClick={() =>
                        setScope((prev) => ({
                          ...prev,
                          [item.key]: !prev[item.key as keyof typeof scope]
                        }))
                      }
                      className={`p-3.5 text-left text-xs flex items-center justify-between border transition-all font-sans rounded-2xl ${
                        isChecked
                          ? 'bg-[#F2EED8] border-[#E09290] text-[#111111] font-medium shadow-sm'
                          : 'bg-[#FAF8EE] border-[#111111]/10 text-[#111111]/60 hover:text-[#111111]'
                      }`}
                    >
                      <span>{item.label}</span>
                      <div
                        className={`w-4 h-4 rounded-full flex items-center justify-center border text-[10px] ${
                          isChecked
                            ? 'bg-[#E09290] border-[#E09290] text-[#111111] font-bold'
                            : 'border-[#111111]/20 text-transparent'
                        }`}
                      >
                        ✓
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Quality Finish Tier */}
            <div className="space-y-3">
              <label className="text-xs uppercase tracking-[0.2em] text-[#E09290] block font-mono font-bold">
                04 · Specification & Finish Tier
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {[
                  { id: 'premium', title: 'Essential', desc: 'Commercial ply, anti-scratch acrylic' },
                  { id: 'signature', title: 'Studio Signature', desc: 'IS 710 marine ply, Blum hardware, PU' },
                  { id: 'luxury', title: 'Ultra Luxury', desc: 'Veneers, Italian stone, Somfy automation' }
                ].map((tier) => (
                  <button
                    key={tier.id}
                    onClick={() => setQualityGrade(tier.id as any)}
                    className={`p-4 text-left border transition-all rounded-2xl ${
                      qualityGrade === tier.id
                        ? 'bg-[#E09290] text-[#111111] border-[#E09290] shadow-sm'
                        : 'bg-[#F2EED8] text-[#111111]/70 border-[#111111]/10 hover:border-[#111111]/30'
                    }`}
                  >
                    <p className="text-xs uppercase tracking-wider font-bold font-sans">
                      {tier.title}
                    </p>
                    <p className="text-[10px] mt-1 text-[#111111]/70 font-sans">
                      {tier.desc}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Column */}
          <div className="lg:col-span-5 bg-[#F2EED8] border border-[#111111]/15 p-6 sm:p-8 flex flex-col justify-between space-y-8 shadow-sm">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#111111]/15">
                <span className="text-[11px] uppercase tracking-[0.25em] text-[#E09290] font-mono font-bold">
                  Project Forecast
                </span>
                <span className="text-xs text-[#111111]/60 font-mono">
                  {propertyLabels[propertyType]}
                </span>
              </div>

              {/* Huge Price Readout */}
              <div className="space-y-2">
                <p className="text-xs text-[#111111]/60 uppercase tracking-wider font-mono">
                  Estimated Turnkey Range
                </p>
                <div className="font-serif text-4xl sm:text-5xl text-[#111111]">
                  ₹{estimate.low} – ₹{estimate.high}{' '}
                  <span className="text-xl font-sans font-light text-[#E09290]">Lakhs</span>
                </div>
                <p className="text-xs text-[#111111]/60 font-sans">
                  *All-inclusive estimate covering design, materials, carpentry, and site supervision.
                </p>
              </div>

              {/* Selected Scope Summary */}
              <div className="space-y-2 pt-4 border-t border-[#111111]/15">
                <p className="text-xs uppercase tracking-wider text-[#111111]/60 font-mono">
                  Included in this forecast:
                </p>
                <div className="space-y-1.5">
                  {activeScopeItems.slice(0, 4).map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#111111]/85 font-sans">
                      <span className="text-[#E09290] font-bold">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                  {activeScopeItems.length > 4 && (
                    <p className="text-xs text-[#111111]/60 font-mono">
                      + {activeScopeItems.length - 4} more inclusions
                    </p>
                  )}
                </div>
              </div>

              {/* Studio Guarantees */}
              <div className="p-3.5 bg-[#FAF8EE] border border-[#111111]/10 space-y-1 text-xs shadow-sm">
                <div className="flex items-center gap-2 text-[#111111]">
                  <ShieldCheck className="w-4 h-4 text-[#E09290]" />
                  <span className="font-semibold font-sans">10-Year Craftsmanship Warranty</span>
                </div>
                <p className="text-[11px] text-[#111111]/70 pl-6 font-sans">
                  Includes free 1-year service audits post-handover.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-4 border-t border-[#111111]/15">
              <Button
                variant="secondary"
                size="lg"
                fullWidth
                onClick={() => onOpenConsultationWithEstimate(estimateSummaryText)}
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Request Personalised Estimate
              </Button>

              <Button
                variant="glass"
                size="md"
                fullWidth
                href={getWhatsAppUrl(whatsappMessage)}
                target="_blank"
                className="font-semibold text-center"
                icon={<MessageCircle className="w-4 h-4 text-[#E09290]" />}
                iconPosition="left"
              >
                Send Estimate to WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

