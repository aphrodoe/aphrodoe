import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const GlassNavbar = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isOnBlogPage, setIsOnBlogPage] = useState(false);

  useEffect(() => {
    const checkPage = () => {
      setIsOnBlogPage(window.location.pathname.startsWith('/blog'));
    };
    checkPage();
    window.addEventListener('popstate', checkPage);
    window.addEventListener('pushstate', checkPage);
    return () => {
      window.removeEventListener('popstate', checkPage);
      window.removeEventListener('pushstate', checkPage);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileOpen(false);
    }
  };

  const goHome = () => {
    window.history.pushState(null, '', '/');
    window.dispatchEvent(new Event('pushstate'));
    setIsMobileOpen(false);
  };

  const navigateToBlog = () => {
    window.history.pushState(null, '', '/blog');
    window.dispatchEvent(new Event('pushstate'));
    setIsMobileOpen(false);
  };

  const navItems: Array<{ name: string; id?: string; action?: () => void }> = [
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Blog', action: navigateToBlog },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={`
        pointer-events-auto
        flex items-center justify-between
        px-4 md:px-8 py-4
        w-[95%] md:w-[90%] max-w-4xl
        rounded-2xl
        border border-white/10
        bg-black/20
        backdrop-blur-xl
        shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]
        transition-all duration-300 ease-out
        ${isHovering ? 'bg-black/30 scale-[1.01] border-white/20' : ''}
      `}
    >
      <div 
        onClick={isOnBlogPage ? goHome : () => scrollToSection('home')}
        className="flex items-center gap-3 text-white cursor-pointer group"
      >
        <span className="font-semibold text-sm md:text-lg tracking-wide">Akhil Dhyani</span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
        {navItems.map((item) => (
          <button
            key={item.name}
            onClick={() => {
              if ('id' in item && item.id) {
                if (isOnBlogPage) {
                  goHome();
                } else {
                  scrollToSection(item.id);
                }
              } else if ('action' in item && item.action) {
                item.action();
              }
            }}
            className="hover:text-white hover:scale-105 transition-all duration-200"
          >
            {item.name}
          </button>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="md:hidden text-white/70 hover:text-white transition-colors"
      >
        {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="absolute top-full left-4 right-4 mt-4 md:hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] hover:bg-black/50 transition-all duration-300">
          <div className="flex flex-col gap-2 p-4">
            {navItems.map((item, idx) => (
              <button
                key={item.name}
                onClick={() => {
                  if ('id' in item && item.id) {
                    if (isOnBlogPage) {
                      goHome();
                    } else {
                      scrollToSection(item.id);
                    }
                  } else if ('action' in item && item.action) {
                    item.action();
                  }
                }}
                className={`text-white/70 hover:text-white hover:bg-white/10 transition-all duration-200 font-medium w-full py-3 px-4 rounded-lg ${
                  idx !== navItems.length - 1 ? 'border-b border-white/10' : ''
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};