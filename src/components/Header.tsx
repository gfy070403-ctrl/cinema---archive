import React, { useState, useEffect } from 'react';
import { Film, Archive, Library, Clock } from 'lucide-react';

export const Header: React.FC = () => {
  const [timeStr, setTimeStr] = useState<string>('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTimeStr(now.toLocaleTimeString('zh-CN', { hour12: false }));
    };
    updateClock();
    const timer = setInterval(updateClock, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="relative w-full pt-10 pb-8 select-none border-b border-white/5 mb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          {/* Main Typography Header Section styled with Immersive UI border-l pl-6 */}
          <div className="flex flex-col text-left border-l border-white/15 pl-6">
            {/* Fine breadcrumb or exhibition volume number */}
            <div className="flex items-center gap-2 mb-2.5 select-none">
              <span className="font-mono text-[9px] tracking-[0.3em] text-slate-400 uppercase font-light">
                Private Collection / Vol. I
              </span>
            </div>

            {/* Combined Brand Heading */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-display font-light tracking-[0.18em] uppercase text-white flex flex-wrap items-center">
              Aetheris Ledger
              <span className="text-white/20 font-light mx-2 sm:mx-3">/</span>
              <span className="font-serif font-light text-lg sm:text-xl md:text-2xl text-slate-300 tracking-[0.25em]">
                以太梦象馆
              </span>
            </h1>

            {/* poetics Subtitle */}
            <p className="mt-2 text-xs sm:text-[13px] text-slate-400 font-light tracking-wider flex flex-col sm:flex-row sm:items-center gap-y-1">
              <span>Domain of the Diamond Cat, Luminous Stag and Pearl Icon.</span>
              <span className="hidden sm:inline text-white/10 mx-3 font-mono">/</span>
              <span className="text-slate-400 font-serif italic text-xs">黑猫眼里的钻石、神鹿憩息的水面与银色圣像。</span>
            </p>
          </div>

          {/* Symmetrical Mini Columns (Right Aligned, Elegant Editorial look) */}
          <div className="flex flex-wrap items-center gap-8 sm:gap-10 font-mono text-[10px] tracking-widest text-slate-500">
            {/* Clock panel as a quiet museum curation detail */}
            <div className="flex flex-col items-start gap-1">
              <span className="text-[9px] text-white/30 uppercase tracking-[0.2em]">Archival Local Time</span>
              <span className="text-[12px] font-light text-slate-300 tracking-wider uppercase">{timeStr || '---'}</span>
            </div>

            {/* Total items curator index */}
            <div className="flex flex-col items-start gap-1 border-l border-white/10 pl-6 sm:pl-10">
              <span className="text-[9px] text-white/30 uppercase tracking-[0.2em]">Catalogs Index</span>
              <span className="text-[12px] font-light text-slate-200 tracking-wider">57 / FIFTY-SEVEN</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
