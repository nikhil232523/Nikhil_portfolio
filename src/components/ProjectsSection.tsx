import React, { useState, useEffect } from 'react';
import { Project, projectsData } from '../data/portfolioData';
import { Github, ExternalLink, Code2, ArrowUpRight, X, CheckCircle2, GitBranch, Star, RefreshCw, Plus, Trash2, Terminal, AlertCircle } from 'lucide-react';

interface ProjectsSectionProps {
  initialGithubUrl?: string;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ initialGithubUrl = 'https://github.com/nikhil-mk' }) => {
  // Extract handle from URL or default
  const extractHandle = (url?: string) => {
    if (!url || typeof url !== 'string') return 'nikhil-mk';
    try {
      const parts = url.trim().replace(/\/$/, '').split('/');
      return parts[parts.length - 1] || 'nikhil-mk';
    } catch {
      return 'nikhil-mk';
    }
  };

  const [githubUsername, setGithubUsername] = useState<string>(() => {
    return localStorage.getItem('nikhil_github_username') || extractHandle(initialGithubUrl);
  });

  const [isSyncing, setIsSyncing] = useState<boolean>(false);
  const [syncError, setSyncError] = useState<string | null>(null);
  const [syncSuccess, setSyncSuccess] = useState<string | null>(null);

  // Store repositories exclusively from the user (clearing out any legacy multi-project caches)
  const [repoProjects, setRepoProjects] = useState<Project[]>(() => {
    try {
      // Purge old 4 projects from previous sessions
      localStorage.removeItem('nikhil_repo_projects');
      const saved = localStorage.getItem('nikhil_fest_repo_only');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch {
      // fallback
    }
    // Default repository project: Exclusively Atria Fest & Event Management System!
    return projectsData.map(p => ({
      ...p,
      isFromGitHub: true,
      githubUrl: (p.githubUrl || '').replace('nikhil-mk', extractHandle(initialGithubUrl))
    }));
  });

  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isAddRepoModalOpen, setIsAddRepoModalOpen] = useState<boolean>(false);

  // Form for manually adding a repository
  const [newRepoTitle, setNewRepoTitle] = useState('');
  const [newRepoUrl, setNewRepoUrl] = useState('');
  const [newRepoCategory, setNewRepoCategory] = useState('Python');
  const [newRepoDesc, setNewRepoDesc] = useState('');

  // Fetch repositories from GitHub API
  const fetchGithubRepos = async (usernameToFetch: string) => {
    const cleanUsername = usernameToFetch.trim().replace(/^@/, '').replace(/https?:\/\/github\.com\//, '').replace(/\/$/, '');
    if (!cleanUsername) return;

    setIsSyncing(true);
    setSyncError(null);
    setSyncSuccess(null);

    try {
      const res = await fetch(`https://api.github.com/users/${encodeURIComponent(cleanUsername)}/repos?sort=updated&per_page=15`);
      
      if (!res.ok) {
        if (res.status === 404) {
          throw new Error(`GitHub user "${cleanUsername}" was not found. Please double check the username or add your repository link manually below.`);
        } else if (res.status === 403) {
          throw new Error('GitHub API rate limit reached. You can add your repository links directly using the "Add Repository" button.');
        } else {
          throw new Error(`Unable to fetch GitHub repositories (${res.status}).`);
        }
      }

      const repos = await res.json();

      if (!Array.isArray(repos) || repos.length === 0) {
        throw new Error(`No public repositories found for @${cleanUsername}. You can add private or college project repositories manually.`);
      }

      const mapped: Project[] = repos.map((repo: any) => {
        const lang = repo.language || 'Code';
        let category: 'Python' | 'Java' | 'DBMS' | 'DSA' | string = 'Other';
        if (lang.toLowerCase().includes('python')) category = 'Python';
        else if (lang.toLowerCase().includes('java')) category = 'Java';
        else if (lang.toLowerCase().includes('sql')) category = 'DBMS';
        else if (repo.name.toLowerCase().includes('dsa') || repo.name.toLowerCase().includes('algo')) category = 'DSA';
        else category = lang;

        return {
          id: `gh-${repo.id}`,
          title: repo.name.replace(/[-_]/g, ' ').replace(/\b\w/g, (c: string) => c.toUpperCase()),
          tagline: repo.description || `Repository by @${cleanUsername} written in ${lang}`,
          category: category,
          description: repo.description || `Source code repository for ${repo.name}. Maintained by @${cleanUsername} with primary language ${lang}.`,
          githubUrl: repo.html_url,
          liveUrl: repo.homepage || undefined,
          highlights: [
            `Primary Language: ${lang}`,
            `Stars: ${repo.stargazers_count} · Forks: ${repo.forks_count}`,
            `Default Branch: ${repo.default_branch}`,
            `Last Updated: ${new Date(repo.updated_at).toLocaleDateString()}`
          ],
          technologies: [lang, ...(repo.topics || []).slice(0, 3), 'Git'],
          metrics: `${repo.stargazers_count} stars · ${repo.forks_count} forks`,
          isFromGitHub: true,
          stars: repo.stargazers_count,
          forks: repo.forks_count,
          updatedAt: new Date(repo.updated_at).toLocaleDateString()
        };
      });

      setRepoProjects(mapped);
      setGithubUsername(cleanUsername);
      localStorage.setItem('nikhil_github_username', cleanUsername);
      localStorage.setItem('nikhil_repo_projects', JSON.stringify(mapped));
      setSyncSuccess(`Successfully imported ${mapped.length} public repositories from @${cleanUsername}!`);
      setTimeout(() => setSyncSuccess(null), 4000);

    } catch (err: any) {
      setSyncError(err.message || 'Error syncing repositories from GitHub.');
    } finally {
      setIsSyncing(false);
    }
  };

  const handleAddManualRepo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newRepoTitle || !newRepoUrl) return;

    const newProject: Project = {
      id: `manual-${Date.now()}`,
      title: newRepoTitle,
      tagline: `Personal repository in ${newRepoCategory}`,
      category: newRepoCategory,
      description: newRepoDesc || `Source code repository: ${newRepoTitle}`,
      githubUrl: newRepoUrl.startsWith('http') ? newRepoUrl : `https://${newRepoUrl}`,
      highlights: [
        `Verified Repository: ${newRepoUrl}`,
        `Stack: ${newRepoCategory}`,
        `Student Author: Nikhil M.K.`
      ],
      technologies: [newRepoCategory, 'Git', 'GitHub'],
      metrics: 'Verified Personal Repository',
      isFromGitHub: true
    };

    const updated = [newProject, ...repoProjects];
    setRepoProjects(updated);
    localStorage.setItem('nikhil_fest_repo_only', JSON.stringify(updated));
    setNewRepoTitle('');
    setNewRepoUrl('');
    setNewRepoDesc('');
    setIsAddRepoModalOpen(false);
  };

  const handleDeleteRepo = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const updated = repoProjects.filter(p => p.id !== id);
    setRepoProjects(updated);
    localStorage.setItem('nikhil_fest_repo_only', JSON.stringify(updated));
  };

  // Derive unique categories from active repositories
  const allCategories = ['All', ...Array.from(new Set(repoProjects.map(p => p.category)))];

  const filteredProjects = activeCategory === 'All'
    ? repoProjects
    : repoProjects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 border-b border-zinc-800/80 bg-[#08090d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header and Control Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-2">
              <Github className="w-3.5 h-3.5" />
              <span>Verified Repositories Only</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight text-balance">
              Projects Sourced Exclusively From My Repositories
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2">
              Every project below represents source code hosted in GitHub repositories, featuring real commits, schemas, and algorithm logic.
            </p>
          </div>

          {/* Quick Actions: Sync and Add */}
          <div className="flex flex-wrap items-center gap-2 self-start md:self-auto">
            <button
              onClick={() => setIsAddRepoModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-white bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-lg transition-colors"
            >
              <Plus className="w-3.5 h-3.5 text-cyan-400" />
              <span>Add Repository</span>
            </button>
          </div>
        </div>

        {/* GitHub Live Sync Bar */}
        <div className="mb-10 p-4 rounded-xl bg-[#0c0e16] border border-zinc-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-750 text-cyan-400 shrink-0">
              <GitBranch className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <span className="text-xs font-semibold text-white block truncate">
                GitHub Repository Source
              </span>
              <span className="text-[11px] text-zinc-400 block truncate">
                Syncing projects for GitHub handle: <strong className="text-cyan-300">@{githubUsername}</strong> ({repoProjects.length} repos active)
              </span>
            </div>
          </div>

          {/* GitHub Input and Fetch button */}
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Enter GitHub handle (e.g. nikhil-mk)"
              value={githubUsername}
              onChange={(e) => setGithubUsername(e.target.value)}
              className="px-3 py-1.5 text-xs bg-zinc-950 border border-zinc-750 rounded-lg text-white placeholder-zinc-500 focus:outline-hidden focus:border-cyan-400 font-mono w-48 sm:w-56"
            />
            <button
              onClick={() => fetchGithubRepos(githubUsername)}
              disabled={isSyncing}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-zinc-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors whitespace-nowrap disabled:opacity-50"
            >
              <RefreshCw className={`w-3 h-3 ${isSyncing ? 'animate-spin' : ''}`} />
              <span>{isSyncing ? 'Syncing...' : 'Sync GitHub'}</span>
            </button>
          </div>
        </div>

        {/* Notification alerts */}
        {syncSuccess && (
          <div className="mb-6 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>{syncSuccess}</span>
          </div>
        )}

        {syncError && (
          <div className="mb-6 p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{syncError}</span>
            </div>
            <button 
              onClick={() => setIsAddRepoModalOpen(true)}
              className="underline font-semibold hover:text-white shrink-0"
            >
              Add Repo Manually
            </button>
          </div>
        )}

        {/* Filter Tabs */}
        <div className="flex items-center gap-1.5 mb-8 overflow-x-auto pb-2">
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                activeCategory === cat
                  ? 'bg-zinc-800 text-white font-semibold border border-zinc-700 shadow-xs'
                  : 'text-zinc-400 hover:text-white bg-zinc-900/60 border border-zinc-800/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Repository Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700/90 transition-all duration-200 flex flex-col justify-between overflow-hidden shadow-lg"
            >
              {/* Card Header with Terminal / Git info */}
              <div className="p-6">
                
                {/* Top strip with unboxed metadata */}
                <div className="flex items-center justify-between text-xs text-zinc-400 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    <span className="font-semibold text-cyan-300">{project.category}</span>
                    <span aria-hidden="true" className="text-zinc-600">·</span>
                    <span className="text-zinc-400 text-[11px]">
                      Atria Institute of Technology
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {project.stars !== undefined && project.stars > 0 && (
                      <span className="flex items-center gap-1 text-[11px] text-amber-400 font-mono">
                        <Star className="w-3 h-3 fill-amber-400" />
                        <span>{project.stars}</span>
                      </span>
                    )}
                    <button
                      onClick={(e) => handleDeleteRepo(project.id, e)}
                      className="text-zinc-600 hover:text-rose-400 p-1 rounded transition-colors"
                      title="Remove from display"
                      aria-label="Remove repository"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Repository Title */}
                <h3 
                  onClick={() => setSelectedProject(project)}
                  className="text-xl font-bold text-white hover:text-cyan-300 cursor-pointer transition-colors"
                >
                  {project.title}
                </h3>

                <p className="text-xs text-zinc-400 mt-1 mb-3 font-medium">
                  {project.tagline}
                </p>

                <p className="text-sm text-zinc-300 leading-relaxed line-clamp-3 mb-4">
                  {project.description}
                </p>

                {/* Highlights */}
                {project.highlights && project.highlights.length > 0 && (
                  <div className="space-y-1.5 pt-2 border-t border-zinc-800/60">
                    {project.highlights.slice(0, 2).map((h, i) => (
                      <div key={i} className="text-xs text-zinc-400 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-zinc-500" />
                        <span className="truncate">{h}</span>
                      </div>
                    ))}
                  </div>
                )}

              </div>

              {/* Card Footer with Direct Repo Links */}
              <div className="px-6 py-4 bg-zinc-950/60 border-t border-zinc-800/80 flex items-center justify-between text-xs">
                
                <div className="flex flex-wrap items-center gap-1.5 text-zinc-400 font-mono text-[11px]">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="px-4 py-2 rounded-lg text-zinc-950 bg-cyan-400 hover:bg-cyan-300 font-semibold transition-colors text-xs"
                  >
                    View Project Details
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-md overflow-y-auto">
          <div 
            className="relative w-full max-w-2xl rounded-2xl bg-[#0c0e15] border border-zinc-800 shadow-2xl overflow-hidden my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-6 border-b border-zinc-800 flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs text-zinc-400 mb-1">
                  <span className="font-semibold text-cyan-400 font-mono">{selectedProject.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{selectedProject.metrics}</span>
                </div>
                <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                <p className="text-sm text-zinc-400 mt-1">{selectedProject.tagline}</p>
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
              
              <div>
                <h4 className="text-sm font-bold text-white mb-2">Description & Scope</h4>
                <p className="text-sm text-zinc-300 leading-relaxed">{selectedProject.description}</p>
              </div>

              {selectedProject.highlights && (
                <div>
                  <h4 className="text-sm font-bold text-white mb-3">Project Architecture & Features</h4>
                  <div className="space-y-2">
                    {selectedProject.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">Stack / Tags</h4>
                <div className="flex flex-wrap gap-2 text-xs text-zinc-300">
                  {selectedProject.technologies.map((t) => (
                    <span key={t} className="px-2.5 py-1 bg-zinc-900 border border-zinc-800 rounded-md">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-zinc-900/60 border-t border-zinc-800 flex items-center justify-between">
              <span className="text-xs text-zinc-500 font-medium">Atria Institute of Technology · Department Project</span>
              <button
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2 text-xs font-semibold text-zinc-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors"
              >
                Close Details
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Add Custom Repository Modal */}
      {isAddRepoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-md">
          <div 
            className="relative w-full max-w-lg rounded-2xl bg-[#0c0e15] border border-zinc-800 shadow-2xl p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-zinc-800">
              <div>
                <h3 className="text-lg font-bold text-white">Add Repository From Your GitHub</h3>
                <p className="text-xs text-zinc-400">Link your personal repository directly into your portfolio</p>
              </div>
              <button
                onClick={() => setIsAddRepoModalOpen(false)}
                className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddManualRepo} className="space-y-4 text-xs">
              <div>
                <label className="block text-zinc-300 font-medium mb-1">Repository Name / Title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Student-Attendance-DBMS or DSA-Algorithms"
                  value={newRepoTitle}
                  onChange={(e) => setNewRepoTitle(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-zinc-950 border border-zinc-800 text-white focus:outline-hidden focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-zinc-300 font-medium mb-1">GitHub Repository URL</label>
                <input
                  type="url"
                  required
                  placeholder="https://github.com/your-username/repo-name"
                  value={newRepoUrl}
                  onChange={(e) => setNewRepoUrl(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-zinc-950 border border-zinc-800 text-white focus:outline-hidden focus:border-cyan-400 font-mono"
                />
              </div>

              <div>
                <label className="block text-zinc-300 font-medium mb-1">Primary Skill / Technology</label>
                <select
                  value={newRepoCategory}
                  onChange={(e) => setNewRepoCategory(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-zinc-950 border border-zinc-800 text-white focus:outline-hidden focus:border-cyan-400"
                >
                  <option value="Python">Python</option>
                  <option value="Java">Java</option>
                  <option value="DBMS">DBMS / SQL</option>
                  <option value="DSA">DSA & Algorithms</option>
                  <option value="C / C++">C / C++</option>
                  <option value="Web / Fullstack">Web / Fullstack</option>
                </select>
              </div>

              <div>
                <label className="block text-zinc-300 font-medium mb-1">Repository Description</label>
                <textarea
                  rows={3}
                  placeholder="Brief description of the problem solved, architecture, or features..."
                  value={newRepoDesc}
                  onChange={(e) => setNewRepoDesc(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-zinc-950 border border-zinc-800 text-white focus:outline-hidden focus:border-cyan-400"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsAddRepoModalOpen(false)}
                  className="px-3.5 py-2 text-zinc-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 font-semibold text-zinc-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors"
                >
                  Save Repository
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </section>
  );
};
