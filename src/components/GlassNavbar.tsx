import { useState } from 'react';

export const GlassNavbar = () => {
  const [isHovering, setIsHovering] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={`
        pointer-events-auto
        flex items-center justify-between
        px-8 py-4
        w-[90%] max-w-4xl
        rounded-2xl
        border border-white/10
        bg-black/20
        backdrop-blur-xl
        shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]
        transition-all duration-300 ease-out
        ${isHovering ? 'bg-black/30 scale-[1.01] border-white/20' : ''}
      `}
    >
      {/* Logo */}
      <div 
        onClick={() => scrollToSection('home')}
        className="flex items-center gap-3 text-white cursor-pointer group"
      >
        <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center group-hover:rotate-3 transition-transform">
          <span className="font-bold text-lg">A</span>
        </div>
        <span className="font-semibold text-lg tracking-wide hidden sm:block">Akhil.dev</span>
      </div>

      {/* Nav Links */}
      <div className="flex items-center gap-8 text-sm font-medium text-white/70">
        {navItems.map((item) => (
          <button
            key={item.name}
            onClick={() => scrollToSection(item.id)}
            className="hover:text-white hover:scale-105 transition-all duration-200"
          >
            {item.name}
          </button>
        ))}
      </div>
    </nav>
  );
};