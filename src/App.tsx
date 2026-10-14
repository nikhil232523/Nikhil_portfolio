import React, { useState, Component, ErrorInfo, ReactNode } from 'react';
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
import { Settings, FileText, RotateCcw } from 'lucide-react';
import { safeStorage } from './utils/storage';

interface ErrorBoundaryProps {
  children: ReactNode;
  onReset: () => void;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

class PortfolioErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Portfolio caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#08090d] text-zinc-100 flex items-center justify-center p-6 text-center">
          <div className="max-w-md p-8 rounded-2xl bg-[#0c0e16] border border-zinc-800 shadow-2xl space-y-4">
            <h2 className="text-xl font-bold text-white">Portfolio View Restored</h2>
            <p className="text-sm text-zinc-400">
              A temporary rendering issue occurred. Click below to reload your verified profile.
            </p>
            <button
              onClick={() => {
                this.props.onReset();
                this.setState({ hasError: false });
                window.location.reload();
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cyan-400 text-zinc-950 font-semibold text-xs hover:bg-cyan-300 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Reload Clean Profile</span>
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function App() {
  const [portfolioData, setPortfolioData] = useState<PortfolioData>(() => {
    const saved = safeStorage.getItem('nikhil_portfolio_data_v2');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed && typeof parsed === 'object') {
          return { ...initialPortfolioData, ...parsed };
        }
      } catch {
        // Fallback
      }
    }
    return initialPortfolioData;
  });

  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);

  const handleSaveData = (updated: PortfolioData) => {
    const merged = { ...initialPortfolioData, ...updated };
    setPortfolioData(merged);
    safeStorage.setItem('nikhil_portfolio_data_v2', JSON.stringify(merged));
  };

  const handleResetData = () => {
    setPortfolioData(initialPortfolioData);
    safeStorage.removeItem('nikhil_portfolio_data');
    safeStorage.removeItem('nikhil_portfolio_data_v2');
    safeStorage.removeItem('nikhil_repo_projects');
    safeStorage.removeItem('nikhil_fest_repo_only');
  };

  return (
    <PortfolioErrorBoundary onReset={handleResetData}>
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

          {/* Skills (4 Core Pillars) */}
          <SkillsSection />

          {/* Projects Sourced Exclusively from Verified Repository */}
          <ProjectsSection initialGithubUrl={portfolioData.githubUrl} />

          {/* Multilingual Competency Matrix */}
          <LanguagesSection />

          {/* Education Timeline (Atria IT, CMR PU College, K.V. MEG Centre) */}
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

        {/* Floating Fast-Access Controls */}
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
    </PortfolioErrorBoundary>
  );
}
