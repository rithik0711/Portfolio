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
      // description: "Intelligent examination platform powered by machine learning algorithms for automated assessment and personalized learning recommendations",
      image: "./images/exam.png",
      category: "Gen AI",
      tech: ["React", "Node.js", "Express", "SQL"],
      github: "https://github.com/rithik0711/recommendation-system",
      live: "#",
      icon: <SmartToyIcon />,
      color: "#FF6B6B"
    },
    {
      id: 2,
      title: "Skin Analyzer",
      // description: "Advanced deep learning application for real-time skin analysis with accurate diagnostic capabilities and treatment recommendations",
      image: "/images/skin-analyze.png",
      category: "ML",
      tech: ["React", "Python", "TensorFlow"],
      github: "https://github.com/rithik0711/recommendation-system",
      live: "#",
      icon: <BiotechIcon />,
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
              className='bg-white/95 rounded-[24px] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] border border-white/20 backdrop-blur-md opacity-100 translate-y-0 hover:-translate-y-[12px] hover:scale-[1.02] hover:shadow-[0_30px_60px_rgba(0,0,0,0.15)] group flex flex-col'
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className='relative h-[200px] lg:h-[220px] overflow-hidden shrink-0'>
                <img src={project.image} alt={project.title} className='w-full h-full object-cover transition-transform duration-600 ease-in-out group-hover:scale-[1.08]' />
                <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black/40 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100'></div>
                <div className='absolute bottom-[15px] right-[15px] flex items-center gap-[8px] px-[12px] py-[6px] md:px-[16px] md:py-[8px] rounded-[20px] text-white font-[600] text-[0.75rem] md:text-[0.85rem] backdrop-blur-md border-[2px] border-white/30 shadow-[0_8px_20px_rgba(0,0,0,0.2)] z-[10]' style={{ backgroundColor: project.color }}>
                  <span className='content-center text-[18px] flex'>{project.icon}</span>
                  <span className='uppercase tracking-[0.5px]'>{project.category}</span>
                </div>
              </div>

              <div className='p-[20px] md:p-[25px] lg:p-[30px] flex flex-col flex-grow'>
                <header className='mb-[15px]'>
                  <h3 className='text-[1.3rem] md:text-[1.4rem] lg:text-[1.6rem] font-[700] text-[#2d3748] m-0 leading-[1.3] relative pb-[10px] after:content-[""] after:absolute after:bottom-[-8px] after:left-0 after:w-[50px] after:h-[3px] after:bg-gradient-to-r after:from-[#667eea] after:to-[#764ba2] after:rounded-[2px]'>{project.title}</h3>
                </header>

                <div className='flex flex-wrap gap-[10px] mb-[25px] mt-[10px]'>
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className='bg-gradient-to-br from-[#667eea1a] to-[#764ba21a] text-[#667eea] px-[14px] py-[6px] rounded-[16px] text-[0.8rem] font-[600] border border-[#667eea33] transition-all duration-300 ease-in-out hover:bg-gradient-to-br hover:from-[#667eea33] hover:to-[#764ba233] hover:-translate-y-[2px]'>{tech}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects;