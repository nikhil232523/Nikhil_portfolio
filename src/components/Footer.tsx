import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { PortfolioData } from '../data/portfolioData';

interface FooterProps {
  data: PortfolioData;
  onOpenResume: () => void;
  onOpenCustomize: () => void;
}

export const Footer: React.FC<FooterProps> = ({ data, onOpenResume, onOpenCustomize }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050608] border-t border-zinc-900 py-12 text-xs text-zinc-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-zinc-900">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-xs bg-cyan-400" />
            <span className="font-bold text-white text-sm tracking-tight">{data.fullName}</span>
            <span className="text-zinc-600">·</span>
            <span className="text-zinc-400">Atria Institute of Technology, Bangalore</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#about"
              className="hover:text-zinc-300 transition-colors"
            >
              About
            </a>
            <a
              href="#skills"
              className="hover:text-zinc-300 transition-colors"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="hover:text-zinc-300 transition-colors"
            >
              Projects
            </a>
            <a
              href="#languages"
              className="hover:text-zinc-300 transition-colors"
            >
              Languages
            </a>
            <button
              onClick={onOpenResume}
              className="hover:text-zinc-300 transition-colors"
            >
              Resume
            </button>
            <button
              onClick={onOpenCustomize}
              className="text-zinc-500 hover:text-cyan-400 transition-colors"
            >
              Edit Links
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} {data.fullName}. Information Science & Engineering · VTU.</p>
          
          <div className="flex items-center gap-4">
            <a
              href={data.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-300 transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={data.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-300 transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${data.email}`}
              className="hover:text-zinc-300 transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors ml-2"
              title="Scroll to Top"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
