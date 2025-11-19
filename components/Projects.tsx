import React from 'react';
import { PROJECTS } from '../constants';
import Row from './Row';
import { PlayCircle, Github, Plus } from 'lucide-react';

const Projects = () => {
  // Generate a deterministic gradient based on string to keep it consistent
  const getGradient = (str: string) => {
    const colors = [
      'from-indigo-900 to-purple-900',
      'from-blue-900 to-slate-900',
      'from-emerald-900 to-teal-900',
      'from-rose-900 to-pink-900',
      'from-amber-900 to-orange-900',
    ];
    const index = str.length % colors.length;
    return colors[index];
  };

  return (
    // Reduced negative margin from -mt-24 to -mt-12 to prevent clashing with Hero buttons
    <section id="projects" className="relative -mt-12 z-30 pb-10">
      <Row title="Projects">
        {PROJECTS.map((project, index) => (
          <div 
            key={index} 
            className="relative min-w-[300px] md:min-w-[380px] h-[220px] bg-[#1f1f1f] rounded-md overflow-hidden cursor-pointer transition-all duration-300 hover:scale-110 hover:z-50 group shadow-lg shadow-black/50"
          >
            {/* Thumbnail State */}
            <div className={`absolute inset-0 bg-gradient-to-br ${getGradient(project.title)} opacity-60`}></div>
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <h3 className="text-lg font-bold text-white drop-shadow-lg group-hover:hidden">{project.title}</h3>
            </div>

            {/* Hover/Expanded State */}
            <div className="absolute inset-0 bg-[#181818] p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col shadow-xl border border-gray-800">
              
              <div className="flex gap-3 mb-3">
                <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                   <PlayCircle className="w-5 h-5 text-black fill-black" />
                </button>
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-8 h-8 border-2 border-gray-500 rounded-full flex items-center justify-center hover:border-white text-gray-300 hover:text-white transition-all"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
                <button className="w-8 h-8 border-2 border-gray-500 rounded-full flex items-center justify-center ml-auto hover:border-white text-gray-300 hover:text-white transition-all">
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <h3 className="text-sm font-bold text-green-400 mb-1">New Release</h3>
              <h4 className="text-base font-bold text-white mb-1 line-clamp-1">{project.title}</h4>
              
              <div className="flex flex-wrap gap-2 mb-2">
                 {project.techStack.slice(0, 3).map((tech) => (
                   <span key={tech} className="text-[10px] text-gray-400 border border-gray-700 px-1.5 py-0.5 rounded">
                     {tech}
                   </span>
                 ))}
              </div>

              <p className="text-xs text-gray-400 line-clamp-3 leading-relaxed">
                {project.description}
              </p>

            </div>
          </div>
        ))}
      </Row>
    </section>
  );
};

export default Projects;