import React, { useState } from 'react';
import { Project, PROJECTS_DATA } from '../data/projectsData';
import { Eye, ArrowUpRight } from 'lucide-react';
import { ProjectDetailModal } from './ProjectDetailModal';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './Button';
import { getOptimizedImageUrl, getImageSrcSet } from '../utils/imageUrl';

interface SelectedProjectsProps {
  onOpenConsultationWithProject: (projectTitle: string) => void;
}

export const SelectedProjects: React.FC<SelectedProjectsProps> = ({
  onOpenConsultationWithProject
}) => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [selectedProjectId, setSelectedProjectId] = useState<string>(PROJECTS_DATA[0].id);
  const [activeRoomIndex, setActiveRoomIndex] = useState<number>(0);
  const [filter, setFilter] = useState<string>('all');

  const filteredProjects = PROJECTS_DATA.filter((p) => {
    if (filter === 'all') return true;
    if (filter === 'apartments') return p.typology.includes('BHK');
    if (filter === 'villas') return p.typology.includes('Villa') || p.typology.includes('Penthouse');
    return true;
  });

  const currentProject = PROJECTS_DATA.find((p) => p.id === selectedProjectId) || PROJECTS_DATA[0];
  const currentRoom = currentProject.rooms[activeRoomIndex] || currentProject.rooms[0];

  return (
    <section id="projects" className="py-28 lg:py-36 px-6 lg:px-12 bg-[#F2EED8] text-[#111111]">
      <div className="max-w-7xl mx-auto space-y-16 lg:space-y-24">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-8 border-b border-[#111111]/15">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#E09290]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#111111]/70 font-semibold font-sans">
                CHAPTER 02 // CURATED RESIDENCES
              </span>
              <span className="text-[#111111]/25">|</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#E09290] font-mono">
                COMPLETED 2024–2025
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#111111] font-normal leading-[1.03]">
              Spaces shaped <br />
              <span className="italic font-serif text-[#111111]/50">by quiet intent.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#111111]/80 font-light font-sans">
              A curated collection of completed residences designed, detailed, and delivered across Greater Noida West & Delhi NCR.
            </p>
          </div>

          {/* Segmented Filter Buttons */}
          <div className="flex items-center gap-1 p-1 bg-[#FAF8EE] border border-[#111111]/15 self-start md:self-end shadow-sm rounded-full">
            <button
              onClick={() => setFilter('all')}
              className={`px-5 py-2 text-xs uppercase tracking-wider transition-all font-sans rounded-full ${
                filter === 'all'
                  ? 'bg-[#111111] text-[#F2EED8] font-semibold shadow-sm'
                  : 'text-[#111111]/70 hover:text-[#111111]'
              }`}
            >
              All Works
            </button>
            <button
              onClick={() => setFilter('apartments')}
              className={`px-5 py-2 text-xs uppercase tracking-wider transition-all font-sans rounded-full ${
                filter === 'apartments'
                  ? 'bg-[#111111] text-[#F2EED8] font-semibold shadow-sm'
                  : 'text-[#111111]/70 hover:text-[#111111]'
              }`}
            >
              Apartments
            </button>
            <button
              onClick={() => setFilter('villas')}
              className={`px-5 py-2 text-xs uppercase tracking-wider transition-all font-sans rounded-full ${
                filter === 'villas'
                  ? 'bg-[#111111] text-[#F2EED8] font-semibold shadow-sm'
                  : 'text-[#111111]/70 hover:text-[#111111]'
              }`}
            >
              Villas & Penthouses
            </button>
          </div>
        </div>

        {/* Signature Pinned Architectural Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Sticky Column: Project Selector & Editorial Meta */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <div className="space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#111111]/60 block">
                Select Residence
              </span>
              <div className="space-y-2">
                {filteredProjects.map((project, idx) => {
                  const isSelected = project.id === selectedProjectId;
                  return (
                    <div
                      key={project.id}
                      onClick={() => {
                        setSelectedProjectId(project.id);
                        setActiveRoomIndex(0);
                      }}
                      data-cursor="CASE STUDY"
                      className={`p-5 cursor-pointer border transition-all duration-300 ${
                        isSelected
                          ? 'bg-[#FAF8EE] border-l-4 border-l-[#E09290] border-t-[#111111]/10 border-r-[#111111]/10 border-b-[#111111]/10 shadow-sm pl-6'
                          : 'bg-[#FAF8EE]/60 border-[#111111]/10 hover:border-[#111111]/30 pl-5 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className={`font-mono font-bold ${isSelected ? 'text-[#E09290]' : 'text-[#111111]/50'}`}>
                          0{idx + 1}
                        </span>
                        <span className="text-[11px] text-[#111111]/60 uppercase tracking-wider font-sans">
                          {project.location}
                        </span>
                      </div>
                      <h3 className="font-serif text-2xl text-[#111111]">
                        {project.title}
                      </h3>
                      <p className="text-xs text-[#111111]/60 tracking-wider uppercase mt-1 font-sans">
                        {project.typology} · {project.area}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Active Project Verified Specifications */}
            <div className="p-6 bg-[#FAF8EE] border border-[#111111]/10 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#E09290] font-bold font-mono">
                  Verified Project Scope
                </span>
                <span className="text-xs font-mono text-[#111111]/60">{currentProject.year} Handover</span>
              </div>
              <p className="text-xs text-[#111111]/80 leading-relaxed font-light font-sans">
                {currentProject.direction}
              </p>

              <div className="pt-2 border-t border-[#111111]/10">
                <p className="text-[10px] uppercase tracking-wider text-[#111111]/60 mb-2 font-mono">
                  Materials Specified:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {currentProject.materials.map((mat) => (
                    <span
                      key={mat}
                      className="text-[11px] bg-[#F2EED8] border border-[#111111]/15 px-3 py-1 text-[#111111] font-sans rounded-full"
                    >
                      {mat}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <Button
                  variant="secondary"
                  size="md"
                  fullWidth
                  onClick={() => setActiveProject(currentProject)}
                  data-cursor="EXPAND"
                  icon={<Eye className="w-3.5 h-3.5" />}
                  iconPosition="left"
                >
                  Explore Full Case Study
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Photography & Room-by-Room Explorer */}
          <div className="lg:col-span-7 space-y-6">
            {/* Primary Main Visual with Smooth AnimatePresence */}
            <div
              onClick={() => setActiveProject(currentProject)}
              data-cursor="CASE STUDY"
              className="relative aspect-[16/10] w-full overflow-hidden bg-[#111111] border border-[#111111]/15 cursor-pointer group shadow-xl"
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={`${currentProject.id}-${activeRoomIndex}`}
                  src={getOptimizedImageUrl(currentRoom?.imageUrl || currentProject.heroImage, 1000)}
                  srcSet={getImageSrcSet(currentRoom?.imageUrl || currentProject.heroImage)}
                  sizes="(max-width: 768px) 100vw, 800px"
                  alt={currentRoom?.name || currentProject.title}
                  loading="lazy"
                  decoding="async"
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </AnimatePresence>

              <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/85 via-transparent to-transparent pointer-events-none" />

              {/* Top Quick Action */}
              <div className="glass-badge absolute top-6 right-6 px-4 py-1.5 flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#111111] font-mono group-hover:bg-[#E09290] transition-colors rounded-full">
                <Eye className="w-3 h-3 text-[#111111]" />
                <span>Case Study</span>
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#E09290] block font-mono">
                    {currentProject.title} · {currentRoom?.name}
                  </span>
                  <p className="font-serif text-2xl sm:text-3xl text-[#F2EED8]">
                    {currentRoom?.name}
                  </p>
                </div>
                <div className="text-xs text-[#F2EED8]/70 font-mono">
                  {activeRoomIndex + 1} / {currentProject.rooms.length} Spaces
                </div>
              </div>
            </div>

            {/* Room Navigation Tabs */}
            <div className="flex flex-wrap gap-2">
              {currentProject.rooms.map((room, rIdx) => (
                <button
                  key={room.name}
                  onClick={() => setActiveRoomIndex(rIdx)}
                  className={`text-xs uppercase tracking-wider px-5 py-2.5 transition-all border font-sans rounded-full ${
                    activeRoomIndex === rIdx
                      ? 'bg-[#E09290] text-[#111111] font-semibold border-[#E09290] shadow-sm'
                      : 'bg-[#FAF8EE] text-[#111111]/70 hover:text-[#111111] border-[#111111]/10'
                  }`}
                >
                  <span>{room.name}</span>
                </button>
              ))}
            </div>

            {/* Active Room Detail Narrative */}
            <div className="p-6 bg-[#FAF8EE] border border-[#111111]/10 space-y-4">
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-wider text-[#E09290] font-mono font-bold">
                  Craftsmanship Notes
                </span>
                <p className="text-sm text-[#111111]/85 font-light leading-relaxed font-sans">
                  {currentRoom?.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2 border-t border-[#111111]/10">
                {currentRoom?.details.map((det, dIdx) => (
                  <div key={dIdx} className="flex items-center gap-2 text-xs text-[#111111]/80 font-sans">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#E09290] shrink-0" />
                    <span className="truncate">{det}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Homeowner Reflection Strip */}
            {currentProject.testimonial && (
              <div className="p-6 bg-[#FAF8EE] border border-[#111111]/10 space-y-2">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#E09290] block font-mono font-bold">
                  Homeowner Reflection
                </span>
                <p className="font-serif text-lg italic text-[#111111] leading-relaxed">
                  "{currentProject.testimonial.quote}"
                </p>
                <p className="text-xs text-[#111111]/60 font-sans">
                  {currentProject.testimonial.client} · {currentProject.testimonial.society}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Case Study Fullscreen Modal */}
      <ProjectDetailModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
        onOpenConsultationWithProject={onOpenConsultationWithProject}
      />
    </section>
  );
};

