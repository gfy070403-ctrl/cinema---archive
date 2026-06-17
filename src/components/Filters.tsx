import React from 'react';

interface FiltersProps {
  searchQuery: string;
  setSearchQuery: (val: string) => void;
  selectedGenre: string;
  setSelectedGenre: (val: string) => void;
  selectedRegion: string;
  setSelectedRegion: (val: string) => void;
  selectedDecade: string;
  setSelectedDecade: (val: string) => void;
  sortByRating: 'desc' | 'asc' | 'none';
  setSortByRating: (val: 'desc' | 'asc' | 'none') => void;
  allGenres: string[];
  allRegions: string[];
}

export const Filters: React.FC<FiltersProps> = ({
  searchQuery,
  setSearchQuery,
  selectedGenre,
  setSelectedGenre,
  selectedRegion,
  setSelectedRegion,
  selectedDecade,
  setSelectedDecade,
  sortByRating,
  setSortByRating,
  allGenres,
  allRegions,
}) => {
  const decades = [
    { label: '全部年代', value: 'all' },
    { label: '1930 - 1950年代', value: '1930-1959' },
    { label: '1960 - 1970年代', value: '1960-1979' },
    { label: '1980年代', value: '1980' },
    { label: '1990年代', value: '1990' },
    { label: '2000年代', value: '2000' },
    { label: '2010年代', value: '2010' },
  ];

  const handleReset = () => {
    setSearchQuery('');
    setSelectedGenre('all');
    setSelectedRegion('all');
    setSelectedDecade('all');
    setSortByRating('none');
  };

  const hasActiveFilters = 
    searchQuery !== '' || 
    selectedGenre !== 'all' || 
    selectedRegion !== 'all' || 
    selectedDecade !== 'all' || 
    sortByRating !== 'none';

  return (
    <div className="w-full bg-[#020306]/70 backdrop-blur-2xl border border-white/[0.05] rounded-[2px] p-4 md:p-6 mb-8 select-none shadow-[inset_0_1px_0_rgba(255,255,255,0.03),0_10px_40px_rgba(0,0,0,0.85)]">
      <div className="flex flex-col gap-5">
        {/* Row 1: Search Bar aligned with editorial classic style */}
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 opacity-35 text-[8.5px] font-mono tracking-[0.25em] text-slate-350 select-none">SEARCH / CATALOG INDEX</span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="输入电影名称、编导主创、艺术关键词..."
            className="w-full bg-black/60 border border-white/[0.05] focus:border-white/12 rounded-[1px] py-2.5 sm:py-3 pl-36 pr-10 text-xs sm:text-[12.5px] text-white tracking-wider outline-none transition-all duration-500 placeholder:text-slate-650 font-sans font-light"
            id="global-search-input"
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-1.5 pointer-events-none text-slate-500">
            {searchQuery && (
              <button 
                type="button" 
                onClick={(e) => {
                  e.stopPropagation();
                  setSearchQuery('');
                }}
                className="pointer-events-auto text-slate-500 hover:text-white p-0.5 transition-colors duration-300"
              >
                ✕
              </button>
            )}
            <svg
              className="w-3.5 h-3.5 opacity-30"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.637 10.636Z" />
            </svg>
          </div>
        </div>

        {/* Row 2: Select Selectors Dropdowns */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3.5">
          {/* Genre drop menu */}
          <div className="flex flex-col text-left">
            <label className="font-mono text-[8px] tracking-[0.25em] text-slate-500 uppercase mb-2 pl-0.5">GENRE / 类型</label>
            <select
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
              className="bg-black/80 border border-white/[0.05] hover:border-white/10 rounded-[1px] py-2 px-3 text-xs text-slate-300 font-sans cursor-pointer focus:border-white/12 outline-none leading-normal transition-colors"
              id="filter-genre-select"
            >
              <option value="all">全部类型</option>
              {allGenres.map((g) => (
                <option key={g} value={g}>
                  {g}
                </option>
              ))}
            </select>
          </div>

          {/* Region drop menu */}
          <div className="flex flex-col text-left">
            <label className="font-mono text-[8px] tracking-[0.25em] text-slate-500 uppercase mb-2 pl-0.5">REGION / 摄制国别</label>
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="bg-black/80 border border-white/[0.05] hover:border-white/10 rounded-[1px] py-2 px-3 text-xs text-slate-300 font-sans cursor-pointer focus:border-white/12 outline-none leading-normal transition-colors"
              id="filter-region-select"
            >
              <option value="all">全部国家地区</option>
              {allRegions.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </div>

          {/* Decade drop menu */}
          <div className="flex flex-col text-left">
            <label className="font-mono text-[8px] tracking-[0.25em] text-slate-500 uppercase mb-2 pl-0.5">DECADE / 录入年代</label>
            <select
              value={selectedDecade}
              onChange={(e) => setSelectedDecade(e.target.value)}
              className="bg-black/80 border border-white/[0.05] hover:border-white/10 rounded-[1px] py-2 px-3 text-xs text-slate-300 font-sans cursor-pointer focus:border-white/12 outline-none leading-normal transition-colors"
              id="filter-decade-select"
            >
              {decades.map((d) => (
                <option key={d.value} value={d.value}>
                  {d.label}
                </option>
              ))}
            </select>
          </div>

          {/* Rating sorting handler */}
          <div className="flex flex-col text-left">
            <label className="font-mono text-[8px] tracking-[0.25em] text-slate-500 uppercase mb-2 pl-0.5">RATING / 评分排序</label>
            <button
              onClick={() => {
                if (sortByRating === 'none') setSortByRating('desc');
                else if (sortByRating === 'desc') setSortByRating('asc');
                else setSortByRating('none');
              }}
              className="bg-white/[0.01] border border-white/[0.05] hover:border-white/10 rounded-[1px] py-2 px-3 text-xs text-slate-300 font-sans text-left transition-colors flex justify-between items-center h-full"
              type="button"
              id="sort-rating-button"
            >
              <span className="truncate text-slate-400 font-sans">
                {sortByRating === 'none' && '不进行排序'}
                {sortByRating === 'desc' && '评分：从高到低'}
                {sortByRating === 'asc' && '评分：从低到高'}
              </span>
              <span className="text-[9px] text-slate-500 font-mono">
                {sortByRating === 'none' && '↕'}
                {sortByRating === 'desc' && '↓'}
                {sortByRating === 'asc' && '↑'}
              </span>
            </button>
          </div>

          {/* Reset Filters Option */}
          <div className="flex flex-col justify-end">
            <button
              onClick={handleReset}
              disabled={!hasActiveFilters}
              className={`py-2 rounded-[1.5px] text-xs font-sans tracking-widest transition-all duration-500 leading-normal border ${
                hasActiveFilters
                  ? 'bg-white/[0.05] border-white/10 text-white hover:bg-white/10 cursor-pointer shadow-md'
                  : 'bg-white/[0.005] border-white/[0.03] text-slate-700 cursor-not-allowed'
              }`}
              type="button"
              id="reset-filters-button"
            >
              RESET FILTER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
