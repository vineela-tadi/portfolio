import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, FileText, Send, Terminal, Sparkles } from 'lucide-react';
import { CANDIDATE_NAME, CANDIDATE_TITLE, CANDIDATE_LOCATION, CAREER_OBJECTIVE } from '../data';
// @ts-ignore
import avatarImg from '../assets/images/image.jpeg';

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const roles = [
    'Software Developer',
    'CSE Student (AI)',
    'Python & Java Developer',
    'Problem Solver'
  ];

  const typingSpeed = isDeleting ? 40 : 100;

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[roleIndex];
      if (!isDeleting) {
        setTypedText(currentRole.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        if (charIndex === currentRole.length - 1) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setTypedText(currentRole.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        if (charIndex === 1) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setCharIndex(0);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      alpha: number;
    }> = [];

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particleCount = 40;
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        radius: Math.random() * 2 + 1,
        alpha: Math.random() * 0.4 + 0.2
      });
    }

    let mouse = { x: -1000, y: -1000 };
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', handleMouseLeave);
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.x += p1.vx;
        p1.y += p1.vy;

        if (p1.x < 0 || p1.x > canvas.width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > canvas.height) p1.vy *= -1;

        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(168, 85, 247, ${p1.alpha})`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);

          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            const lineAlpha = (1 - dist / 110) * 0.12;
            ctx.strokeStyle = `rgba(59, 130, 246, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        const mouseDist = Math.sqrt((p1.x - mouse.x) ** 2 + (p1.y - mouse.y) ** 2);
        if (mouseDist < 150) {
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(168, 85, 247, ${(1 - mouseDist / 150) * 0.2})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      id="home" 
      className="relative min-h-[80vh] bg-[#060608] flex items-center pt-16 overflow-hidden font-sans border-b border-zinc-900/60"
    >
      {/* Decorative Blur Background Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[400px] h-[400px] bg-blue-600/10 blur-[140px] rounded-full pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.1),rgba(255,255,255,0))] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 py-8">
        
        {/* Hero Left Content */}
        <div className="col-span-1 lg:col-span-7 space-y-8 text-left order-2 lg:order-1">
          
          {/* Name & Title */}
          <div className="space-y-4">
            <p className="text-sm font-mono text-purple-400 uppercase tracking-widest font-semibold block mb-1">
              {CANDIDATE_TITLE}
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-100 font-display leading-[1.1]">
              Hi, I am <br />
              <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">{CANDIDATE_NAME}</span>
            </h1>

            {/* Typewriter Role */}
            <div className="h-8 flex items-center gap-2">
              <span className="text-xs font-mono text-zinc-500">current_focus_</span>
              <span className="text-sm sm:text-base font-bold text-purple-300 font-display">
                {typedText}
              </span>
              <span className="w-1.5 h-5 bg-purple-500 animate-pulse duration-1000" />
            </div>
          </div>

          {/* Career objective summary */}
          <p className="text-zinc-400 text-sm leading-relaxed max-w-xl font-sans">
            {CAREER_OBJECTIVE}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a 
              href="#projects" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-zinc-100 font-medium text-xs uppercase tracking-wider rounded-xl transition-all hover:scale-[1.02] shadow-lg shadow-purple-900/20 cursor-pointer"
            >
              Explore Projects
              <ArrowRight className="w-4 h-4" />
            </a>
            
            <a 
              href="#contact" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 hover:border-zinc-700 text-zinc-200 font-medium text-xs uppercase tracking-wider rounded-xl transition-all hover:scale-[1.02] cursor-pointer"
            >
              <Send className="w-3.5 h-3.5 text-purple-400" />
              Get In Touch
            </a>
          </div>

        </div>

        {/* Hero Right Content (Profile Photo with permanent display) */}
        <div className="col-span-1 lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2">
          <div className="relative group">
            {/* Glowing blur effects behind the circular photo */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 opacity-25 blur-xl group-hover:opacity-45 transition duration-500" />
            
            {/* Circular image wrapper with light border and shadow */}
            <div 
              className="relative w-64 h-64 sm:w-80 h-80 rounded-full overflow-hidden border-2 border-zinc-800/85 group-hover:border-purple-500/80 shadow-2xl transition-all duration-500 hover:scale-[1.03]"
            >
              <img 
                src={avatarImg} 
                alt={CANDIDATE_NAME} 
                className="w-full h-full object-cover transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Float Badge */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-zinc-950/90 border border-zinc-800 px-4 py-2 rounded-xl backdrop-blur-md flex items-center gap-2 shadow-xl whitespace-nowrap">
              <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-spin" style={{ animationDuration: '6s' }} />
              <span className="text-[10px] font-mono font-bold uppercase text-zinc-300">
                CSE (AI) SPECIALIST
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* Neural Background Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />
    </section>
  );
}
