import React from 'react';
import { coreSkillsData } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 border-b border-zinc-800/80 bg-[#08090d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <p className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-2">Technical Core Competencies</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
            Rooted in Theoretical Rigor & Applied Problem Solving
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-3 leading-relaxed">
            As an Information Science & Engineering undergraduate at Atria Institute of Technology, my skillset bridges foundational computer science with production-minded software engineering.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {coreSkillsData.map((category) => (
            <div
              key={category.category}
              className="rounded-xl p-6 sm:p-7 bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700/80 transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="w-2 h-2 rounded-xs bg-cyan-400"></span>
                <h3 className="text-lg font-bold text-white tracking-tight">{category.category}</h3>
              </div>
              <p className="text-xs text-zinc-400 mb-6">{category.description}</p>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="border-t border-zinc-800/60 pt-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-semibold text-zinc-100">{skill.name}</span>
                      <span className="text-xs font-medium text-cyan-400">{skill.level}</span>
                    </div>
                    <p className="text-xs text-zinc-400 mt-1 leading-relaxed">{skill.experience}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
