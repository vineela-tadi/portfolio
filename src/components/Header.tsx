import React, { useState, useEffect } from 'react';
import { Menu, X, Code2, Download, Sparkles, Terminal, Sun, Moon } from 'lucide-react';
import ResumeModal from './ResumeModal';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'theme-cosmic';
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleThemeSync = () => {
      setCurrentTheme(localStorage.getItem('portfolio-theme') || 'theme-cosmic');
    };
    window.addEventListener('theme-changed', handleThemeSync);
    window.addEventListener('storage', handleThemeSync);
    return () => {
      window.removeEventListener('theme-changed', handleThemeSync);
      window.removeEventListener('storage', handleThemeSync);
    };
  }, []);

  const toggleTheme = () => {
    const nextTheme = currentTheme === 'theme-light' ? 'theme-cosmic' : 'theme-light';
    const root = document.documentElement;
    const themes = ['theme-cosmic', 'theme-rose', 'theme-emerald', 'theme-gold', 'theme-ocean', 'theme-light'];
    themes.forEach((t) => root.classList.remove(t));
    root.classList.add(nextTheme);
    localStorage.setItem('portfolio-theme', nextTheme);
    setCurrentTheme(nextTheme);
    window.dispatchEvent(new Event('theme-changed'));
  };

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  // Helper function to handle downloading resume automatically from public folder
  const handleDownloadResume = (e: React.MouseEvent) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = '/Veenila_Resume.pdf';
    link.setAttribute('download', 'Tadi_Veenila_Satya_Resume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 font-sans ${
          isScrolled
            ? 'glass-card border-b bg-zinc-950/80'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-12 md:h-14 flex items-center justify-between">
          {/* Logo Brand */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center group cursor-pointer"
          >
            <div className="flex flex-col">
              <span className="text-base font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 font-display leading-none">
                Portfolio
              </span>
            </div>
          </a>

          {/* Nav Items - Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  const targetId = item.href.substring(1);
                  const element = document.getElementById(targetId);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="text-xs font-semibold uppercase tracking-wider text-zinc-400 hover:text-white transition-all hover:scale-105 font-sans cursor-pointer"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Action Callouts */}
          <div className="hidden md:flex items-center gap-4">
            {/* Highly Visible Sun / Moon Quick Toggle */}
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center p-2 rounded-lg bg-zinc-900 hover:bg-zinc-805 border border-zinc-800 text-zinc-300 hover:text-white transition-all duration-300 cursor-pointer"
              title={currentTheme === 'theme-light' ? 'Switch to Dark Aesthetics' : 'Switch to Bright Light Mode'}
            >
              {currentTheme === 'theme-light' ? (
                <Moon className="w-4 h-4 text-purple-450 animate-pulse" />
              ) : (
                <Sun className="w-4 h-4 text-amber-400" />
              )}
            </button>

            <button
              onClick={handleDownloadResume}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white text-xs font-semibold font-mono transition-all cursor-pointer shadow-sm"
              title="Download Resume / CV"
            >
              <Download className="w-3.5 h-3.5 text-purple-450" />
              Download CV
            </button>
          </div>

          {/* Mobile Hamburg and Quick Theme Toggle */}
          <div className="md:hidden flex items-center gap-2.5">
            {/* Mobile Immediate Theme Switcher Icon */}
            <button
              onClick={toggleTheme}
              className="p-2 text-zinc-400 hover:text-zinc-100 bg-zinc-905 border border-zinc-850 rounded-lg cursor-pointer flex items-center justify-center"
              title={currentTheme === 'theme-light' ? 'Switch to Dark Aesthetics' : 'Switch to Bright Light Mode'}
            >
              {currentTheme === 'theme-light' ? (
                <Moon className="w-4 h-4 text-purple-450" />
              ) : (
                <Sun className="w-4 h-4 text-amber-400" />
              )}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1.5 text-zinc-400 hover:text-zinc-100 bg-zinc-900/50 border border-zinc-800 rounded-lg"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Nav Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden glass-card border-b border-zinc-900 px-6 py-6 animate-in slide-in-from-top duration-300 bg-zinc-950/95">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMobileMenuOpen(false);
                    const targetId = item.href.substring(1);
                    const element = document.getElementById(targetId);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className="text-sm font-semibold tracking-wider text-zinc-300 hover:text-white border-b border-zinc-900 pb-2 flex justify-between cursor-pointer"
                >
                  <span>{item.label}</span>
                  <span className="text-purple-400">→</span>
                </a>
              ))}
              
              <div className="flex flex-col gap-3.5 pt-2">
                {/* Theme Toggle in Mobile Draw Grid */}
                <button
                  onClick={() => {
                    toggleTheme();
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex items-center justify-center gap-2.5 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-805 border border-zinc-800 text-zinc-200 text-xs font-mono"
                >
                  {currentTheme === 'theme-light' ? (
                    <>
                      <Moon className="w-4 h-4 text-purple-400 animate-pulse" />
                      Switch to Dark Aesthetics
                    </>
                  ) : (
                    <>
                      <Sun className="w-4 h-4 text-amber-400" />
                      Switch to Bright Minimal
                    </>
                  )}
                </button>

                <button
                  onClick={(e) => {
                    handleDownloadResume(e);
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-100 font-mono text-xs cursor-pointer"
                >
                  <Download className="w-4 h-4 text-purple-400" />
                  Download CV
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      <ResumeModal 
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
        onSuccess={(type) => {
          // Success callback
        }}
      />
    </>
  );
}
