import LogoLoop from './LogoLoop';
import {
  SiC,
  SiCplusplus,
  SiPython,
  SiGo,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiDjango,
  SiFastapi,
  SiPytorch,
  SiTensorflow,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiDocker,
  SiGit,
  SiLinux,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiApachekafka,
  SiMqtt,
  SiAmazon,
  SiGooglecloud,
  SiVercel,
} from 'react-icons/si';

const techLogos = [
  // Programming Languages
  { node: <SiC className="text-white opacity-80" />, title: "C", href: "https://en.wikipedia.org/wiki/C_(programming_language)" },
  { node: <SiCplusplus className="text-white opacity-80" />, title: "C++", href: "https://isocpp.org" },
  { node: <SiPython className="text-white opacity-80" />, title: "Python", href: "https://www.python.org" },
  { node: <SiGo className="text-white opacity-80" />, title: "Go", href: "https://go.dev" },
  { node: <SiJavascript className="text-white opacity-80" />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { node: <SiTypescript className="text-white opacity-80" />, title: "TypeScript", href: "https://www.typescriptlang.org" },

  // Frameworks & Libraries
  { node: <SiReact className="text-white opacity-80" />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs className="text-white opacity-80" />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiNodedotjs className="text-white opacity-80" />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiDjango className="text-white opacity-80" />, title: "Django", href: "https://www.djangoproject.com" },
  { node: <SiFastapi className="text-white opacity-80" />, title: "FastAPI", href: "https://fastapi.tiangolo.com" },

  // ML / Data
  { node: <SiPytorch className="text-white opacity-80" />, title: "PyTorch", href: "https://pytorch.org" },
  { node: <SiTensorflow className="text-white opacity-80" />, title: "TensorFlow", href: "https://www.tensorflow.org" },
  { node: <SiScikitlearn className="text-white opacity-80" />, title: "scikit-learn", href: "https://scikit-learn.org" },
  { node: <SiPandas className="text-white opacity-80" />, title: "Pandas", href: "https://pandas.pydata.org" },
  { node: <SiNumpy className="text-white opacity-80" />, title: "NumPy", href: "https://numpy.org" },

  // Databases & Messaging
  { node: <SiPostgresql className="text-white opacity-80" />, title: "PostgreSQL", href: "https://www.postgresql.org" },
  { node: <SiRedis className="text-white opacity-80" />, title: "Redis", href: "https://redis.io" },
  { node: <SiApachekafka className="text-white opacity-80" />, title: "Kafka", href: "https://kafka.apache.org" },
  { node: <SiMqtt className="text-white opacity-80" />, title: "MQTT", href: "https://mqtt.org" },
  { node: <SiMongodb className="text-white opacity-80" />, title: "MongoDB", href: "https://www.mongodb.com" },


  // DevOps & Cloud
  { node: <SiDocker className="text-white opacity-80" />, title: "Docker", href: "https://www.docker.com" },
  { node: <SiGit className="text-white opacity-80" />, title: "Git", href: "https://git-scm.com" },
  { node: <SiLinux className="text-white opacity-80" />, title: "Linux", href: "https://www.kernel.org" },
  { node: <SiAmazon className="text-white opacity-80" />, title: "AWS", href: "https://aws.amazon.com" },
  { node: <SiGooglecloud className="text-white opacity-80" />, title: "GCP", href: "https://cloud.google.com" },
  { node: <SiVercel className="text-white opacity-80" />, title: "Vercel", href: "https://vercel.com" },
];

export const SkillsSection = () => {
  return (
    <div id="skills" className="w-full py-24 pointer-events-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white">Tech Stack</h2>
      </div>

      <div className="w-full h-[160px] relative overflow-hidden">
        <LogoLoop
          logos={techLogos}
          speed={55}
          direction="left"
          logoHeight={44}
          gap={56}
          hoverSpeed={12}
          scaleOnHover
          fadeOut
          fadeOutColor="#000000"
          ariaLabel="Technology stack"
        />
      </div>
    </div>
  );
};
