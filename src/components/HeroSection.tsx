export const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="flex flex-col items-center justify-center text-center px-4 pointer-events-auto">
      <div className="mb-8 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-xs font-medium uppercase tracking-widest text-purple-200 shadow-lg">
        ✨ Welcome!
      </div>

      <h1 className="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tight drop-shadow-2xl">
        Hello, I am<br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 animate-gradient-x bg-[length:200%_auto]">
          Akhil Dhyani
        </span>
      </h1>

      <p className="text-xl text-white/60 max-w-2xl mb-12 leading-relaxed">
        A keen learner looking out for exciting oppurtunities.
      </p>

      <div className="flex items-center gap-6">
        <button 
          onClick={() => scrollTo('projects')}
          className="px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-gray-100 hover:scale-105 transition-all duration-200 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
        >
          View Work
        </button>
        
        <button 
          onClick={() => scrollTo('contact')}
          className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white backdrop-blur-md hover:bg-white/10 hover:border-white/30 transition-all duration-200 font-medium"
        >
          Contact Me
        </button>
      </div>
    </main>
  );
};