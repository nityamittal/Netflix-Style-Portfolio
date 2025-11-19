import React from 'react';
import { SKILLS, ACHIEVEMENTS } from '../constants';
import { Trophy, Star } from 'lucide-react';

const Skills = () => {
  return (
    <section id="skills" className="py-12 px-4 sm:px-12 max-w-7xl mx-auto">
      
      <div className="mb-16">
        <h2 className="text-xl md:text-2xl font-semibold text-white mb-6 flex items-center gap-2">
           Top Genres (Skills)
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {SKILLS.map((skillGroup, idx) => (
             <div key={idx} className="bg-[#181818] border border-gray-800 rounded-lg p-6 hover:bg-[#1f1f1f] transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-black/20">
               <h3 className="text-indigo-400 text-xs font-bold uppercase tracking-widest mb-4 border-b border-gray-800 pb-2">
                 {skillGroup.category}
               </h3>
               <div className="flex flex-wrap gap-2">
                 {skillGroup.items.map((item) => (
                   <span key={item} className="px-2 py-1 bg-[#252525] text-gray-300 text-xs rounded hover:text-white hover:bg-indigo-600 transition-colors cursor-default">
                     {item}
                   </span>
                 ))}
               </div>
             </div>
           ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#181818] to-[#141414] border border-gray-800 rounded-xl p-8 md:p-12 relative overflow-hidden">
         <div className="absolute top-0 right-0 p-4 opacity-10">
            <Trophy className="w-64 h-64 text-yellow-500" />
         </div>

         <h2 className="text-xl md:text-2xl font-semibold text-white mb-8 flex items-center gap-3 relative z-10">
            <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" /> 
            Awards & Recognition
         </h2>

         <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 relative z-10">
            {ACHIEVEMENTS.map((item, i) => (
               <div key={i} className="flex gap-4 group">
                  <div className="flex-shrink-0 mt-1">
                     <div className="w-8 h-8 rounded-full bg-yellow-900/20 border border-yellow-700/50 flex items-center justify-center text-yellow-500 font-bold text-xs group-hover:bg-yellow-500 group-hover:text-black transition-colors">
                        {i + 1}
                     </div>
                  </div>
                  <div>
                     <h4 className="text-white font-bold text-base group-hover:text-yellow-400 transition-colors">{item.title}</h4>
                     <div className="flex flex-wrap items-center gap-2 text-sm text-gray-400 mt-1">
                        <span className="text-gray-300">{item.organization}</span>
                        {item.year && (
                           <>
                              <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                              <span>{item.year}</span>
                           </>
                        )}
                     </div>
                     {item.description && (
                        <p className="text-xs text-gray-500 mt-2 leading-relaxed">{item.description}</p>
                     )}
                  </div>
               </div>
            ))}
         </div>
      </div>

    </section>
  );
};

export default Skills;
