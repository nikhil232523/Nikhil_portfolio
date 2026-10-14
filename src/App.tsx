import React, { useState, useEffect } from 'react';
import { initialPortfolioData, PortfolioData } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { LanguagesSection } from './components/LanguagesSection';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { EditProfileModal } from './components/EditProfileModal';
import { Settings, FileText } from 'lucide-react';

export default function App() {
  const [portfolioData, setPortfolioData] = useState<PortfolioData>(() => {
    try {
      const saved = localStorage.getItem('nikhil_portfolio_data');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // Fallback
    }
    return initialPortfolioData;
  });

  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);

  const handleSaveData = (updated: PortfolioData) => {
    setPortfolioData(updated);
    try {
      localStorage.setItem('nikhil_portfolio_data', JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const handleResetData = () => {
    setPortfolioData(initialPortfolioData);
    try {
      localStorage.removeItem('nikhil_portfolio_data');
    } catch {
      // ignore
    }
  };

  return (
    <div className="min-h-screen bg-[#08090d] text-zinc-100 flex flex-col selection:bg-cyan-500/25 selection:text-cyan-200">
      
      {/* 3-Zone Top Navigation */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenCustomize={() => setIsEditOpen(true)}
        phone={portfolioData.phone}
        email={portfolioData.email}
        linkedInUrl={portfolioData.linkedInUrl}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Split-Screen Hero */}
        <Hero
          data={portfolioData}
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenContact={() => {
            const el = document.getElementById('contact');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Candidate Profile & Facts */}
        <AboutSection data={portfolioData} />

        {/* Skills & Interactive Workbench (SQL + DSA visualizer) */}
        <SkillsSection />

        {/* Projects Sourced Exclusively from GitHub Repositories */}
        <ProjectsSection initialGithubUrl={portfolioData.githubUrl} />

        {/* Multilingual Competency Matrix */}
        <LanguagesSection />

        {/* Education Timeline & Certifications */}
        <EducationSection />

        {/* Working Contact & Mail Composer */}
        <ContactSection data={portfolioData} />
      </main>

      {/* Quiet Footer */}
      <Footer
        data={portfolioData}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenCustomize={() => setIsEditOpen(true)}
      />

      {/* Interactive Modals */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        data={portfolioData}
      />

      <EditProfileModal
        isOpen={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        data={portfolioData}
        onSave={handleSaveData}
        onReset={handleResetData}
      />

      {/* Floating Fast-Access Pill */}
      <div className="fixed bottom-5 right-5 z-30 flex items-center gap-2">
        <button
          onClick={() => setIsResumeOpen(true)}
          className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-zinc-900/90 text-xs font-semibold text-zinc-200 hover:text-white border border-zinc-800 backdrop-blur-md shadow-lg hover:border-zinc-700 transition-colors"
          title="Quick View Resume"
        >
          <FileText className="w-3.5 h-3.5 text-cyan-400" />
          <span>Resume</span>
        </button>
        <button
          onClick={() => setIsEditOpen(true)}
          className="p-2.5 rounded-lg bg-zinc-900/90 text-zinc-400 hover:text-cyan-400 border border-zinc-800 backdrop-blur-md shadow-lg hover:border-zinc-700 transition-colors"
          title="Customize Profile & Links"
          aria-label="Customize profile links"
        >
          <Settings className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
}
