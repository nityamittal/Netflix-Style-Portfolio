import React from 'react';
import { EXPERIENCE, EDUCATION, VOLUNTEERING } from '../constants';
import Row from './Row';
import { Briefcase, GraduationCap, MapPin, Heart, Star } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="pb-10 overflow-hidden">
      {/* Work Experience */}
      <Row title="Professional Chronicles">
        {EXPERIENCE.map((job, index) => (
          <div 
            key={`job-${index}`} 
            className="relative min-w-[400px] md:min-w-[500px] bg-[#181818] rounded-md overflow-hidden group border border-gray-800 hover:border-gray-600 transition-all duration-300 hover:bg-[#222]"
          >
            <div className="flex h-full">
              <div className="w-32 bg-gradient-to-b from-indigo-900/20 to-[#181818] flex items-center justify-center p-4 border-r border-gray-800">
                <div className="text-center">
                   <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center mx-auto mb-2">
                      <Briefcase className="w-6 h-6 text-white" />
                   </div>
                   <span className="text-xs text-gray-400 font-mono">EP {EXPERIENCE.length - index}</span>
                </div>
              </div>

              <div className="flex-1 p-6">
                 <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-lg font-bold text-white">{job.role}</h3>
                      <p className="text-indigo-400 font-medium">{job.company}</p>
                    </div>
                    <span className="text-xs text-gray-500 font-mono border border-gray-700 px-2 py-1 rounded whitespace-nowrap ml-2">{job.duration}</span>
                 </div>

                 <p className="text-xs text-gray-400 flex items-center gap-1 mb-4">
                    <MapPin className="w-3 h-3" /> {job.location}
                 </p>

                 <ul className="list-disc list-inside space-y-1">
                    {job.description.map((desc, i) => (
                      <li key={i} className="text-sm text-gray-300 leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all">
                        {desc}
                      </li>
                    ))}
                 </ul>
              </div>
            </div>
          </div>
        ))}
      </Row>

      {/* Education */}
      <Row title="Education & Training">
        {EDUCATION.map((edu, index) => (
          <div 
            key={`edu-${index}`} 
            className="relative min-w-[350px] md:min-w-[450px] bg-[#181818] rounded-md overflow-hidden group border border-gray-800 hover:border-gray-600 transition-all duration-300"
          >
             <div className="p-6 flex gap-4">
                <div className="flex-shrink-0">
                   <div className="w-16 h-24 bg-emerald-900/20 rounded flex items-center justify-center border border-emerald-900/50">
                      <GraduationCap className="w-8 h-8 text-emerald-500" />
                   </div>
                </div>
                <div className="flex-1">
                   <h3 className="text-lg font-bold text-white mb-1">{edu.school}</h3>
                   <p className="text-sm text-gray-400 mb-2">{edu.degree}</p>
                   <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                      <span>{edu.duration}</span>
                      {edu.gpa && (
                        <span className="px-2 py-1 bg-emerald-900/30 text-emerald-400 font-bold rounded">
                          GPA: {edu.gpa}
                        </span>
                      )}
                   </div>
                   
                   {edu.courses && (
                     <div className="mt-3">
                       <p className="text-xs text-gray-500 font-semibold mb-1">Key Coursework:</p>
                       <p className="text-xs text-gray-400 leading-relaxed line-clamp-2 group-hover:line-clamp-none">
                         {edu.courses.join(", ")}
                       </p>
                     </div>
                   )}

                    {edu.scores && (
                     <div className="mt-3 pt-2 border-t border-gray-800">
                       <p className="text-xs text-gray-500 font-semibold mb-1">Scores:</p>
                       <div className="flex flex-wrap gap-2">
                         {edu.scores.map(score => (
                           <span key={score} className="text-[10px] border border-gray-700 px-1.5 py-0.5 rounded text-gray-400">{score}</span>
                         ))}
                       </div>
                     </div>
                   )}
                </div>
             </div>
          </div>
        ))}
      </Row>

      {/* Volunteering */}
      <Row title="Community & Leadership">
        {VOLUNTEERING.map((vol, index) => (
          <div 
            key={`vol-${index}`} 
            className="relative min-w-[300px] md:min-w-[350px] bg-[#181818] rounded-md p-5 border border-gray-800 hover:bg-[#222] transition-all group"
          >
            <div className="flex items-start justify-between mb-3">
               <div className="bg-pink-900/20 p-2 rounded-full">
                 <Heart className="w-5 h-5 text-pink-500" />
               </div>
               <span className="text-[10px] text-gray-500 uppercase tracking-wide font-bold">{vol.duration}</span>
            </div>
            
            <h3 className="text-base font-bold text-white mb-1">{vol.role}</h3>
            <p className="text-sm text-pink-400 mb-3">{vol.organization}</p>
            
            {vol.description && (
              <p className="text-xs text-gray-400 leading-relaxed line-clamp-3 group-hover:line-clamp-none">
                {vol.description[0]}
              </p>
            )}
          </div>
        ))}
      </Row>
    </section>
  );
};

export default Experience;
