
export default function About() {
  const timeline = [
    {
      year: "Phase 1: Foundations",
      title: "Core JavaScript & UI Layouts",
      institution: "Horizon Bridge Consulting",
      description: "Mastered semantic HTML5, modern CSS3 layout paradigms including Flexbox/Grid, responsive design principles via Tailwind CSS, and advanced ES6+ JavaScript concepts."
    },
    {
      year: "Phase 2: React Core",
      title: "Component Architecture & Hooks",
      institution: "Horizon Bridge Consulting",
      description: "Deep-dived into functional components, virtual DOM efficiency, state management using local and global state (Context API), and custom React hooks lifecycle."
    },
    {
      year: "Phase 3: Deep Pathway",
      title: "Multi-Page Web Applications",
      institution: "Horizon Bridge Consulting",
      description: "Advanced into single-page application (SPA) routing dynamics using React Router DOM, strict client-side validation architectures, and clean project encapsulation."
    }
  ];

  return (
    <section className="py-16 px-6 max-w-5xl mx-auto space-y-16">
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">About My Journey</h2>
        <div className="h-1 w-12 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-slate-400 mt-4 max-w-xl mx-auto">An authentic look into my engineering background, technical education, and professional milestones.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 bg-[#131a2a] p-8 rounded-2xl border border-slate-800 space-y-4">
          <h3 className="text-xl font-bold text-white">Biography</h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
            Hello! I am <strong className="text-cyan-400">Mahdi Haidari</strong>. My dedication to professional frontend engineering culminated during the rigorous <strong>Horizon Bridge Consulting React Pathway</strong>. I specialize in bridging complex abstract structures with user-centric interface realities.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
            I continuously practice writing self-documenting, accessible, and performant React architectures. My focus centers heavily on building fluid web applications that remain perfectly responsive regardless of viewport restrictions.
          </p>
        </div>

        <div className="bg-[#131a2a] p-8 rounded-2xl border border-slate-800 space-y-4">
          <h3 className="text-xl font-bold text-white">Professional Goals</h3>
          <ul className="space-y-3 text-slate-300 text-sm font-medium">
            <li className="flex items-start gap-2">
              <span className="text-purple-400 font-bold">▹</span> Architect secure full-scale React architectures.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-400 font-bold">▹</span> Minimize execution overhead and bundle weight.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-400 font-bold">▹</span> Contribute actively to high-impact software squads.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-400 font-bold">▹</span> Maintain strict pixel-perfect design adaptations.
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-[#131a2a] p-8 rounded-2xl border border-slate-800 space-y-8">
        <h3 className="text-xl font-bold text-white text-center md:text-left font-mono">Academic Timeline</h3>
        <div className="relative border-l border-slate-700 ml-2 md:ml-4 space-y-8">
          {timeline.map((item, index) => (
            <div key={index} className="relative pl-6 sm:pl-8 group">
              <div className="absolute -left-[6px] top-1.5 w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 group-hover:scale-125 transition-transform duration-200"></div>
              <div className="space-y-1">
                <span className="text-xs font-bold font-mono text-cyan-400 bg-[#0b0f19] px-2.5 py-1 rounded-md border border-slate-800">
                  {item.year}
                </span>
                <h4 className="text-base sm:text-lg font-bold text-white pt-2">
                  {item.title} — <span className="text-slate-400 font-normal text-sm">{item.institution}</span>
                </h4>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed pt-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
