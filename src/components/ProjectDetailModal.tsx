import React, { useState } from 'react';
import { Project } from '../data/projectsData';
import { X } from 'lucide-react';
import { getWhatsAppUrl } from '../data/studioData';
import { Button } from './Button';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenConsultationWithProject: (projectTitle: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onOpenConsultationWithProject
}) => {
  const [selectedRoomIdx, setSelectedRoomIdx] = useState(0);

  if (!project) return null;

  const currentRoom = project.rooms[selectedRoomIdx] || project.rooms[0];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#111111]/90 backdrop-blur-xl animate-in fade-in duration-300">
      {/* Sticky Top Bar */}
      <div className="sticky top-0 z-20 bg-[#F2EED8] border-b border-[#111111]/15 px-6 lg:px-12 py-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#E09290] font-mono font-bold">
            Case Study
          </span>
          <span className="text-[#111111]/40">/</span>
          <span className="font-serif text-lg text-[#111111] font-medium">
            {project.title}
          </span>
          <span className="hidden sm:inline-block text-xs text-[#111111]/60 font-sans">
            ({project.typology} · {project.location})
          </span>
        </div>

        <button
          onClick={onClose}
          className="group px-4 py-2 rounded-full glass-button-light text-[#111111] hover:text-[#E09290] transition-colors flex items-center gap-2 text-xs uppercase tracking-widest font-mono font-bold"
          aria-label="Close Project Modal"
        >
          <span className="hidden sm:inline font-sans">Close</span>
          <X className="w-4 h-4 transition-transform group-hover:rotate-90" />
        </button>
      </div>

      {/* Main Content Area */}
      <div className="bg-[#FAF8EE] min-h-screen">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-10 lg:py-16 space-y-16">
          {/* Project Header */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3 text-xs tracking-[0.2em] uppercase text-[#111111]/60 font-mono">
              <span className="text-[#E09290] font-bold">{project.typology}</span>
              <span>·</span>
              <span>{project.location}</span>
              <span>·</span>
              <span>{project.area}</span>
              <span>·</span>
              <span>Handover {project.year}</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#111111] font-normal leading-tight">
              {project.title}
            </h2>

            <p className="font-serif italic text-xl sm:text-2xl text-[#111111]/70">
              {project.subTitle}
            </p>
          </div>

          {/* Hero Full Banner */}
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#111111] border border-[#111111]/15 shadow-xl">
            <img
              src={project.heroImage}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/75 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 max-w-lg">
              <p className="text-xs uppercase tracking-[0.2em] text-[#E09290] mb-1 font-mono font-bold">
                Architectural Overview
              </p>
              <p className="text-sm sm:text-base text-[#F2EED8] font-light font-sans">
                {project.location} · Turnkey Execution by Elite Studios
              </p>
            </div>
          </div>

          {/* 01 Brief / 02 Direction / 03 Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-4 border-t border-[#111111]/15">
            {/* 01 The Brief */}
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.25em] text-[#E09290] block font-mono font-bold">
                01 · THE BRIEF
              </span>
              <h4 className="font-serif text-2xl text-[#111111]">
                The Client Vision
              </h4>
              <p className="text-sm text-[#111111]/80 leading-relaxed font-sans font-light">
                {project.brief}
              </p>
            </div>

            {/* 02 The Direction */}
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.25em] text-[#E09290] block font-mono font-bold">
                02 · THE DIRECTION
              </span>
              <h4 className="font-serif text-2xl text-[#111111]">
                Design & Architecture
              </h4>
              <p className="text-sm text-[#111111]/80 leading-relaxed font-sans font-light">
                {project.direction}
              </p>
            </div>

            {/* 03 The Details & Materials */}
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.25em] text-[#E09290] block font-mono font-bold">
                03 · THE DETAILS
              </span>
              <h4 className="font-serif text-2xl text-[#111111]">
                Materials & Hardware
              </h4>
              <div className="flex flex-wrap gap-2 pt-1">
                {project.materials.map((mat) => (
                  <span
                    key={mat}
                    className="text-xs text-[#111111] bg-[#F2EED8] border border-[#111111]/15 px-3.5 py-1.5 rounded-full font-sans"
                  >
                    {mat}
                  </span>
                ))}
              </div>
              <div className="pt-2">
                <p className="text-xs text-[#111111]/60 font-mono uppercase tracking-wider">Key Innovations:</p>
                <ul className="mt-2 space-y-1.5">
                  {project.keyFeatures.slice(0, 2).map((feat, i) => (
                    <li key={i} className="text-xs text-[#111111]/85 flex items-start gap-2 font-sans">
                      <span className="text-[#E09290] mt-0.5">•</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Room By Room Interactive Journey */}
          <div className="space-y-8 pt-8 border-t border-[#111111]/15">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-[#E09290] block mb-2 font-mono font-bold">
                  Room-by-Room Walkthrough
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#111111]">
                  Explore The Spaces
                </h3>
              </div>

              {/* Room Tabs */}
              <div className="flex flex-wrap gap-2 p-1.5 bg-[#FAF8EE] rounded-full border border-[#111111]/10">
                {project.rooms.map((room, idx) => (
                  <button
                    key={room.name}
                    onClick={() => setSelectedRoomIdx(idx)}
                    className={`text-xs uppercase tracking-wider px-4 py-2 rounded-full transition-all font-sans ${
                      selectedRoomIdx === idx
                        ? 'bg-[#111111] text-[#F2EED8] font-semibold shadow-sm'
                        : 'text-[#111111]/70 hover:text-[#111111] hover:bg-[#F2EED8]'
                    }`}
                  >
                    {room.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Active Room Viewer */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#F2EED8] border border-[#111111]/15 p-6 lg:p-8 rounded-3xl shadow-sm">
              <div className="lg:col-span-8 overflow-hidden aspect-[16/10] bg-[#111111] rounded-2xl">
                <img
                  src={currentRoom.imageUrl}
                  alt={currentRoom.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              <div className="lg:col-span-4 space-y-6">
                <div>
                  <span className="text-[11px] uppercase tracking-[0.25em] text-[#E09290] block font-mono font-bold">
                    Space 0{selectedRoomIdx + 1} of 0{project.rooms.length}
                  </span>
                  <h4 className="font-serif text-2xl sm:text-3xl text-[#111111] mt-1">
                    {currentRoom.name}
                  </h4>
                </div>

                <p className="text-sm text-[#111111]/80 leading-relaxed font-light font-sans">
                  {currentRoom.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-[#111111]/15">
                  <p className="text-xs uppercase tracking-wider text-[#111111]/60 font-mono">
                    Bespoke Craftsmanship Details:
                  </p>
                  <div className="space-y-1.5">
                    {currentRoom.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[#111111]/85 font-sans">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#E09290]" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between text-xs text-[#111111]/60 font-mono">
                  <button
                    disabled={selectedRoomIdx === 0}
                    onClick={() => setSelectedRoomIdx((prev) => Math.max(0, prev - 1))}
                    className="hover:text-[#111111] disabled:opacity-30 disabled:pointer-events-none uppercase tracking-wider font-semibold glass-button-light px-3.5 py-1.5 rounded-full"
                  >
                    ← Prev Space
                  </button>
                  <button
                    disabled={selectedRoomIdx === project.rooms.length - 1}
                    onClick={() => setSelectedRoomIdx((prev) => Math.min(project.rooms.length - 1, prev + 1))}
                    className="hover:text-[#111111] disabled:opacity-30 disabled:pointer-events-none uppercase tracking-wider font-semibold glass-button-light px-3.5 py-1.5 rounded-full"
                  >
                    Next Space →
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Client Testimonial Strip */}
          {project.testimonial && (
            <div className="p-8 bg-[#F2EED8] border border-[#111111]/15 rounded-3xl space-y-4">
              <span className="text-xs uppercase tracking-[0.25em] text-[#E09290] font-mono font-bold">
                Homeowner Reflection
              </span>
              <p className="font-serif text-xl sm:text-2xl italic text-[#111111] leading-relaxed">
                "{project.testimonial.quote}"
              </p>
              <div className="text-xs text-[#111111]/60 font-sans">
                <span className="text-[#111111] font-semibold">{project.testimonial.client}</span>
                <span className="mx-2">·</span>
                <span>{project.testimonial.society}</span>
              </div>
            </div>
          )}

          {/* Bottom Consultation Conversion Action */}
          <div className="p-8 sm:p-12 bg-[#E09290] border border-[#111111]/20 rounded-3xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-lg">
            <div className="space-y-2 max-w-xl">
              <span className="text-xs uppercase tracking-[0.25em] text-[#111111] font-mono font-bold">
                Designed & Delivered in Delhi NCR
              </span>
              <h4 className="font-serif text-3xl sm:text-4xl text-[#111111]">
                Planning a space like {project.title}?
              </h4>
              <p className="text-xs sm:text-sm text-[#111111]/85 font-sans leading-relaxed">
                Schedule a personalized walkthrough at our Gaur World SmartStreet studio. We review floorplans, discuss finishes, and generate 3D concepts.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
              <Button
                variant="glass"
                size="md"
                href={getWhatsAppUrl(`Hi Elite Studios, I loved your project '${project.title}' (${project.typology}) and would like to discuss a similar design for my home.`)}
                target="_blank"
                className="font-semibold text-center"
              >
                Ask on WhatsApp
              </Button>
              <Button
                variant="secondary"
                size="md"
                onClick={() => {
                  onClose();
                  onOpenConsultationWithProject(project.title);
                }}
                className="font-semibold text-center shadow-md"
              >
                Request Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

