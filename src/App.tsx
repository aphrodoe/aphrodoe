import { GridScan } from './components/GridScan';
import { GlassNavbar } from './components/GlassNavbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { BlogSection } from './components/BlogSection';
import { BlogPage } from './components/BlogPage';
import { ArticlePage } from './components/ArticlePage';
import { ContactSection } from './components/ContactSection';
import { useEffect, useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    const path = window.location.pathname;
    if (path.match(/^\/blog\/\d+$/)) {
      return 'article';
    } else if (path.startsWith('/blog')) {
      return 'blog';
    }
    return 'home';
  });

  const [articleId, setArticleId] = useState<number | null>(() => {
    const match = window.location.pathname.match(/\/blog\/(\d+)/);
    return match ? parseInt(match[1]) : null;
  });

  useEffect(() => {
    const handleRouteChange = () => {
      const path = window.location.pathname;
      const articleMatch = path.match(/^\/blog\/(\d+)$/);
      
      if (articleMatch) {
        setCurrentPage('article');
        setArticleId(parseInt(articleMatch[1]));
      } else if (path.startsWith('/blog')) {
        setCurrentPage('blog');
        setArticleId(null);
      } else {
        setCurrentPage('home');
        setArticleId(null);
      }
    };

    window.addEventListener('popstate', handleRouteChange);
    window.addEventListener('pushstate', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
      window.removeEventListener('pushstate', handleRouteChange);
    };
  }, []);

  if (currentPage === 'article' && articleId !== null) {
    return <ArticlePage articleId={articleId} />;
  }

  if (currentPage === 'blog') {
    return <BlogPage />;
  }

  return (
    <div className="relative w-full h-screen bg-black font-sans selection:bg-purple-500/30">
      
      <div className="fixed inset-0 z-0 pointer-events-none">
        <GridScan
          sensitivity={0.55}
          lineThickness={1}
          linesColor="#392e4e"
          gridScale={0.1}
          scanColor="#FF9FFC"
          scanOpacity={0.4}
          enablePost
          bloomIntensity={0.6}
          chromaticAberration={0.002}
          noiseIntensity={0.01}
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="relative z-10 w-full h-full overflow-y-auto overflow-x-hidden scroll-smooth">
        
        <div className="sticky top-6 z-50 flex justify-center w-full mb-10 pointer-events-none">
          <GlassNavbar />
        </div>
        
        <div className="flex flex-col items-center w-full max-w-7xl mx-auto">
          <section id="home" className="min-h-[90vh] flex flex-col justify-center w-full">
            <HeroSection />
          </section>

          <section id="about" className="w-full py-20">
            <AboutSection />
          </section>

          <section id="projects" className="w-full py-20">
            <ProjectsSection />
          </section>

          <section id="skills" className="w-full pt-20 pb-5">
            <SkillsSection />
          </section>

          <section id="blog" className="w-full py-20">
            <BlogSection />
          </section>

          <section id="contact" className="w-full pt-5 pb-20">
            <ContactSection />
          </section>

        </div>

      </div>
    </div>
  );
}

export default App;