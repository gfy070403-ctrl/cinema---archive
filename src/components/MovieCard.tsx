import React from 'react';
import { Movie } from '../moviesData';
import { MoviePoster } from './MoviePoster';

interface MovieCardProps {
  movie: Movie;
  onClick: () => void;
}

export const MovieCard: React.FC<MovieCardProps> = ({ movie, onClick }) => {
  const { title, director, year, rating, region, poeticSummary } = movie;

  return (
    <div
      onClick={onClick}
      className="group cursor-pointer flex flex-col h-full bg-[#020306] rounded-[2px] overflow-hidden border border-white/[0.06] hover:border-white/20 transition-all duration-700 ease-in-out shadow-[0_15px_40px_rgba(0,0,0,0.85)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.95)]"
    >
      {/* Aspect Ratio Wrap for poster */}
      <div className="relative w-full overflow-hidden aspect-[2/3] border-b border-white/[0.04]">
        <MoviePoster movie={movie} className="w-full h-full" />
        
        {/* Soft atmospheric white-deer dream flare swipe */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-[1200ms] ease-out z-10 pointer-events-none" />
        
        {/* Soft shadow split */}
        <div className="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-black/55 to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-700 z-10 pointer-events-none" />
      </div>

      {/* Card Info Details Panel - high contrast luxury layout with extremely low information density */}
      <div className="p-4 md:p-5 flex flex-col flex-grow justify-between bg-black/30 backdrop-blur-sm">
        <div>
          {/* Top metadata Row with quiet font styling */}
          <div className="flex items-center justify-between font-mono text-[8px] text-slate-500 tracking-[0.25em] mb-2 uppercase select-none">
            <span>{region[0]}</span>
            <span>{year} 年</span>
          </div>

          {/* Chinese Film Title - Editorial Serif */}
          <h3 className="font-serif text-[16px] sm:text-[17px] text-white/90 group-hover:text-white transition-colors duration-500 font-light tracking-[0.06em] truncate">
            {title}
          </h3>

          {/* Elegant microscopic divider line */}
          <div className="h-[0.5px] w-full bg-white/[0.04] my-3" />

          {/* Poetic Atmosphere climate summary */}
          <p className="font-serif text-[11.5px] text-slate-400 group-hover:text-slate-300 leading-relaxed tracking-wider italic line-clamp-2 transition-colors duration-500">
            {poeticSummary}
          </p>
        </div>

        {/* Dynamic score and index labels */}
        <div className="flex items-center justify-between pt-1 mt-2 font-mono">
          <div className="flex items-center gap-1 bg-white/[0.03] border border-white/[0.06] px-2 py-0.5 rounded-[2px]">
            <span className="text-white/40 text-[8px]">★</span>
            <span className="text-[9.5px] font-light text-slate-300">{rating.toFixed(1)}</span>
          </div>
          
          <span className="text-[8px] tracking-[0.25em] uppercase text-white/30 group-hover:text-white/80 transition-colors duration-500 flex items-center gap-1 select-none">
            ENTRY ✦ DETAIL
          </span>
        </div>
      </div>
    </div>
  );
};
