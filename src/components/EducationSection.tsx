import React from 'react';
import { educationTimeline, certificationsData } from '../data/portfolioData';
import { GraduationCap, Award, BookOpen, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section id="academics" className="py-20 border-b border-zinc-800/80 bg-[#08090d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <p className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-2">Academic Roadmap</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
            Education & Industry-Aligned Engineering Coursework
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2">
            Formal undergraduate training at Atria Institute of Technology, affiliated with Visvesvaraya Technological University (VTU).
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="space-y-8 mb-16">
          {educationTimeline.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl p-6 sm:p-8 bg-zinc-900/50 border border-zinc-800 relative overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-400 mb-1">
                    <span className="text-cyan-400 font-semibold">{item.period}</span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-zinc-500" />
                      <span>{item.location}</span>
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="text-emerald-400 font-medium">{item.status}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white">{item.degree}</h3>
                  <p className="text-sm text-zinc-300 font-medium mt-1">{item.institution}</p>
                </div>

                <div className="shrink-0 p-2.5 rounded-xl bg-zinc-800/80 border border-zinc-700/80 text-cyan-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
              </div>

              <p className="text-sm text-zinc-300 leading-relaxed max-w-4xl mb-6">
                {item.description}
              </p>

              {/* Key Coursework Matrix */}
              <div>
                <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Key Technical Subjects & Labs</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                  {item.keySubjects.map((sub) => (
                    <div
                      key={sub}
                      className="px-3 py-2 rounded-lg bg-zinc-950/70 border border-zinc-800/90 text-xs text-zinc-300 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                      <span className="truncate">{sub}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Certifications & Skill Validations */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Award className="w-5 h-5 text-cyan-400" />
            <h3 className="text-xl font-bold text-white">Certifications & Problem-Solving Accreditations</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificationsData.map((cert, i) => (
              <div
                key={i}
                className="rounded-xl p-5 bg-zinc-900/40 border border-zinc-800 flex flex-col justify-between hover:border-zinc-700 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-zinc-500 mb-2">
                    <span>{cert.issuer}</span>
                    <span className="font-mono text-cyan-400">{cert.year}</span>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-2 leading-snug">{cert.title}</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">{cert.description}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-zinc-800/60 flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Competency</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
