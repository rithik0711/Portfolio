import React from 'react'
import CodeIcon from '@mui/icons-material/Code';
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';
import PsychologyIcon from '@mui/icons-material/Psychology';
import CloudIcon from '@mui/icons-material/Cloud';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import BiotechIcon from '@mui/icons-material/Biotech';
import WebIcon from '@mui/icons-material/Web';
import StorageIcon from '@mui/icons-material/Storage';

export const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "AI Exam Portal",
      description: "An intelligent examination platform that enables faculty to schedule exams and generate questions using AI, while allowing students to attend exams through a secure interface with automated evaluation.",
      image: "./images/exam.png",
      category: "GEN AI",
      tech: ["React", "Node.js", "Express", "SQL"],
      github: "https://github.com/rithik0711/recommendation-system",
      live: "#",
      icon: <SmartToyIcon />,
      color: "#FF6B6B"
    },
    {
      id: 2,
      title: "Faculty Workload Prediction System",
      description: "A machine learning application designed to predict faculty workloads based on historical data and various factors.",
      image: "/images/workload-prediction.png",
      category: "MACHINE LEARNING",
      tech: ["React", "Python", "TensorFlow"],
      github: "https://github.com/rithik0711/recommendation-system",
      live: "#",
      icon: <BiotechIcon />,
      color: "#cd4ecb"
    },
    {
      id: 3,
      title: "Self-Hosted AI Chat Application",
      description: "Built a self-hosted AI chat platform for secure, real-time conversations without external cloud dependencies.",
      image: "/images/skin-analyze.png",
      category: "Gen AI",
      tech: ["React.js", "Flask", "Ollama", "REST APIs"],
      github: "#",
      live: "#",
      icon: <SmartToyIcon />,
      color: "#4ECDC4"
    }
  ];

  return (
    <section className='bg-gradient-to-br from-[#1f224f] to-[#100c4b] min-h-screen py-[60px] pt-[90px] md:pt-[100px] md:py-[100px] px-[15px] md:px-[20px] relative overflow-hidden' id='projects'>
      <div className='absolute top-0 left-0 right-0 bottom-0 pointer-events-none bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.1)_0%,transparent_50%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.05)_0%,transparent_50%)]'></div>
      <div className='max-w-[1200px] mx-auto relative z-[1]'>
        <header className='text-center mb-[80px]'>
          <div className='w-[60px] h-[4px] bg-gradient-to-r from-[#FFD700] to-[#FFA500] mx-auto mb-[30px] rounded-[2px] hidden'></div>
          <h2 className='text-[2rem] md:text-[2.5rem] lg:text-[3.5rem] font-[800] mb-[20px] tracking-[-1px] leading-[1.1]'>
            <span className='text-white drop-shadow-[2px_2px_4px_rgba(0,0,0,0.2)] mr-[10px]'>Featured</span>
            <span className='bg-gradient-to-tr from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent'>Projects</span>
          </h2>
          <p className='text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] text-white/80 max-w-[600px] mx-auto leading-[1.6]'>Innovative solutions built with modern technologies</p>
        </header>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[25px] md:gap-[30px] lg:gap-[35px] mb-[60px]'>
          {projects.map((project, index) => (
            <article
              key={project.id}
              className='bg-[#1a1f3c]/40 rounded-[20px] p-[25px] md:p-[30px] shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-400 ease-out border border-white/5 backdrop-blur-xl hover:-translate-y-[8px] hover:bg-[#1a1f3c]/60 group flex flex-col relative overflow-hidden md:min-h-[380px]'
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Background Glow */}
              <div className="absolute top-[20px] right-[-20px] w-[150px] h-[150px] rounded-full blur-[80px] opacity-[0.15] pointer-events-none transition-opacity duration-500 group-hover:opacity-[0.25]" style={{ backgroundColor: project.color }}></div>
              <div className="absolute bottom-[20px] left-[-20px] w-[150px] h-[150px] rounded-full blur-[80px] opacity-[0.1] pointer-events-none transition-opacity duration-500 group-hover:opacity-[0.2]" style={{ backgroundColor: project.color }}></div>

              {/* Header: Icon and Category */}
              <div className="flex justify-between items-start mb-[25px] relative z-10">
                <div className="w-[50px] h-[50px] rounded-[14px] flex items-center justify-center bg-[#252a4a]/50 backdrop-blur-md border border-white/5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span style={{ color: project.color }} className='flex text-[24px]'>{project.icon}</span>
                </div>
                <div className="px-[14px] py-[6px] rounded-full border border-white/5 text-[0.65rem] md:text-[0.75rem] font-bold tracking-[1px] uppercase backdrop-blur-md" style={{ color: project.color, backgroundColor: `${project.color}15`, borderColor: `${project.color}30` }}>
                  {project.category}
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-[1.4rem] md:text-[1.8rem] font-[800] text-white mb-[12px] relative z-10 tracking-[0.5px]">
                {project.title}
              </h3>
              <p className="text-[0.9rem] md:text-[1rem] text-white/50 leading-[1.6] mb-[25px] relative z-10 font-[400] pr-[10px]">{project.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-[10px] mb-[30px] relative z-10">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-[#12142b]/80 border border-white/5 text-white/80 px-[16px] py-[6px] rounded-full text-[0.75rem] font-[600] shadow-sm transition-colors hover:text-white hover:border-white/10">{tech}</span>
                ))}
              </div>

              {/* Footer / Source Code Link */}
              <div className="mt-auto pt-[20px] border-t border-white/10 relative z-10">
                <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-[8px] text-white/60 hover:text-white transition-colors text-[0.85rem] font-medium w-fit">
                  <GitHubIcon fontSize="small" />
                  <span>Source Code</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects;