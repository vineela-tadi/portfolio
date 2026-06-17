import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, CheckCircle2, MapPin, Sparkles, Terminal } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formState, setFormState] = useState<'idle' | 'transmitting' | 'success'>('idle');
  const [logResponse, setLogResponse] = useState('');

  const handleTransmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setFormState('transmitting');
    setLogResponse('Sending message components...');

    setTimeout(() => {
      setFormState('success');
      setLogResponse('Your message has been mock-submitted to in-memory state. Thank you for reaching out!');
      // Keep state clean
      setName('');
      setEmail('');
      setMessage('');
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-[#060608] relative font-sans">
      {/* Decorative gradient glow line */}
      <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 translate-y-12 w-80 h-80 bg-purple-500/5 blur-[100px] rounded-full pointer-events-none animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-6 font-sans">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-100 font-display">
              Get In Touch
            </h2>
          </div>
          <div className="h-0.5 bg-zinc-850 flex-1 mx-8 hidden md:block" />
          
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Quick info panel Left */}
          <div className="col-span-1 lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl border border-zinc-850 bg-gradient-to-br from-zinc-900/15 to-transparent space-y-6">
              <h3 className="text-lg font-bold text-zinc-200 font-display">Let&rsquo;s build something great together.</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                I am looking for proactive international internships, software developer roles (graduating 2026), and opportunities to solve complex human-centered full-stack and machine learning problems.
              </p>

              {/* Geographic anchor */}
              <div className="flex items-center gap-3.5 p-4 rounded-xl border border-zinc-900 bg-zinc-950/80">
                <div className="p-2.5 bg-purple-950/40 border border-purple-800/40 rounded-xl text-purple-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold text-zinc-500 block uppercase tracking-wider leading-none mb-1">
                    Current Location
                  </span>
                  <span className="text-xs font-semibold text-zinc-200">
                    Visakhapatnam, India
                  </span>
                </div>
              </div>

              {/* Direct channels */}
              <div className="space-y-4 pt-2">
                <span className="text-[10px] font-mono font-bold text-zinc-500 block uppercase tracking-widest">
                  Direct Channels
                </span>

                <div className="space-y-2.5">
                  <a 
                    href="mailto:vineelareddytadi3399@gmail.com" 
                    className="flex items-center gap-3 text-xs text-zinc-400 hover:text-white transition-all group"
                  >
                    <div className="p-2 bg-zinc-900 border border-zinc-850 rounded-lg group-hover:border-purple-500/30 text-zinc-400 group-hover:text-purple-400 transition-colors">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span>vineelareddytadi3399@gmail.com</span>
                  </a>

                  <a 
                    href="https://www.linkedin.com/in/veenila-tadi-898576320" 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-3 text-xs text-zinc-400 hover:text-white transition-all group"
                  >
                    <div className="p-2 bg-zinc-900 border border-zinc-850 rounded-lg group-hover:border-purple-500/30 text-zinc-400 group-hover:text-purple-400 transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <span>linkedin.com/in/veenila-tadi-898576320</span>
                  </a>

                  <a 
                    href="https://github.com/vineela-tadi" 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-3 text-xs text-zinc-400 hover:text-white transition-all group"
                  >
                    <div className="p-2 bg-zinc-900 border border-zinc-850 rounded-lg group-hover:border-purple-500/30 text-zinc-400 group-hover:text-purple-400 transition-colors">
                      <Github className="w-4 h-4" />
                    </div>
                    <span>github.com/vineela-tadi</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Animated transmitter form Right */}
          <div className="col-span-1 lg:col-span-7 space-y-4">
            
            <form onSubmit={handleTransmit} className="p-6 md:p-8 rounded-2xl border border-zinc-850 bg-zinc-950/40 glass-card space-y-5">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="input-name" className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-widest block font-sans">
                    Your Name
                  </label>
                  <input
                    id="input-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="E.g. Elon Musk"
                    disabled={formState === 'transmitting'}
                    className="w-full py-3 px-4 rounded-xl bg-zinc-950 border border-zinc-850 hover:border-zinc-805 text-xs text-zinc-200 outline-none focus:border-purple-500 transition-colors"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="input-email" className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-widest block font-sans">
                    Your Email
                  </label>
                  <input
                    id="input-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="recruiter@agency.com"
                    disabled={formState === 'transmitting'}
                    className="w-full py-3 px-4 rounded-xl bg-zinc-950 border border-zinc-850 hover:border-zinc-805 text-xs text-zinc-200 outline-none focus:border-purple-500 transition-colors"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="input-msg" className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-widest block font-sans">
                  Message Details
                </label>
                <textarea
                  id="input-msg"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about developer roles or project suggestions..."
                  disabled={formState === 'transmitting'}
                  className="w-full py-3 px-4 rounded-xl bg-zinc-950 border border-zinc-850 hover:border-zinc-805 text-xs text-zinc-200 outline-none focus:border-purple-500 transition-colors resize-none leading-relaxed"
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={formState === 'transmitting' || !name.trim() || !email.trim() || !message.trim()}
                  className={`w-full py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 border shadow-md ${
                    formState === 'transmitting' 
                      ? 'bg-zinc-900 border-zinc-805 text-zinc-500 cursor-wait' 
                      : formState === 'success'
                      ? 'bg-emerald-900/40 border-emerald-500/50 text-emerald-300' 
                      : 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white border-purple-400/20'
                  }`}
                >
                  {formState === 'idle' && (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      Send Message
                    </>
                  )}
                  {formState === 'transmitting' && (
                    <>
                      <div className="w-3.5 h-3.5 rounded-full border border-zinc-500 border-t-zinc-200 animate-spin" />
                      Sending...
                    </>
                  )}
                  {formState === 'success' && (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300" />
                      Message Recieved
                    </>
                  )}
                </button>
              </div>

            </form>

            {/* Simulated log output below contact form */}
            {logResponse && (
              <div className="p-4 rounded-xl border border-zinc-900 bg-zinc-950 font-mono text-[10px] text-zinc-450 leading-normal flex items-start gap-2">
                <Terminal className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                <span>{logResponse}</span>
              </div>
            )}

            {/* Sandbox footer notice */}
            <p className="text-[10px] text-zinc-500 italic leading-relaxed text-center font-sans mt-3">
              💡 Message submissions log securely to memory. No real data is stored externally.
            </p>

          </div>

        </div>

        {/* Footer info brand */}
        <div className="mt-24 pt-8 border-t border-zinc-900/60 flex flex-col md:flex-row justify-between items-center gap-4 text-[10.5px] font-mono text-zinc-500">
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Structured &amp; Programmed by Tadi Veenila Satya © 2026. All rights secured.</span>
          </div>

          <div className="flex gap-4">
            <a href="#" className="hover:text-zinc-300">Back To Top</a>
          </div>
        </div>

      </div>
    </section>
  );
}
