import React from 'react';
import { Quote, Target } from 'lucide-react';
import { CAREER_OBJECTIVE } from '../data';

export default function About() {
  return (
    <section id="about" className="py-14 bg-[#09090b] relative border-b border-zinc-900/60 font-sans">
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

        {/* Narrative layout */}
        <div className="max-w-5xl">
          
          <div className="space-y-6">
            <div className="p-10 md:p-12 rounded-2xl border border-zinc-850 bg-gradient-to-br from-zinc-900/15 to-zinc-950/40 relative shadow-xl shadow-purple-950/5">
              <Quote className="absolute top-8 right-10 w-16 h-16 text-zinc-800/20 pointer-events-none" />
              <h3 className="text-xl font-bold text-zinc-100 mb-6 font-display flex items-center gap-2.5">
                <Target className="w-6 h-6 text-purple-400 animate-pulse" />
                Career Objective
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-zinc-350 leading-relaxed font-sans">
                {CAREER_OBJECTIVE}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
