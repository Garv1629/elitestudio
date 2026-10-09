import React from 'react';
import { MessageCircle, ArrowUpRight } from 'lucide-react';
import { getWhatsAppUrl } from '../data/studioData';
import { Button } from './Button';

interface PersistentConsultationBarProps {
  onOpenConsultation: () => void;
}

export const PersistentConsultationBar: React.FC<PersistentConsultationBarProps> = ({
  onOpenConsultation
}) => {
  return (
    <>
      {/* Desktop Floating Luxury Action */}
      <div className="hidden md:flex fixed bottom-8 right-8 z-40 items-center gap-3 p-1.5 rounded-full glass-panel shadow-2xl">
        <Button
          variant="glass"
          size="sm"
          href={getWhatsAppUrl("Hi Elite Studios, I would like to discuss interior design for my residence in Delhi NCR.")}
          target="_blank"
          className="group text-xs tracking-wider"
          iconPosition="left"
          icon={<MessageCircle className="w-4 h-4 text-[#E09290] group-hover:text-[#11110F] transition-colors" />}
        >
          <span>Discuss Your Space</span>
          <ArrowUpRight className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity ml-1.5" />
        </Button>

        <Button
          variant="primary"
          size="sm"
          onClick={onOpenConsultation}
          className="font-semibold"
        >
          Book Consultation
        </Button>
      </div>

      {/* Mobile Fixed Bottom Sticky Bar */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-[#FAF8EE]/98 backdrop-blur-sm border-t border-[#111111]/15 p-3 flex items-center gap-2">
        <Button
          variant="glass"
          size="sm"
          fullWidth
          href={getWhatsAppUrl("Hi Elite Studios, I would like to discuss interior design for my home.")}
          target="_blank"
          className="font-semibold"
          iconPosition="left"
          icon={<MessageCircle className="w-4 h-4 text-[#E09290]" />}
        >
          WhatsApp Chat
        </Button>

        <Button
          variant="primary"
          size="sm"
          fullWidth
          onClick={onOpenConsultation}
          className="font-semibold shadow-sm"
          icon={<ArrowUpRight className="w-3.5 h-3.5" />}
        >
          Book Visit
        </Button>
      </div>
    </>
  );
};


