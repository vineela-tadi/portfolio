import React, { useState, useEffect } from 'react';
import { Github, Star, GitFork, AlertCircle, RefreshCw, CheckCircle2, Cpu, Globe } from 'lucide-react';
import { PROJECTS_DATA } from '../data';

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  created_at: string;
  homepage?: string | null;
}

const STATIC_FALLBACKS: GitHubRepo[] = [
  {
    id: 1,
    name: 'Building-Plan',
    description: 'Apna Ghar is an AI-powered virtual architect that generates customized house designs, interior and exterior concepts, Vastu-based layouts, and construction cost estimates.',
    html_url: 'https://github.com/vineela-tadi/Building-Plan',
    language: 'TypeScript',
    stargazers_count: 2,
    forks_count: 1,
    created_at: '2025-11-10T00:00:00Z',
    homepage: 'https://building-plan-nine.vercel.app'
  },
  {
    id: 2,
    name: 'Ecommerce-Zentrova',
    description: 'Zentrova is a modern e-commerce platform that offers electronics, fashion, and lifestyle products with a smooth checkout flow.',
    html_url: 'https://github.com/vineela-tadi/Ecommerce-Zentrova',
    language: 'JavaScript',
    stargazers_count: 3,
    forks_count: 0,
    created_at: '2025-12-01T00:00:00Z',
    homepage: 'https://ecommerce-zentrova.vercel.app'
  },
  {
    id: 3,
    name: 'BeautyConnect---project1',
    description: 'A modern and responsive beauty salon website featuring beauty packages, pricing plans, and booking reservations.',
    html_url: 'https://github.com/vineela-tadi/BeautyConnect---project1',
    language: 'HTML',
    stargazers_count: 1,
    forks_count: 0,
    created_at: '2025-10-15T00:00:00Z',
    homepage: 'https://beauty-connect-project1.vercel.app'
  }
];

export default function Projects() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isFallback, setIsFallback] = useState<boolean>(false);

  const fetchRepositories = async () => {
    setLoading(true);
    setError(null);
    setIsFallback(false);
    try {
      const response = await fetch('https://api.github.com/users/vineela-tadi/repos');
      if (!response.ok) {
        throw new Error(`Failed to load: ${response.statusText}`);
      }
      const data: GitHubRepo[] = await response.json();
      
      // Filter out 'Bhimera-tasks' strictly (case-insensitive)
      const filtered = data.filter(repo => repo.name.toLowerCase() !== 'bhimera-tasks');
      
      setRepos(filtered);
    } catch (err: any) {
      console.warn('GitHub API rate limit or error, using high-quality static configurations:', err);
      // Fail gracefully to fallback mapping
      setRepos(STATIC_FALLBACKS);
      setIsFallback(true);
      setError('Note: Showing offline fallback projects due to GitHub API limit.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRepositories();
  }, []);

  return (
    <section id="projects" className="py-24 bg-[#09090b] relative border-b border-zinc-900/60 font-sans">
      {/* Subtle Ambient Background Glows */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            
            <div className="flex items-center gap-2.5">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-100 font-display">
                Technical Projects
              </h2>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-purple-300 border border-zinc-800 uppercase">
                Github API
              </span>
            </div>
           
          </div>

          <button 
            onClick={fetchRepositories}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs text-zinc-400 hover:text-white transition-all hover:border-zinc-700/80"
            title="Reload from GitHub API"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin text-purple-400' : ''}`} />
            Refresh Feed
          </button>
        </div>

        {/* Notice of fallback */}
        {isFallback && (
          <div className="mb-8 p-3.5 rounded-xl bg-purple-950/20 border border-purple-900/30 text-purple-300 text-xs flex items-center gap-2.5 max-w-2xl mx-auto">
            <AlertCircle className="w-4 h-4 text-purple-400 shrink-0 animate-bounce" />
            <span>Showing verified active project cards from <strong className="text-zinc-200">vineela-tadi</strong>. GitHub feed is currently served from fallback cached states.</span>
          </div>
        )}

        {/* Loading bone structures */}
        {loading ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[1, 2].map((n) => (
              <div key={n} className="p-8 rounded-2xl bg-zinc-900/10 border border-zinc-850/60 animate-pulse space-y-6">
                <div className="h-5 bg-zinc-800 rounded-md w-1/3" />
                <div className="space-y-2">
                  <div className="h-3.5 bg-zinc-800 rounded-md w-full" />
                  <div className="h-3.5 bg-zinc-800 rounded-md w-4/5" />
                </div>
                <div className="flex gap-2">
                  <div className="h-4 bg-zinc-850 rounded w-12" />
                  <div className="h-4 bg-zinc-850 rounded w-16" />
                </div>
                <div className="h-10 bg-zinc-850 rounded-xl w-full pt-4" />
              </div>
            ))}
          </div>
        ) : (
          /* Projects Cards Grid */
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {repos.length === 0 ? (
              <div className="col-span-full text-center py-16 space-y-4">
                <p className="text-zinc-500 text-sm font-mono">No repositories returned from GitHub</p>
              </div>
            ) : (
              repos.map((repo) => {
                // Find matching project in our high quality data to display specific rich content ("matter")
                const matchedMeta = PROJECTS_DATA.find(p => 
                  p.githubUrl?.toLowerCase().includes(repo.name.toLowerCase()) || 
                  p.id.toLowerCase() === repo.name.toLowerCase() ||
                  repo.name.toLowerCase().includes(p.id.toLowerCase())
                );

                return (
                  <div 
                    key={repo.id} 
                    className="p-8 rounded-2xl bg-zinc-900/10 hover:bg-zinc-900/30 border border-zinc-850 hover:border-purple-500/45 flex flex-col justify-between transition-all duration-300 group hover:shadow-xl hover:shadow-purple-950/5 relative"
                  >
                    <div className="space-y-6">
                      {/* Top Row: Title, language & Github Details */}
                      <div className="flex justify-between items-start gap-4">
                        <div className="space-y-1">
                          <span className="text-[10px] font-mono tracking-wider font-bold text-purple-400 uppercase block">
                            GitHub Repository
                          </span>
                          <h3 className="text-xl font-extrabold text-zinc-100 font-display group-hover:text-purple-350 transition-colors break-words">
                            {matchedMeta ? matchedMeta.title : repo.name}
                          </h3>
                        </div>
                        
                        {(matchedMeta?.techStack?.[0] || repo.language) && (
                          <span className="text-[9px] font-mono font-bold bg-zinc-950 border border-zinc-900 text-purple-300 px-2.5 py-1 rounded shrink-0">
                            {matchedMeta?.techStack?.[0] || repo.language}
                          </span>
                        )}
                      </div>

                      {/* Brief Description */}
                      <p className="text-xs text-zinc-400 leading-relaxed font-sans mt-2">
                        {matchedMeta ? matchedMeta.description : (repo.description || "Computer Science study repository with dynamic logic processing, modular architecture, and structured layouts.")}
                      </p>

                      {/* Problem Solved info if matched */}
                      {matchedMeta?.problemSolved && (
                        <div className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-900 space-y-1.5">
                          <div className="flex items-center gap-1.5 text-[10px] uppercase font-mono font-bold text-purple-400">
                            <Cpu className="w-3.5 h-3.5" />
                            Core Problem Solved
                          </div>
                          <p className="text-[11px] text-zinc-350 leading-relaxed font-sans">
                            {matchedMeta.problemSolved}
                          </p>
                        </div>
                      )}

                      {/* Key Features bullet points if matches data */}
                      {matchedMeta?.keyFeatures && (
                        <div className="space-y-2.5">
                          <span className="text-[10px] uppercase font-mono font-bold text-zinc-500 tracking-wider block">
                            Key Features & Capabilities
                          </span>
                          <ul className="space-y-2">
                            {matchedMeta.keyFeatures.map((feat, fidx) => (
                              <li key={fidx} className="flex gap-2.5 items-start text-xs text-zinc-300 leading-relaxed">
                                <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                                <span>{feat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Tech stack badges */}
                      {matchedMeta?.techStack && (
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {matchedMeta.techStack.map((tech) => (
                            <span key={tech} className="text-[9px] font-mono text-zinc-400 bg-zinc-950 border border-zinc-900/60 px-2 py-0.5 rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Stars, forks and timestamps from live API */}
                      <div className="flex gap-4 text-[10px] font-mono text-zinc-500 pt-1 border-t border-zinc-900/40">
                        <span className="flex items-center gap-1 hover:text-purple-400 cursor-default">
                          <Star className="w-3.5 h-3.5 text-purple-400" />
                          {repo.stargazers_count} stars
                        </span>
                        <span className="flex items-center gap-1 hover:text-purple-400 cursor-default">
                          <GitFork className="w-3.5 h-3.5 text-zinc-500" />
                          {repo.forks_count} forks
                        </span>
                      </div>
                    </div>

                    {/* View on GitHub & Live Website Buttons */}
                    <div className="pt-6 border-t border-zinc-900/60 mt-6 grid grid-cols-2 gap-3">
                      <a 
                        href={repo.html_url} 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white transition-all text-xs font-semibold font-mono cursor-pointer"
                        title="Open Github repository"
                      >
                        <Github className="w-4 h-4 text-purple-400 group-hover:scale-105 transition-transform" />
                        Code Base
                      </a>
                      <a 
                        href={matchedMeta?.liveUrl || repo.homepage || `https://vineela-tadi.github.io/${repo.name}`} 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-gradient-to-r from-purple-950/40 to-blue-950/40 hover:from-purple-900/40 hover:to-blue-900/40 border border-purple-550/35 hover:border-purple-450 text-zinc-200 hover:text-white transition-all text-xs font-semibold font-mono cursor-pointer"
                        title="Visit deployed web application"
                      >
                        <Globe className="w-4 h-4 text-blue-400 group-hover:scale-105 transition-transform" />
                        Live Web ↗
                      </a>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        )}

      </div>
    </section>
  );
}
