import React, { useState, useEffect } from 'react';
import { Palette, Sun, Sparkles, Moon, Check } from 'lucide-react';

interface ThemeOption {
  id: string;
  name: string;
  colorClass: string;
  glowClass: string;
  isDark: boolean;
}

const THEMES: ThemeOption[] = [
  { id: 'theme-cosmic', name: 'Cosmic Slate', colorClass: 'bg-purple-600', glowClass: 'shadow-purple-500/30', isDark: true },
  { id: 'theme-rose', name: 'Ruby Sunset', colorClass: 'bg-rose-500', glowClass: 'shadow-rose-500/30', isDark: true },
  { id: 'theme-emerald', name: 'Emerald Mint', colorClass: 'bg-emerald-500', glowClass: 'shadow-emerald-500/30', isDark: true },
  { id: 'theme-gold', name: 'Sunset Gold', colorClass: 'bg-amber-500', glowClass: 'shadow-amber-500/30', isDark: true },
  { id: 'theme-ocean', name: 'Ocean Blue', colorClass: 'bg-sky-500', glowClass: 'shadow-sky-500/30', isDark: true },
  { id: 'theme-light', name: 'Light Minimal', colorClass: 'bg-amber-400 border border-amber-300', glowClass: 'shadow-zinc-350/20', isDark: false }
];

export default function ThemeSwitcher() {
  const [activeTheme, setActiveTheme] = useState<string>(() => {
    return localStorage.getItem('portfolio-theme') || 'theme-cosmic';
  });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    // Remove all possible themes
    THEMES.forEach((t) => root.classList.remove(t.id));
    // Add current selected theme
    root.classList.add(activeTheme);
    localStorage.setItem('portfolio-theme', activeTheme);
    // Custom event for real-time app-wide updates
    window.dispatchEvent(new Event('theme-changed'));
  }, [activeTheme]);

  useEffect(() => {
    const handleSync = () => {
      const persisted = localStorage.getItem('portfolio-theme') || 'theme-cosmic';
      if (persisted !== activeTheme) {
        setActiveTheme(persisted);
      }
    };
    window.addEventListener('theme-changed', handleSync);
    window.addEventListener('storage', handleSync);
    return () => {
      window.removeEventListener('theme-changed', handleSync);
      window.removeEventListener('storage', handleSync);
    };
  }, [activeTheme]);

  // Fast toggle between Light Minimal and Cosmic Slate (Dark)
  const toggleQuickDarkLight = () => {
    if (activeTheme === 'theme-light') {
      setActiveTheme('theme-cosmic');
    } else {
      setActiveTheme('theme-light');
    }
  };

  const currentThemeObj = THEMES.find(t => t.id === activeTheme) || THEMES[0];

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      <div className="flex flex-col items-end gap-3">
        
        {/* Animated Popover of Themes */}
        {isOpen && (
          <div className="flex flex-col gap-2.5 p-3.5 rounded-2xl bg-zinc-950 border border-zinc-800 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-bottom-6 duration-300 max-w-[280px]">
            <div className="px-2 pb-2.5 border-b border-zinc-900/60 flex items-center justify-between gap-12">
              <span className="text-[10px] font-mono tracking-wider font-extrabold uppercase text-zinc-400">
                Aesthetics Picker
              </span>
              <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
            </div>

            <div className="grid grid-cols-2 gap-2">
              {THEMES.map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => {
                    setActiveTheme(theme.id);
                  }}
                  className={`flex flex-col gap-1.5 p-2 rounded-xl text-left transition-all hover:bg-zinc-900 border ${
                    activeTheme === theme.id
                      ? 'bg-zinc-900 border-purple-500/50'
                      : 'border-transparent text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    {/* Sun/Moon Indicator */}
                    {theme.isDark ? (
                      <Moon className="w-3 h-3 text-zinc-400" />
                    ) : (
                      <Sun className="w-3 h-3 text-amber-400 animate-spin-slow" />
                    )}
                    {/* Theme Circle Color Indicator */}
                    <div className={`w-2.5 h-2.5 rounded-full ${theme.colorClass}`} />
                  </div>
                  <span className="text-[10px] font-sans font-bold leading-none">
                    {theme.name}
                  </span>
                </button>
              ))}
            </div>

            {/* Quick Toggle text/helper */}
            <div className="text-[9px] font-mono text-zinc-500 pt-1 text-center">
              * Select Sun for Light & Moon for Dark
            </div>
          </div>
        )}

        {/* Double-action Switch Trigger Widget */}
        <div className="flex bg-zinc-950/90 border border-zinc-800 rounded-2xl p-1 shadow-2xl backdrop-blur-md items-center gap-1">
          {/* Quick Sun/Moon Direct Toggle Button */}
          <button
            onClick={toggleQuickDarkLight}
            className="flex items-center justify-center p-2.5 rounded-xl hover:bg-zinc-900 text-zinc-400 hover:text-white transition-all duration-350 cursor-pointer"
            title={activeTheme === 'theme-light' ? 'Switch to Dark Theme' : 'Switch to Light Theme'}
          >
            {activeTheme === 'theme-light' ? (
              <Moon className="w-5 h-5 text-purple-400 animate-pulse" />
            ) : (
              <Sun className="w-5 h-5 text-amber-400 animate-spin-slow" />
            )}
          </button>

          <div className="w-[1px] h-6 bg-zinc-800 mx-0.5" />

          {/* Palette Selector Trigger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`flex items-center gap-2 px-3 py-2.5 rounded-xl transition-all duration-300 cursor-pointer ${
              isOpen 
                ? 'bg-purple-950/40 text-purple-400' 
                : 'text-zinc-300 hover:text-white hover:bg-zinc-900'
            }`}
            title="Open color scheme configuration"
          >
            <Palette className="w-4 h-4 text-purple-400" />
            <span className="text-[10px] font-mono font-extrabold tracking-wider uppercase">
              Themes
            </span>
          </button>
        </div>
        
      </div>
    </div>
  );
}
