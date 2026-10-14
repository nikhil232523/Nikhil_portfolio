import React from 'react';
import { languagesData } from '../data/portfolioData';
import { Check, Minus, MessageSquare, Globe2, BookOpen } from 'lucide-react';

export const LanguagesSection: React.FC = () => {
  return (
    <section id="languages" className="py-20 border-b border-zinc-800/80 bg-[#08090d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-2">Communication & Cultural Competency</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
            Multilingual Proficiency Across 5 Major Languages
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2 leading-relaxed">
            Effective engineering is deeply tied to clear communication. Living and studying in Bangalore's diverse tech ecosystem, I comfortably communicate across linguistic boundaries with teams, stakeholders, and clients.
          </p>
        </div>

        {/* Linguistic Matrix Table */}
        <div className="rounded-2xl border border-zinc-800 bg-[#0d0f17] overflow-hidden shadow-xl mb-10">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-zinc-900/90 text-zinc-400 border-b border-zinc-800 text-xs">
                <tr>
                  <th className="py-4 px-6 font-semibold">Language</th>
                  <th className="py-4 px-4 font-semibold text-center">Speak</th>
                  <th className="py-4 px-4 font-semibold text-center">Understand</th>
                  <th className="py-4 px-4 font-semibold text-center">Read</th>
                  <th className="py-4 px-4 font-semibold text-center">Write</th>
                  <th className="py-4 px-6 font-semibold hidden md:table-cell">Professional Context</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60 bg-zinc-950/40 text-zinc-300">
                {languagesData.map((lang) => (
                  <tr key={lang.name} className="hover:bg-zinc-800/30 transition-colors">
                    
                    {/* Language Name & Native Script */}
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-xs bg-cyan-400" />
                        <div>
                          <div className="font-bold text-white flex items-center gap-2">
                            <span>{lang.name}</span>
                            <span className="text-xs text-zinc-500 font-normal">({lang.nativeScript})</span>
                          </div>
                          <span className="text-xs text-cyan-400/90 font-medium">{lang.proficiency}</span>
                        </div>
                      </div>
                    </td>

                    {/* Speak */}
                    <td className="py-4 px-4 text-center">
                      {lang.speak ? (
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" title="Yes">
                          <Check className="w-4 h-4 stroke-[2.5]" />
                        </span>
                      ) : (
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-zinc-900 text-zinc-600" title="No">
                          <Minus className="w-4 h-4" />
                        </span>
                      )}
                    </td>

                    {/* Understand */}
                    <td className="py-4 px-4 text-center">
                      {lang.understand ? (
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" title="Yes">
                          <Check className="w-4 h-4 stroke-[2.5]" />
                        </span>
                      ) : (
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-zinc-900 text-zinc-600" title="No">
                          <Minus className="w-4 h-4" />
                        </span>
                      )}
                    </td>

                    {/* Read */}
                    <td className="py-4 px-4 text-center">
                      {lang.read ? (
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" title="Yes">
                          <Check className="w-4 h-4 stroke-[2.5]" />
                        </span>
                      ) : (
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-zinc-900 text-zinc-600" title="No">
                          <Minus className="w-4 h-4" />
                        </span>
                      )}
                    </td>

                    {/* Write */}
                    <td className="py-4 px-4 text-center">
                      {lang.write ? (
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" title="Yes">
                          <Check className="w-4 h-4 stroke-[2.5]" />
                        </span>
                      ) : (
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-zinc-900 text-zinc-600" title="No">
                          <Minus className="w-4 h-4" />
                        </span>
                      )}
                    </td>

                    {/* Context / Notes */}
                    <td className="py-4 px-6 text-xs text-zinc-400 hidden md:table-cell leading-relaxed">
                      {lang.notes}
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 3 Pillars of Multilingual Advantage */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 rounded-xl bg-zinc-900/50 border border-zinc-800">
            <div className="flex items-center gap-2 mb-2 text-white font-semibold text-sm">
              <Globe2 className="w-4 h-4 text-cyan-400" />
              <span>Pan-India Collaboration</span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Equally comfortable coordinating in Hindi with northern counterparts, Malayalam and Tamil with southern developer circles, and English for international codebases.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-zinc-900/50 border border-zinc-800">
            <div className="flex items-center gap-2 mb-2 text-white font-semibold text-sm">
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Bengaluru Tech Native</span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Spoken fluency in Kannada alongside English and Hindi enables natural rapport with local vendors, college authorities at Atria IT, and tech meetups.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-zinc-900/50 border border-zinc-800">
            <div className="flex items-center gap-2 mb-2 text-white font-semibold text-sm">
              <BookOpen className="w-4 h-4 text-indigo-400" />
              <span>Technical Documentation</span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Read and write capability in English and Hindi ensures precise technical writing, PR descriptions, clean documentation, and requirement gathering.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
