import React from 'react';
import CodeIcon from '@mui/icons-material/Code';
import PsychologyIcon from '@mui/icons-material/Psychology';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const About = () => {
  return (
    <div className='w-full bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] py-20 pt-[90px] md:pt-20 relative px-4 md:px-8' id='about'>
      <div className='max-w-[1200px] mx-auto'>
        <h2 className='text-center text-[2.2rem] md:text-[2.8rem] lg:text-[3.5rem] mb-5 bg-gradient-to-br from-[#667eea] to-[#764ba2] bg-clip-text text-transparent font-bold'>About Me</h2>
        <p className='text-center text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] text-[#b8b8b8] max-w-[700px] mx-auto mb-10 lg:mb-[60px] leading-relaxed'>Get to know my journey, work style, and what drives me as a developer</p>

        <div className='grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5 md:gap-[30px]'>
          <div className='bg-white/5 rounded-[20px] p-[25px] md:p-[30px] border border-white/10 backdrop-blur-md transition-all duration-300 ease-in-out h-full flex flex-col items-center text-center hover:-translate-y-2.5 hover:bg-white/10 hover:shadow-[0_15px_35px_rgba(0,0,0,0.2)]'>
            <div className='w-[60px] h-[60px] md:w-[70px] md:h-[70px] bg-gradient-to-br from-[#667eea] to-[#764ba2] rounded-full flex items-center justify-center mb-5'>
              <CodeIcon sx={{ fontSize: { xs: 30, md: 36 }, color: 'white' }} />
            </div>
            <h3 className='text-white text-[1.3rem] md:text-[1.5rem] mb-[15px] font-semibold'>Who Am I?</h3>
            <p className='text-[#e0e0e0] leading-[1.6] flex-grow'>B.Tech IT student specializing in Data Structures & Algorithms and Artificial Intelligence. A creative thinker passionate about solving complex problems through code.</p>
          </div>

          <div className='bg-white/5 rounded-[20px] p-[25px] md:p-[30px] border border-white/10 backdrop-blur-md transition-all duration-300 ease-in-out h-full flex flex-col items-center text-center hover:-translate-y-2.5 hover:bg-white/10 hover:shadow-[0_15px_35px_rgba(0,0,0,0.2)]'>
            <div className='w-[60px] h-[60px] md:w-[70px] md:h-[70px] bg-gradient-to-br from-[#667eea] to-[#764ba2] rounded-full flex items-center justify-center mb-5'>
              <PsychologyIcon sx={{ fontSize: { xs: 30, md: 36 }, color: 'white' }} />
            </div>
            <h3 className='text-white text-[1.3rem] md:text-[1.5rem] mb-[15px] font-semibold'>How I Work</h3>
            <p className='text-[#e0e0e0] leading-[1.6] flex-grow'>I build full-stack applications with clean, efficient code. I'm constantly exploring new technologies and creating innovative solutions to real-world challenges.</p>
          </div>

          <div className='bg-white/5 rounded-[20px] p-[25px] md:p-[30px] border border-white/10 backdrop-blur-md transition-all duration-300 ease-in-out h-full flex flex-col items-center text-center hover:-translate-y-2.5 hover:bg-white/10 hover:shadow-[0_15px_35px_rgba(0,0,0,0.2)]'>
            <div className='w-[60px] h-[60px] md:w-[70px] md:h-[70px] bg-gradient-to-br from-[#667eea] to-[#764ba2] rounded-full flex items-center justify-center mb-5'>
              <RocketLaunchIcon sx={{ fontSize: { xs: 30, md: 36 }, color: 'white' }} />
            </div>
            <h3 className='text-white text-[1.3rem] md:text-[1.5rem] mb-[15px] font-semibold'>What Drives Me</h3>
            <p className='text-[#e0e0e0] leading-[1.6] flex-grow'>Innovation and excellence drive my work. I'm passionate about emerging technologies and committed to continuous learning and growth in the tech landscape.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default About;