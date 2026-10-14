
export default function Skills() {
  const coreTech = [
    { name: "React.js", level: "90%" },
    { name: "JavaScript ", level: "85%" },
    { name: "Tailwind CSS", level: "95%" },
    { name: "React Router", level: "85%" },
  ];

  const concepts = [
    "State Management",
    "Component Architecture",
    "Custom Hooks",
    "Context API",
    "API Integration (Axios)",
    "Responsive UI Layouts",
  ];

  return (
    <section className="py-16 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Technical Matrix
        </h2>
        <div className="h-1 w-12 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-slate-400 mt-4 max-w-xl mx-auto">
          Verified skills and engineering practices learned during the final
          certification pathway.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6 bg-[#131a2a] p-8 rounded-2xl border border-slate-800">
          <h3 className="text-xl font-bold text-cyan-400 mb-4 font-mono">
            Core Technologies
          </h3>
          {coreTech.map((tech, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between text-sm font-medium">
                <span className="text-slate-200">{tech.name}</span>
                <span className="text-slate-400 font-mono">{tech.level}</span>
              </div>
              <div className="w-full bg-[#0b0f19] h-2 rounded-full overflow-hidden">
                <div
                  className="bg-gradient-to-r from-purple-500 to-cyan-500 h-full rounded-full"
                  style={{ width: tech.level }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#131a2a] p-8 rounded-2xl border border-slate-800 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-purple-400 mb-6 font-mono">
              Development Paradigms
            </h3>
            <div className="flex flex-wrap gap-3">
              {concepts.map((concept, index) => (
                <span
                  key={index}
                  className="bg-[#0b0f19] border border-slate-800 text-slate-300 px-4 py-2.5 rounded-xl text-sm font-medium hover:border-cyan-500/50 transition-colors duration-200"
                >
                  {concept}
                </span>
              ))}
            </div>
          </div>
          <p className="text-xs text-slate-500 font-mono mt-6 border-t border-slate-800/60 pt-4">
            * All skills are backed by tested applications in my GitHub
            repository.
          </p>
        </div>
      </div>
    </section>
  );
}
