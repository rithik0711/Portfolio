import React from 'react';
import CodeIcon from '@mui/icons-material/Code';
import PsychologyIcon from '@mui/icons-material/Psychology';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const About = () => {
  return (
    <div className='w-full bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] py-20 pt-[90px] md:pt-20 relative px-4 md:px-8 overflow-hidden' id='about'>

      {/* Background decorations */}
      <div className='absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none'>
        <div className='absolute top-[10%] left-[5%] w-72 h-72 bg-[#667eea] rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-pulse'></div>
        <div className='absolute top-[40%] right-[5%] w-96 h-96 bg-[#ff0844] rounded-full mix-blend-screen filter blur-[120px] opacity-20' style={{ animation: 'pulse 4s infinite alternate' }}></div>
        <div className='absolute bottom-[10%] left-[20%] w-80 h-80 bg-[#11998e] rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-pulse'></div>
      </div>

      <div className='max-w-[1300px] mx-auto flex flex-col xl:flex-row items-center gap-12 xl:gap-20 relative z-10'>

        {/* Left Content - Image Section */}
        <div className='w-full xl:w-5/12 flex flex-col items-center xl:items-start justify-center relative mt-10 xl:mt-0'>
          <div className='relative w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] lg:w-[420px] lg:h-[420px] group'>
            {/* Animated Blob Background */}
            <div className='absolute inset-[-10px] bg-gradient-to-r from-[#667eea] via-[#ff0844] to-[#764ba2] rounded-[30%_70%_70%_30%/30%_30%_70%_70%] blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-700 animate-[spin_10s_linear_infinite]'></div>

            {/* Image Container */}
            <div className='absolute inset-0 bg-[#0f0c29]/50 backdrop-blur-md rounded-[2rem] border border-white/10 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform transition-all duration-500 group-hover:scale-[1.02] group-hover:-rotate-2 overflow-hidden flex items-center justify-center'>
              <img src="/images/image.png" alt="About Me" className='w-full h-full object-cover rounded-[1.5rem] shadow-inner transition-transform duration-700 group-hover:scale-110' />

              {/* Overlay gradient for image */}
              <div className='absolute inset-0 bg-gradient-to-t from-[#0f0c29] via-transparent to-transparent opacity-40 rounded-[1.5rem] pointer-events-none'></div>
            </div>
          </div>
        </div>

        {/* Right Content - Text & Cards */}
        <div className='w-full xl:w-7/12 flex flex-col justify-center text-center xl:text-left'>
          <div className='inline-block xl:block mb-2 text-center xl:text-left'>
            <span className='px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#b8b8b8] text-sm font-medium tracking-wider uppercase backdrop-blur-md'>Discover</span>
          </div>
          <h2 className='text-[2.5rem] sm:text-[3rem] lg:text-[4rem] mb-4 bg-gradient-to-r from-[#fff] via-[#d1d5db] to-[#6b7280] bg-clip-text text-transparent font-extrabold tracking-tight leading-tight'>
            About Me
          </h2>
          <p className='text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] text-[#b8b8b8] mb-10 leading-relaxed max-w-[650px] mx-auto xl:mx-0 font-light'>
            Get to know my journey, work style, and what drives me as a developer to create exceptional digital experiences.
          </p>

          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 perspective-1000'>

            {/* Card 1 */}
            <div className='group h-[280px] w-full [perspective:1000px]'>
              <div className='relative h-full w-full rounded-[20px] transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-[0_15px_35px_rgba(0,0,0,0.3)]'>
                {/* Front Face */}
                <div className='absolute inset-0 h-full w-full rounded-[20px] bg-white/[0.03] border border-white/10 backdrop-blur-md p-[25px] flex flex-col items-center justify-center text-center [backface-visibility:hidden] hover:bg-white/[0.05] transition-colors'>
                  <div className='w-[70px] h-[70px] bg-gradient-to-br from-[#667eea] to-[#764ba2] rounded-[18px] transform rotate-3 flex items-center justify-center mb-5 shadow-[0_0_20px_rgba(102,126,234,0.4)] group-hover:rotate-0 transition-transform duration-300'>
                    <CodeIcon sx={{ fontSize: 36, color: 'white' }} />
                  </div>
                  <h3 className='text-white text-[1.4rem] font-bold tracking-wide'>Who Am I?</h3>
                  <p className='text-[#a0a0a0] mt-3 text-[0.85rem] font-medium uppercase tracking-widest'>Hover to reveal</p>
                </div>
                {/* Back Face */}
                <div className='absolute inset-0 h-full w-full rounded-[20px] bg-gradient-to-br from-[#667eea] to-[#764ba2] p-[25px] flex flex-col items-center justify-center text-center [transform:rotateY(180deg)] [backface-visibility:hidden]'>
                  <h3 className='text-white text-[1.4rem] font-bold tracking-wide border-b border-white/30 pb-3 mb-4 w-full'>My Story</h3>
                  <p className='text-white/90 leading-[1.6] text-[1rem] font-medium'>
                    I am a B.Tech Information Technology student who enjoys learning programming and building projects. I am interested in Data Structures, AI, and DevOps, and I like exploring new technologies.                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className='group h-[280px] w-full [perspective:1000px]'>
              <div className='relative h-full w-full rounded-[20px] transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-[0_15px_35px_rgba(0,0,0,0.3)] hover:-translate-y-2'>
                {/* Front Face */}
                <div className='absolute inset-0 h-full w-full rounded-[20px] bg-white/[0.03] border border-white/10 backdrop-blur-md p-[25px] flex flex-col items-center justify-center text-center [backface-visibility:hidden] hover:bg-white/[0.05] transition-colors'>
                  <div className='w-[70px] h-[70px] bg-gradient-to-br from-[#ff0844] to-[#ffb199] rounded-[18px] transform -rotate-3 flex items-center justify-center mb-5 shadow-[0_0_20px_rgba(255,8,68,0.4)] group-hover:rotate-0 transition-transform duration-300'>
                    <PsychologyIcon sx={{ fontSize: 36, color: 'white' }} />
                  </div>
                  <h3 className='text-white text-[1.4rem] font-bold tracking-wide'>How I Work</h3>
                  <p className='text-[#a0a0a0] mt-3 text-[0.85rem] font-medium uppercase tracking-widest'>Hover to reveal</p>
                </div>
                {/* Back Face */}
                <div className='absolute inset-0 h-full w-full rounded-[20px] bg-gradient-to-br from-[#ff0844] to-[#ffb199] p-[25px] flex flex-col items-center justify-center text-center [transform:rotateY(180deg)] [backface-visibility:hidden]'>
                  <h3 className='text-white text-[1.4rem] font-bold tracking-wide border-b border-white/30 pb-3 mb-4 w-full'>My Process</h3>
                  <p className='text-white/95 leading-[1.6] text-[1rem] font-medium drop-shadow-md'>
                    I approach problems step by step. First I understand the requirement, then plan a solution, and finally build and test the application carefully.                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 - Spans 2 columns on sm+ */}
            <div className='group h-[240px] sm:h-[220px] w-full sm:col-span-2 [perspective:1000px] mt-2'>
              <div className='relative h-full w-full rounded-[20px] transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateX(180deg)] shadow-[0_15px_35px_rgba(0,0,0,0.3)]'>
                {/* Front Face */}
                <div className='absolute inset-0 h-full w-full rounded-[20px] bg-white/[0.03] border border-white/10 backdrop-blur-md p-[25px] flex flex-col sm:flex-row items-center justify-center text-center sm:text-left gap-6 [backface-visibility:hidden] hover:bg-white/[0.05] transition-colors'>
                  <div className='w-[70px] h-[70px] shrink-0 bg-gradient-to-br from-[#11998e] to-[#38ef7d] rounded-[18px] transform rotate-3 flex items-center justify-center shadow-[0_0_20px_rgba(17,153,142,0.4)] group-hover:rotate-0 transition-transform duration-300'>
                    <RocketLaunchIcon sx={{ fontSize: 36, color: 'white' }} />
                  </div>
                  <div>
                    <h3 className='text-white text-[1.4rem] font-bold tracking-wide'>What Drives Me</h3>
                    <p className='text-[#a0a0a0] mt-1 text-[0.85rem] font-medium uppercase tracking-widest'>Hover to reveal</p>
                  </div>
                </div>
                {/* Back Face */}
                <div className='absolute inset-0 h-full w-full rounded-[20px] bg-gradient-to-br from-[#11998e] to-[#38ef7d] p-[25px] flex flex-col sm:flex-row items-center justify-center text-center sm:text-left gap-6 [transform:rotateX(180deg)] [backface-visibility:hidden]'>
                  <div className='w-[70px] h-[70px] shrink-0 bg-white/20 rounded-[18px] flex items-center justify-center backdrop-blur-sm'>
                    <RocketLaunchIcon sx={{ fontSize: 36, color: 'white' }} />
                  </div>
                  <div>
                    <h3 className='text-white text-[1.4rem] font-bold tracking-wide border-b border-black/10 pb-2 mb-2 w-full text-shadow-sm'>My Motivation</h3>
                    <p className='text-white/95 leading-[1.5] text-[1rem] font-medium'>
                      I am motivated by learning new things and improving my technical skills. Building useful software and solving challenging problems inspires me to keep growing.                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
export default About;