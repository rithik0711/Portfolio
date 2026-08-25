import React from 'react';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import BiotechIcon from '@mui/icons-material/Biotech';

export const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "AI Exam Portal",
      description: "An intelligent examination platform enabling faculty to generate dynamic questions via LLMs and students to take exams with automated real-time grading and evaluation.",
      category: "GEN AI",
      tech: ["React", "Node.js", "Express", "MySQL", "OpenAI / LLMs"],
      icon: <SmartToyIcon />,
      color: "#00f2fe",
      badge: "GenAI & Automation"
    },
    {
      id: 2,
      title: "Faculty Workload Prediction System",
      description: "A machine learning predictive application designed to forecast faculty semester workloads based on student enrollments, research grants, and historical teaching metrics.",
      category: "MACHINE LEARNING",
      tech: ["React", "Python", "TensorFlow", "Pandas", "Scikit-Learn"],
      icon: <BiotechIcon />,
      color: "#cd4ecb",
      badge: "ML Analytics"
    },
    {
      id: 3,
      title: "Self-Hosted AI Chat Application",
      description: "A private, zero-cloud dependency LLM chat client utilizing local Ollama models with a Flask REST server and real-time streaming tokens on React.",
      category: "LOCAL GEN AI",
      tech: ["React.js", "Flask", "Ollama", "REST APIs", "Docker"],
      icon: <SmartToyIcon />,
      color: "#45d19b",
      badge: "Local AI & Privacy"
    }
  ];

  return (
    <section className='min-h-screen py-[70px] pt-[100px] px-[15px] md:px-[20px] relative overflow-hidden' id='projects'>
      <div className='max-w-[1200px] mx-auto relative z-[1]'>
        
        <header className='text-center mb-[60px]'>
          <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs uppercase font-mono tracking-widest text-cyan-300 mb-3'>
            ⚡ Featured Applications
          </div>
          <h2 className='text-[2.2rem] md:text-[3rem] lg:text-[3.5rem] font-[800] mb-[15px] tracking-[-1px] leading-[1.1] text-white'>
            Featured <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#00f2fe] via-[#4facfe] to-[#764ba2]'>Projects</span>
          </h2>
          <p className='text-[1rem] md:text-[1.15rem] text-white/70 max-w-[650px] mx-auto leading-[1.6]'>
            Production architectures, full-stack systems, and Generative AI applications.
          </p>
        </header>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[25px] md:gap-[30px] mb-[40px]'>
          {projects.map((project) => (
            <article
              key={project.id}
              className='bg-white/[0.04] rounded-[24px] p-[25px] md:p-[30px] border border-white/10 backdrop-blur-xl hover:border-cyan-400/50 hover:bg-white/[0.07] transition-all duration-300 hover:-translate-y-2 group flex flex-col relative overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.3)]'
            >
              {/* Dynamic Accent Glow */}
              <div
                className="absolute top-[-40px] right-[-40px] w-[140px] h-[140px] rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity pointer-events-none"
                style={{ backgroundColor: project.color }}
              />

              {/* Header: Icon & Category Badge */}
              <div className="flex justify-between items-start mb-[20px] relative z-10">
                <div
                  className="w-[50px] h-[50px] rounded-2xl flex items-center justify-center bg-black/40 border border-white/15 shadow-lg group-hover:scale-110 transition-transform duration-300"
                  style={{ color: project.color }}
                >
                  <span className='flex text-[26px]'>{project.icon}</span>
                </div>
                <div
                  className="px-[12px] py-[4px] rounded-full text-[0.7rem] font-mono font-bold tracking-wider uppercase border backdrop-blur-md"
                  style={{
                    color: project.color,
                    backgroundColor: `${project.color}15`,
                    borderColor: `${project.color}40`
                  }}
                >
                  {project.category}
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-[1.4rem] md:text-[1.6rem] font-[800] text-white mb-[10px] relative z-10 tracking-tight">
                {project.title}
              </h3>
              <p className="text-[0.9rem] text-white/60 leading-[1.6] mb-[20px] relative z-10 flex-1">
                {project.description}
              </p>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-[6px] relative z-10">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-black/50 border border-white/10 text-white/80 px-[12px] py-[4px] rounded-lg text-[0.75rem] font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;