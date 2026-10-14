import React, { useState } from 'react';
import { PortfolioData } from '../data/portfolioData';
import { Mail, Phone, Calendar, MapPin, Copy, Check, ExternalLink, GraduationCap, Sparkles } from 'lucide-react';

interface AboutSectionProps {
  data: PortfolioData;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ data }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 2500);
  };

  return (
    <section id="about" className="py-20 border-b border-zinc-800/80 bg-[#08090d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Personal Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">Candidate Profile & Biography</p>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
              Driven by Algorithms, Grounded in Database Integrity
            </h2>

            <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed">
              <p>
                Hello! I am <strong className="text-white font-semibold">Nikhil M.K.</strong> (Nikhil Mookken Kurian), currently in my 5th semester of Bachelor of Engineering in <strong className="text-white font-semibold">Information Science & Engineering (ISE)</strong> at <strong className="text-white font-semibold">Atria Institute of Technology</strong>, Bangalore.
              </p>
              <p>
                My passion lies at the intersection of algorithmic efficiency and practical software architecture. Whether it is tuning complex SQL queries for relational databases, implementing custom graph pathfinding algorithms, or writing clean, maintainable Object-Oriented code in Java and Python, I take pride in understanding systems from their theoretical foundations down to their execution performance.
              </p>
              <p>
                Being fluent across 5 Indian languages (English, Hindi, Malayalam, Tamil, Kannada) has honed my communication skills, enabling me to work effortlessly within diverse cross-functional teams, contribute constructively in technical discussions, and deliver clean, well-documented engineering solutions.
              </p>
            </div>

            {/* Core Values / Strengths */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <h4 className="text-sm font-bold text-white mb-1">Algorithmic Problem Solving</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Rigorous focus on time/space complexities, tree traversals, and dynamic programming.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <h4 className="text-sm font-bold text-white mb-1">Relational Database Design</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  ACID transactional guarantees, BCNF normalization, and index optimization.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Verified Details Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl p-6 sm:p-7 bg-[#0d0f17] border border-zinc-800 shadow-xl space-y-6">
              
              <div className="border-b border-zinc-800 pb-4">
                <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">Candidate Quick Facts</span>
                <h3 className="text-xl font-bold text-white mt-1">{data.fullName}</h3>
                <p className="text-xs text-zinc-400">{data.tagline}</p>
              </div>

              <div className="space-y-4 text-xs">
                
                {/* Education */}
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <span className="text-zinc-500 block">Academic Background</span>
                    <div>
                      <span className="text-zinc-200 font-medium block">Atria Institute of Technology</span>
                      <span className="text-zinc-400 block text-[11px]">B.E. in ISE · 5th Semester (VTU)</span>
                    </div>
                    <div className="pt-1 text-[11px] text-zinc-400">
                      <span className="text-zinc-300">PUC:</span> CMR PU College (Science PCMC)
                    </div>
                    <div className="text-[11px] text-zinc-400">
                      <span className="text-zinc-300">School:</span> Kendriya Vidyalaya (K.V.), MEG & Centre (CBSE)
                    </div>
                  </div>
                </div>

                {/* Date of Birth */}
                <div className="flex items-start gap-3">
                  <Calendar className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-zinc-500 block">Date of Birth</span>
                    <span className="text-zinc-200 font-medium">23 May 2005 (Age: {data.age})</span>
                  </div>
                </div>

                {/* Email with copy button */}
                <div className="flex items-start justify-between gap-3 p-2.5 rounded-lg bg-zinc-900/70 border border-zinc-800/80">
                  <div className="flex items-start gap-2.5 min-w-0">
                    <Mail className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <div className="truncate">
                      <span className="text-zinc-500 block text-[11px]">Primary Email</span>
                      <a href={`mailto:${data.email}`} className="text-zinc-200 hover:text-cyan-300 font-medium truncate block">
                        {data.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(data.email, 'email')}
                    className="p-1.5 text-zinc-400 hover:text-white rounded hover:bg-zinc-800 transition-colors shrink-0"
                    title="Copy Email"
                  >
                    {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone with copy button */}
                <div className="flex items-start justify-between gap-3 p-2.5 rounded-lg bg-zinc-900/70 border border-zinc-800/80">
                  <div className="flex items-start gap-2.5 min-w-0">
                    <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div className="truncate">
                      <span className="text-zinc-500 block text-[11px]">Phone / Mobile</span>
                      <a href={`tel:${(data?.phone || '7204015416').replace(/\s+/g, '')}`} className="text-zinc-200 hover:text-cyan-300 font-medium truncate block">
                        {data?.phone || '+91 7204015416'}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(data.phone, 'phone')}
                    className="p-1.5 text-zinc-400 hover:text-white rounded hover:bg-zinc-800 transition-colors shrink-0"
                    title="Copy Phone Number"
                  >
                    {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-zinc-500 block">Current Location</span>
                    <span className="text-zinc-200 font-medium">{data.location}</span>
                  </div>
                </div>

              </div>

              {/* Toast for copy */}
              {copiedField && (
                <div className="p-2 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs text-center font-medium animate-fadeIn">
                  {copiedField === 'email' ? 'Email copied to clipboard!' : 'Phone number copied to clipboard!'}
                </div>
              )}

              {/* Action buttons */}
              <div className="pt-2 flex items-center gap-3">
                <a
                  href={`https://wa.me/917204015416?text=Hi%20Nikhil,%20I%20reviewed%20your%20engineering%20portfolio...`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 text-center text-xs font-semibold text-zinc-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors"
                >
                  WhatsApp Direct
                </a>
                <a
                  href={`mailto:${data.email}`}
                  className="flex-1 py-2 text-center text-xs font-semibold text-white bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-lg transition-colors"
                >
                  Send Email
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
