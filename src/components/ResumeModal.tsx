import React from 'react';
import { PortfolioData } from '../data/portfolioData';
import { X, Printer, Download, Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: PortfolioData;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-zinc-950/85 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-4xl bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden my-6 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="px-6 py-3.5 bg-zinc-950 border-b border-zinc-800 flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-cyan-400">ATS-Formatted Curriculum Vitae</span>
            <span className="text-zinc-600">·</span>
            <span className="text-xs text-zinc-400">Ready for PDF Export</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-zinc-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors"
              aria-label="Close resume viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Body (Styled cleanly for print and screen) */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-white text-zinc-900 font-sans print:p-0 print:m-0 print:text-black">
          
          {/* Header */}
          <div className="border-b-2 border-zinc-900 pb-4 mb-5 text-center">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 uppercase">{data.fullName}</h1>
            <p className="text-sm font-semibold text-zinc-700 mt-1">Information Science & Engineering Student · Atria Institute of Technology</p>
            
            <div className="mt-2.5 flex flex-wrap justify-center items-center gap-y-1 gap-x-3 text-xs text-zinc-700">
              <span>{data.phone}</span>
              <span>•</span>
              <a href={`mailto:${data.email}`} className="text-zinc-900 underline">{data.email}</a>
              <span>•</span>
              <span>{data.location}</span>
              <span>•</span>
              <a href={data.linkedInUrl} target="_blank" rel="noreferrer" className="text-blue-700 underline">LinkedIn</a>
              <span>•</span>
              <a href={data.githubUrl} target="_blank" rel="noreferrer" className="text-blue-700 underline">GitHub</a>
            </div>
          </div>

          {/* Education */}
          <div className="mb-5">
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 border-b border-zinc-300 pb-1 mb-2">
              Education
            </h2>
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                <div>
                  <h3 className="text-sm font-bold text-zinc-950">Atria Institute of Technology (Affiliated to VTU, AICTE Approved)</h3>
                  <p className="text-xs text-zinc-700">Bachelor of Engineering (B.E.) in Information Science & Engineering (ISE) · 5th Semester</p>
                </div>
                <div className="text-xs sm:text-right text-zinc-600 font-medium">
                  <div>Bengaluru, Karnataka</div>
                  <div>2023 – 2027</div>
                </div>
              </div>
              <div className="text-xs text-zinc-700">
                <span className="font-semibold">Core Coursework:</span> Data Structures & Algorithms (DSA), Database Management Systems (DBMS), Object-Oriented Programming (Java/Python), Operating Systems, Computer Networks, Software Engineering.
              </div>

              <div className="border-t border-zinc-200 pt-2 flex flex-col sm:flex-row sm:items-baseline justify-between">
                <div>
                  <h3 className="text-sm font-bold text-zinc-950">CMR PU College</h3>
                  <p className="text-xs text-zinc-700">Pre-University Education (11th & 12th) · Science (PCMC) · Distinction</p>
                </div>
                <div className="text-xs sm:text-right text-zinc-600 font-medium">
                  <div>Bengaluru, Karnataka</div>
                  <div>2021 – 2023</div>
                </div>
              </div>

              <div className="border-t border-zinc-200 pt-2 flex flex-col sm:flex-row sm:items-baseline justify-between">
                <div>
                  <h3 className="text-sm font-bold text-zinc-950">Kendriya Vidyalaya (K.V.), MEG & Centre</h3>
                  <p className="text-xs text-zinc-700">Secondary Schooling (Class 10 - CBSE) · Distinction</p>
                </div>
                <div className="text-xs sm:text-right text-zinc-600 font-medium">
                  <div>St. John's Church Rd, Bengaluru</div>
                  <div>Completed 2021</div>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="mb-5">
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 border-b border-zinc-300 pb-1 mb-2">
              Technical Core Competencies
            </h2>
            <div className="space-y-1.5 text-xs text-zinc-800">
              <p><strong className="text-zinc-950 font-semibold">Programming Languages:</strong> Python, Java, C, C++, SQL, JavaScript</p>
              <p><strong className="text-zinc-950 font-semibold">Data Structures & Algorithms:</strong> Binary Trees, Graphs (Dijkstra, BFS/DFS), Heaps, Linked Lists, Dynamic Programming, Complexity Analysis</p>
              <p><strong className="text-zinc-950 font-semibold">Database Management Systems (DBMS):</strong> MySQL, PostgreSQL, Relational Normalization (1NF–BCNF), Index Optimization, ACID Properties, JDBC</p>
              <p><strong className="text-zinc-950 font-semibold">Tools & Environments:</strong> Git, GitHub, Linux/Bash, VS Code, IntelliJ IDEA, Eclipse, Postman</p>
            </div>
          </div>

          {/* Projects */}
          <div className="mb-5">
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 border-b border-zinc-300 pb-1 mb-2">
              Featured Technical Projects
            </h2>
            
            <div className="space-y-3.5 text-xs">
              
              <div>
                <div className="flex justify-between items-baseline font-bold text-zinc-950">
                  <span>Atria Fest & Event Management System</span>
                  <span className="text-zinc-600 font-normal">Python / Java, MySQL, Relational Database</span>
                </div>
                <ul className="list-disc list-inside text-zinc-700 mt-1.5 space-y-1">
                  <li>Engineered complete event and fest coordination architecture for Atria Institute of Technology, handling participant registrations, coordinator scheduling, and real-time attendance.</li>
                  <li>Architected a normalized relational database schema with foreign key constraints, guaranteeing transaction atomicity (ACID) and eliminating double-booking schedule conflicts.</li>
                  <li>Implemented role-based administrative workflows for event heads, student volunteers, and faculty coordinators for scoring, ticketing, and reporting.</li>
                </ul>
              </div>

            </div>
          </div>

          {/* Languages */}
          <div className="mb-5">
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 border-b border-zinc-300 pb-1 mb-2">
              Languages & Communication
            </h2>
            <div className="text-xs text-zinc-800 space-y-1">
              <p><strong className="text-zinc-950 font-semibold">English & Hindi:</strong> Full professional proficiency (Speak, Understand, Read, Write).</p>
              <p><strong className="text-zinc-950 font-semibold">Malayalam:</strong> Native mother tongue fluency (Speak, Understand).</p>
              <p><strong className="text-zinc-950 font-semibold">Tamil & Kannada:</strong> Conversational proficiency (Speak, Understand) for regional and tech community interaction.</p>
            </div>
          </div>

          {/* Certifications & Extracurriculars */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 border-b border-zinc-300 pb-1 mb-2">
              Certifications & Accreditations
            </h2>
            <div className="text-xs text-zinc-800 space-y-1">
              <p>• HackerRank Problem Solving & Python Verified Skill Badges</p>
              <p>• Java Object-Oriented Programming & JDBC VTU Laboratory Distinction</p>
              <p>• LeetCode Problem Solving (Arrays, Trees, Graphs, Search Algorithms)</p>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-zinc-950 border-t border-zinc-800 flex items-center justify-between">
          <span className="text-xs text-zinc-500">Press Print to generate a clean 1-page PDF</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold text-zinc-300 hover:text-white bg-zinc-800 rounded-lg"
          >
            Close Viewer
          </button>
        </div>

      </div>
    </div>
  );
};
