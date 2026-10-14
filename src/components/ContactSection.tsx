import React, { useState } from 'react';
import { PortfolioData } from '../data/portfolioData';
import { Mail, Phone, MessageSquare, Linkedin, Github, Send, Copy, Check, ArrowRight } from 'lucide-react';

interface ContactSectionProps {
  data: PortfolioData;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ data }) => {
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [subject, setSubject] = useState('Internship Opportunity / Technical Inquiry');
  const [message, setMessage] = useState('');
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${data.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Hello Nikhil,\n\nName: ${senderName}\nEmail: ${senderEmail}\n\nMessage:\n${message}\n\nSent from your portfolio website.`
    )}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  const handleCopyMessage = () => {
    const textToCopy = `To: ${data.email}\nSubject: ${subject}\nFrom: ${senderName} (${senderEmail})\n\n${message}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 border-b border-zinc-800/80 bg-[#08090d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <p className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-2">Initiate Contact</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
            Let's Build Something Exceptional Together
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2 leading-relaxed">
            I am actively seeking software engineering internships, open-source collaborations, and developer opportunities. Feel free to reach out directly via email, phone, WhatsApp, or LinkedIn.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Connection Channels */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <a
              href={`mailto:${data.email}`}
              className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-cyan-500/40 transition-colors flex items-start gap-4 block group"
            >
              <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-zinc-400 block font-medium">Direct Email</span>
                <span className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors block mt-0.5 break-all">
                  {data.email}
                </span>
                <span className="text-xs text-zinc-500 mt-1 block">Quickest response time</span>
              </div>
            </a>

            {/* Mobile / Phone Card */}
            <a
              href={`tel:${(data?.phone || '7204015416').replace(/\s+/g, '')}`}
              className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-emerald-500/40 transition-colors flex items-start gap-4 block group"
            >
              <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-zinc-400 block font-medium">Phone & WhatsApp</span>
                <span className="text-sm font-semibold text-white group-hover:text-emerald-300 transition-colors block mt-0.5">
                  {data.phone}
                </span>
                <span className="text-xs text-zinc-500 mt-1 block">Available for calls & messaging</span>
              </div>
            </a>

            {/* LinkedIn Profile Card */}
            <a
              href={data.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-sky-500/40 transition-colors flex items-start gap-4 block group"
            >
              <div className="p-2.5 rounded-lg bg-sky-500/10 text-sky-400 shrink-0">
                <Linkedin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-zinc-400 block font-medium">Professional Network</span>
                <span className="text-sm font-semibold text-white group-hover:text-sky-300 transition-colors block mt-0.5">
                  Connect on LinkedIn
                </span>
                <span className="text-xs text-zinc-500 mt-1 block">{data.linkedInUrl}</span>
              </div>
            </a>

            {/* GitHub Profile Card */}
            <a
              href={data.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-600 transition-colors flex items-start gap-4 block group"
            >
              <div className="p-2.5 rounded-lg bg-zinc-800 text-zinc-300 shrink-0">
                <Github className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-zinc-400 block font-medium">Code Repositories</span>
                <span className="text-sm font-semibold text-white group-hover:text-zinc-200 transition-colors block mt-0.5">
                  Explore GitHub
                </span>
                <span className="text-xs text-zinc-500 mt-1 block">{data.githubUrl}</span>
              </div>
            </a>

          </div>

          {/* Right Column: Interactive Quick Message Composer */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl p-6 sm:p-8 bg-[#0d0f17] border border-zinc-800 shadow-2xl">
              <h3 className="text-lg font-bold text-white mb-1">Direct Message Form</h3>
              <p className="text-xs text-zinc-400 mb-6">
                Compose your inquiry below; it directly launches your native email client or lets you copy formatted text.
              </p>

              <form onSubmit={handleSendEmail} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe / Hiring Manager"
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-hidden focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">Your Email</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. recruiter@company.com"
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-hidden focus:border-cyan-400 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1.5">Subject</label>
                  <input
                    type="text"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-hidden focus:border-cyan-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1.5">Message / Details</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe the opportunity, role requirements, or project details..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-hidden focus:border-cyan-400 transition-colors"
                  />
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-zinc-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors shadow-xs"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send via Email Client</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleCopyMessage}
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-zinc-300 hover:text-white bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-lg transition-colors"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied Message' : 'Copy Message Text'}</span>
                  </button>
                </div>

                {submitted && (
                  <p className="text-xs text-emerald-400 pt-2 font-medium">
                    ✓ Email client prompted! You can also reach Nikhil directly at {data.email}.
                  </p>
                )}
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
