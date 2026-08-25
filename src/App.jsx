import React, { useState, useEffect, useRef } from 'react';
import { ThemeProvider, useTheme, THEMES } from './context/ThemeContext';
import { sound } from './utils/soundFX';
import CyberCanvas from './components/CyberCanvas';
import CyberCursor from './components/CyberCursor';

// import About from './About';
import Skills from './Skills';
import Technical from './Technical';
import Projects from './Projects';
import Education from './Education';
import Certification from './Certification';
import Contact from './Contact';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';
import PaletteIcon from '@mui/icons-material/Palette';
import CloudIcon from '@mui/icons-material/Cloud';
import StorageIcon from '@mui/icons-material/Storage';
import PsychologyIcon from '@mui/icons-material/Psychology';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './App.css';

function MainPortfolioContent() {
  const {
    theme,
    currentThemeKey,
    changeTheme
  } = useTheme();

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);
  const [isHeroVisible, setIsHeroVisible] = useState(false);

  const openLinkedin = () => {
    sound.playClick();
    window.open('https://www.linkedin.com/in/rithikeswaran-m-27287328b/', '_blank');
  };
  const openGithub = () => {
    sound.playClick();
    window.open('https://github.com/rithik0711', '_blank');
  };
  const openLeetcode = () => {
    sound.playClick();
    window.open('https://leetcode.com/u/rithikeswaran_m/', '_blank');
  };

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    sound.playClick();
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

  // Intersection observer for active navigation section
  useEffect(() => {
    const sections = ['home', 'skill', 'technical', 'projects', 'education', 'certification', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.25 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    setTimeout(() => setIsHeroVisible(true), 150);

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className={`min-h-screen bg-gradient-to-br ${theme.bgGradient} text-white font-['Outfit',sans-serif] relative overflow-x-hidden transition-colors duration-700`}>

      {/* Interactive Neural Particle Canvas */}
      <CyberCanvas />

      {/* Cyber Scanline Subtle Texture */}
      <div className="fixed inset-0 cyber-scanlines z-[2] opacity-40 pointer-events-none"></div>

      {/* Top Floating Cyber HUD Navigation */}
      <header className="fixed top-0 left-0 right-0 h-[72px] z-[1000] bg-[#0c0e1a]/80 backdrop-blur-xl border-b border-white/10 px-4 md:px-8 flex items-center justify-between shadow-2xl">

        {/* Logo and Status */}
        <div className="flex items-center gap-3">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, 'home')}
            className="flex items-center gap-2 text-white no-underline group"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#667eea] to-[#00f2fe] flex items-center justify-center font-bold font-mono text-sm shadow-md group-hover:scale-110 transition-transform">
              R
            </div>
            <div>
              <p
                style={{ fontFamily: '"Dancing Script", cursive' }}
                className="text-lg md:text-xl font-bold tracking-wide m-0"
              >
                Rithikeswaran
              </p>
              <div className="flex items-center gap-1.5 text-[10px] font-mono text-white/50 -mt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Cloud & DevOps Engineer</span>
              </div>
            </div>
          </a>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden xl:flex items-center gap-1 text-sm font-medium">
          {[
            { id: 'home', label: 'Home' },
            // { id: 'about', label: 'About' },
            { id: 'skill', label: 'Skills' },
            { id: 'technical', label: 'Technical' },
            { id: 'projects', label: 'Projects' },
            { id: 'education', label: 'Education' },
            { id: 'certification', label: 'Certifications' },
            { id: 'contact', label: 'Contact' }
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className={`px-3 py-1.5 rounded-xl transition-all ${activeSection === item.id
                ? 'bg-white/10 text-cyan-300 font-semibold shadow-inner'
                : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* HUD Control Bar Tools */}
        <div className="flex items-center gap-2">

          {/* Theme Dropdown Trigger */}
          <div className="relative">
            <button
              onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
              title="Change Cyber Theme"
              className="px-2.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-xs font-mono flex items-center gap-1.5 transition-all text-white/80"
            >
              <PaletteIcon sx={{ fontSize: 16 }} />
              <span className="hidden sm:inline">{theme.name}</span>
            </button>

            {themeDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-[#0e1122]/95 border border-white/15 rounded-2xl shadow-2xl backdrop-blur-2xl p-2 z-50 animate-fadeIn">
                <div className="text-[10px] font-mono text-white/40 uppercase tracking-widest px-2.5 py-1">
                  Select Theme
                </div>
                {Object.keys(THEMES).map((key) => (
                  <button
                    key={key}
                    onClick={() => {
                      changeTheme(key);
                      setThemeDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs flex items-center justify-between transition-colors ${currentThemeKey === key
                      ? 'bg-white/15 text-cyan-300 font-bold'
                      : 'text-white/70 hover:bg-white/10 hover:text-white'
                      }`}
                  >
                    <span>{THEMES[key].name}</span>
                    <span
                      className="w-3 h-3 rounded-full border border-white/30"
                      style={{ backgroundColor: THEMES[key].accent }}
                    ></span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="xl:hidden p-2 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-white"
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {menuOpen && (
        <div className="fixed inset-0 top-[64px] md:top-[72px] z-[999] bg-[#0c0e1a]/95 backdrop-blur-2xl xl:hidden p-5 sm:p-6 flex flex-col gap-2.5 animate-fadeIn">
          {[
            { id: 'home', label: 'Home' },
            // { id: 'about', label: 'About' },
            { id: 'skill', label: 'Skills & Tech' },
            { id: 'technical', label: 'Technical Implementations' },
            { id: 'projects', label: 'Featured Projects' },
            { id: 'education', label: 'Academic Journey' },
            { id: 'certification', label: 'Certifications' },
            { id: 'contact', label: 'Contact Me' }
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className="text-base sm:text-lg font-semibold py-3 px-4 rounded-2xl bg-white/5 hover:bg-white/15 text-white/90 hover:text-white transition-colors flex items-center justify-between"
            >
              <span>{item.label}</span>
              <span className="text-cyan-400 text-sm">→</span>
            </a>
          ))}
        </div>
      )}

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen pt-[90px] sm:pt-[120px] pb-[60px] sm:pb-[80px] px-4 md:px-8 flex items-center justify-center relative overflow-hidden"
      >
        {/* Glow Spheres */}
        <div className="absolute top-[20%] left-[10%] w-[260px] sm:w-[320px] h-[260px] sm:h-[320px] bg-cyan-500 rounded-full mix-blend-screen filter blur-[100px] sm:blur-[140px] opacity-20 pointer-events-none animate-pulse"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[300px] sm:w-[380px] h-[300px] sm:h-[380px] bg-purple-600 rounded-full mix-blend-screen filter blur-[120px] sm:blur-[160px] opacity-20 pointer-events-none animate-float"></div>

        <div className="max-w-[1250px] w-full mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12 relative z-10">

          {/* Left Column: Bio & Hero Details */}
          <div className="flex-1 text-center lg:text-left w-full">

            <h1 className="text-[2.2rem] xs:text-[2.6rem] sm:text-[3.5rem] md:text-[4rem] lg:text-[4.5rem] font-black tracking-tight leading-[1.08] mb-2 sm:mb-3">
              Hi, I'm <br />
              <span className="bg-gradient-to-r from-[#00f2fe] via-[#4facfe] to-[#ff0844] bg-clip-text text-transparent animate-gradient-x">
                Rithikeswaran M
              </span>
            </h1>

            <h2 className={`text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 text-white/90 transition-all duration-700 delay-100 ${isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Cloud Engineer & <span className="bg-gradient-to-r from-[#ffd700] to-[#ffa500] bg-clip-text text-transparent">DevOps Specialist</span>
            </h2>

            <p className={`text-sm sm:text-base md:text-lg text-white/70 max-w-[560px] mx-auto lg:mx-0 leading-relaxed mb-6 sm:mb-8 transition-all duration-700 delay-200 ${isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Information Technology Engineer with expertise in Cloud Computing and DevOps. Experienced in building production-ready applications using React, Flask, Docker, Kubernetes, AWS, CI/CD, and locally hosted LLMs to automate workflows through scalable AI pipelines.             </p>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-6 sm:mb-8 w-full transition-all duration-700 delay-300 ${isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <a
                href="#projects"
                onClick={(e) => handleNavClick(e, 'projects')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#667eea] via-[#764ba2] to-[#00f2fe] text-white font-bold text-sm shadow-[0_0_30px_rgba(102,126,234,0.4)] hover:shadow-[0_0_45px_rgba(102,126,234,0.7)] hover:-translate-y-0.5 active:scale-95 transition-all no-underline text-center"
              >
                ⚡ Explore Projects
              </a>
              <a
                href="./images/Rithikeswaran M Resume.pdf"
                download="Rithikeswaran M Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-5 py-3.5 rounded-2xl bg-black/50 border border-cyan-400/40 text-cyan-300 font-mono font-bold text-sm flex items-center justify-center gap-2 hover:bg-cyan-500/10 hover:border-cyan-400 hover:-translate-y-0.5 active:scale-95 transition-all shadow-md no-underline text-center"
              >
                📄 Resume (CV)
              </a>
            </div>

            {/* Social Channels */}
            <div className={`flex items-center justify-center lg:justify-start gap-3 transition-all duration-700 delay-400 ${isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <button
                onClick={openGithub}
                title="GitHub"
                className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/15 flex items-center justify-center text-white/80 hover:text-white transition-all hover:scale-110"
              >
                <GitHubIcon fontSize="small" />
              </button>
              <button
                onClick={openLinkedin}
                title="LinkedIn"
                className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 hover:bg-[#0077b5]/30 hover:border-[#0077b5]/50 flex items-center justify-center text-white/80 hover:text-white transition-all hover:scale-110"
              >
                <LinkedInIcon fontSize="small" />
              </button>
              <button
                onClick={openLeetcode}
                title="LeetCode"
                className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 hover:bg-amber-500/20 hover:border-amber-500/50 flex items-center justify-center text-white/80 hover:text-white transition-all hover:scale-110"
              >
                <CodeIcon fontSize="small" />
              </button>
            </div>
          </div>

          {/* Right Column: Hero Visual Photo */}
          <div className="relative w-[260px] xs:w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px] aspect-[4/5] sm:aspect-square mx-auto group shrink-0">

            {/* Pulsing Holographic Aura */}
            <div className="absolute inset-[-10px] sm:inset-[-15px] bg-gradient-to-tr from-cyan-400 via-purple-600 to-pink-500 rounded-[2.5rem] sm:rounded-[3rem] blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-700 animate-spin [animation-duration:25s]"></div>

            {/* Image Box */}
            <div className="relative w-full h-full bg-[#0c0e1a]/80 backdrop-blur-md rounded-[2.2rem] sm:rounded-[2.8rem] border border-white/20 p-2.5 sm:p-3.5 shadow-2xl overflow-hidden flex items-center justify-center transform transition-transform duration-500 group-hover:scale-[1.02]">
              <img
                src="./images/my-photo.png"
                onError={(e) => { e.currentTarget.src = "./images/my-pic.jpg"; }}
                alt="Rithikeswaran M"
                className="w-full h-full object-cover object-top rounded-[1.8rem] sm:rounded-[2.2rem] shadow-inner"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e1a]/80 via-transparent to-transparent opacity-40 pointer-events-none"></div>
            </div>

          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 text-center text-white/50 text-xs font-mono tracking-widest hidden md:block">
          <div className="w-1 h-6 bg-gradient-to-b from-cyan-400 to-transparent mx-auto mb-1 rounded-full animate-bounce"></div>
          SCROLL TO EXPLORE
        </div>
      </section>

      {/* Sections */}
      {/* <About /> */}
      <Skills />
      <Technical />
      <Projects />
      <Education />
      <Certification />
      <Contact />

      {/* Footer */}
      <footer className="py-8 border-t border-white/10 bg-black/40 text-center text-xs font-mono text-white/50 relative z-10">
        <p className="mb-1">Designed & Engineered by Rithikeswaran M © 2026</p>
        <p className="text-[10px] text-white/30">Built with React, Vite & TailwindCSS</p>
      </footer>

      {/* Interactive Movement Reactive Cyber Cursor */}
      <CyberCursor />

    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <MainPortfolioContent />
    </ThemeProvider>
  );
}