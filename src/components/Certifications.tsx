import React from 'react';
import { CERTIFICATIONS_DATA, ACHIEVEMENTS_DATA } from '../data';
import { Award, Trophy, Sparkles } from 'lucide-react';

export default function Certifications() {
  return (
    <section id="certifications" className="py-14 bg-[#09090b] relative border-b border-zinc-900/60 font-sans">
      {/* Visual background glows */}
      <div className="absolute top-1/4 left-1/4 translate-x-12 w-80 h-80 bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 -translate-x-12 w-80 h-80 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-100 font-display">
              Endorsements & Achievements
            </h2>
          </div>
          <div className="h-0.5 bg-zinc-850 flex-1 mx-8 hidden md:block" />
          
        </div>

        {/* Unified 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Certification Cards */}
          {CERTIFICATIONS_DATA.map((badge, idx) => (
            <a 
              key={idx} 
              href={badge.credentialUrl}
              target="_blank"
              rel="noreferrer"
              className="p-5 rounded-2xl border border-zinc-855 bg-zinc-900/10 hover:border-purple-500/40 hover:bg-zinc-900/30 transition-all flex flex-col justify-between group cursor-pointer"
            >
              <div className="space-y-4 h-full flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start gap-4 mb-3">
                    <span className="text-[8.5px] font-mono font-bold uppercase tracking-widest px-2 py-0.5 border rounded text-purple-300 bg-purple-950/35 border-purple-900/40 group-hover:border-purple-450 transition-colors">
                      {badge.badgeType}
                    </span>
                    <span className="text-[9px] font-mono text-zinc-500 group-hover:text-zinc-400">
                      {badge.date}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-zinc-200 font-display flex items-center gap-1.5 pt-0.5 group-hover:text-purple-450 transition-colors">
                    <Award className="w-4 h-4 text-purple-400 shrink-0 group-hover:scale-110 transition-transform" />
                    {badge.title}
                  </h4>
                  <p className="text-xs text-zinc-400 font-sans mt-1">
                    Issued by: <strong className="text-zinc-300">{badge.issuer}</strong>
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="flex flex-wrap gap-1">
                    {badge.skillsVerified.map((v) => (
                      <span key={v} className="text-[8.5px] font-mono text-zinc-400 bg-zinc-950 border border-zinc-900 px-1.5 py-0.2 rounded">
                        ✓ {v}
                      </span>
                    ))}
                  </div>

                  {badge.credentialUrl && (
                    <div className="text-[10px] font-mono text-purple-450 flex items-center gap-1 opacity-80 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                      Verify Certification ↗
                    </div>
                  )}
                </div>
              </div>
            </a>
          ))}

          {/* Achievements Card (Sits perfectly as the 6th card in the grid!) */}
          <div className="p-5 rounded-2xl border border-zinc-855 bg-gradient-to-br from-zinc-950 to-zinc-900/40 flex flex-col justify-between group relative overflow-hidden min-h-[224px]">
            {/* Visual glow element inside achievements */}
            <div className="absolute -right-10 -bottom-10 w-24 h-24 bg-purple-600/10 blur-xl rounded-full pointer-events-none" />
            
            <div className="space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-zinc-900">
                <div className="p-1.5 bg-purple-950/30 border border-purple-900/40 rounded-lg text-purple-400 shrink-0">
                  <Trophy className="w-3.5 h-3.5" />
                </div>
                <h3 className="text-xs font-bold text-zinc-400 font-mono uppercase tracking-widest">
                  Achievements
                </h3>
              </div>

              <div className="space-y-3">
                {ACHIEVEMENTS_DATA.map((ach, idx) => (
                  <div key={idx} className="flex gap-2.5 items-start">
                    <Sparkles className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                    <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                      {ach}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-[9px] font-mono text-zinc-500 pt-4 border-t border-zinc-900/40 mt-3 z-10 relative">
              * University Honors & Recognitions
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
