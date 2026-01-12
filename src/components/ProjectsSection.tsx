const projects = [
  {
    title: "Real-time Online Fraud Monitoring System",
    desc: "Gold-medal-winning (Inter IIT Tech Meet 14.0) production-grade system processing 70,000 txns/min with P95 latency of 40ms. Integrated continuously learning models achieving F1 score of 0.923.",
    tags: ["Kafka", "Pathway", "Django", "Redis", "Pinecone", "Delta Lake"]
  },
  {
    title: "Minitrue: Decentralized IoT Time-Series Database",
    desc: "Leaderless peer-to-peer time-series database in Go using gossip-based discovery, consistent hashing (150 virtual nodes), and Gorilla compression achieving 90% storage reduction.",
    tags: ["Go", "MQTT", "WebSockets", "Consistent Hashing", "Gorilla Compression"]
  },
  {
    title: "IntelliBrowse: Agentic Browser",
    desc: "Chromium-based multi-agent browser with human-in-the-loop feedback, achieving ~85% autonomous task completion using intent parsing and tool-based execution.",
    tags: ["Next.js", "FastAPI", "Playwright", "CrewAI"]
  }
];


export const ProjectsSection = () => {
  return (
    <div className="w-[90%] max-w-6xl mx-auto pointer-events-auto px-4">
      <h2 className="text-4xl font-bold text-white mb-12 text-center">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="group relative p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 backdrop-blur-md transition-all duration-300 hover:-translate-y-2">
            <div className="h-40 mb-6 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-colors border border-white/5"></div>
            <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
            <p className="text-white/60 mb-4 text-sm leading-relaxed">{project.desc}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span key={tag} className="text-xs px-3 py-1 rounded-full bg-white/10 text-white/80 border border-white/5">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};