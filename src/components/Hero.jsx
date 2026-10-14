import { Link } from 'react-router-dom';
import profileImg from '../assets/profile.png';

export default function Hero() {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center px-6 relative overflow-hidden pt-12 pb-16 max-w-7xl mx-auto">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full filter blur-[150px] opacity-15 animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600 rounded-full filter blur-[150px] opacity-10 pointer-events-none"></div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center z-10 w-full">
        
        <div className="space-y-6 md:col-span-7 text-center md:text-left order-2 md:order-1">
          <div className="space-y-3">
            <p className="text-cyan-400 font-mono text-sm sm:text-base tracking-widest uppercase font-bold">
              Hi, my name is
            </p>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight">
              Mahdi Haidari
            </h1>
            <h2 className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Professional React Developer
            </h2>
            <p className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto md:mx-0 leading-relaxed">
              I craft high-performance interactive interfaces and clean React applications wrapped in futuristic responsive styles. Verified by Horizon Bridge Consulting.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4 pt-2">
            <Link to="/projects" className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-semibold rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-purple-500/20 text-center">
              Explore My Work
            </Link>
            <Link to="/contact" className="w-full sm:w-auto px-8 py-3.5 bg-[#131a2a] border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 font-medium rounded-xl transition-all duration-300 text-center">
              Get In Touch
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-4 max-w-md mx-auto md:mx-0 pt-8 border-t border-slate-800/60 text-center md:text-left">
            <div>
              <p className="text-2xl font-extrabold text-white">100%</p>
              <p className="text-[10px] sm:text-xs text-slate-400 font-mono mt-0.5">React Pathway</p>
            </div>
            <div>
              <p className="text-2xl font-extrabold text-cyan-400">3+</p>
              <p className="text-[10px] sm:text-xs text-slate-400 font-mono mt-0.5">Live Projects</p>
            </div>
            <div>
              <p className="text-2xl font-extrabold text-purple-400">Tailwind</p>
              <p className="text-[10px] sm:text-xs text-slate-400 font-mono mt-0.5">Responsive UI</p>
            </div>
          </div>
        </div>

        <div className="md:col-span-5 flex justify-center order-1 md:order-2">
          <div className="relative group w-64 h-64 sm:w-80 sm:h-80 md:w-full md:max-w-[350px] aspect-[3/4] rounded-3xl overflow-hidden border-2 border-slate-800 bg-[#131a2a] shadow-2xl transition-all duration-500 hover:border-cyan-500/50">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-transparent to-transparent opacity-60 z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/10 to-cyan-500/10 z-10 group-hover:opacity-0 transition-opacity duration-300"></div>
            <img 
              src={profileImg} 
              alt="Mahdi Haidari Profile" 
              className="w-full h-full object-cover group-hover:scale-102 transition-all duration-500"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
