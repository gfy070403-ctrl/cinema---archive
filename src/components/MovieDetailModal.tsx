import React, { useState, useEffect } from 'react';
import { Movie } from '../moviesData';
import { MoviePoster } from './MoviePoster';
import { Sparkles, MessageSquare, Plus, Trash2, Calendar, FileText, Globe, Clock, Star } from 'lucide-react';

interface MovieDetailModalProps {
  movie: Movie;
  onClose: () => void;
}

interface MemoryLog {
  id: string;
  type: 'memory' | 'dream';
  content: string;
  timestamp: string;
}

export const MovieDetailModal: React.FC<MovieDetailModalProps> = ({ movie, onClose }) => {
  const { title, englishTitle, director, year, genre, rating, duration, region, summary, poeticSummary } = movie;
  const [logs, setLogs] = useState<MemoryLog[]>([]);
  const [newLogContent, setNewLogContent] = useState('');
  const [logType, setLogType] = useState<'memory' | 'dream'>('memory');

  // Load saved memory/dream archives for this movie from localStorage
  useEffect(() => {
    const savedLogs = localStorage.getItem(`cinema-archive-logs-${title}`);
    if (savedLogs) {
      try {
        setLogs(JSON.parse(savedLogs));
      } catch (e) {
        setLogs([]);
      }
    }
  }, [title]);

  // Save changes to local storage
  const saveLogs = (updatedLogs: MemoryLog[]) => {
    setLogs(updatedLogs);
    localStorage.setItem(`cinema-archive-logs-${title}`, JSON.stringify(updatedLogs));
  };

  const handleAddLog = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newLogContent.trim()) return;

    const newLog: MemoryLog = {
      id: Date.now().toString(),
      type: logType,
      content: newLogContent.trim(),
      timestamp: new Date().toLocaleDateString('zh-CN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
      }),
    };

    const updated = [newLog, ...logs];
    saveLogs(updated);
    setNewLogContent('');
  };

  const handleDeleteLog = (id: string) => {
    const updated = logs.filter(log => log.id !== id);
    saveLogs(updated);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto bg-black/95 backdrop-blur-3xl transition-all duration-500">
      {/* Immersive backdrop element close click handler */}
      <div className="absolute inset-0 cursor-default" onClick={onClose} />

      {/* Actual Modal Container */}
      <div className="relative w-full max-w-4xl bg-[#010204] border border-white/[0.08] rounded-[2px] overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,1)] z-10 flex flex-col md:flex-row max-h-[90vh] md:max-h-[85vh] transition-all duration-500 animate-drift">
        {/* Left Side: Massive Artwork Column */}
        <div className="w-full md:w-[40%] bg-black flex flex-col items-center justify-center p-6 border-b md:border-b-0 md:border-r border-white/[0.05] select-none relative overflow-hidden">
          {/* Subtle water-ripple reflective pattern in artwork base */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(255,255,255,0.02)_0%,_transparent_60%)] pointer-events-none" />
          <div className="w-full max-w-[260px] md:max-w-none md:w-full drop-shadow-[0_25px_50px_rgba(0,0,0,0.95)]">
            <MoviePoster movie={movie} className="rounded-[1px] border border-white/[0.08]" isDetailed />
          </div>
          
          <div className="mt-5 font-mono text-[8px] tracking-[0.3em] text-slate-500 uppercase select-none flex items-center gap-1.5">
            <span>✦</span>
            <span>PRESIDENT EXHIBITION ITEM</span>
            <span>✦</span>
          </div>
        </div>

        {/* Right Side: Information Column */}
        <div className="w-full md:w-[60%] p-6 md:p-8 overflow-y-auto flex flex-col justify-between bg-gradient-to-b from-black to-[#020306]">
          <div>
            {/* Top Toolbar Row */}
            <div className="flex items-center justify-between border-b border-white/[0.05] pb-4 mb-5">
              <div className="flex items-center gap-1.5 font-mono text-[8.5px] tracking-[0.25em] text-slate-500 uppercase">
                <span>METADATA / 归档档案库</span>
              </div>
              <button
                onClick={onClose}
                className="font-mono text-[8.5px] tracking-[0.25em] text-[#E5E7EB]/50 hover:text-white transition-all duration-300 uppercase border border-white/[0.08] hover:border-white/20 px-3.5 py-1 rounded-[1px] bg-black/60"
              >
                CLOSE [×]
              </button>
            </div>

            {/* Core Titles */}
            <div className="text-left">
              <h1 className="font-serif text-2xl sm:text-3xl text-white font-light tracking-[0.06em] leading-tight">
                {title}
              </h1>
              <p className="font-sans text-[10px] font-light text-slate-400 uppercase tracking-[0.2em] mt-1.5 mb-5 leading-none">
                {englishTitle}
              </p>
            </div>

            {/* Capsule Metadata row */}
            <div className="flex flex-wrap gap-2 mb-5">
              <div className="flex items-center gap-1 bg-white/[0.02] border border-white/[0.05] px-2.5 py-0.5 rounded-[1px] font-mono text-[9px] text-slate-400">
                <Calendar className="w-2.5 h-2.5 text-slate-500" />
                <span>{year} 年</span>
              </div>
              <div className="flex items-center gap-1 bg-white/[0.02] border border-white/[0.05] px-2.5 py-0.5 rounded-[1px] font-mono text-[9px] text-slate-400">
                <Globe className="w-2.5 h-2.5 text-slate-500" />
                <span>{region.join(' · ')}</span>
              </div>
              <div className="flex items-center gap-1 bg-white/[0.02] border border-white/[0.05] px-2.5 py-0.5 rounded-[1px] font-mono text-[9px] text-slate-400">
                <Clock className="w-2.5 h-2.5 text-slate-500" />
                <span>{duration} Mins</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/[0.03] border border-white/[0.07] px-2.5 py-0.5 rounded-[1px] font-mono text-[9px] text-slate-350">
                <Star className="w-2.5 h-2.5 text-slate-400 fill-slate-400/30" />
                <span>★ {rating.toFixed(1)}</span>
              </div>
            </div>

            {/* Editorial Poetic Climate Header */}
            <div className="bg-[#020306] border-l border-white/20 p-4 pl-5 rounded-[1px] mb-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.01)]">
              <p className="font-serif text-[13px] text-slate-200 tracking-wider italic leading-relaxed text-left">
                「 {poeticSummary} 」
              </p>
            </div>

            {/* Structured Details Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[11.5px] font-sans text-left text-slate-300 border-b border-white/[0.05] pb-5 mb-5 select-text font-light">
              <div>
                <p className="font-mono text-[8px] tracking-[0.25em] text-slate-500 uppercase mb-1">Director / 编导</p>
                <p className="text-slate-300">{director.name} <span className="text-slate-500 text-[9px] font-mono">({director.region})</span></p>
              </div>
              <div>
                <p className="font-mono text-[8px] tracking-[0.25em] text-slate-500 uppercase mb-1">Genres / 风格类型</p>
                <div className="flex gap-1.5 flex-wrap">
                  {genre.map(g => (
                    <span key={g} className="bg-white/[0.02] border border-white/[0.05] px-1.5 py-0.5 rounded-[1px] text-[9.5px] text-slate-450">{g}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Full Synoptic Summary description */}
            <div className="text-left mb-6 font-sans">
              <p className="font-mono text-[8px] tracking-[0.25em] text-slate-500 uppercase mb-1.5">Official Archive Log / 影片录入记录</p>
              <p className="text-[12px] text-slate-300 leading-relaxed tracking-wider select-text font-light">
                {summary}
              </p>
            </div>

            {/* Dream & Memory Records Ledger section */}
            <div className="border-t border-white/[0.06] pt-6 text-left">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-serif text-[13px] text-[#E5E7EB] tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-slate-400" />
                    <span>观影记忆与想象重构</span>
                  </h3>
                  <p className="text-[8px] font-mono text-slate-500 tracking-[0.18em] uppercase mt-0.5">MEMORIES AND DREAMS LEDGER INDEX</p>
                </div>
                
                <span className="font-mono text-[9px] text-slate-450 bg-black/60 border border-white/[0.05] px-2 py-0.5 rounded-[1px]">
                  {logs.length} RECORDS
                </span>
              </div>

              {/* Log Entry Submission Form */}
              <form onSubmit={handleAddLog} className="grid grid-cols-1 gap-2.5 mb-4 font-mono select-none">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setLogType('memory')}
                    className={`flex-1 flex items-center justify-center gap-1.5 py-1 px-3 rounded-[1px] border text-[8px] tracking-[0.22em] transition-all duration-500 uppercase ${
                      logType === 'memory'
                        ? 'bg-white/[0.06] border-white/12 text-white'
                        : 'bg-transparent border-white/[0.03] text-slate-500 hover:text-slate-400'
                    }`}
                  >
                    <FileText className="w-2.5 h-2.5 opacity-50" />
                    <span>回忆 ARCHIVE MEMORY</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setLogType('dream')}
                    className={`flex-1 flex items-center justify-center gap-1.5 py-1 px-3 rounded-[1px] border text-[8px] tracking-[0.22em] transition-all duration-500 uppercase ${
                      logType === 'dream'
                        ? 'bg-white/[0.06] border-white/12 text-white'
                        : 'bg-transparent border-white/[0.03] text-slate-500 hover:text-slate-400'
                    }`}
                  >
                    <Plus className="w-2.5 h-2.5 rotate-45 opacity-50" />
                    <span>梦境 CHRONICLE DREAM</span>
                  </button>
                </div>

                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newLogContent}
                    onChange={(e) => setNewLogContent(e.target.value)}
                    placeholder={logType === 'memory' ? '记下这部电影唤醒的世界与回忆...' : '写下因这部电影催生的半醒之梦与空灵想象...'}
                    maxLength={150}
                    className="flex-grow bg-black/85 border border-white/[0.05] focus:border-white/12 rounded-[1.5px] py-1.5 px-3 text-[11px] text-[#E5E7EB] placeholder:text-slate-650 tracking-wider outline-none transition-all duration-300 leading-normal font-sans"
                    id={`diary-input-${title}`}
                  />
                  <button
                    type="submit"
                    className="bg-white hover:bg-slate-200 text-slate-950 font-sans font-medium text-[10px] tracking-[0.25em] px-4 py-2 rounded-[1px] transition-colors duration-300 shrink-0 uppercase"
                  >
                    SUBMIT
                  </button>
                </div>
              </form>

              {/* Log ledger rows list */}
              <div className="space-y-2 max-h-[160px] overflow-y-auto pr-1">
                {logs.length === 0 ? (
                  <div className="text-center py-6 border border-dashed border-white/[0.04] rounded-[1.5px] bg-white/[0.002]">
                    <MessageSquare className="w-3.5 h-3.5 text-slate-700 mx-auto mb-1.5 opacity-50" />
                    <p className="text-[10px] font-sans text-slate-500 italic">尚未为此电影归档任何记忆或梦境。</p>
                  </div>
                ) : (
                  logs.map(log => (
                    <div
                      key={log.id}
                      className="flex items-start justify-between gap-4 p-2.5 rounded-[1.5px] border border-white/[0.04] bg-white/[0.005] transition-all duration-300"
                    >
                      <div className="flex gap-2.5 items-start">
                        <span className={`inline-block font-mono text-[7px] uppercase tracking-[0.16em] px-1.5 py-0.5 rounded-[1px] mt-0.5 truncate max-w-[60px] border ${
                          log.type === 'memory'
                            ? 'bg-white/[0.02] text-slate-400 border-white/[0.04]'
                            : 'bg-white/[0.08] text-white/95 border-white/[0.1]'
                        }`}>
                          {log.type === 'memory' ? '记忆' : '梦境'}
                        </span>
                        <div>
                          <p className="text-[11px] select-text text-slate-350 leading-relaxed font-sans font-light">
                            {log.content}
                          </p>
                          <span className="block font-mono text-[7.5px] text-slate-600 mt-1">{log.timestamp}</span>
                        </div>
                      </div>

                      <button
                        onClick={() => handleDeleteLog(log.id)}
                        className="text-slate-600 hover:text-red-400 p-1 rounded hover:bg-white/5 transition-colors duration-300 shrink-0"
                        title="删除记录"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
