import { useState, useEffect, useRef } from 'react'
import Skills from './Skills';
import Certification from './Certification'
import About from './About'
import Education from './Education'
import Contact from './Contact'
import Projects from './Projects'
import Technical from './Technical';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import IconButton from "@mui/material/IconButton";
import CodeIcon from '@mui/icons-material/Code';
import PsychologyIcon from '@mui/icons-material/Psychology';
import StorageIcon from '@mui/icons-material/Storage';
import CloudIcon from '@mui/icons-material/Cloud';
import './App.css';
// import leetcodeLogo from '/images/Leetcode.png';
import leetcodelogo from "./assets/Leetcode.png";
function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isHeroVisible, setIsHeroVisible] = useState(false)
  const heroRef = useRef(null)

  const openLinkdin = () => {
    window.open('https://www.linkedin.com/in/rithikeswaran-m-27287328b/', '_blank')
  }
  const openGithub = () => {
    window.open('https://github.com/rithik0711', '_blank');
  }
  const openLeetcode = () => {
    window.open('https://leetcode.com/u/rithikeswaran_m/', '_blank');
  }

  // Handle smooth scrolling to sections
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setMenuOpen(false);
    } else if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('home');
      setMenuOpen(false);
    }
  };

  // Set up intersection observer to detect which section is in view
  useEffect(() => {
    const sections = ['home', 'about', 'skill', 'education', 'projects', 'certification', 'contact'];

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.3 });

    // Add home section observer with lower threshold
    const homeObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection('home');
          setIsHeroVisible(true);
        }
      });
    }, { threshold: 0.1 });

    const homeElement = document.getElementById('home');
    if (homeElement) homeObserver.observe(homeElement);

    sections.forEach(sectionId => {
      const element = document.getElementById(sectionId);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach(sectionId => {
        const element = document.getElementById(sectionId);
        if (element) observer.unobserve(element);
      });
      if (homeElement) homeObserver.unobserve(homeElement);
    };
  }, []);

  // Trigger hero animation on mount
  useEffect(() => {
    setTimeout(() => setIsHeroVisible(true), 300);
  }, []);

  return (
    <>
      <div className='w-full m-0 p-0 font-["Segoe_UI",Tahoma,Geneva,Verdana,sans-serif] overflow-x-hidden overflow-y-auto'>
        <div className='w-full min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] relative overflow-x-hidden' id="home" ref={heroRef}>
          <div className='text-white h-[70px] flex items-center justify-between fixed top-0 left-0 right-0 z-[1000] bg-[#0f0c29f2] backdrop-blur-[10px] border-b border-white/10 px-[20px]'>

            <p
              style={{
                fontFamily: '"Dancing Script", cursive',
                fontOpticalSizing: "auto",
                fontWeight: 600,
                fontStyle: "normal"
              }}
              className='ml-[10px] md:ml-[20px] text-xl md:text-2xl m-0'
            >
              Rithikeswaran's Portfolio
            </p>

            {/* Hamburger Icon for Mobile */}
            <div className='md:hidden cursor-pointer p-[5px]' onClick={() => setMenuOpen(!menuOpen)}>
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </div>

            <div className={`gap-[15px] md:gap-[35px] flex-col md:flex-row items-center justify-center md:justify-end absolute md:static top-[70px] left-0 right-0 bg-[#0f0c29f2] md:bg-transparent pb-[20px] md:pb-0 border-b border-white/10 md:border-none ${menuOpen ? 'flex' : 'hidden md:flex'}`} onClick={() => setMenuOpen(false)}>
              <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className={`no-underline text-white text-[16px] md:text-[18px] w-full text-center md:w-auto font-[500] transition-all duration-300 relative px-[10px] md:px-[16px] py-[10px] md:py-[8px] rounded-[20px] hover:bg-white/10 hover:-translate-y-[2px] ${activeSection === 'home' ? 'text-[#667eea] after:content-[""] after:absolute after:bottom-0 md:after:-bottom-[2px] after:left-1/2 after:-translate-x-1/2 after:w-[30px] after:h-[3px] after:bg-gradient-to-r after:from-[#667eea] after:to-[#764ba2] after:rounded-[3px]' : ''}`}>Home</a>
              <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className={`no-underline text-white text-[16px] md:text-[18px] w-full text-center md:w-auto font-[500] transition-all duration-300 relative px-[10px] md:px-[16px] py-[10px] md:py-[8px] rounded-[20px] hover:bg-white/10 hover:-translate-y-[2px] ${activeSection === 'about' ? 'text-[#667eea] after:content-[""] after:absolute after:bottom-0 md:after:-bottom-[2px] after:left-1/2 after:-translate-x-1/2 after:w-[30px] after:h-[3px] after:bg-gradient-to-r after:from-[#667eea] after:to-[#764ba2] after:rounded-[3px]' : ''}`}>About</a>
              <a href="#skill" onClick={(e) => handleNavClick(e, 'skill')} className={`no-underline text-white text-[16px] md:text-[18px] w-full text-center md:w-auto font-[500] transition-all duration-300 relative px-[10px] md:px-[16px] py-[10px] md:py-[8px] rounded-[20px] hover:bg-white/10 hover:-translate-y-[2px] ${activeSection === 'skill' ? 'text-[#667eea] after:content-[""] after:absolute after:bottom-0 md:after:-bottom-[2px] after:left-1/2 after:-translate-x-1/2 after:w-[30px] after:h-[3px] after:bg-gradient-to-r after:from-[#667eea] after:to-[#764ba2] after:rounded-[3px]' : ''}`}>Skills</a>
              <a href="#education" onClick={(e) => handleNavClick(e, 'education')} className={`no-underline text-white text-[16px] md:text-[18px] w-full text-center md:w-auto font-[500] transition-all duration-300 relative px-[10px] md:px-[16px] py-[10px] md:py-[8px] rounded-[20px] hover:bg-white/10 hover:-translate-y-[2px] ${activeSection === 'education' ? 'text-[#667eea] after:content-[""] after:absolute after:bottom-0 md:after:-bottom-[2px] after:left-1/2 after:-translate-x-1/2 after:w-[30px] after:h-[3px] after:bg-gradient-to-r after:from-[#667eea] after:to-[#764ba2] after:rounded-[3px]' : ''}`}>Education</a>
              <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')} className={`no-underline text-white text-[16px] md:text-[18px] w-full text-center md:w-auto font-[500] transition-all duration-300 relative px-[10px] md:px-[16px] py-[10px] md:py-[8px] rounded-[20px] hover:bg-white/10 hover:-translate-y-[2px] ${activeSection === 'projects' ? 'text-[#667eea] after:content-[""] after:absolute after:bottom-0 md:after:-bottom-[2px] after:left-1/2 after:-translate-x-1/2 after:w-[30px] after:h-[3px] after:bg-gradient-to-r after:from-[#667eea] after:to-[#764ba2] after:rounded-[3px]' : ''}`}>Projects</a>
              <a href="#technical" onClick={(e) => handleNavClick(e, 'technical')} className={`no-underline text-white text-[16px] md:text-[18px] w-full text-center md:w-auto font-[500] transition-all duration-300 relative px-[10px] md:px-[16px] py-[10px] md:py-[8px] rounded-[20px] hover:bg-white/10 hover:-translate-y-[2px] ${activeSection === 'technical' ? 'text-[#667eea] after:content-[""] after:absolute after:bottom-0 md:after:-bottom-[2px] after:left-1/2 after:-translate-x-1/2 after:w-[30px] after:h-[3px] after:bg-gradient-to-r after:from-[#667eea] after:to-[#764ba2] after:rounded-[3px]' : ''}`}>Technical</a>
              <a href="#certification" onClick={(e) => handleNavClick(e, 'certification')} className={`no-underline text-white text-[16px] md:text-[18px] w-full text-center md:w-auto font-[500] transition-all duration-300 relative px-[10px] md:px-[16px] py-[10px] md:py-[8px] rounded-[20px] hover:bg-white/10 hover:-translate-y-[2px] ${activeSection === 'certification' ? 'text-[#667eea] after:content-[""] after:absolute after:bottom-0 md:after:-bottom-[2px] after:left-1/2 after:-translate-x-1/2 after:w-[30px] after:h-[3px] after:bg-gradient-to-r after:from-[#667eea] after:to-[#764ba2] after:rounded-[3px]' : ''}`}>Certification</a>
              <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className={`no-underline text-white text-[16px] md:text-[18px] w-full text-center md:w-auto font-[500] transition-all duration-300 relative px-[10px] md:px-[16px] py-[10px] md:py-[8px] rounded-[20px] hover:bg-white/10 hover:-translate-y-[2px] ${activeSection === 'contact' ? 'text-[#667eea] after:content-[""] after:absolute after:bottom-0 md:after:-bottom-[2px] after:left-1/2 after:-translate-x-1/2 after:w-[30px] after:h-[3px] after:bg-gradient-to-r after:from-[#667eea] after:to-[#764ba2] after:rounded-[3px]' : ''}`}>Contact</a>
            </div>
          </div>

          {/* Dynamic Background Elements */}
          <div className='absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none'>
            <div className='absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-[#667eea] rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-[spin_15s_linear_infinite]'></div>
            <div className='absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-[#764ba2] rounded-full mix-blend-screen filter blur-[150px] opacity-20' style={{ animation: 'bounce 8s infinite alternate' }}></div>
          </div>

          <div className='flex flex-col-reverse xl:flex-row gap-[40px] lg:gap-[80px] pt-[120px] pb-[80px] mt-[1px] md:mt-0 md:pt-0 md:pb-0 md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 text-white items-center justify-between w-[90%] max-w-[1300px] mx-auto min-h-screen md:min-h-0 z-10'>

            {/* Left Content Column */}
            <div className='flex-1 max-w-[650px] text-center xl:text-left mt-[20px] md:mt-0'>
              <div className={`inline-block mb-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium tracking-wide uppercase backdrop-blur-md transition-all duration-800 ${isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[20px]'}`}>
                🚀 Welcome to my portfolio
              </div>

              <h1 className='text-[2.2rem] sm:text-[3.5rem] lg:text-[4.5rem] m-0 leading-[1.1] font-extrabold tracking-tight'>
                Hi, I'm <br className="hidden xl:block" />
                <span className='bg-gradient-to-r from-[#667eea] via-[#764ba2] to-[#ff0844] bg-clip-text text-transparent animate-gradient-x'>Rithikeswaran M</span>
              </h1>

              <h2 className={`text-[1.8rem] sm:text-[2.5rem] lg:text-[3rem] font-[700] my-[15px] lg:my-[25px] transition-all duration-800 ease-in-out delay-100 ${isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'}`}>
                <span className='text-white drop-shadow-md'>Cloud </span>
                <span className='bg-gradient-to-tr from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent'>Engineer</span>
              </h2>

              <p className={`text-[1.1rem] md:text-[1.2rem] text-[#b8b8b8] mb-8 font-light max-w-[500px] mx-auto xl:mx-0 leading-relaxed transition-all duration-800 delay-200 ${isHeroVisible ? 'opacity-100' : 'opacity-0'}`}>
                Aspiring Cloud Engineer passionate about building scalable and efficient cloud-based solutions.              </p>

              {/* Action Buttons & Socials */}
              <div className={`flex flex-col sm:flex-row items-center sm:items-center justify-center xl:justify-start gap-[20px] mt-[30px] transition-all duration-800 delay-300 ${isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[20px]'}`}>

                <div className='flex gap-[15px]'>
                  <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')} className='px-[25px] py-[12px] bg-gradient-to-r from-[#667eea] to-[#764ba2] rounded-full font-bold text-white shadow-[0_10px_20px_rgba(102,126,234,0.3)] hover:shadow-[0_15px_30px_rgba(102,126,234,0.5)] hover:-translate-y-1 transition-all duration-300 no-underline'>
                    View My Work
                  </a>
                  <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className='px-[25px] py-[12px] bg-white/5 border border-white/20 rounded-full font-bold text-white hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 no-underline backdrop-blur-sm'>
                    Contact Me
                  </a>
                </div>

                <div className='w-[1px] h-[30px] bg-white/20 hidden sm:block mx-[10px]'></div>

                <div className='flex gap-[12px]'>
                  <button onClick={openGithub} className='w-[40px] h-[40px] rounded-full bg-white/5 hover:bg-white/20 flex items-center justify-center transition-all duration-300 group'>
                    <GitHubIcon sx={{ fontSize: 20, color: 'white' }} className="group-hover:scale-110" />
                  </button>
                  <button onClick={openLinkdin} className='w-[40px] h-[40px] rounded-full bg-white/5 hover:bg-[#0077b5] flex items-center justify-center transition-all duration-300 group'>
                    <LinkedInIcon sx={{ fontSize: 20, color: 'white' }} className="group-hover:scale-110" />
                  </button>
                  <button onClick={openLeetcode} className='w-[40px] h-[40px] rounded-full bg-white/5 hover:bg-[#FFA116] flex items-center justify-center transition-all duration-300 group'>
                    <img src={leetcodeLogo} alt="LeetCode" className="w-[20px] h-[20px] object-contain group-hover:scale-110" />
                  </button>
                </div>

              </div>
            </div>

            {/* Right Image Column */}
            <div className='relative shrink-0 flex justify-center mt-[40px] md:mt-[0] group w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] lg:w-[420px] lg:h-[420px] mx-auto xl:mx-0'>

              {/* Floating Tech Badges */}
              <div className='absolute -left-[20px] top-[10%] bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/20 shadow-xl animate-[bounce_4s_infinite_ease-in-out_0.5s] z-20'>
                <CodeIcon sx={{ fontSize: 28, color: '#61DAFB' }} />
              </div>
              <div className='absolute -right-[10px] top-[30%] bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/20 shadow-xl animate-[bounce_5s_infinite_ease-in-out_1s] z-20'>
                <CloudIcon sx={{ fontSize: 28, color: '#FF9900' }} />
              </div>
              <div className='absolute left-[10%] -bottom-[10px] bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/20 shadow-xl animate-[bounce_6s_infinite_ease-in-out_1.5s] z-20'>
                <StorageIcon sx={{ fontSize: 28, color: '#4DB33D' }} />
              </div>
              <div className='absolute -right-[20px] bottom-[20%] bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/20 shadow-xl animate-[bounce_4.5s_infinite_ease-in-out_2s] z-20'>
                <PsychologyIcon sx={{ fontSize: 28, color: '#FF0844' }} />
              </div>

              {/* Animated Blob Background */}
              <div className='absolute inset-[-15px] bg-gradient-to-r from-[#667eea] via-[#ff0844] to-[#764ba2] rounded-[30%_70%_70%_30%/30%_30%_70%_70%] blur-[30px] opacity-60 group-hover:opacity-100 transition-opacity duration-700 animate-[spin_12s_linear_infinite]'></div>

              {/* Image Container */}
              <div className='absolute inset-0 bg-[#0f0c29]/50 backdrop-blur-md rounded-[2.5rem] border border-white/10 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.6)] transform transition-transform duration-500 group-hover:scale-[1.03] group-hover:-rotate-1 overflow-hidden flex items-center justify-center relative z-10'>
                <img src="./images/my-pic.jpg" alt="Rithikeswaran M" className='w-full h-full object-cover rounded-[2rem] shadow-inner transition-transform duration-700 group-hover:scale-110' />
                <div className='absolute inset-0 bg-gradient-to-t from-[#0f0c29] via-transparent to-transparent opacity-40 rounded-[2rem] pointer-events-none'></div>
              </div>
            </div>
          </div>

          <div className='absolute bottom-[20px] md:bottom-[40px] left-1/2 -translate-x-1/2 text-center text-white/70 animate-[fadeInUp_2s_ease-in-out] hidden md:block'>
            <div className='w-[2px] h-[30px] bg-gradient-to-b from-transparent via-[#667eea] to-transparent mx-auto mb-[10px] animate-[scrollBounce_2s_infinite]'></div>
            <span className='text-[0.9rem] tracking-[1px]'>Scroll to explore</span>
          </div>
        </div>

        <section id='about'>
          <About />
        </section>

        <section id='skill'>
          <Skills />
        </section>

        <section id='education'>
          <Education />
        </section>

        <section id='projects'>
          <Projects />
        </section>

        <section id='technical'>
          <Technical />
        </section>

        <section id='certification'>
          <Certification />
        </section>

        <section id='contact'>
          <Contact />
        </section>
      </div>
    </>
  )
}
export default App;