import React, { useState, useEffect } from 'react';
import { X, ArrowRight, ArrowLeft, CheckCircle2, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../data/studioData';
import { Button } from './Button';

interface ConsultationFunnelProps {
  isOpen: boolean;
  onClose: () => void;
  initialStep?: number;
  initialContext?: string;
}

export const ConsultationFunnel: React.FC<ConsultationFunnelProps> = ({
  isOpen,
  onClose,
  initialStep = 1,
  initialContext = ""
}) => {
  const [step, setStep] = useState<number>(initialStep);
  const [propertyType, setPropertyType] = useState<string>('3 BHK');
  const [selectedServices, setSelectedServices] = useState<string[]>(['Complete Turnkey Interiors']);
  const [timeline, setTimeline] = useState<string>('Ready to Move (Immediate)');
  const [consultationMode, setConsultationMode] = useState<string>('Studio Visit (Gaur World SmartStreet)');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    society: '',
    notes: initialContext || ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const toggleService = (service: string) => {
    if (selectedServices.includes(service)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter(s => s !== service));
      }
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const whatsappInquiryUrl = getWhatsAppUrl(
    `Hello Elite Studios! I would like to schedule a consultation for my ${propertyType} in ${formData.society || 'Delhi NCR'}.
Scope: ${selectedServices.join(', ')}
Timeline: ${timeline}
Preferred Mode: ${consultationMode}
Client: ${formData.name || 'Homeowner'} (${formData.phone || 'Phone pending'})`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#111111]/85 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#FAF8EE] border border-[#111111]/15 rounded-3xl p-6 sm:p-10 shadow-2xl overflow-y-auto max-h-[92vh] text-[#111111]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full glass-button-light text-[#111111]/70 hover:text-[#111111] transition-colors"
          aria-label="Close Consultation Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-[#111111]/60 uppercase tracking-[0.25em] font-mono font-bold">
                <span className="text-[#E09290]">Elite Studios Consultation</span>
                <span className="glass-badge rounded-full px-3 py-0.5 text-[10px]">Step {step} of 4</span>
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#111111]">
                Let's design your space.
              </h3>
              <p className="text-xs text-[#111111]/65 font-sans">
                Office 255, 4th Floor, Gaur World SmartStreet Mall, Greater Noida West
              </p>
            </div>

            {/* Step Progress Bar */}
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className={`h-1.5 rounded-full transition-all ${
                    i <= step ? 'bg-[#E09290]' : 'bg-[#111111]/10'
                  }`}
                />
              ))}
            </div>

            {/* Step 1: What are you designing? */}
            {step === 1 && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="space-y-1">
                  <span className="text-xs uppercase tracking-[0.2em] text-[#E09290] font-mono font-bold">
                    Step 01
                  </span>
                  <h4 className="font-serif text-2xl text-[#111111]">
                    What are you designing?
                  </h4>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    '2 BHK',
                    '3 BHK',
                    '4 BHK',
                    'Independent Villa',
                    'Penthouse',
                    'Commercial / Studio'
                  ].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setPropertyType(type)}
                      className={`p-4 rounded-xl text-left border transition-all text-xs uppercase tracking-wider font-sans ${
                        propertyType === type
                          ? 'bg-[#E09290] text-[#111111] font-bold border-[#E09290] shadow-sm'
                          : 'bg-[#F2EED8] text-[#111111]/70 border-[#111111]/10 hover:border-[#111111]/30'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>

                <div className="pt-4 flex justify-end">
                  <Button
                    variant="secondary"
                    size="md"
                    onClick={() => setStep(2)}
                    className="shadow-md"
                    icon={<ArrowRight className="w-4 h-4" />}
                  >
                    Next: Select Scope
                  </Button>
                </div>
              </div>
            )}

            {/* Step 2: What are you looking for? */}
            {step === 2 && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="space-y-1">
                  <span className="text-xs uppercase tracking-[0.2em] text-[#E09290] font-mono font-bold">
                    Step 02
                  </span>
                  <h4 className="font-serif text-2xl text-[#111111]">
                    What are you looking for?
                  </h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    'Complete Turnkey Interiors',
                    'Modular Kitchen & Appliances',
                    'Custom Furniture & Wardrobes',
                    'Walls, Louvers & Wallpapers',
                    'False Ceiling & Lighting',
                    'Full Home Renovation'
                  ].map((service) => {
                    const isSelected = selectedServices.includes(service);
                    return (
                      <button
                        key={service}
                        type="button"
                        onClick={() => toggleService(service)}
                        className={`p-3.5 rounded-xl text-left border transition-all text-xs flex items-center justify-between font-sans ${
                          isSelected
                            ? 'bg-[#F2EED8] text-[#111111] border-[#E09290] font-medium shadow-sm'
                            : 'bg-[#FAF8EE] text-[#111111]/60 border-[#111111]/10 hover:text-[#111111]'
                        }`}
                      >
                        <span>{service}</span>
                        <div
                          className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] ${
                            isSelected
                              ? 'bg-[#E09290] text-[#111111] font-bold'
                              : 'border border-[#111111]/20 text-transparent'
                          }`}
                        >
                          ✓
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <Button
                    variant="glass"
                    size="sm"
                    onClick={() => setStep(1)}
                    icon={<ArrowLeft className="w-3.5 h-3.5" />}
                    iconPosition="left"
                  >
                    Back
                  </Button>
                  <Button
                    variant="secondary"
                    size="md"
                    onClick={() => setStep(3)}
                    className="shadow-md"
                    icon={<ArrowRight className="w-4 h-4" />}
                  >
                    Next: Timeline
                  </Button>
                </div>
              </div>
            )}

            {/* Step 3: Timeline & Meeting Preference */}
            {step === 3 && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="space-y-1">
                  <span className="text-xs uppercase tracking-[0.2em] text-[#E09290] font-mono font-bold">
                    Step 03
                  </span>
                  <h4 className="font-serif text-2xl text-[#111111]">
                    Timeline & Meeting Preference
                  </h4>
                </div>

                <div className="space-y-3">
                  <label className="text-[11px] uppercase tracking-wider text-[#111111]/60 block font-mono">
                    Possession Status
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {[
                      'Ready to Move (Immediate)',
                      'Possession in 1–3 Months',
                      'Possession in 6+ Months'
                    ].map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setTimeline(t)}
                        className={`p-3 rounded-xl text-left border text-xs font-sans transition-all ${
                          timeline === t
                            ? 'bg-[#E09290] text-[#111111] border-[#E09290] font-bold shadow-sm'
                            : 'bg-[#F2EED8] text-[#111111]/70 border-[#111111]/10 hover:text-[#111111]'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <label className="text-[11px] uppercase tracking-wider text-[#111111]/60 block font-mono">
                    Preferred Consultation Location
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[
                      'Studio Visit (Gaur World SmartStreet)',
                      'On-Site Site Measurement & Audit',
                      'Virtual Video Consultation'
                    ].map((m) => (
                      <button
                        key={m}
                        type="button"
                        onClick={() => setConsultationMode(m)}
                        className={`p-3 rounded-xl text-left border text-xs font-sans transition-all ${
                          consultationMode === m
                            ? 'bg-[#E09290] text-[#111111] border-[#E09290] font-bold shadow-sm'
                            : 'bg-[#F2EED8] text-[#111111]/70 border-[#111111]/10 hover:text-[#111111]'
                        }`}
                      >
                        {m}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <Button
                    variant="glass"
                    size="sm"
                    onClick={() => setStep(2)}
                    icon={<ArrowLeft className="w-3.5 h-3.5" />}
                    iconPosition="left"
                  >
                    Back
                  </Button>
                  <Button
                    variant="secondary"
                    size="md"
                    onClick={() => setStep(4)}
                    className="shadow-md"
                    icon={<ArrowRight className="w-4 h-4" />}
                  >
                    Next: Your Details
                  </Button>
                </div>
              </div>
            )}

            {/* Step 4: Contact Details */}
            {step === 4 && (
              <form onSubmit={handleSubmit} className="space-y-6 animate-in fade-in duration-200">
                <div className="space-y-1">
                  <span className="text-xs uppercase tracking-[0.2em] text-[#E09290] font-mono font-bold">
                    Step 04
                  </span>
                  <h4 className="font-serif text-2xl text-[#111111]">
                    Your Details & Project Location
                  </h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] uppercase tracking-wider text-[#111111]/60 font-mono">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Vikram Sharma"
                      className="w-full p-3.5 rounded-xl bg-[#FAF8EE] border border-[#111111]/20 text-[#111111] text-xs focus:border-[#E09290] outline-none font-sans"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] uppercase tracking-wider text-[#111111]/60 font-mono">
                      Phone Number (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98XXX XXXXX"
                      className="w-full p-3.5 rounded-xl bg-[#FAF8EE] border border-[#111111]/20 text-[#111111] text-xs focus:border-[#E09290] outline-none font-sans"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] uppercase tracking-wider text-[#111111]/60 font-mono">
                      Society / Sector in Delhi NCR *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.society}
                      onChange={(e) => setFormData({ ...formData, society: e.target.value })}
                      placeholder="e.g. Gaur City 2, ATS, Jaypee Greens"
                      className="w-full p-3.5 rounded-xl bg-[#FAF8EE] border border-[#111111]/20 text-[#111111] text-xs focus:border-[#E09290] outline-none font-sans"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] uppercase tracking-wider text-[#111111]/60 font-mono">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@domain.com"
                      className="w-full p-3.5 rounded-xl bg-[#FAF8EE] border border-[#111111]/20 text-[#111111] text-xs focus:border-[#E09290] outline-none font-sans"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] uppercase tracking-wider text-[#111111]/60 font-mono">
                    Project Notes / Special Requests (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Floor plan available, need island modular kitchen, etc."
                    className="w-full p-3.5 rounded-xl bg-[#FAF8EE] border border-[#111111]/20 text-[#111111] text-xs focus:border-[#E09290] outline-none resize-none font-sans"
                  />
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <Button
                    variant="glass"
                    size="sm"
                    onClick={() => setStep(3)}
                    icon={<ArrowLeft className="w-3.5 h-3.5" />}
                    iconPosition="left"
                  >
                    Back
                  </Button>

                  <Button
                    variant="primary"
                    size="md"
                    type="submit"
                    className="shadow-md"
                  >
                    Request Consultation →
                  </Button>
                </div>
              </form>
            )}
          </div>
        ) : (
          /* Confirmation Success View */
          <div className="py-8 space-y-6 text-center animate-in zoom-in-95 duration-300">
            <div className="w-14 h-14 mx-auto rounded-full bg-[#E09290]/20 flex items-center justify-center text-[#E09290]">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.25em] text-[#E09290] font-mono font-bold">
                Consultation Request Received
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#111111]">
                Thank you, {formData.name || 'Homeowner'}.
              </h3>
              <p className="text-sm text-[#111111]/70 max-w-md mx-auto font-sans">
                Our Senior Interior Director will contact you within 2 hours to confirm your appointment at our Gaur World SmartStreet studio.
              </p>
            </div>

            <div className="p-5 bg-[#F2EED8] border border-[#111111]/15 rounded-2xl max-w-md mx-auto text-xs text-left space-y-2 font-sans">
              <div className="flex justify-between text-[#111111]/60">
                <span>Project</span>
                <span className="text-[#111111] font-semibold">{propertyType} ({formData.society || 'Delhi NCR'})</span>
              </div>
              <div className="flex justify-between text-[#111111]/60">
                <span>Scope</span>
                <span className="text-[#111111] font-semibold">{selectedServices.slice(0, 2).join(', ')}</span>
              </div>
              <div className="flex justify-between text-[#111111]/60">
                <span>Venue</span>
                <span className="text-[#111111] font-semibold">{consultationMode}</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button
                variant="glass"
                size="md"
                href={whatsappInquiryUrl}
                target="_blank"
                className="w-full sm:w-auto font-semibold"
                icon={<MessageCircle className="w-4 h-4 text-[#E09290]" />}
                iconPosition="left"
              >
                Confirm Instantly via WhatsApp
              </Button>

              <Button
                variant="secondary"
                size="md"
                onClick={onClose}
                className="w-full sm:w-auto"
              >
                Done
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

