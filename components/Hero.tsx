import React from 'react';
import { PROFILE } from '../constants';
import { Play, Info, FileText } from 'lucide-react';

const Hero = () => {
  return (
    <div id="hero" className="relative h-[85vh] w-full bg-black overflow-hidden">
      {/* Background Image & Gradient Overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-40"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#141414] to-transparent z-10"></div>
      
      <div className="relative z-20 h-full flex flex-col justify-center px-4 sm:px-12 max-w-4xl pt-16">
        
        {/* Series/Portfolio Tag */}
        <div className="flex items-center gap-2 mb-6 animate-fade-in">
           <span className="text-[#E50914] text-sm font-black tracking-widest uppercase drop-shadow-md">PORTFOLIO</span>
           <span className="text-gray-400 text-xs tracking-[0.2em] uppercase border-l border-gray-600 pl-2">Original Series</span>
        </div>

        {/* Name Title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tighter drop-shadow-lg animate-fade-in">
          {PROFILE.name.toUpperCase()}
        </h1>

        {/* Meta Info / Roles */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm md:text-base text-gray-200 font-medium mb-8 animate-fade-in animation-delay-200">
           <span className="text-emerald-400 font-bold">98% Match</span>
           <span className="text-gray-400">2025</span>
           <span className="border border-gray-500 px-1.5 py-0.5 text-[10px] text-gray-300 rounded-sm uppercase bg-white/10">U/A 16+</span>
           <span className="flex items-center gap-2 font-semibold">
             Software Engineer <span className="text-gray-500 text-xs">•</span> AI <span className="text-gray-500 text-xs">•</span> Data Science <span className="text-gray-500 text-xs">•</span> Product
           </span>
        </div>

        {/* Description */}
        <p className="text-base md:text-lg text-gray-300 max-w-2xl mb-10 leading-relaxed drop-shadow-md line-clamp-3 md:line-clamp-none animate-fade-in animation-delay-300">
          {PROFILE.about}
        </p>

        {/* Action Buttons */}
        <div className="flex gap-4 animate-fade-in animation-delay-500">
          <a 
            href="#resume" 
            className="flex items-center gap-2 bg-white text-black px-6 py-2 md:px-8 md:py-3 rounded font-bold hover:bg-gray-200 transition-all transform hover:scale-105"
          >
            <FileText className="w-5 h-5 fill-current" />
            Resume
          </a>
          <a 
            href="#experience"
            className="flex items-center gap-2 bg-gray-600/80 text-white px-6 py-2 md:px-8 md:py-3 rounded font-bold hover:bg-gray-600/60 transition-all backdrop-blur-md transform hover:scale-105"
          >
            <Info className="w-5 h-5" />
            More Info
          </a>
        </div>

      </div>
    </div>
  );
};

export default Hero;