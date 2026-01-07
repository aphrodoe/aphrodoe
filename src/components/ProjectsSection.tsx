const projects = [
  {
    title: "Project Alpha",
    desc: "A high-performance dashboard using React and GridScan technology.",
    tags: ["React", "WebGL", "Tailwind"]
  },
  {
    title: "Neon Commerce",
    desc: "E-commerce platform with 3D product previews and AI recommendations.",
    tags: ["Next.js", "Three.js", "Stripe"]
  },
  {
    title: "Data Viz Tool",
    desc: "Real-time data visualization suite for financial markets.",
    tags: ["D3.js", "TypeScript", "Socket.io"]
  }
];

export const ProjectsSection = () => {
  return (
    <div className="w-[90%] max-w-6xl mx-auto pointer-events-auto px-4">
      <h2 className="text-4xl font-bold text-white mb-12 text-center">Featured Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="
              group relative p-6 rounded-3xl 
              bg-white/5 border border-white/10 
              hover:bg-white/10 hover:border-white/20 
              backdrop-blur-md transition-all duration-300 hover:-translate-y-2
            "
          >
            <div className="h-40 mb-6 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-colors border border-white/5"></div>
            
            <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
            <p className="text-white/60 mb-4 text-sm leading-relaxed">
              {project.desc}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span key={tag} className="text-xs px-3 py-1 rounded-full bg-white/10 text-white/80 border border-white/5">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};