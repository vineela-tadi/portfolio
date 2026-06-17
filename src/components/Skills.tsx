import React, { useState } from 'react';
import { SKILLS_DATA } from '../data';
import { 
  Terminal, Code2, Globe, Palette, FileJson, 
  Flame, Network, Database, GitBranch, Github, 
  Laptop, Binary, Bug, Puzzle, Sparkles 
} from 'lucide-react';

const iconMap: Record<string, React.ComponentType<any>> = {
  FileCode2: Terminal,
  Code2: Code2,
  Html5: Globe,
  Palette: Palette,
  FileJson: FileJson,
  Flame: Flame,
  Network: Network,
  Database: Database,
  DatabaseCircuit: Database,
  GitBranch: GitBranch,
  Github: Github,
  Laptop: Laptop,
  Binary: Binary,
  Bug: Bug,
  Puzzle: Puzzle,
  Sparkles: Sparkles
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState<'All' | 'Artificial Intelligence' | 'Frontend' | 'Backend' | 'Tools'>('All');

  const tabs: Array<'All' | 'Artificial Intelligence' | 'Frontend' | 'Backend' | 'Tools'> = [
    'All',
    'Artificial Intelligence',
    'Frontend',
    'Backend',
    'Tools'
  ];

  const filteredSkills = activeTab === 'All' 
    ? SKILLS_DATA 
    : SKILLS_DATA.filter(skill => skill.category === activeTab);

  const getCategoryLabel = (cat: string) => {
    if (cat === 'Artificial Intelligence') return 'Languages & AIML';
    return cat;
  };

  return (
    <section id="skills" className="py-24 bg-[#060608] relative border-b border-zinc-900/60 font-sans">
      {/* Visual background glow */}
      <div className="absolute top-1/4 right-1/4 translate-x-12 w-80 h-80 bg-purple-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-100 font-display">
              My Technical Skills
            </h2>
          </div>
          <p className="text-xs text-zinc-400 max-w-xs leading-relaxed">
            A precise outline of my software capability profile, covering programming languages, web stacks, and databases.
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap gap-2.5 mb-10 pb-2 border-b border-zinc-900">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all border ${
                activeTab === tab 
                  ? 'bg-purple-950/40 border-purple-500/40 text-purple-300 shadow-md shadow-purple-950/20' 
                  : 'bg-zinc-900/40 border-zinc-850 text-zinc-400 hover:text-zinc-200'
              }`}
            >
              {tab === 'Artificial Intelligence' ? 'Languages' : tab}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredSkills.map((skill, index) => {
            const IconComponent = iconMap[skill.icon] || Sparkles;

            return (
              <div 
                key={index} 
                className="p-5 rounded-xl bg-zinc-900/40 border border-zinc-850 hover:border-zinc-800 hover:bg-zinc-900/60 transition-all group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Skill header */}
                  <div className="flex items-start justify-between">
                    <div className="p-2.5 bg-zinc-950 border border-zinc-850 rounded-xl group-hover:border-purple-500/20 group-hover:bg-purple-950/10 text-zinc-400 group-hover:text-purple-400 transition-all">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-zinc-500 group-hover:text-purple-400 transition-colors">
                      {skill.level}%
                    </span>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-zinc-200 font-display group-hover:text-white transition-colors">
                      {skill.name}
                    </h3>
                    <span className="text-[9px] font-mono font-bold text-zinc-500 uppercase tracking-widest mt-1 block">
                      {getCategoryLabel(skill.category)}
                    </span>
                  </div>
                </div>

                {/* Progress Visualizer */}
                <div className="h-1.5 w-full bg-zinc-950 rounded-full mt-5 overflow-hidden border border-zinc-900">
                  <div 
                    className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
