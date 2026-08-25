import React, { useState, useEffect, useRef } from 'react';
import SchoolIcon from '@mui/icons-material/School';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ComputerIcon from '@mui/icons-material/Computer';
import CodeIcon from '@mui/icons-material/Code';
import PsychologyIcon from '@mui/icons-material/Psychology';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

export const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const collegeSkills = [
    { id: 1, name: 'Data Structures & Algorithms', icon: <CodeIcon fontSize="small" /> },
    { id: 2, name: 'Cloud Computing & AWS', icon: <PsychologyIcon fontSize="small" /> },
    { id: 3, name: 'DevOps & Containerization', icon: <ComputerIcon fontSize="small" /> },
    { id: 4, name: 'Full-Stack Web Development', icon: <AutoAwesomeIcon fontSize="small" /> }
  ];

  const schoolAchievements = [
    { id: 1, text: 'Excellence in Mathematics & Analytical Problem Solving' },
    { id: 2, text: 'Top Performer in Computer Science Fundamentals' }
  ];

  return (
    <section className="min-h-screen py-[70px] pt-[100px] px-[15px] md:px-[20px] relative overflow-hidden" id="education" ref={sectionRef}>
      <div className="max-w-[1200px] mx-auto relative z-10">
        
        <div className="text-center mb-[60px]">
          <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs uppercase font-mono tracking-widest text-amber-300 mb-3'>
            🎓 Academic Milestone
          </div>
          <h2 className="text-[2.2rem] md:text-[3rem] lg:text-[3.5rem] font-[800] mb-[15px] tracking-[-1px] leading-[1.1] text-white">
            Academic <span className="bg-gradient-to-tr from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-[1rem] md:text-[1.15rem] text-white/70 max-w-[600px] mx-auto leading-[1.6]">
            Continuous pursuit of technical mastery and rigorous problem-solving fundamentals
          </p>
        </div>

        <div className="relative max-w-[1000px] mx-auto">
          {/* Central Line */}
          <div className="absolute left-[30px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-400 via-purple-500 to-amber-400 md:-translate-x-1/2 rounded-full opacity-40"></div>

          {/* College Card */}
          <div className={`relative mb-[60px] md:w-full transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-[30px]'}`}>
            <div className="absolute left-[30px] md:left-1/2 top-[24px] w-[50px] h-[50px] bg-gradient-to-br from-[#667eea] to-[#764ba2] rounded-2xl flex items-center justify-center -translate-x-1/2 shadow-[0_0_25px_rgba(102,126,234,0.6)] z-10 border border-white/20">
              <AccountBalanceIcon sx={{ color: 'white', fontSize: 24 }} />
            </div>
            <div className="w-[calc(100%-80px)] ml-[60px] md:w-[calc(50%-40px)] md:ml-[50%] md:pl-[40px]">
              <div className="bg-white/[0.04] border border-white/10 rounded-[24px] p-[25px] md:p-[30px] shadow-2xl backdrop-blur-xl hover:border-cyan-400/40 hover:bg-white/[0.07] transition-all duration-300">
                <div className="flex justify-between items-center mb-[15px]">
                  <span className="bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 px-3 py-1 rounded-full font-mono font-bold text-xs">
                    2023 - 2027
                  </span>
                  <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 px-2.5 py-0.5 rounded-full text-xs font-mono font-bold">
                    ● Current (4th Year)
                  </span>
                </div>
                <h3 className="text-[1.3rem] md:text-[1.5rem] text-white font-bold mb-1">
                  Bannari Amman Institute of Technology
                </h3>
                <p className="text-cyan-300 text-sm font-medium mb-4">
                  B.Tech in Information Technology
                </p>

                <div className="mb-5">
                  <div className="flex justify-between text-xs font-mono text-white/60 mb-1">
                    <span>Program Progress</span>
                    <span className="text-white font-bold">75% Complete</span>
                  </div>
                  <div className="w-full h-2 bg-black/40 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full w-[75%]"></div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {collegeSkills.map((skill) => (
                    <div key={skill.id} className="flex items-center gap-2 p-2 rounded-xl bg-black/30 border border-white/5 text-xs text-white/80">
                      <span className="text-cyan-400">{skill.icon}</span>
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* School Card */}
          <div className={`relative mb-[40px] md:w-full transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[30px]'}`}>
            <div className="absolute left-[30px] md:left-1/2 top-[24px] w-[50px] h-[50px] bg-gradient-to-br from-[#ff0844] to-[#ffb199] rounded-2xl flex items-center justify-center -translate-x-1/2 shadow-[0_0_25px_rgba(255,8,68,0.6)] z-10 border border-white/20">
              <SchoolIcon sx={{ color: 'white', fontSize: 24 }} />
            </div>
            <div className="w-[calc(100%-80px)] ml-[60px] md:w-[calc(50%-40px)] md:mr-[50%] md:pr-[40px] md:ml-0">
              <div className="bg-white/[0.04] border border-white/10 rounded-[24px] p-[25px] md:p-[30px] shadow-2xl backdrop-blur-xl hover:border-pink-400/40 hover:bg-white/[0.07] transition-all duration-300">
                <div className="flex justify-between items-center mb-[15px]">
                  <span className="bg-purple-500/20 text-purple-300 border border-purple-400/30 px-3 py-1 rounded-full font-mono font-bold text-xs">
                    2022 - 2023
                  </span>
                  <span className="bg-blue-500/20 text-blue-300 border border-blue-400/30 px-2.5 py-0.5 rounded-full text-xs font-mono font-bold">
                    ✓ Completed
                  </span>
                </div>
                <h3 className="text-[1.3rem] md:text-[1.5rem] text-white font-bold mb-1">
                  Isha Vidhya Matric Higher Secondary School
                </h3>
                <p className="text-purple-300 text-sm font-medium mb-4">
                  Higher Secondary Education
                </p>

                <div className="space-y-2">
                  {schoolAchievements.map((achievement) => (
                    <div key={achievement.id} className="flex items-center gap-2.5 p-2.5 bg-amber-500/10 border border-amber-500/20 rounded-xl text-xs text-white/90">
                      <EmojiEventsIcon sx={{ color: '#ffd700', fontSize: 18 }} />
                      <span>{achievement.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Education;