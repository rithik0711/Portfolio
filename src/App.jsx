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
    const sections = ['home', 'skill', 'education', 'projects', 'certification', 'contact'];

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
              <a href="#skill" onClick={(e) => handleNavClick(e, 'skill')} className={`no-underline text-white text-[16px] md:text-[18px] w-full text-center md:w-auto font-[500] transition-all duration-300 relative px-[10px] md:px-[16px] py-[10px] md:py-[8px] rounded-[20px] hover:bg-white/10 hover:-translate-y-[2px] ${activeSection === 'skill' ? 'text-[#667eea] after:content-[""] after:absolute after:bottom-0 md:after:-bottom-[2px] after:left-1/2 after:-translate-x-1/2 after:w-[30px] after:h-[3px] after:bg-gradient-to-r after:from-[#667eea] after:to-[#764ba2] after:rounded-[3px]' : ''}`}>Skills</a>
              <a href="#education" onClick={(e) => handleNavClick(e, 'education')} className={`no-underline text-white text-[16px] md:text-[18px] w-full text-center md:w-auto font-[500] transition-all duration-300 relative px-[10px] md:px-[16px] py-[10px] md:py-[8px] rounded-[20px] hover:bg-white/10 hover:-translate-y-[2px] ${activeSection === 'education' ? 'text-[#667eea] after:content-[""] after:absolute after:bottom-0 md:after:-bottom-[2px] after:left-1/2 after:-translate-x-1/2 after:w-[30px] after:h-[3px] after:bg-gradient-to-r after:from-[#667eea] after:to-[#764ba2] after:rounded-[3px]' : ''}`}>Education</a>
              <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')} className={`no-underline text-white text-[16px] md:text-[18px] w-full text-center md:w-auto font-[500] transition-all duration-300 relative px-[10px] md:px-[16px] py-[10px] md:py-[8px] rounded-[20px] hover:bg-white/10 hover:-translate-y-[2px] ${activeSection === 'projects' ? 'text-[#667eea] after:content-[""] after:absolute after:bottom-0 md:after:-bottom-[2px] after:left-1/2 after:-translate-x-1/2 after:w-[30px] after:h-[3px] after:bg-gradient-to-r after:from-[#667eea] after:to-[#764ba2] after:rounded-[3px]' : ''}`}>Projects</a>
              <a href="#technical" onClick={(e) => handleNavClick(e, 'technical')} className={`no-underline text-white text-[16px] md:text-[18px] w-full text-center md:w-auto font-[500] transition-all duration-300 relative px-[10px] md:px-[16px] py-[10px] md:py-[8px] rounded-[20px] hover:bg-white/10 hover:-translate-y-[2px] ${activeSection === 'technical' ? 'text-[#667eea] after:content-[""] after:absolute after:bottom-0 md:after:-bottom-[2px] after:left-1/2 after:-translate-x-1/2 after:w-[30px] after:h-[3px] after:bg-gradient-to-r after:from-[#667eea] after:to-[#764ba2] after:rounded-[3px]' : ''}`}>Technical</a>
              <a href="#certification" onClick={(e) => handleNavClick(e, 'certification')} className={`no-underline text-white text-[16px] md:text-[18px] w-full text-center md:w-auto font-[500] transition-all duration-300 relative px-[10px] md:px-[16px] py-[10px] md:py-[8px] rounded-[20px] hover:bg-white/10 hover:-translate-y-[2px] ${activeSection === 'certification' ? 'text-[#667eea] after:content-[""] after:absolute after:bottom-0 md:after:-bottom-[2px] after:left-1/2 after:-translate-x-1/2 after:w-[30px] after:h-[3px] after:bg-gradient-to-r after:from-[#667eea] after:to-[#764ba2] after:rounded-[3px]' : ''}`}>Certification</a>
              <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className={`no-underline text-white text-[16px] md:text-[18px] w-full text-center md:w-auto font-[500] transition-all duration-300 relative px-[10px] md:px-[16px] py-[10px] md:py-[8px] rounded-[20px] hover:bg-white/10 hover:-translate-y-[2px] ${activeSection === 'contact' ? 'text-[#667eea] after:content-[""] after:absolute after:bottom-0 md:after:-bottom-[2px] after:left-1/2 after:-translate-x-1/2 after:w-[30px] after:h-[3px] after:bg-gradient-to-r after:from-[#667eea] after:to-[#764ba2] after:rounded-[3px]' : ''}`}>Contact</a>
            </div>
          </div>

          <div className='flex flex-col-reverse md:flex-row gap-[40px] md:gap-[120px] pt-[120px] pb-[80px] md:pt-0 md:pb-0 md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 text-white items-center justify-center w-[90%] max-w-[1400px] mx-auto min-h-screen md:min-h-0'>
            <div className='flex-1 max-w-[600px] text-center md:text-left'>
              <h2 className='text-[2.5rem] md:text-[4.5rem] m-0 leading-[1.1] bg-gradient-to-br from-[#667eea] to-[#764ba2] bg-clip-text text-transparent font-[800] tracking-[-1px] md:tracking-[-2px]'>Rithikeswaran M</h2>

              <h2 className={`text-[2rem] md:text-[4rem] font-[800] my-[15px] md:my-[20px] transition-all duration-800 ease-in-out ${isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'}`}>
                <span className='block text-white drop-shadow-[2px_2px_4px_rgba(0,0,0,0.2)]'>Cloud</span>
                <span className='block bg-gradient-to-tr from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent mt-[-10px] md:mt-[-5px]'>Engineer</span>
              </h2>

              <div className='my-[25px] relative py-[20px] text-left'>
                <p className='text-[1rem] md:text-[1.1rem] leading-[1.7] text-white/85 m-0 relative pl-[20px] border-l-[3px] border-l-[#667eea99] animate-[fadeIn_1.5s_ease-in-out]'>
                  I am an IT engineering student passionate about Cloud Computing & DevOps. I enjoy building real-world applications, automating deployments, and continuously learning new technologies to create scalable and reliable systems.
                </p>
              </div>
            </div>

            <div className='relative shrink-0 flex justify-center mt-[40px] md:mt-[0]'>
              <img src="./images/my-pic.jpg" alt="Rithikeswaran M" className='w-[250px] h-[250px] md:w-[380px] md:h-[380px] object-cover rounded-[20px] border-[4px] border-[#667eea] shadow-[0_0_20px_rgba(102,126,234,0.3),0_0_40px_rgba(102,126,234,0.2),0_0_60px_rgba(102,126,234,0.1)] transition-all duration-300 relative z-[2] hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(102,126,234,0.4),0_0_60px_rgba(102,126,234,0.3),0_0_90px_rgba(102,126,234,0.2)]' />
            </div>
          </div>

          <div className='absolute bottom-[20px] md:bottom-[40px] left-1/2 -translate-x-1/2 text-center text-white/70 animate-[fadeInUp_2s_ease-in-out] hidden md:block'>
            <div className='w-[2px] h-[30px] bg-gradient-to-b from-transparent via-[#667eea] to-transparent mx-auto mb-[10px] animate-[scrollBounce_2s_infinite]'></div>
            <span className='text-[0.9rem] tracking-[1px]'>Scroll to explore</span>
          </div>
        </div>

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