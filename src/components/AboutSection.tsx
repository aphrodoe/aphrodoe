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
          <p>
            I'm a passionate developer based in India, specializing in building exceptional digital experiences. 
            Currently, I'm focused on accessible, human-centered products at IIT Jodhpur.
          </p>
          <p>
            With a strong foundation in Computer Science and a keen eye for design, 
            I bridge the gap between technical complexity and user experience. 
            When I'm not coding, you can find me exploring new tech stacks or gaming.
          </p>
        </div>
      </div>
    </div>
  );
};