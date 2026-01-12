import { SiGithub } from 'react-icons/si';

type Project = {
  title: string;
  desc: string;
  tags: string[];
  image: string;
  github?: string;
};

const projects: Project[] = [
  {
    title: "Real-time Online Fraud Monitoring System",
    desc: "A production-grade system for detecting financial fraud in real time using streaming pipelines and continuously learning models.",
    tags: ["Kafka", "Pathway", "Django", "Redis", "Pinecone", "Delta Lake"],
    image: "/project1.png",
    github: "https://github.com/YugDalwadi/FraudDetection",
  },
  {
    title: "Minitrue: Decentralized IoT Time-Series Database",
    desc: "A leaderless peer-to-peer time-series database built in Go, designed for high-throughput IoT workloads with efficient storage and decentralized discovery.",
    tags: ["Go", "MQTT", "WebSockets", "Consistent Hashing", "Gorilla Compression"],
    image: "/project2.png",
    github: "https://github.com/aphrodoe/minitrue",
  },
  {
    title: "IntelliBrowse: Agentic Browser",
    desc: "An agentic Chromium-based browser that uses multiple collaborating agents with human-in-the-loop feedback to autonomously perform complex browsing tasks.",
    tags: ["Next.js", "FastAPI", "Playwright", "CrewAI"],
    image: "/project3.png",
    github: "https://github.com/devlup-labs/Intelligent-Browser",
  },
  {
    title: "Yearbook: An Adieu to the Batch of 2025",
    desc: "A full-stack web portal for graduating students to submit memories, messages, and stories, culminating in auto-generated personalized digital yearbooks.",
    tags: ["Next.js", "MongoDB", "react-pdf", "three.js"],
    image: "/project4.png",
    github: "https://github.com/aphrodoe/Alumni-Yearbook",
  },
  {
    title: "Maze Solver",
    desc: "A graphical maze-solving application implementing Dijkstra’s and A* algorithms in C, with a GTK-based GUI for visualization and interaction.",
    tags: ["C", "Dijkstra", "A*", "GTK"],
    image: "/project5.png",
    github: "https://github.com/aphrodoe/maze-solver",
  },
];

export const ProjectsSection = () => {
  return (
    <div className="w-[90%] max-w-6xl mx-auto pointer-events-auto px-4">
      <h2 className="text-4xl font-bold text-white mb-12 text-center">
        Featured Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md
                       transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 hover:border-white/20
                       flex flex-col"
          >
            <div className="relative h-40 mb-6 rounded-2xl overflow-hidden border border-white/5 bg-black/40 flex items-center justify-center">
              <img
                src={project.image}
                alt={project.title}
                className="max-w-full max-h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity"
              />

              <div className="absolute inset-0 bg-black/10" />
            </div>



            <div className="flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-white mb-2">
                {project.title}
              </h3>

              <p className="text-white/60 mb-4 text-sm leading-relaxed">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-white/10 text-white/80 border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-2 text-sm font-medium
                           text-purple-400 hover:text-purple-300 transition-colors"
              >
                <SiGithub className="text-base" />
                <span>GitHub</span>
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
