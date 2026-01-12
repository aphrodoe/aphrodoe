export const AboutSection = () => {
  return (
    <div className="w-[90%] max-w-4xl mx-auto pointer-events-auto px-4">
      <div className="
        p-8 md:p-12 rounded-[2rem] 
        bg-white/5 border border-white/10 
        backdrop-blur-md
      ">
        <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>
        <div className="space-y-4 text-lg text-white/70 leading-relaxed">
          <p className="text-white/70 leading-relaxed max-w-3xl mx-auto">
            I’m Akhil Dhyani, a Computer Science undergraduate at IIT Jodhpur with a strong
            foundation in systems, backend engineering, and applied machine learning.
            I enjoy building high-performance, production-grade systems, from distributed
            systems and real-time pipelines to agentic applications.
          </p>

          <p className="text-white/60 leading-relaxed max-w-3xl mx-auto mt-4">
            My interests lie at the intersection of systems, AI, and scalable software design.
            I value clean abstractions, measurable performance, and learning by building.
          </p>
        </div>
      </div>
    </div>
  );
};