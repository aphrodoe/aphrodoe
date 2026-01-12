import { GridScan } from './components/GridScan';
import { GlassNavbar } from './components/GlassNavbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';

function App() {
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


          <section id="contact" className="w-full pt-5 pb-20">
            <ContactSection />
          </section>

        </div>

      </div>
    </div>
  );
}

export default App;