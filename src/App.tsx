import React, { useState, useMemo } from 'react';
import { movies, Movie } from './moviesData';
import { Header } from './components/Header';
import { Filters } from './components/Filters';
import { MovieCard } from './components/MovieCard';
import { MovieDetailModal } from './components/MovieDetailModal';
import { AnimatePresence, motion } from 'motion/react';
import { Archive, Film, Sparkles, AlertCircle, Info } from 'lucide-react';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('all');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedDecade, setSelectedDecade] = useState('all');
  const [sortByRating, setSortByRating] = useState<'desc' | 'asc' | 'none'>('none');
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  // Dynamically compile list of all unique genres across all 57 movies
  const allGenres = useMemo(() => {
    const genresSet = new Set<string>();
    movies.forEach(movie => {
      movie.genre.forEach(g => genresSet.add(g));
    });
    return Array.from(genresSet).sort();
  }, []);

  // Dynamically compile list of all unique primary regions across all 57 movies
  const allRegions = useMemo(() => {
    const regionsSet = new Set<string>();
    movies.forEach(movie => {
      movie.region.forEach(r => regionsSet.add(r));
    });
    return Array.from(regionsSet).sort();
  }, []);

  // Advanced searching and filtering query logic
  const filteredMovies = useMemo(() => {
    let result = [...movies];

    // 1. Text Search Filter (Title, English title, director, summary, genre, region)
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      result = result.filter(movie => {
        const matchesTitle = movie.title.toLowerCase().includes(query);
        const matchesEngTitle = movie.englishTitle.toLowerCase().includes(query);
        const matchesDirector = movie.director.name.toLowerCase().includes(query);
        const matchesSummary = movie.summary.toLowerCase().includes(query);
        const matchesRegion = movie.region.some(r => r.toLowerCase().includes(query));
        const matchesGenre = movie.genre.some(g => g.toLowerCase().includes(query));
        const matchesPoetic = movie.poeticSummary.toLowerCase().includes(query);
        const matchesYear = movie.year.toString().includes(query);

        return (
          matchesTitle ||
          matchesEngTitle ||
          matchesDirector ||
          matchesSummary ||
          matchesRegion ||
          matchesGenre ||
          matchesPoetic ||
          matchesYear
        );
      });
    }

    // 2. Genre Category Filter
    if (selectedGenre !== 'all') {
      result = result.filter(movie => movie.genre.includes(selectedGenre));
    }

    // 3. Region Origin Filter
    if (selectedRegion !== 'all') {
      result = result.filter(movie => movie.region.includes(selectedRegion));
    }

    // 4. Decade Era Filter
    if (selectedDecade !== 'all') {
      result = result.filter(movie => {
        const y = movie.year;
        if (selectedDecade === '1930-1959') return y >= 1930 && y <= 1959;
        if (selectedDecade === '1960-1979') return y >= 1960 && y <= 1979;
        if (selectedDecade === '1980') return y >= 1980 && y <= 1989;
        if (selectedDecade === '1990') return y >= 1990 && y <= 1999;
        if (selectedDecade === '2000') return y >= 2000 && y <= 2009;
        if (selectedDecade === '2010') return y >= 2010 && y <= 2019;
        return true;
      });
    }

    // 5. Film Rating Sorting
    if (sortByRating === 'desc') {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sortByRating === 'asc') {
      result.sort((a, b) => a.rating - b.rating);
    }

    return result;
  }, [searchQuery, selectedGenre, selectedRegion, selectedDecade, sortByRating]);

  // Clean filters helper
  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedGenre('all');
    setSelectedRegion('all');
    setSelectedDecade('all');
    setSortByRating('none');
  };

  return (
    <div className="min-h-screen bg-[#04060A] text-[#E5E7EB] flex flex-col justify-between font-sans selection:bg-white/10 selection:text-white relative overflow-hidden">
      {/* Immersive UI: Quiet Dot Grid Pattern representing floating cinematic dust */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.06] z-0" 
        style={{ 
          backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)", 
          backgroundSize: "32px 32px" 
        }} 
      />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-slate-500/[0.02] rounded-full blur-[130px] -translate-y-1/2 translate-x-1/3 pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#020306] to-transparent pointer-events-none z-0" />

      {/* Main Content Body Container */}
      <div className="relative z-10 w-full flex flex-col flex-grow">
        {/* Core Header section */}
        <Header />

        {/* Content wrap area */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 w-full flex-grow">
          {/* Curated Filter and Search Controls Row */}
          <Filters
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedGenre={selectedGenre}
            setSelectedGenre={setSelectedGenre}
            selectedRegion={selectedRegion}
            setSelectedRegion={setSelectedRegion}
            selectedDecade={selectedDecade}
            setSelectedDecade={setSelectedDecade}
            sortByRating={sortByRating}
            setSortByRating={setSortByRating}
            allGenres={allGenres}
            allRegions={allRegions}
          />

          {/* Results Status Row */}
          <div className="flex items-center justify-between mb-6 font-mono text-[10px] tracking-[0.2em] text-slate-500 uppercase">
            <div className="flex items-center gap-2 font-light">
              <Archive className="w-3.5 h-3.5 text-slate-600 stroke-[1.5]" />
              <span>Catalog Index: {filteredMovies.length} / 57 entries</span>
            </div>
            
            {(searchQuery || selectedGenre !== 'all' || selectedRegion !== 'all' || selectedDecade !== 'all') && (
              <span className="text-slate-300 font-sans tracking-widest text-[9.5px] font-light">已启用检索过滤 / Filtered Archive</span>
            )}
          </div>

          {/* Core Movie Cards Grid Panel */}
          {filteredMovies.length > 0 ? (
            <motion.div 
              layout
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8"
            >
              <AnimatePresence mode="popLayout">
                {filteredMovies.map((movie, idx) => (
                  <motion.div
                    key={movie.title}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: Math.min(idx * 0.04, 0.4),
                      ease: [0.16, 1, 0.3, 1] 
                    }}
                    layout
                  >
                    <MovieCard
                      movie={movie}
                      onClick={() => setSelectedMovie(movie)}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            /* Pristine Cinematic Empty State */
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="border border-dashed border-white/10 rounded-lg py-16 px-4 text-center max-w-lg mx-auto bg-white/[0.01] my-10"
              id="empty-results-fallback"
            >
              <AlertCircle className="w-8 h-8 text-slate-600 mx-auto mb-4" />
              <h3 className="font-serif text-lg text-slate-300 tracking-wide">
                未寻得相关的梦境痕迹
              </h3>
              <p className="font-sans text-xs text-slate-500 leading-relaxed max-w-sm mx-auto mt-2 mb-6">
                在当前的电影档案馆中，没有找到匹配所述的电影。请尝试放松过滤条件或重置进行新探索。
              </p>
              <button
                onClick={handleClearFilters}
                className="bg-white/10 border border-white/10 hover:bg-white/20 text-white font-sans font-medium text-xs tracking-wider py-2 px-5 rounded-[4px] transition-all duration-300 cursor-pointer"
              >
                重置过滤器列表
              </button>
            </motion.div>
          )}
        </main>
      </div>

      {/* Elegant Curatorial Architectural Footer */}
      <footer className="relative z-10 w-full border-t border-white/10 bg-transparent py-10 select-none font-mono">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center md:items-end gap-6 text-center md:text-left">
          {/* Left: Archive Number & Design Credits */}
          <div className="flex flex-col gap-1.5 md:items-start">
            <div className="text-[10px] text-slate-500 tracking-[0.4em] uppercase">
              Archive Collection / 01-57
            </div>
            <div className="text-[11px] text-slate-600 font-sans font-light">
              Aetheris Ledger © 2026 · 以太梦象馆特展
            </div>
          </div>
          
          {/* Center: Poetics subtitle */}
          <div className="flex flex-col items-center gap-1 font-serif text-sm text-slate-300 tracking-wider">
            <span>黑猫、白鹿、圣像与宇宙尘埃</span>
            <span className="font-mono text-[9px] text-slate-650 tracking-[0.2em] uppercase">
              Cats, Deer, Icons & Cosmic Dust
            </span>
          </div>

          {/* Right: Aesthetics & Curation metadata blocks */}
          <div className="flex space-x-12">
            <div className="flex flex-col text-left">
              <span className="text-[8px] text-slate-600 tracking-widest uppercase mb-1">Aesthetics</span>
              <span className="text-[10px] text-slate-400">Silent & Poetic</span>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[8px] text-slate-600 tracking-widest uppercase mb-1">Curation</span>
              <span className="text-[10px] text-slate-400">Minimalist Archive</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Detail Showcase Modal Overlay Render */}
      <AnimatePresence>
        {selectedMovie && (
          <MovieDetailModal
            movie={selectedMovie}
            onClose={() => setSelectedMovie(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
