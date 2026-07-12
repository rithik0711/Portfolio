import React, { useState, useEffect, useRef } from 'react';
import SchoolIcon from '@mui/icons-material/School';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ComputerIcon from '@mui/icons-material/Computer';
import CodeIcon from '@mui/icons-material/Code';
import PsychologyIcon from '@mui/icons-material/Psychology';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const Education = () => {
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
    { id: 1, name: 'Data Structures', icon: <CodeIcon /> },
    { id: 2, name: 'Web Development', icon: <AutoAwesomeIcon /> },
    { id: 3, name: 'Cloud Computing', icon: <PsychologyIcon /> },
    { id: 4, name: 'Devops', icon: <ComputerIcon /> }
  ];

  const schoolAchievements = [
    { id: 1, text: 'Excellence in Mathematics' },
    { id: 2, text: 'Intersted in Computer Science' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] relative overflow-hidden py-[60px] pt-[90px] md:pt-[100px] md:py-[100px] px-[15px] md:px-[20px]" id="education" ref={sectionRef}>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,<svg_xmlns=%22http://www.w3.org/2000/svg%22_viewBox=%220_0_1440_320%22><path_fill=%22%23ffffff10%22_d=%22M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,112C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z%22></path></svg>')] bg-no-repeat bg-bottom bg-cover opacity-30 pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="text-center mb-[80px]">
          <h2 className={`text-[2rem] md:text-[4rem] font-[800] mb-[20px] transition-all duration-800 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'}`}>
            <span className="block text-white drop-shadow-[2px_2px_4px_rgba(0,0,0,0.2)]">My Academic</span>
            <span className="block bg-gradient-to-tr from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent mt-[-10px]">Journey</span>
          </h2>
          <p className={`text-[1.2rem] text-white/90 max-w-[600px] mx-auto transition-all duration-800 ease-out delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[20px]'}`}>
            Transforming knowledge into innovation through continuous learning
          </p>
        </div>

        <div className="relative max-w-[1000px] mx-auto">
          <div className="absolute left-[30px] md:left-1/2 top-0 bottom-0 w-[4px] bg-gradient-to-b from-white/30 via-white/80 to-white/30 md:-translate-x-1/2 rounded-[2px]"></div>

          {/* College Education */}
          <div className={`relative mb-[80px] md:w-full transition-all duration-800 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-[50px]'}`}>
            <div className="absolute left-[30px] md:left-1/2 top-[30px] w-[60px] h-[60px] bg-gradient-to-br from-[#667eea] to-[#764ba2] rounded-full flex items-center justify-center -translate-x-1/2 shadow-[0_8px_24px_rgba(0,0,0,0.2)] z-10 transition-transform duration-300 hover:scale-110 hover:shadow-[0_12px_32px_rgba(0,0,0,0.3)]">
              <AccountBalanceIcon sx={{ color: 'white', fontSize: 28 }} />
            </div>
            <div className="w-[calc(100%-80px)] ml-[60px] md:w-[calc(50%-40px)] md:ml-[50%] md:pl-[40px] p-[20px]">
              <div className="bg-white/95 rounded-[20px] p-[20px] md:p-[30px] shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all duration-300 relative overflow-hidden border-t-[5px] border-t-transparent hover:-translate-y-[5px] hover:shadow-[0_25px_50px_rgba(0,0,0,0.15)] before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[5px] before:bg-gradient-to-r before:from-[#667eea] before:to-[#764ba2]">
                <div className="flex justify-between items-center mb-[20px]">
                  <div className="bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white px-[16px] py-[8px] rounded-[20px] font-[600] text-[0.9rem]">2023 - 2027</div>
                  <div className="bg-[#4CAF50] text-white px-[12px] py-[6px] rounded-[15px] text-[0.8rem] font-[500]">Current</div>
                </div>
                <h3 className="text-[1.4rem] md:text-[1.8rem] text-[#333] mb-[10px] font-[700]">Bannari Amman Institute of Technology</h3>
                <p className="text-[#666] text-[1.1rem] mb-[25px] font-[500]">B.Tech Information Technology</p>

                <div className="mb-[25px]">
                  <div className="w-full h-[8px] bg-[#e0e0e0] rounded-[4px] overflow-hidden mb-[8px]">
                    <div className="h-full bg-gradient-to-r from-[#667eea] to-[#764ba2] rounded-[4px] transition-all duration-1000 ease-out w-[75%]"></div>
                  </div>
                  <span className="text-[#666] text-[0.9rem] font-[500]">4th Year</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-[12px] mb-[25px]">
                  {collegeSkills.map((skill) => (
                    <div key={skill.id} className="flex items-center gap-[8px] px-[15px] py-[10px] bg-gradient-to-br from-[#667eea1a] to-[#764ba21a] rounded-[12px] border border-[#667eea33] transition-all duration-300 hover:-translate-y-[2px] hover:bg-gradient-to-br hover:from-[#667eea33] hover:to-[#764ba233]">
                      <span className="text-[#667eea] text-[18px] flex">{skill.icon}</span>
                      <span className="text-[#333] font-[500] text-[0.9rem]">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* School Education */}
          <div className={`relative mb-[80px] md:w-full transition-all duration-800 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[50px]'}`}>
            <div className="absolute left-[30px] md:left-1/2 top-[30px] w-[60px] h-[60px] bg-white rounded-full flex items-center justify-center -translate-x-1/2 shadow-[0_8px_24px_rgba(0,0,0,0.2)] z-10 transition-transform duration-300 hover:scale-110 hover:shadow-[0_12px_32px_rgba(0,0,0,0.3)]">
              <SchoolIcon sx={{ color: '#764ba2', fontSize: 28 }} />
            </div>
            <div className="w-[calc(100%-80px)] ml-[60px] md:w-[calc(50%-40px)] md:mr-[50%] md:pr-[40px] md:ml-[0px] p-[20px]">
              <div className="bg-white/95 rounded-[20px] p-[20px] md:p-[30px] shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all duration-300 relative overflow-hidden border-t-[5px] border-t-transparent hover:-translate-y-[5px] hover:shadow-[0_25px_50px_rgba(0,0,0,0.15)] before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[5px] before:bg-gradient-to-r before:from-[#667eea] before:to-[#764ba2]">
                <div className="flex justify-between items-center mb-[20px]">
                  <div className="bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white px-[16px] py-[8px] rounded-[20px] font-[600] text-[0.9rem]">2022 - 2023</div>
                  <div className="bg-[#2196F3] text-white px-[12px] py-[6px] rounded-[15px] text-[0.8rem] font-[500]">Completed</div>
                </div>
                <h3 className="text-[1.4rem] md:text-[1.8rem] text-[#333] mb-[10px] font-[700]">Isha Vidhya Matric Higher Secondary School</h3>
                <p className="text-[#666] text-[1.1rem] mb-[25px] font-[500]">Higher Secondary Education</p>

                <div className="mb-[25px]">
                  {schoolAchievements.map((achievement) => (
                    <div key={achievement.id} className="flex items-center gap-[12px] p-[12px] mb-[10px] bg-[#ffd7001a] rounded-[10px] border-l-[3px] border-l-[#FFD700] transition-all duration-300 hover:bg-[#ffd70033] hover:translate-x-[5px]">
                      <div className="text-[#FFD700] text-[20px] flex">
                        <EmojiEventsIcon />
                      </div>
                      <span className="text-[#333] font-[500] text-[0.95rem]">{achievement.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;