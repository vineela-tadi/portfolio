import React, { useState, useEffect } from 'react';
import { X, Upload, Link2, FileText, Check, Printer, AlertCircle } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (type: 'url' | 'file') => void;
}

export default function ResumeModal({ isOpen, onClose, onSuccess }: ResumeModalProps) {
  const [resumeUrl, setResumeUrl] = useState('');
  const [fileName, setFileName] = useState('');
  const [fileSize, setFileSize] = useState('');
  const [fileData, setFileData] = useState('');
  const [error, setError] = useState('');
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const savedUrl = localStorage.getItem('portfolio-resume-url') || '';
      const savedName = localStorage.getItem('portfolio-resume-name') || '';
      const savedData = localStorage.getItem('portfolio-resume-data') || '';
      setResumeUrl(savedUrl);
      setFileName(savedName);
      setFileData(savedData);
      if (savedName && savedData) {
        setFileSize('Stored in Browser');
      }
      setError('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    processFile(file);
  };

  const processFile = (file: File) => {
    if (file.size > 8 * 1024 * 1024) { // 8MB Max limit for local storage string
      setError('File is too large. Maximum size is 8MB for browser storage.');
      return;
    }
    setError('');
    const reader = new FileReader();
    reader.onload = () => {
      const base64 = reader.result as string;
      setFileData(base64);
      setFileName(file.name);
      const sizeKb = Math.round(file.size / 1024);
      setFileSize(`${sizeKb} KB`);
    };
    reader.readAsDataURL(file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const handleSave = () => {
    if (!resumeUrl.trim() && !fileData) {
      setError('Please provide either a Resume URL link or upload a file.');
      return;
    }

    if (resumeUrl.trim()) {
      localStorage.setItem('portfolio-resume-url', resumeUrl.trim());
      localStorage.removeItem('portfolio-resume-data');
      localStorage.removeItem('portfolio-resume-name');
      onSuccess('url');
    } else if (fileData) {
      localStorage.setItem('portfolio-resume-data', fileData);
      localStorage.setItem('portfolio-resume-name', fileName);
      localStorage.removeItem('portfolio-resume-url');
      onSuccess('file');
    }
    
    // Dispatch event to update references globally
    window.dispatchEvent(new Event('resume-changed'));
    onClose();
  };

  const handleClear = () => {
    localStorage.removeItem('portfolio-resume-url');
    localStorage.removeItem('portfolio-resume-data');
    localStorage.removeItem('portfolio-resume-name');
    setResumeUrl('');
    setFileName('');
    setFileSize('');
    setFileData('');
    setError('');
    window.dispatchEvent(new Event('resume-changed'));
  };

  const handleTriggerPrint = () => {
    onClose();
    setTimeout(() => {
      window.print();
    }, 150);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 font-sans">
      {/* Dark Overlay Background */}
      <div 
        className="absolute inset-0 bg-[#000000]/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-md p-6 rounded-3xl bg-[#09090b] border border-zinc-800 shadow-2xl overflow-hidden glass-card transition-all text-zinc-200">
        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 blur-[50px] rounded-full pointer-events-none" />
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-zinc-900 mb-5 relative z-10">
          <div>
            <h3 className="text-base font-bold text-zinc-100 font-display">
              Configure Your Resume / CV
            </h3>
            <p className="text-[10px] text-zinc-400 font-mono mt-0.5 uppercase tracking-wider">
              Choose how your resume is downloaded
            </p>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-850 text-zinc-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Info or error indicator */}
        {error && (
          <div className="mb-4 p-3 rounded-xl bg-red-950/20 border border-red-900/30 text-xs text-red-350 flex items-start gap-2 animate-shake">
            <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
            <span>{error}</span>
          </div>
        )}

        <div className="space-y-5 relative z-10">
          
          {/* OPTION 1: URL input */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-zinc-200 flex items-center gap-1.5 font-mono">
              <Link2 className="w-3.5 h-3.5 text-purple-450" />
              1. RESUME FILE LINK (GOOGLE DRIVE / LIVE URL)
            </label>
            <input 
              type="text"
              value={resumeUrl}
              onChange={(e) => {
                setResumeUrl(e.target.value);
                if (e.target.value) {
                  // Clear files so user saves just one option
                  setFileName('');
                  setFileData('');
                }
              }}
              placeholder="https://drive.google.com/file/d/..."
              className="w-full py-2.5 px-4 rounded-xl bg-zinc-950 border border-zinc-850 hover:border-zinc-805 text-xs text-zinc-200 outline-none focus:border-purple-500 transition-colors"
            />
            <p className="text-[10px] text-zinc-500 leading-relaxed">
              * Recommended if you store your resume on GitHub Pages, Google Drive, or Canva.
            </p>
          </div>

          {/* Divider with elegant layout */}
          <div className="flex items-center gap-3">
            <div className="h-[1px] bg-zinc-900 flex-1" />
            <span className="text-[10px] font-mono font-bold text-zinc-500">OR</span>
            <div className="h-[1px] bg-zinc-900 flex-1" />
          </div>

          {/* OPTION 2: Resume File Upload */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-zinc-200 flex items-center gap-1.5 font-mono">
              <FileText className="w-3.5 h-3.5 text-purple-450" />
              2. UPLOAD RESUME DOCUMENT (PDF / DOC)
            </label>
            
            {/* Click and Drag Frame */}
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => document.getElementById('resume-file-inputs')?.click()}
              className={`border-2 border-dashed rounded-2xl p-5 text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-2 ${
                isDragging 
                  ? 'border-purple-500 bg-purple-950/15' 
                  : fileName 
                    ? 'border-purple-500/40 bg-purple-950/5' 
                    : 'border-zinc-850 hover:border-zinc-802 hover:bg-zinc-905'
              }`}
            >
              <input 
                id="resume-file-inputs"
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="hidden"
              />
              
              {fileName ? (
                <>
                  <div className="p-2.5 bg-purple-950/40 border border-purple-800/40 rounded-xl text-purple-400">
                    <Check className="w-5 h-5 animate-pulse" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-zinc-200 truncate max-w-[280px]">
                      {fileName}
                    </p>
                    <p className="text-[10px] text-zinc-500 font-mono mt-0.5">
                      {fileSize}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="p-2.5 bg-zinc-900 border border-zinc-850 rounded-xl text-zinc-400">
                    <Upload className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-zinc-300">
                      Drag & Drop your resume or <span className="text-purple-400">Browse</span>
                    </p>
                    <p className="text-[9px] text-zinc-500 mt-1 font-mono">
                      PDF, DOC up to 8MB limit
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Divider */}
          <div className="h-[1px] bg-zinc-900 pt-1" />

          {/* Footer Action buttons */}
          <div className="flex gap-2.5 pt-1">
            {/* If has saved data, show Clear selection */}
            {(resumeUrl || fileData) && (
              <button
                onClick={handleClear}
                className="px-4 py-2.5 rounded-xl border border-zinc-800 text-zinc-400 hover:text-red-400 hover:border-red-900/30 text-xs font-semibold transition-all cursor-pointer font-mono"
              >
                Clear
              </button>
            )}

            <button
              onClick={handleSave}
              className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-zinc-100 font-sans text-xs font-bold transition-all shadow-md active:scale-[0.98] cursor-pointer text-center"
            >
              Verify & Save Resume
            </button>
          </div>

          <button
            onClick={handleTriggerPrint}
            className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg border border-zinc-900 hover:border-zinc-800 hover:bg-zinc-900/30 text-zinc-400 hover:text-zinc-300 text-[10px] font-mono transition-colors cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5" />
            Just print portfolio outline beautifully instead
          </button>

        </div>
      </div>
    </div>
  );
}
