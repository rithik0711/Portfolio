import React, { useState, useEffect } from 'react';

export const Certification = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const certifications = [
    {
      id: 1,
      title: "Machine Learning",
      issuer: "NPTEL",
      level: "Intermediate",
      date: "2023",
      image: "./images/nptel.png",
      description: "NPTEL certification in Machine Learning fundamentals, algorithms, and practical applications.",
      skills: ["ML", "Statistics", "Python", "Scikit-learn"],
      progress: 95,
      color: "#FF6B35"
    },
    {
      id: 2,
      title: "Ethical Hacking",
      issuer: "NPTEL",
      level: "Intermediate",
      date: "2023",
      image: "./images/Ethical Hacking.png",
      description: "Ethical Hacking certification covering security attacks, vulnerabilities, and cyber forensics.",
      skills: ["Cybersecurity", "Networking", "Linux", "Recon"],
      progress: 92,
      color: "#22b455"
    },
    {
      id: 3,
      title: "Introduction to AI",
      issuer: "Google / Coursera",
      level: "Beginner",
      date: "2024",
      image: "./images/Introduction to AI.png",
      description: "Google & Coursera certified course introducing AI fundamentals, LLMs, and real-world use cases.",
      skills: ["AI Basics", "LLMs", "Prompting", "Neural Networks"],
      progress: 90,
      color: "#4285F4"
    },
    {
      id: 4,
      title: "Python Programming",
      issuer: "Python Institute",
      level: "Advanced",
      date: "2024",
      image: "./images/python.png",
      description: "Comprehensive Python programming certification covering advanced concepts, data structures, and best practices.",
      skills: ["Python", "OOP", "Data Structures", "Algorithms"],
      progress: 100,
      color: "#3776AB"
    }
  ];

  // Auto-scroll logic
  useEffect(() => {
    let interval;
    if (!isHovered) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % certifications.length);
      }, 3000); // changes every 3 seconds
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isHovered, certifications.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % certifications.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + certifications.length) % certifications.length);
  };

  // 3D Carousel Style Generator
  const getCardStyle = (index) => {
    const diff = (index - currentIndex + certifications.length) % certifications.length;

    if (diff === 0) {
      // Current center card
      return 'translate-x-0 scale-100 opacity-100 z-30 blur-none';
    } else if (diff === 1) {
      // Next card (Right side)
      return 'translate-x-[60%] md:translate-x-[110%] scale-75 md:scale-80 opacity-50 z-20 blur-[2px] cursor-pointer hover:opacity-80 hover:blur-none';
    } else if (diff === certifications.length - 1) {
      // Previous card (Left side)
      return '-translate-x-[60%] md:-translate-x-[110%] scale-75 md:scale-80 opacity-50 z-20 blur-[2px] cursor-pointer hover:opacity-80 hover:blur-none';
    } else {
      // Hidden cards (behind center)
      return 'translate-x-0 scale-50 opacity-0 z-10 blur-[5px] pointer-events-none';
    }
  };

  return (
    <div className='bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] min-h-[80vh] py-[60px] pt-[90px] md:pt-[80px] md:py-[80px] px-[20px] text-white overflow-hidden relative' id='certification'>

      <div className='text-center mb-[40px] md:mb-[60px] relative z-40'>
        <h2 className='text-[2rem] md:text-[2.5rem] lg:text-[3.5rem] mb-[15px] bg-gradient-to-br from-[#667eea] to-[#764ba2] bg-clip-text text-transparent font-[700]'>Certifications</h2>
        <p className='text-[1rem] md:text-[1.2rem] text-[#b8b8b8] max-w-[600px] mx-auto leading-[1.6]'>Validated expertise moving automatically</p>
      </div>

      {/* 3D Carousel Container */}
      <div
        className='relative w-full h-[400px] md:h-[450px] flex items-center justify-center max-w-[1200px] mx-auto z-30 perspective-1000'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {certifications.map((cert, index) => (
          <div
            key={cert.id}
            onClick={() => setCurrentIndex(index)}
            className={`absolute w-[280px] md:w-[400px] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] 
            rounded-[25px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.4)] border border-white/20 bg-white/5 backdrop-blur-md ${getCardStyle(index)}`}
          >
            <div className='w-full shrink-0 flex flex-col items-center p-[20px] md:p-[35px] group'>

              <div className='w-full h-[160px] md:h-[220px] rounded-[15px] overflow-hidden border-[2px] border-white/10 group-hover:border-[#667eea] transition-all duration-500 mb-[25px] bg-black/20 shadow-inner'>
                <img src={cert.image} alt={cert.title} className='w-full h-full object-cover transition-transform duration-700' />
              </div>

              <span className='px-[15px] py-[5px] rounded-full bg-[#667eea]/20 text-[#8296ec] border border-[#667eea]/30 text-[0.8rem] font-[700] uppercase tracking-wider mb-[15px]'>
                {cert.level}
              </span>

              <h4 className='text-[1.3rem] md:text-[1.7rem] text-white font-[800] mb-[5px] text-center drop-shadow-md tracking-tight'>{cert.title}</h4>
              <p className='text-[#a0a0a0] m-0 text-[0.9rem] md:text-[1.1rem] font-[500] text-center'>{cert.issuer}</p>

            </div>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className='flex justify-center gap-[10px] mt-[40px] z-40 relative'>
        {certifications.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-[8px] rounded-full transition-all duration-500 cursor-pointer ${currentIndex === index ? 'w-[30px] bg-gradient-to-r from-[#FFD700] to-[#FFA500]' : 'w-[8px] bg-white/30 hover:bg-white/60'}`}
          ></div>
        ))}
      </div>

      {/* Floating Nav Buttons */}
      <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 max-w-[1300px] mx-auto px-[10px] md:px-[20px] flex justify-between z-40 pointer-events-none">
        <button
          onClick={prevSlide}
          className='pointer-events-auto w-[45px] h-[45px] rounded-full bg-[#0f0c29]/80 border border-white/20 flex items-center justify-center backdrop-blur-lg text-white hover:bg-[#667eea] hover:scale-110 hover:border-[#667eea] transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.5)]'
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-[20px] h-[20px]">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className='pointer-events-auto w-[45px] h-[45px] rounded-full bg-[#0f0c29]/80 border border-white/20 flex items-center justify-center backdrop-blur-lg text-white hover:bg-[#667eea] hover:scale-110 hover:border-[#667eea] transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.5)]'
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-[20px] h-[20px]">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Decorative Background Elements */}
      <div className='absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-[#667eea] rounded-full mix-blend-screen filter blur-[150px] opacity-20 pointer-events-none z-10'></div>
      <div className='absolute bottom-[10%] right-[10%] w-[350px] h-[350px] bg-[#764ba2] rounded-full mix-blend-screen filter blur-[150px] opacity-20 pointer-events-none z-10'></div>

    </div>
  );
};

export default Certification;