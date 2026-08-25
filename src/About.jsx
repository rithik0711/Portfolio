import React from 'react';
import CodeIcon from '@mui/icons-material/Code';
import PsychologyIcon from '@mui/icons-material/Psychology';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import CloudIcon from '@mui/icons-material/Cloud';
import { sound } from './utils/soundFX';

export const About = () => {
  return (
    <section className='min-h-screen py-[70px] pt-[100px] px-[15px] md:px-[20px] relative overflow-hidden' id='about'>
      <div className='max-w-[1200px] mx-auto relative z-10'>
        
        <header className='text-center mb-[50px]'>
          <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs uppercase font-mono tracking-widest text-pink-300 mb-3'>
            ✨ Background & Persona
          </div>
          <h2 className='text-[2.2rem] md:text-[3rem] lg:text-[3.5rem] font-[800] mb-[15px] tracking-[-1px] leading-[1.1] text-white'>
            About <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#ff0844] via-[#ffb199] to-[#ffd700]'>Me</span>
          </h2>
          <p className='text-[1rem] md:text-[1.15rem] text-white/70 max-w-[650px] mx-auto leading-[1.6]'>
            Engineering high-throughput cloud environments, full-stack systems, and exploring artificial intelligence workflows.
          </p>
        </header>

        {/* Stats Row */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-12'>
          {[
            { value: "4th Year", label: "B.Tech IT Student", icon: "🎓" },
            { value: "9+", label: "Verified Certifications", icon: "📜" },
            { value: "10+", label: "Cloud & AI Projects", icon: "🚀" },
            { value: "100%", label: "Committed to Scalability", icon: "⚡" }
          ].map((stat, i) => (
            <div
              key={i}
              className='bg-white/[0.04] border border-white/10 rounded-2xl p-4 text-center backdrop-blur-md hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300 shadow-lg'
            >
              <div className='text-2xl mb-1'>{stat.icon}</div>
              <div className='text-xl md:text-2xl font-black font-mono text-white tracking-tight'>
                {stat.value}
              </div>
              <div className='text-xs text-white/60 font-medium mt-0.5'>{stat.label}</div>
            </div>
          ))}
        </div>

        <div className='flex flex-col lg:flex-row items-center gap-10 lg:gap-14'>
          {/* Left: Avatar with glowing holographic orb */}
          <div className='relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] shrink-0 group'>
            <div className='absolute inset-[-12px] bg-gradient-to-tr from-[#667eea] via-[#ff0844] to-[#00f2fe] rounded-[35%_65%_65%_35%/35%_35%_65%_65%] blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-700 animate-spin [animation-duration:20s]'></div>
            <div className='absolute inset-0 bg-[#0f0c29]/70 backdrop-blur-md rounded-[2.5rem] border border-white/20 p-3 shadow-2xl overflow-hidden flex items-center justify-center'>
              <img
                src="./images/my-pic.jpg"
                alt="Rithikeswaran M"
                className='w-full h-full object-cover rounded-[2rem] shadow-inner group-hover:scale-105 transition-transform duration-500'
              />
            </div>
          </div>

          {/* Right: 3D Flip Interactive Cards */}
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 flex-1 w-full'>
            
            {/* Card 1 */}
            <div
              onMouseEnter={() => sound.playHover()}
              className='group h-[240px] [perspective:1000px] cursor-pointer'
            >
              <div className='relative h-full w-full rounded-2xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-xl'>
                <div className='absolute inset-0 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md p-5 flex flex-col items-center justify-center text-center [backface-visibility:hidden]'>
                  <div className='w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-3 text-white shadow-lg'>
                    <CodeIcon />
                  </div>
                  <h3 className='font-bold text-white text-base'>Who Am I?</h3>
                  <span className='text-[10px] font-mono text-cyan-300 mt-2 uppercase tracking-wider'>Hover to Flip</span>
                </div>
                <div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-[#667eea] to-[#764ba2] p-4 flex flex-col items-center justify-center text-center [transform:rotateY(180deg)] [backface-visibility:hidden]'>
                  <h4 className='font-bold text-white text-sm mb-2'>My Background</h4>
                  <p className='text-xs text-white/90 leading-relaxed'>
                    B.Tech IT student at Bannari Amman Institute of Technology with a strong foundation in Cloud Architecture, AI automations, and modern DevOps tools.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div
              onMouseEnter={() => sound.playHover()}
              className='group h-[240px] [perspective:1000px] cursor-pointer'
            >
              <div className='relative h-full w-full rounded-2xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-xl'>
                <div className='absolute inset-0 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md p-5 flex flex-col items-center justify-center text-center [backface-visibility:hidden]'>
                  <div className='w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center mb-3 text-white shadow-lg'>
                    <CloudIcon />
                  </div>
                  <h3 className='font-bold text-white text-base'>Cloud Vision</h3>
                  <span className='text-[10px] font-mono text-cyan-300 mt-2 uppercase tracking-wider'>Hover to Flip</span>
                </div>
                <div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-[#ff0844] to-[#ffb199] p-4 flex flex-col items-center justify-center text-center [transform:rotateY(180deg)] [backface-visibility:hidden]'>
                  <h4 className='font-bold text-white text-sm mb-2'>Architecture Focus</h4>
                  <p className='text-xs text-white/95 leading-relaxed'>
                    Passionate about architecting highly scalable, fault-tolerant infrastructure with automated zero-downtime deployment pipelines and container security.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div
              onMouseEnter={() => sound.playHover()}
              className='group h-[240px] [perspective:1000px] cursor-pointer'
            >
              <div className='relative h-full w-full rounded-2xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-xl'>
                <div className='absolute inset-0 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md p-5 flex flex-col items-center justify-center text-center [backface-visibility:hidden]'>
                  <div className='w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mb-3 text-white shadow-lg'>
                    <RocketLaunchIcon />
                  </div>
                  <h3 className='font-bold text-white text-base'>What Drives Me</h3>
                  <span className='text-[10px] font-mono text-cyan-300 mt-2 uppercase tracking-wider'>Hover to Flip</span>
                </div>
                <div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-[#11998e] to-[#38ef7d] p-4 flex flex-col items-center justify-center text-center [transform:rotateY(180deg)] [backface-visibility:hidden]'>
                  <h4 className='font-bold text-white text-sm mb-2'>Constant Growth</h4>
                  <p className='text-xs text-white/95 leading-relaxed'>
                    Continuous hands-on implementation of cutting-edge tech — from local LLM agents (Ollama) to microservices orchestration and multi-cloud systems.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;