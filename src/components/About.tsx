import React from 'react';
import { Quote, User, GraduationCap, MapPin, Target } from 'lucide-react';
import { CAREER_OBJECTIVE, CANDIDATE_NAME, CANDIDATE_LOCATION } from '../data';

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#09090b] relative border-b border-zinc-900/60 font-sans">
      {/* Visual background gradient accents */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/3 left-10 w-96 h-96 bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-100 font-display">
              About Me
            </h2>
          </div>
          <div className="h-0.5 bg-zinc-850 flex-1 mx-8 hidden md:block" />
          
        </div>

        {/* Narrative columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Story & Biography */}
          <div className="col-span-1 lg:col-span-7 space-y-6">
            <div className="p-8 rounded-2xl border border-zinc-850 bg-gradient-to-br from-zinc-900/20 to-zinc-950/40 relative">
              <Quote className="absolute top-6 right-8 w-12 h-12 text-zinc-800/40 pointer-events-none" />
              <h3 className="text-lg font-bold text-zinc-200 mb-4 font-display flex items-center gap-2">
                <Target className="w-5 h-5 text-purple-400" />
                Career Objective
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed font-sans">
                {CAREER_OBJECTIVE}
              </p>
            </div>
          </div>

          {/* Quick Profile Panel */}
          <div className="col-span-1 lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl border border-zinc-850 bg-zinc-900/10 glass-card">
              <h3 className="text-sm font-bold text-zinc-100 uppercase tracking-widest font-mono mb-6 flex items-center gap-2">
                <User className="w-4 h-4 text-purple-400" />
                Resume Quick Facts
              </h3>

              <div className="space-y-4 text-xs font-sans">
                <div className="flex justify-between py-2 border-b border-zinc-900">
                  <span className="text-zinc-500 font-mono">FULL NAME</span>
                  <span className="text-zinc-200 font-medium">{CANDIDATE_NAME}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-zinc-900">
                  <span className="text-zinc-500 font-mono">EDUCATION</span>
                  <span className="text-zinc-200 font-medium flex items-center gap-1">
                    <GraduationCap className="w-3.5 h-3.5 text-purple-400" />
                    B.Tech CSE (AI) (2022 - 2026)
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b border-zinc-900">
                  <span className="text-zinc-500 font-mono">LOCATION</span>
                  <span className="text-zinc-200 font-medium flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-purple-400" />
                    {CANDIDATE_LOCATION}
                  </span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-zinc-500 font-mono">TARGET ROLES</span>
                  <span className="text-zinc-200 font-medium">Software Developer</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
