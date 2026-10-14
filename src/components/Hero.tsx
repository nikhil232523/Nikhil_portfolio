import React from 'react';
import { ArrowRight, Download, Linkedin, Github, Mail, Phone, MapPin, GraduationCap } from 'lucide-react';
import { PortfolioData } from '../data/portfolioData';

interface HeroProps {
  data: PortfolioData;
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ data, onOpenResume, onOpenContact }) => {
  return (
    <section className="relative pt-8 pb-16 md:pt-16 md:pb-24 overflow-hidden border-b border-zinc-800/60">
      {/* Background ambient lighting */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-cyan-600/10 via-indigo-600/10 to-transparent blur-3xl -z-10 pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split-Screen Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Clean Kicker (Unboxed metadata with typographic separators) */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium tracking-wide text-zinc-400">
              <span className="text-cyan-400 font-semibold">Atria Institute of Technology</span>
              <span aria-hidden="true">·</span>
              <span>5th Semester ISE</span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-zinc-400" />
                <span>Bengaluru</span>
              </span>
            </div>

            {/* Display Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-white tracking-tight leading-[1.15] text-balance">
              Architecting dependable systems with <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-300">Python, Java, DBMS & DSA</span>.
            </h1>

            {/* Lead Copy */}
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl">
              I am <strong className="text-white font-medium">{data.fullName}</strong> ({data.name}), an Information Science and Engineering undergraduate focused on computational efficiency, normalized relational schemas, and object-oriented backend architectures. Multilingual in 5 Indian languages and driven by engineering rigor.
            </p>

            {/* Quick Contact & Verified Profile Chips */}
            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-zinc-400">
              <a 
                href={`mailto:${data.email}`} 
                className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>{data.email}</span>
              </a>
              <span aria-hidden="true" className="text-zinc-700">·</span>
              <a 
                href={`tel:${data.phone.replace(/\s+/g, '')}`} 
                className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>{data.phone}</span>
              </a>
              <span aria-hidden="true" className="text-zinc-700">·</span>
              <span>DOB: 23 May 2005</span>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-zinc-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors shadow-sm shadow-cyan-950 whitespace-nowrap"
              >
                <span>Explore Technical Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-zinc-800/90 hover:bg-zinc-700 border border-zinc-700 rounded-lg transition-colors whitespace-nowrap"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </button>

              <a
                href={data.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-zinc-300 hover:text-white bg-zinc-900/60 hover:bg-zinc-800 border border-zinc-800 rounded-lg transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4 text-sky-400" />
                <span>LinkedIn</span>
              </a>

              <a
                href={data.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-zinc-300 hover:text-white bg-zinc-900/60 hover:bg-zinc-800 border border-zinc-800 rounded-lg transition-colors"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4 text-zinc-300" />
                <span>GitHub</span>
              </a>
            </div>

          </div>

          {/* Right Column: Clean Candidate Overview Card (No source code, no photo) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-md rounded-2xl bg-[#0c0e16] border border-zinc-800 shadow-2xl p-6 sm:p-7 space-y-6">
              
              {/* Header */}
              <div className="border-b border-zinc-800/80 pb-4 flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider block">Candidate Snapshot</span>
                  <h3 className="text-lg font-bold text-white mt-0.5">{data.fullName}</h3>
                  <p className="text-xs text-zinc-400">B.E. Information Science & Engineering</p>
                </div>
                <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
              </div>

              {/* Education Milestones List */}
              <div className="space-y-3.5 text-xs">
                <div>
                  <span className="text-zinc-500 block text-[11px] font-medium">Undergraduate Degree (Current)</span>
                  <div className="font-semibold text-white mt-0.5">Atria Institute of Technology</div>
                  <div className="text-zinc-400 text-[11px]">5th Semester · ISE Branch · VTU Affiliated</div>
                </div>

                <div className="border-t border-zinc-800/60 pt-3">
                  <span className="text-zinc-500 block text-[11px] font-medium">Pre-University Education</span>
                  <div className="font-semibold text-white mt-0.5">CMR PU College</div>
                  <div className="text-zinc-400 text-[11px]">Science (PCMC) · Distinction</div>
                </div>

                <div className="border-t border-zinc-800/60 pt-3">
                  <span className="text-zinc-500 block text-[11px] font-medium">Secondary Schooling</span>
                  <div className="font-semibold text-white mt-0.5">Kendriya Vidyalaya (K.V.), MEG & Centre</div>
                  <div className="text-zinc-400 text-[11px]">St. John's Church Road, Bengaluru · CBSE</div>
                </div>
              </div>

              {/* Core Pillars */}
              <div className="border-t border-zinc-800/80 pt-4">
                <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block mb-2.5">
                  Core Technical Pillars
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-lg bg-zinc-950 border border-zinc-800/80 text-zinc-200 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span className="font-medium">Python</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-zinc-950 border border-zinc-800/80 text-zinc-200 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                    <span className="font-medium">Java</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-zinc-950 border border-zinc-800/80 text-zinc-200 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                    <span className="font-medium">DBMS / SQL</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-zinc-950 border border-zinc-800/80 text-zinc-200 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span className="font-medium">DSA</span>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-2 border-t border-zinc-800 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-emerald-400 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Open to Internships</span>
                </div>
                <button
                  onClick={onOpenResume}
                  className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                >
                  View Resume →
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* Full-width Proof Strip Below Split (As mandated by domain guidelines) */}
        <div className="mt-14 pt-8 border-t border-zinc-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          
          <div className="space-y-1">
            <span className="text-2xl sm:text-3xl font-extrabold text-white tabular-nums tracking-tight">5th Sem</span>
            <p className="text-xs text-zinc-400 font-medium">ISE @ Atria Institute of Tech</p>
          </div>

          <div className="space-y-1">
            <span className="text-2xl sm:text-3xl font-extrabold text-white tabular-nums tracking-tight">4 Core</span>
            <p className="text-xs text-zinc-400 font-medium">Pillars: Python, Java, DBMS, DSA</p>
          </div>

          <div className="space-y-1">
            <span className="text-2xl sm:text-3xl font-extrabold text-white tabular-nums tracking-tight">5 Languages</span>
            <p className="text-xs text-zinc-400 font-medium">Eng · Hin · Mal · Tam · Kan</p>
          </div>

          <div className="space-y-1">
            <span className="text-2xl sm:text-3xl font-extrabold text-white tabular-nums tracking-tight">Bengaluru</span>
            <p className="text-xs text-zinc-400 font-medium">India's Leading Technology Hub</p>
          </div>

        </div>

      </div>
    </section>
  );
};
