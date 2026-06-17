import React from 'react';
import { Movie } from '../moviesData';

interface MoviePosterProps {
  movie: Movie;
  className?: string;
  isDetailed?: boolean;
}

export const MoviePoster: React.FC<MoviePosterProps> = ({ movie, className = '', isDetailed = false }) => {
  const { title, englishTitle, year, director, rating, genre, artworkStyle } = movie;
  const { bgFrom, bgTo, shapeType, color, accentColor } = artworkStyle;

  // Dynamically map all 57 movies' shapes to the 5 exquisite Moodboard Archetypes
  const mappedShape = React.useMemo(() => {
    const s = shapeType;
    if (['galaxy', 'stars', 'moon', 'hourglass', 'path', 'train'].includes(s)) {
      return 'astronaut';
    }
    if (['rose', 'mask', 'feather', 'key', 'tree'].includes(s)) {
      return 'cat';
    }
    if (['gate', 'grid', 'city', 'chess'].includes(s)) {
      return 'goddess';
    }
    if (['ocean', 'flower'].includes(s)) {
      return 'flower';
    }
    return 'deer'; // fallback for rings, violin, light, etc.
  }, [shapeType]);

  // Render the specific Moodboard masterpiece vector illustration
  const renderAbstractShape = () => {
    switch (mappedShape) {
      case 'cat': // 1. The Diamond Velvet Cat (钻面黑猫 - Luxury Satin void)
        return (
          <svg className="w-full h-full opacity-85" viewBox="0 0 200 300" fill="none">
            <defs>
              <radialGradient id={`catGlow-${title.replace(/\s+/g, '-')}`} cx="50%" cy="40%" r="40%">
                <stop offset="0%" stopColor="#00f3ff" stopOpacity="0.35" />
                <stop offset="60%" stopColor={accentColor} stopOpacity="0.1" />
                <stop offset="100%" stopColor="#000000" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx="100" cy="120" r="85" fill={`url(#catGlow-${title.replace(/\s+/g, '-')})`} />
            
            {/* The elegant black cat silhouette ears (Minimalist vector outline) */}
            <path
              d="M 50 160 C 50 110, 55 95, 62 82 L 40 45 L 80 65 C 90 60, 100 60, 110 65 L 150 45 L 128 82 C 135 95, 140 110, 140 160 Z"
              fill="#010204"
              stroke="rgba(255, 255, 255, 0.15)"
              strokeWidth="0.75"
            />
            {/* Diamond Collar Crown Lines */}
            <path
              d="M 60 170 Q 100 190, 130 170"
              stroke="#ffffff"
              strokeWidth="1"
              strokeDasharray="2 2"
              opacity="0.85"
            />
            <path
              d="M 50 162 Q 100 185, 140 162"
              stroke={accentColor}
              strokeWidth="0.5"
              opacity="0.6"
            />
            {/* Hanging central diamond crystal pendant */}
            <line x1="95" y1="184" x2="95" y2="205" stroke="#ffffff" strokeWidth="0.75" />
            <polygon points="95,205 91,211 95,217 99,211" fill="#ffffff" />
            
            {/* Hypnotic Glowing Cat Eyes encrusted with diamonds */}
            <ellipse cx="78" cy="115" rx="12" ry="7" fill="#010205" stroke="rgba(255,255,255,0.25)" strokeWidth="0.5" />
            <ellipse cx="112" cy="115" rx="12" ry="7" fill="#010205" stroke="rgba(255,255,255,0.25)" strokeWidth="0.5" />
            
            {/* Glowing cyan pupil slit */}
            <ellipse cx="78" cy="115" rx="2.5" ry="6.5" fill="#00ffff" />
            <ellipse cx="112" cy="115" rx="2.5" ry="6.5" fill="#00ffff" />
            <circle cx="79.5" cy="113" r="1.2" fill="#ffffff" />
            <circle cx="113.5" cy="113" r="1.2" fill="#ffffff" />
            
            {/* Diamond sparkles around eyelids */}
            <path d="M 63 115 L 65 117 L 63 119 L 61 117 Z" fill="#ffffff" opacity="0.9" />
            <path d="M 93 115 L 95 117 L 93 119 L 91 117 Z" fill="#ffffff" opacity="0.9" />
            <path d="M 78 103 L 80 105 L 78 107 L 76 105 Z" fill="#ffffff" opacity="0.9" />
            <path d="M 97 115 L 99 117 L 97 119 L 95 117 Z" fill="#ffffff" opacity="0.9" />
            <path d="M 127 115 L 129 117 L 127 119 L 125 117 Z" fill="#ffffff" opacity="0.9" />
            <path d="M 112 103 L 114 105 L 112 107 L 110 105 Z" fill={color} opacity="0.9" />

            {/* Glowing rhinestone dots cluster */}
            <circle cx="70" cy="111" r="1.2" fill="#ffffff" />
            <circle cx="74" cy="108" r="1.2" fill="#ffffff" />
            <circle cx="82" cy="108" r="1.2" fill={accentColor} />
            <circle cx="86" cy="111" r="1.2" fill="#ffffff" />
            
            <circle cx="104" cy="111" r="1.2" fill="#ffffff" />
            <circle cx="108" cy="108" r="1.2" fill={accentColor} />
            <circle cx="116" cy="108" r="1.2" fill="#ffffff" />
            <circle cx="120" cy="111" r="1.2" fill="#ffffff" />

            {/* Whisker Vectors representation */}
            <line x1="50" y1="135" x2="25" y2="132" stroke="rgba(255,255,255,0.25)" strokeWidth="0.5" />
            <line x1="50" y1="141" x2="20" y2="143" stroke="rgba(255,255,255,0.18)" strokeWidth="0.5" />
            <line x1="140" y1="135" x2="165" y2="132" stroke="rgba(255,255,255,0.25)" strokeWidth="0.5" />
            <line x1="140" y1="141" x2="170" y2="143" stroke="rgba(255,255,255,0.18)" strokeWidth="0.5" />

            <text x="100" y="245" fill="white" fillOpacity="0.4" fontSize="8" fontFamily="monospace" letterSpacing="0.3em" textAnchor="middle">THE END</text>
            <text x="100.5" y="245.5" fill="#00f3ff" fillOpacity="0.25" fontSize="8" fontFamily="monospace" letterSpacing="0.3em" textAnchor="middle">THE END</text>
          </svg>
        );

      case 'deer': // 2. The Luminous Stag (幻光神鹿 - White Stag on brilliant water)
        return (
          <svg className="w-full h-full opacity-90" viewBox="0 0 200 300" fill="none">
            <defs>
              <radialGradient id={`deerGlow-${title.replace(/\s+/g, '-')}`} cx="50%" cy="40%" r="55%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
                <stop offset="35%" stopColor="#fff9e0" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#000000" stopOpacity="0" />
              </radialGradient>
            </defs>
            {/* Blinding warm sunset-like halo or water light reflection */}
            <circle cx="100" cy="115" r="70" fill={`url(#deerGlow-${title.replace(/\s+/g, '-')})`} />
            
            {/* Overlapping soft light flare spots */}
            <circle cx="65" cy="100" r="28" fill="#ffffff" fillOpacity="0.12" style={{ mixBlendMode: 'screen' }} />
            <circle cx="130" cy="85" r="35" fill={accentColor} fillOpacity="0.08" style={{ mixBlendMode: 'screen' }} />
            <circle cx="110" cy="130" r="18" fill={color} fillOpacity="0.1" style={{ mixBlendMode: 'screen' }} />

            {/* Pristine Minimalist White Stag Silhouette */}
            <path
              d="M 125 140 C 112 140, 108 143, 100 148 C 96 142, 94 135, 94 125 C 94 110, 89 90, 89 83 C 89 81, 91 80, 93 80 C 95 80, 97 83, 98 87 C 101 81, 107 72, 108 67 C 109 65, 106 64, 104 65 C 99 68, 93 78, 90 85 C 89 80, 83 75, 79 73 C 77 72, 77 74, 79 75 C 84 79, 87 87, 88 92 C 86 92, 83 91, 79 90 C 76 89, 75 91, 77 92 C 81 95, 85 98, 88 102 C 86 109, 83 120, 83 128 C 83 138, 79 146, 73 149 L 71 146 C 70 145, 68 146, 69 148 L 74 157 C 76 160, 78 159, 79 156 L 85 140 C 88 135, 90 140, 93 145 L 85 175 C 84 177, 85 179, 87 179 L 91 179 C 94 179, 95 176, 96 172 L 102 149 Q 112 142, 125 145 Z"
              fill="#ffffff"
            />

            {/* Elegant antlers representing micro white branches */}
            <path d="M 89 83 Q 84 65, 75 55 T 80 40 Q 86 52, 89 65" stroke="#ffffff" strokeWidth="0.75" />
            <path d="M 82 60 Q 77 50, 68 46 T 70 38" stroke="#ffffff" strokeWidth="0.5" />
            <path d="M 91 83 Q 99 65, 108 58 T 114 43 Q 106 53, 99 67" stroke="#ffffff" strokeWidth="0.75" />
            <path d="M 98 61 Q 104 53, 112 50 T 110 40" stroke="#ffffff" strokeWidth="0.5" />

            {/* Glowing water ripples (concentric horizontal dream rings) */}
            <ellipse cx="100" cy="183" rx="45" ry="3.5" stroke="#ffffff" strokeWidth="0.5" fill="none" opacity="0.65" />
            <ellipse cx="101" cy="183" rx="65" ry="5.5" stroke="#ffffff" strokeWidth="0.25" fill="none" opacity="0.45" />
            <ellipse cx="98" cy="183" rx="20" ry="1.5" stroke="rgba(255,255,255,0.75)" strokeWidth="0.75" fill="none" />
            <ellipse cx="100" cy="183" rx="85" ry="7.5" stroke={accentColor} strokeWidth="0.25" strokeDasharray="4 2" fill="none" opacity="0.35" />

            {/* Micro gold core light flares */}
            <circle cx="100" cy="183" r="14" fill="#fffbcf" fillOpacity="0.15" />
            <line x1="100" y1="165" x2="100" y2="200" stroke="#ffffff" strokeWidth="0.5" opacity="0.5" />
          </svg>
        );

      case 'goddess': // 3. The Pearl Icon (银色塑像 - Heavy chrome volume torso with halo)
        return (
          <svg className="w-full h-full opacity-85" viewBox="0 0 200 300" fill="none">
            <defs>
              <linearGradient id={`silverGloss-${title.replace(/\s+/g, '-')}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="25%" stopColor="#d1d5db" />
                <stop offset="50%" stopColor="#ffffff" />
                <stop offset="75%" stopColor="#4b5563" />
                <stop offset="100%" stopColor="#e5e7eb" />
              </linearGradient>
              <radialGradient id={`goddessHalo-${title.replace(/\s+/g, '-')}`} cx="50%" cy="40%" r="50%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.35" />
                <stop offset="60%" stopColor="#e2e8f0" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#000000" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx="100" cy="120" r="80" fill={`url(#goddessHalo-${title.replace(/\s+/g, '-')})`} />

            {/* Liquid silver mirror-chrome sacred goddess head silhouette */}
            <path
              d="M 100 45 C 88 45, 82 55, 82 68 C 82 82, 94 95, 100 105 C 106 95, 118 82, 118 68 C 118 55, 112 45, 100 45 Z"
              fill={`url(#silverGloss-${title.replace(/\s+/g, '-')})`}
            />
            {/* Elegant chrome torso and shoulders block (Sculptural weight) */}
            <path
              d="M 100 102 C 85 110, 60 120, 52 145 C 46 162, 50 205, 50 220 L 150 220 C 150 205, 154 162, 148 145 C 140 120, 115 110, 100 102 Z"
              fill={`url(#silverGloss-${title.replace(/\s+/g, '-')})`}
              stroke="rgba(255, 255, 255, 0.3)"
              strokeWidth="0.5"
            />

            {/* Absolute Liquid Chrome Reflections Lines */}
            <path
              d="M 76 135 C 72 150, 75 180, 80 205 C 81 210, 85 210, 84 205 C 78 180, 75 150, 80 132 M 124 135 C 128 150, 125 180, 120 205 C 119 210, 115 210, 116 205 C 122 180, 125 150, 120 132"
              stroke="#ffffff"
              strokeWidth="0.75"
              fill="none"
              opacity="0.8"
            />
            
            <circle cx="100" cy="68" r="3" fill="#ffffff" />
            <circle cx="100" cy="68" r="8" stroke="#ffffff" strokeWidth="0.25" strokeDasharray="2 2" />

            {/* Pearl necklace micro links */}
            <path d="M 85 116 Q 100 128, 115 116" stroke="#ffffff" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
            <path d="M 80 123 Q 100 138, 120 123" stroke="#ffffff" strokeWidth="0.5" strokeDasharray="1 1" />

            {/* Sacred halo ray lines */}
            <g opacity="0.35">
              <line x1="100" y1="20" x2="100" y2="40" stroke="#ffffff" strokeWidth="0.5" />
              <line x1="100" y1="200" x2="100" y2="220" stroke="#ffffff" strokeWidth="0.5" />
              <line x1="50" y1="120" x2="70" y2="120" stroke="#ffffff" strokeWidth="0.5" />
              <line x1="130" y1="120" x2="150" y2="120" stroke="#ffffff" strokeWidth="0.5" />
              <line x1="65" y1="65" x2="79" y2="79" stroke="#ffffff" strokeWidth="0.5" />
              <line x1="135" y1="65" x2="121" y2="79" stroke="#ffffff" strokeWidth="0.5" />
            </g>

            {/* Sharp diamond flares on high reflective points */}
            <path d="M 52 145 L 54 147 L 52 149 L 50 147 Z" fill="#ffffff" />
            <path d="M 148 145 L 150 147 L 148 149 L 146 147 Z" fill="#ffffff" />
          </svg>
        );

      case 'flower': // 4. The Crystal Bloom (水晶之花 - Liquid reflection glass flower)
        return (
          <svg className="w-full h-full opacity-85" viewBox="0 0 200 300" fill="none">
            <defs>
              <linearGradient id={`flowerStem-${title.replace(/\s+/g, '-')}`} x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="100%" stopColor={color} stopOpacity="0.15" />
              </linearGradient>
              <linearGradient id={`petal1-${title.replace(/\s+/g, '-')}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
                <stop offset="50%" stopColor="#00ffff" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#a855f7" stopOpacity="0.05" />
              </linearGradient>
              <linearGradient id={`petal2-${title.replace(/\s+/g, '-')}`} x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
                <stop offset="50%" stopColor="#ec4899" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
              </linearGradient>
            </defs>
            {/* Stem made of thick clear glass light line */}
            <path d="M 100 240 Q 103 160, 100 135" stroke={`url(#flowerStem-${title.replace(/\s+/g, '-')})`} strokeWidth="1.5" />
            <path d="M 100 170 Q 75 140, 71 125 C 75 115, 95 125, 100 145" stroke="rgba(255,255,255,0.4)" strokeWidth="0.75" />
            <path d="M 100 150 Q 125 120, 129 105 C 125 95, 105 105, 100 130" stroke="rgba(255,255,255,0.4)" strokeWidth="0.75" />

            {/* Overlapping liquid crystal petals refracting purple/cyan light */}
            <ellipse cx="100" cy="115" rx="30" ry="25" fill={`url(#petal1-${title.replace(/\s+/g, '-')})`} transform="rotate(-15, 100, 115)" style={{ mixBlendMode: 'screen' }} />
            <ellipse cx="100" cy="115" rx="25" ry="32" fill={`url(#petal2-${title.replace(/\s+/g, '-')})`} transform="rotate(35, 100, 115)" style={{ mixBlendMode: 'screen' }} />
            
            {/* Inner crystalline cores */}
            <circle cx="100" cy="115" r="16" fill="rgba(255,255,255,0.25)" stroke="#fff" strokeWidth="0.25" />
            <path
              d="M 100 95 C 110 95, 118 103, 118 115 C 118 127, 105 135, 100 135 C 95 135, 82 127, 82 115 C 82 103, 90 95, 100 95 Z"
              stroke="#ffffff"
              strokeWidth="0.5"
              fill="rgba(255,255,255,0.15)"
            />

            {/* Prismatic vertical shafts radiating from center */}
            <line x1="100" y1="115" x2="100" y2="40" stroke="#ffffff" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.4" />
            <line x1="100" y1="115" x2="40" y2="115" stroke="#ffffff" strokeWidth="0.5" opacity="0.2" />
            <line x1="100" y1="115" x2="160" y2="115" stroke="#ffffff" strokeWidth="0.5" opacity="0.2" />

            {/* Glowing core sparkling dot */}
            <circle cx="100" cy="115" r="3.5" fill="#ffffff" />
            <circle cx="100" cy="115" r="14" stroke={accentColor} strokeWidth="0.25" strokeDasharray="2 2" />
          </svg>
        );

      case 'astronaut': // 5. The Falling Astronaut (宇宙坠落/蓝色指涉 - Floating cyber line hologram)
      default:
        return (
          <svg className="w-full h-full opacity-85" viewBox="0 0 200 300" fill="none">
            <defs>
              <linearGradient id={`cyberLine-${title.replace(/\s+/g, '-')}`} x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#00f3ff" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.15" />
              </linearGradient>
            </defs>
            {/* Electronic scanned transmission trace lines */}
            <g opacity="0.15">
              <line x1="20" y1="50" x2="180" y2="50" stroke="#ffffff" strokeWidth="0.5" />
              <line x1="20" y1="75" x2="180" y2="75" stroke="#ffffff" strokeWidth="0.5" />
              <line x1="20" y1="135" x2="180" y2="135" stroke="#ffffff" strokeWidth="0.5" />
              <line x1="20" y1="210" x2="180" y2="210" stroke="#ffffff" strokeWidth="0.5" />
              <line x1="20" y1="250" x2="180" y2="250" stroke="#ffffff" strokeWidth="0.5" />
            </g>

            {/* Constellation mapping behind */}
            <path
              d="M 40 80 Q 80 50, 100 100 T 160 120"
              stroke={accentColor}
              strokeWidth="0.5"
              strokeDasharray="4 2"
              opacity="0.4"
            />
            <circle cx="40" cy="80" r="2" fill="#ffffff" />
            <circle cx="100" cy="100" r="1.5" fill={accentColor} />
            <circle cx="160" cy="120" r="2" fill="#ffffff" />

            {/* Falling Humanoid Astronaut Silhouette (Poetics sequence) */}
            <path
              d="M 100 80 C 104 80, 108 84, 108 88 C 108 92, 102 96, 100 100 C 97 96, 92 92, 92 88 C 92 84, 96 80, 100 80 Z"
              fill="rgba(0, 243, 255, 0.2)"
              stroke="#00f3ff"
              strokeWidth="0.75"
            />
            
            {/* Elegant falling torso with long floating cable/limbs */}
            <path
              d="M 100 100 Q 95 125, 90 145 C 85 160, 75 190, 71 210 M 100 100 Q 106 125, 114 148 C 122 165, 130 195, 135 220"
              stroke={`url(#cyberLine-${title.replace(/\s+/g, '-')})`}
              strokeWidth="1"
            />
            
            {/* Float bubble helmet reflection */}
            <circle cx="100" cy="87" r="12" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" />
            <path d="M 92 86 C 92 80, 105 80, 108 86" stroke="#ffffff" strokeWidth="0.5" opacity="0.8" />

            {/* Hands reaching Adam's creation motif */}
            <line x1="100" y1="104" x2="52" y2="118" stroke="#00f3ff" strokeWidth="0.75" strokeDasharray="2 2" opacity="0.6" />
            <line x1="100" y1="104" x2="148" y2="118" stroke="#00f3ff" strokeWidth="0.75" strokeDasharray="2 2" opacity="0.6" />
            <circle cx="52" cy="118" r="1.5" fill="#ffffff" />
            <circle cx="148" cy="118" r="1.5" fill="#ffffff" />

            {/* Concentric rings of space radio coordinates */}
            <circle cx="100" cy="130" r="45" stroke={accentColor} strokeWidth="0.25" strokeDasharray="1 4" />
            <ellipse cx="100" cy="130" rx="65" ry="15" stroke="rgba(255,255,255,0.12)" strokeWidth="0.5" transform="rotate(25, 100, 130)" />
          </svg>
        );
    }
  };

  return (
    <div
      id={`poster-${title.replace(/\s+/g, '-')}`}
      style={{
        background: `radial-gradient(115% 120% at 50% 10%, ${bgFrom} 0%, ${bgTo} 100%)`,
      }}
      className={`relative w-full aspect-[2/3] overflow-hidden flex flex-col justify-between p-4 md:p-5 select-none rounded-[1px] border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.9)] transition-all duration-700 ease-out font-sans group ${className}`}
    >
      {/* Background color flare mirroring the artwork accent */}
      <div 
        className="absolute inset-0 opacity-[0.12] mix-blend-screen pointer-events-none transition-all duration-1000 group-hover:opacity-[0.22]"
        style={{
          background: `radial-gradient(circle at 50% 40%, ${color} 0%, transparent 60%)`
        }}
      />
      <div 
        className="absolute inset-0 opacity-[0.06] mix-blend-screen pointer-events-none transition-all duration-1000 group-hover:opacity-[0.14]"
        style={{
          background: `radial-gradient(circle at 50% 80%, ${accentColor} 0%, transparent 50%)`
        }}
      />

      {/* Modernist Thin Poster Border Lines defining technical architectural space */}
      <div className="absolute top-2 bottom-2 left-2 right-2 border border-white/[0.02] pointer-events-none z-10" />

      {/* Middle Layout - Big Graphic Center Piece */}
      <div className="absolute inset-0 flex items-center justify-center p-8 md:p-12 pointer-events-none transform group-hover:scale-[1.04] transition-transform duration-1000 ease-out">
        {renderAbstractShape()}
      </div>

      {/* Film Festival Laurel Wreath - Pure CSS Premium Art-House Vibe */}
      <div className="absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center opacity-65 group-hover:opacity-90 transition-all duration-700 pointer-events-none select-none z-10 scale-90 md:scale-95">
        <div className="flex items-center gap-1.5 px-3 py-1 border-[0.5px] border-white/10 bg-black/50 backdrop-blur-[4px] rounded-full">
          <svg className="w-3 h-3 text-slate-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M 12 5 A 8 8 0 0 0 4 13 A 8 8 0 0 0 12 21 A 8 8 0 0 0 20 13 A 8 8 0 0 0 12 5 Z" strokeDasharray="3 3"/>
            <path d="M 8 13 L 11 15 L 16 10" />
          </svg>
          <span className="font-mono text-[7px] tracking-[0.25em] text-slate-300 uppercase">SELECTED MEMORY</span>
        </div>
      </div>

      {/* Bottom Main Film Title Typography Area */}
      <div className="w-full flex flex-col justify-end text-left z-10">
        {/* Release year and metadata row */}
        <div className="flex items-center gap-2 mb-1 font-mono text-[8.5px] tracking-[0.12em] text-slate-400/60">
          <span>{year}</span>
          <span className="text-white/10">|</span>
          <span>{genre[0]}</span>
          <span className="text-white/10">|</span>
          <span className="text-white/85 font-medium">★ {rating.toFixed(1)}</span>
        </div>

        {/* Chinese Film Title - Editorial Serif Typography */}
        <h2 className="font-serif text-lg sm:text-xl md:text-2xl font-light text-white leading-tight tracking-[0.06em] drop-shadow-[0_4px_8px_rgba(0,0,0,0.95)] truncate transition-all duration-500">
          {title}
        </h2>

        {/* English Secondary Title - Minimalist spacing */}
        <p className="font-sans text-[9px] md:text-[10px] font-light text-slate-400 tracking-[0.2em] mt-1 pr-4 uppercase truncate leading-none">
          {englishTitle}
        </p>

        {/* Subtle separator line using high contrast hair-thin silver split */}
        <div className="h-[0.5px] w-full bg-gradient-to-r from-white/15 via-white/5 to-transparent mt-3 mb-2" />

        {/* Director and Region credits */}
        <div className="flex justify-between items-center font-mono text-[8px] tracking-[0.16em] text-slate-500 uppercase">
          <span className="truncate max-w-[110px]">DIR: {director.name}</span>
          <span>{director.region}</span>
        </div>
      </div>
    </div>
  );
};
