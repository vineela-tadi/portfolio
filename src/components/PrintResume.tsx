import React from 'react';
import { 
  CANDIDATE_NAME, 
  CANDIDATE_TITLE, 
  CAREER_OBJECTIVE, 
  SKILLS_DATA, 
  PROJECTS_DATA, 
  TIMELINE_DATA, 
  EDUCATION_DATA, 
  CERTIFICATIONS_DATA, 
  ACHIEVEMENTS_DATA 
} from '../data';

export default function PrintResume() {
  // Sort projects and categorize skills
  const featuredProjects = PROJECTS_DATA.slice(0, 4);
  const coreLanguages = SKILLS_DATA.filter(s => ['Python', 'Java', 'SQL', 'JavaScript'].includes(s.name));
  const otherSkills = SKILLS_DATA.filter(s => !['Python', 'Java', 'SQL', 'JavaScript'].includes(s.name));

  return (
    <div 
      id="print-resume-container" 
      className="hidden print:block w-full max-w-[800px] mx-auto p-8 bg-white text-slate-900 font-sans leading-relaxed tracking-normal text-xs"
    >
      {/* Name and Header Block */}
      <div className="text-center border-b-2 border-slate-900 pb-4 mb-5">
        <h1 className="text-3xl font-extrabold tracking-tight uppercase text-slate-900 leading-tight">
          {CANDIDATE_NAME}
        </h1>
        <p className="text-sm font-semibold tracking-wider text-indigo-700 uppercase mt-1">
          {CANDIDATE_TITLE}
        </p>
        
        {/* Contact info row */}
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-1 text-[10px] text-slate-600 font-mono mt-2.5">
          <span>Email: vineelareddytadi3399@gmail.com</span>
          <span className="text-slate-350">|</span>
          <span>GitHub: github.com/vineela-tadi</span>
          <span className="text-slate-350">|</span>
          <span>Location: Visakhapatnam, India</span>
          <span className="text-slate-350">|</span>
          <span>Portfolio: (Online Website)</span>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        
        {/* Left Column (8 cols): Objective, Experience, Projects */}
        <div className="col-span-8 space-y-5">
          
          {/* Executive Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Career Profile
            </h2>
            <p className="text-[10px] text-slate-700 text-justify leading-relaxed">
              {CAREER_OBJECTIVE}
            </p>
          </div>

          {/* Education Block (placed as high priority) */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Education
            </h2>
            <div className="space-y-3">
              {EDUCATION_DATA.map((edu, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between items-start">
                    <h3 className="text-[10.5px] font-bold text-slate-900 leading-tight">
                      {edu.degree}
                    </h3>
                    <span className="text-[8.5px] font-mono font-medium text-slate-500 whitespace-nowrap ml-2">
                      {edu.period}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-[9.5px] text-slate-700">
                    <span className="text-left leading-normal">{edu.institution}</span>
                    <span className="font-mono font-bold text-indigo-700 bg-indigo-50 px-1.5 py-0.2 rounded whitespace-nowrap ml-2">
                      {edu.gpa}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience / Internship */}
          {TIMELINE_DATA.length > 0 && (
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2.5">
                Professional Experience
              </h2>
              {TIMELINE_DATA.map((job, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-[11px] font-bold text-slate-900">
                        {job.role}
                      </h3>
                      <p className="text-[10px] font-medium text-indigo-700">
                        {job.organization} — {job.location}
                      </p>
                    </div>
                    <span className="text-[9px] font-mono text-slate-500">
                      {job.period}
                    </span>
                  </div>
                  <ul className="list-disc pl-4 text-[9.5px] text-slate-700 space-y-1">
                    {job.description.map((bullet, bIdx) => (
                      <li key={bIdx} className="leading-relaxed text-justify">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* Projects section */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2.5">
              Key Technical Projects
            </h2>
            <div className="space-y-3.5">
              {featuredProjects.map((p, pIdx) => (
                <div key={pIdx} className="space-y-1">
                  <div className="flex justify-between items-center">
                    <h3 className="text-[10.5px] font-bold text-slate-900">
                      {p.title}
                    </h3>
                    <span className="text-[8px] font-mono text-slate-500">
                      [{p.techStack.join(', ')}]
                    </span>
                  </div>
                  <p className="text-[9.5px] text-slate-700 leading-normal text-justify">
                    {p.description} <strong className="text-indigo-700">Outcome:</strong> {p.problemSolved}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column (4 cols): Skills, Certifications, Achievements */}
        <div className="col-span-4 space-y-5 border-l border-slate-200 pl-4">
          
          {/* Core Technical Hard Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Expertise & Skills
            </h2>
            <div className="space-y-3">
              <div>
                <h3 className="text-[9.5px] uppercase font-bold text-indigo-700 tracking-wide mb-1">
                  Core Languages
                </h3>
                <div className="flex flex-wrap gap-1">
                  {coreLanguages.map(s => (
                    <span key={s.name} className="text-[9px] font-medium bg-slate-100 px-2 py-0.5 rounded text-slate-800 border border-slate-200">
                      {s.name}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-[9.5px] uppercase font-bold text-indigo-700 tracking-wide mb-1">
                  Technologies & Frameworks
                </h3>
                <div className="flex flex-wrap gap-1">
                  {otherSkills.map(s => (
                    <span key={s.name} className="text-[9px] font-medium bg-slate-100 px-2 py-0.5 rounded text-slate-800 border border-slate-200">
                      {s.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Professional Credentials / Certifications */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Certifications
            </h2>
            <div className="space-y-2.5">
              {CERTIFICATIONS_DATA.map((c, idx) => (
                <div key={idx} className="space-y-0.5">
                  <h3 className="text-[9.5px] font-bold text-slate-900 leading-tight">
                    {c.title}
                  </h3>
                  <div className="flex justify-between text-[8px] font-mono text-slate-500">
                    <span>{c.issuer}</span>
                    <span>{c.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Academic Achievements */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Achievements
            </h2>
            <ul className="list-disc pl-4 text-[9px] text-slate-700 space-y-1.5">
              {ACHIEVEMENTS_DATA.map((ach, idx) => (
                <li key={idx} className="leading-normal">
                  {ach}
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>

      {/* Footer Branding line */}
      <div className="text-center text-[8px] text-slate-400 font-mono mt-12 pt-3 border-t border-slate-200">
        Generated dynamically from Tadi Veenila Satya's Professional Portfolio.
      </div>
    </div>
  );
}
