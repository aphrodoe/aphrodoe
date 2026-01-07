import LogoLoop from './LogoLoop';
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiPostgresql, 
  SiDocker, 
  SiPython,
  SiGit,
} from 'react-icons/si';

const techLogos = [
  { node: <SiReact className="text-white opacity-80" />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs className="text-white opacity-80" />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript className="text-white opacity-80" />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss className="text-white opacity-80" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiNodedotjs className="text-white opacity-80" />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiPostgresql className="text-white opacity-80" />, title: "PostgreSQL", href: "https://www.postgresql.org" },
  { node: <SiDocker className="text-white opacity-80" />, title: "Docker", href: "https://www.docker.com" },
  { node: <SiPython className="text-white opacity-80" />, title: "Python", href: "https://www.python.org" },
  { node: <SiGit className="text-white opacity-80" />, title: "Git", href: "https://git-scm.com" },

];

export const SkillsSection = () => {
  return (
    <div className="w-full py-20 pointer-events-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">Tech Stack</h2>
        <p className="text-white/60">Technologies I work with</p>
      </div>

      <div className="w-full h-[150px] relative overflow-hidden">
        <LogoLoop
          logos={techLogos}
          speed={50}             
          direction="left"
          logoHeight={48}
          gap={60}              
          hoverSpeed={10}       
          scaleOnHover
          fadeOut
          fadeOutColor="#000000" 
          ariaLabel="Technology partners"
        />
      </div>
    </div>
  );
};