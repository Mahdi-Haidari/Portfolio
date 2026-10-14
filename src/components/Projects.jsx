import { projects } from './projectsData';

export default function Projects() {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto space-y-16">
      
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Masterpiece Gallery</h2>
        <div className="h-1 w-12 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-slate-400 mt-4 max-w-xl mx-auto">
          A showcase of production-ready applications built during the program, proving clean architecture and interface perfection.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="group bg-[#131a2a]/60 backdrop-blur-md border border-slate-800 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-purple-500/10 hover:border-purple-500/40 transition-all duration-300 flex flex-col h-full"
          >
            <div className="overflow-hidden aspect-video bg-[#0b0f19] relative border-b border-slate-800">
              <div className="absolute inset-0 bg-gradient-to-t from-[#131a2a] via-transparent to-transparent opacity-40 z-10"></div>
              <img 
                src={project.image} 
                alt={`${project.title} screenshot`} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100" 
                loading="lazy"
              />
            </div>

            <div className="p-6 flex flex-col flex-grow justify-between space-y-6">
              <div className="space-y-3">
                <span className="text-[10px] font-bold font-mono text-cyan-400 bg-[#0b0f19] px-2 py-0.5 rounded border border-slate-800/80 inline-block">
                  React Application
                </span>
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed line-clamp-4 group-hover:text-slate-300 transition-colors duration-200">
                  {project.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between">
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center space-x-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 group/btn"
                >
                  <span>Launch Application</span>
                  <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
