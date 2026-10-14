import React, { useState } from 'react';
import { Menu, X, FileText, Linkedin, Github, PhoneCall, Mail } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenCustomize: () => void;
  phone: string;
  email: string;
  linkedInUrl: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenResume,
  onOpenCustomize,
  phone,
  email,
  linkedInUrl
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Languages', href: '#languages' },
    { label: 'Academics', href: '#academics' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#08090d]/85 backdrop-blur-md border-b border-zinc-800/80 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar Contract: 3 zones separated by gap-8 */}
        <div className="flex items-center justify-between gap-8 h-16">
          
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0 hover:text-cyan-400 transition-colors flex items-center gap-2"
          >
            <span className="w-2.5 h-2.5 bg-cyan-400 rounded-xs"></span>
            <span>Nikhil M.K.</span>
          </a>

          {/* Zone 2: Concise single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-white transition-colors whitespace-nowrap shrink-0 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-cyan-400 hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary action + quick connection */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white p-2 transition-colors rounded-lg hover:bg-zinc-800/60"
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-zinc-800 hover:bg-zinc-700 border border-zinc-700/80 rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-xs"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-400" />
              <span>Resume (PDF)</span>
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-zinc-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-xs"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Get in Touch</span>
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenResume}
              className="px-3 py-1.5 text-xs font-medium text-white bg-zinc-800 border border-zinc-700 rounded-md"
            >
              Resume
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-400 hover:text-white focus:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-800 bg-[#0c0e14] px-4 pt-3 pb-5 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-800/50 rounded-lg"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-zinc-800 flex flex-col gap-2">
            <a
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 text-sm text-zinc-300 hover:text-white"
            >
              <Linkedin className="w-4 h-4 text-cyan-400" />
              <span>View LinkedIn Profile</span>
            </a>
            <a
              href={`tel:${phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-2 px-3 py-2 text-sm text-zinc-300 hover:text-white"
            >
              <PhoneCall className="w-4 h-4 text-emerald-400" />
              <span>{phone}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCustomize();
              }}
              className="text-left px-3 py-1.5 text-xs text-zinc-500 hover:text-zinc-300"
            >
              Customize Links & Details
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
