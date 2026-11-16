import React, { useState, useEffect } from 'react';
import { sound } from './utils/soundFX';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const Certification = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const certifications = [
  {
    id: 1,
    title: "CCNA: Introduction to Networking",
    issuer: "Cisco Networking Academy",
    level: "Advanced",
    date: "2024",
    image: "/images/ccna.png",
    skills: ["Computer Networking", "IP Addressing", "Subnetting", "Routing Protocols"],
    color: "#3776AB"
  },
  {
    id: 2,
    title: "Azure Administrator Associate",
    issuer: "Microsoft Azure",
    level: "Associate",
    date: "2024",
    image: "/images/az-104.png",
    skills: ["Azure Virtual Machines", "Azure Networking", "Storage", "Identity & Access Management"],
    color: "#0078D4"
  },
  {
    id: 3,
    title: "OCI Foundations Associate",
    issuer: "Oracle Cloud Infrastructure",
    level: "Associate",
    date: "2024",
    image: "/images/oracle_cloud.png",
    skills: ["Cloud Architecture", "OCI Compute", "Storage", "Networking"],
    color: "#F80000"
  },
  {
    id: 4,
    title: "Machine Learning Fundamentals",
    issuer: "NPTEL IIT Madras",
    level: "Intermediate",
    date: "2023",
    image: "/images/nptel.png",
    skills: ["Supervised ML", "Neural Networks", "Python", "Data Modeling"],
    color: "#FF6B35"
  },
  {
    id: 5,
    title: "Ethical Hacking & Forensics",
    issuer: "NPTEL IIT Kharagpur",
    level: "Intermediate",
    date: "2023",
    image: "/images/Ethical Hacking.png",
    skills: ["Network Security", "Vulnerability Assessment", "Cyber Forensics"],
    color: "#22b455"
  },
  {
    id: 6,
    title: "Introduction to Artificial Intelligence",
    issuer: "Google / Coursera",
    level: "Foundational",
    date: "2024",
    image: "/images/Introduction to AI.png",
    skills: ["GenAI", "LLMs", "Prompt Engineering", "AI Ethics"],
    color: "#4285F4"
  },
  {
    id: 7,
    title: "Python Programming",
    issuer: "Cisco",
    level: "Advanced",
    date: "2024",
    image: "/images/python.png",
    skills: ["Python OOP", "Data Structures", "Algorithms", "Packages"],
    color: "#3776AB"
  },
  {
    id: 8,
    title: "Programming in Java",
    issuer: "NPTEL IIT Kharagpur",
    level: "Intermediate",
    date: "2023",
    image: "/images/p_java.png",
    skills: ["Java OOP", "Collections", "Multithreading", "JVM"],
    color: "#22b455"
  }
];

  // Auto-scroll carousel
  useEffect(() => {
    let interval;
    if (!isHovered) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % certifications.length);
      }, 3500);
    }
    return () => clearInterval(interval);
  }, [isHovered, certifications.length]);

  const nextSlide = () => {
    sound.playClick();
    setCurrentIndex((prev) => (prev + 1) % certifications.length);
  };

  const prevSlide = () => {
    sound.playClick();
    setCurrentIndex((prev) => (prev - 1 + certifications.length) % certifications.length);
  };

  const getCardStyle = (index) => {
    const n = certifications.length;
    let diff = index - currentIndex;
    if (diff > n / 2) diff -= n;
    if (diff < -n / 2) diff += n;

    switch (diff) {
      case 0:
        return "translate-x-0 scale-105 opacity-100 z-30 shadow-[0_0_40px_rgba(102,126,234,0.4)] border-cyan-400/50";
      case 1:
        return "translate-x-[75%] md:translate-x-[85%] scale-90 opacity-70 z-20";
      case 2:
        return "translate-x-[145%] md:translate-x-[165%] scale-75 opacity-40 z-10 pointer-events-none";
      case -1:
        return "-translate-x-[75%] md:-translate-x-[85%] scale-90 opacity-70 z-20";
      case -2:
        return "-translate-x-[145%] md:-translate-x-[165%] scale-75 opacity-40 z-10 pointer-events-none";
      default:
        return "translate-x-0 scale-50 opacity-0 pointer-events-none";
    }
  };

  return (
    <section className='min-h-[85vh] py-[70px] pt-[100px] px-[15px] md:px-[20px] text-white relative overflow-hidden' id='certification'>

      <div className='text-center mb-[50px] relative z-20'>

        <h2 className='text-[2.2rem] md:text-[3rem] lg:text-[3.5rem] mb-[15px] font-[800] tracking-[-1px] text-white'>
          Professional <span className='bg-gradient-to-r from-[#00f2fe] via-[#4facfe] to-[#667eea] bg-clip-text text-transparent'>Certifications</span>
        </h2>
        <p className='text-[1rem] md:text-[1.15rem] text-white/70 max-w-[600px] mx-auto leading-[1.6]'>
          Verified domain expertise across Cloud, Networking, Machine Learning, and Cybersecurity
        </p>
      </div>

      {/* 3D Carousel */}
      <div
        className='relative w-full h-[450px] md:h-[480px] flex items-center justify-center max-w-[1200px] mx-auto z-30 [perspective:1200px]'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {certifications.map((cert, index) => (
          <div
            key={cert.id}
            onClick={() => {
              sound.playClick();
              setCurrentIndex(index);
            }}
            className={`absolute w-[290px] sm:w-[360px] md:w-[420px] transition-all duration-700 ease-out rounded-[24px] overflow-hidden border border-white/15 bg-[#0f1226]/90 backdrop-blur-2xl cursor-pointer ${getCardStyle(index)}`}
          >
            <div className='w-full flex flex-col items-center p-5 md:p-6'>
              {/* Image Preview Box */}
              <div className='w-full h-[180px] md:h-[220px] rounded-2xl overflow-hidden border border-white/10 mb-4 bg-black/40 flex items-center justify-center p-3'>
                <img
                  src={cert.image}
                  alt={cert.title}
                  className='max-w-[90%] max-h-full object-contain drop-shadow-md'
                />
              </div>

              {/* Badges */}
              {/* <div className="flex items-center gap-2 mb-2">
                <span className='px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-[0.7rem] font-mono font-bold uppercase'>
                  {cert.level}
                </span>
                <span className='px-3 py-1 rounded-full bg-white/5 text-white/60 border border-white/10 text-[0.7rem] font-mono'>
                  {cert.date}
                </span>
              </div> */}

              <h4 className='text-lg md:text-xl text-white font-bold mb-1 text-center tracking-tight'>
                {cert.title}
              </h4>
              <p className='text-white/60 text-xs md:text-sm font-medium text-center mb-3'>
                {cert.issuer}
              </p>

              {/* Skills Tags */}
              {/* <div className="flex flex-wrap justify-center gap-1.5 mt-auto">
                {cert.skills.map((s, i) => (
                  <span key={i} className="text-[10px] font-mono bg-white/5 px-2 py-0.5 rounded text-white/70 border border-white/5">
                    {s}
                  </span>
                ))}
              </div> */}
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Indicators */}
      <div className='flex justify-center gap-2 mt-6 z-30 relative'>
        {certifications.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              sound.playClick();
              setCurrentIndex(index);
            }}
            className={`h-2 rounded-full transition-all duration-300 ${currentIndex === index
              ? 'w-8 bg-gradient-to-r from-[#00f2fe] to-[#4facfe]'
              : 'w-2 bg-white/30 hover:bg-white/60'
              }`}
          />
        ))}
      </div>

      {/* Carousel Navigation Arrows */}
      <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 max-w-[1250px] mx-auto px-4 flex justify-between z-40 pointer-events-none">
        <button
          onClick={prevSlide}
          className='pointer-events-auto w-11 h-11 rounded-full bg-black/60 border border-white/20 flex items-center justify-center backdrop-blur-md text-white hover:bg-cyan-500 hover:border-cyan-400 hover:scale-110 transition-all shadow-xl'
        >
          <ArrowBackIosNewIcon sx={{ fontSize: 16 }} />
        </button>
        <button
          onClick={nextSlide}
          className='pointer-events-auto w-11 h-11 rounded-full bg-black/60 border border-white/20 flex items-center justify-center backdrop-blur-md text-white hover:bg-cyan-500 hover:border-cyan-400 hover:scale-110 transition-all shadow-xl'
        >
          <ArrowForwardIosIcon sx={{ fontSize: 16 }} />
        </button>
      </div>

    </section>
  );
};

export default Certification;