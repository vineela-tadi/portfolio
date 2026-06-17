import React from 'react';
import { TIMELINE_DATA, EDUCATION_DATA } from '../data';
import { Briefcase, GraduationCap } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#060608] relative border-b border-zinc-900/60 font-sans">
      {/* Dynamic ambient decoration */}
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
           
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-100 font-display">
              Internship Experience
            </h2>
          </div>
          <div className="h-0.5 bg-zinc-850 flex-1 mx-8 hidden md:block" />
          <p className="text-xs text-zinc-400 max-w-xs leading-relaxed">
            Professional industry practice paired with academic degree milestones.
          </p>
        </div>

        {/* Layout optimized for Internship and Education side-by-side */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Internship Experience (spanning 7 columns for detail) */}
          <div className="col-span-1 lg:col-span-8 space-y-6">
            <h3 className="text-sm font-bold text-zinc-400 font-mono uppercase tracking-widest flex items-center gap-2 mb-6">
              <Briefcase className="w-4 h-4 text-purple-400" />
              Practice & Industry History
            </h3>

            <div className="relative border-l border-zinc-850 pl-6 ml-2 space-y-8">
              {TIMELINE_DATA.map((milestone, idx) => (
                <div key={idx} className="relative group">
                  {/* Glow Node */}
                  <span className="absolute -left-[31px] top-1 flex h-6 w-6 items-center justify-center rounded-full bg-zinc-950 border border-zinc-800 text-purple-400 group-hover:border-purple-400 group-hover:bg-purple-950/20 group-hover:scale-110 transition-all">
                    <Briefcase className="w-3 h-3" />
                  </span>

                  <div className="space-y-3">
                    <div className="space-y-1">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <h4 className="text-base font-bold text-zinc-100 font-display uppercase tracking-wide group-hover:text-purple-450 transition-colors">
                          {milestone.role}
                        </h4>
                        <span className="text-[9px] font-mono text-purple-400 bg-purple-950/30 border border-purple-900/40 px-2 py-0.5 rounded-full shrink-0 self-start sm:self-center">
                          {milestone.period}
                        </span>
                      </div>
                      <p className="text-xs font-bold text-zinc-400 font-sans">
                        {milestone.organization}
                      </p>
                    </div>

                    {/* Bullet points */}
                    <ul className="space-y-2 text-xs text-zinc-300 leading-relaxed font-sans">
                      {milestone.description.map((bullet, bidx) => (
                        <li key={bidx} className="flex gap-2 items-start">
                          <span className="text-purple-400 font-bold block mt-0.5">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Skills Applied Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {milestone.skillsApplied.map((skill) => (
                        <span key={skill} className="text-[9px] font-mono text-zinc-400 bg-zinc-950 border border-zinc-900 px-2 py-0.5 rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Education Details (spanning 4 columns) */}
          <div className="col-span-1 lg:col-span-4 space-y-6">
            <h3 className="text-sm font-bold text-zinc-400 font-mono uppercase tracking-widest flex items-center gap-2 mb-6">
              <GraduationCap className="w-4 h-4 text-purple-400" />
              Education Details
            </h3>

            <div className="relative border-l border-zinc-850 pl-6 ml-2 space-y-8">
              {EDUCATION_DATA.map((edu, idx) => (
                <div key={idx} className="relative group">
                  {/* Glow Node */}
                  <span className="absolute -left-[31px] top-1 flex h-6 w-6 items-center justify-center rounded-full bg-zinc-950 border border-zinc-800 text-purple-400 group-hover:border-purple-400 group-hover:bg-purple-950/20 group-hover:scale-110 transition-all">
                    <GraduationCap className="w-4 h-4" />
                  </span>

                  <div className="space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1">
                      <h4 className="text-sm font-bold text-zinc-100 font-display group-hover:text-purple-450 transition-colors leading-tight uppercase tracking-wide">
                        {edu.degree}
                      </h4>
                      <span className="text-[9px] font-mono text-purple-400 bg-purple-950/30 border border-purple-900/40 px-2 py-0.5 rounded-full shrink-0 self-start">
                        {edu.period}
                      </span>
                    </div>

                    <div className="p-4 rounded-xl border border-zinc-850 bg-zinc-900/10 font-sans space-y-2">
                      <p className="text-xs text-zinc-300 font-medium">
                        {edu.institution}
                      </p>
                      <p className="text-xs text-zinc-400">
                        Academic Standing: <strong className="text-zinc-200">{edu.gpa}</strong>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
