import React, { useState } from 'react';
import { useTheme } from './context/ThemeContext';
import { sound } from './utils/soundFX';
import SearchIcon from '@mui/icons-material/Search';

export const Skills = () => {
  const { unlockAchievement } = useTheme();
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [searchTerm, setSearchTerm] = useState('');

const skillsData = [
  // Languages
  { name: "Java", category: "LANGUAGES", icon: "./images/java.png", desc: "OOP, Multithreading, Data Structures & Algorithms" },
  { name: "Python", category: "LANGUAGES", icon: "./images/py.jpeg", desc: "Machine Learning, Backend Scripting, Automation" },
  { name: "MySQL", category: "LANGUAGES", icon: "./images/sql.jpg", desc: "Relational Schema Design, Query Optimization, Joins" },
  { name: "C", category: "LANGUAGES", icon: "./images/c-programming.png", desc: "Memory Management, Pointers, Core Data Structures" },

  // Frameworks & Web
  { name: "React", category: "FRAMEWORKS", icon: "./images/react.png", desc: "Component Architecture, Hooks, Context API, SPAs" },
  { name: "Node.js", category: "FRAMEWORKS", icon: "./images/node.png", desc: "Event-Driven APIs, Microservices, RESTful Services" },
  { name: "Express", category: "FRAMEWORKS", icon: "./images/express.jpg", desc: "REST Routing, Custom Middleware, JWT Authentication" },
  { name: "MongoDB", category: "FRAMEWORKS", icon: "./images/mongodb.png", desc: "NoSQL Data Modeling, Aggregation Pipelines, Indexing" },
  { name: "FastAPI", category: "FRAMEWORKS", icon: "./images/fastapi.png", desc: "High-Performance Async APIs, Pydantic, Ollama Integration" },

  // Cloud & DevOps
  { name: "AWS", category: "CLOUD & DEVOPS", icon: "./images/aws.jpg", desc: "Cloud Infrastructure (EC2, S3, RDS, VPC, ALB, IAM)" },
  { name: "Docker", category: "CLOUD & DEVOPS", icon: "./images/docker.png", desc: "Containerization, Multi-Stage Builds, Docker Compose" },
  { name: "Jenkins", category: "CLOUD & DEVOPS", icon: "./images/jenkins.jpg", desc: "Automated CI/CD Pipelines, Build & Deployment Triggers" },
  { name: "GitHub Actions", category: "CLOUD & DEVOPS", icon: "./images/githubactions.png", desc: "Automated Testing, CI/CD Workflows, Deployment Pipelines" },
  { name: "Git", category: "CLOUD & DEVOPS", icon: "./images/git.png", desc: "Distributed Version Control, Branching, GitFlow" },
  { name: "GitHub", category: "CLOUD & DEVOPS", icon: "./images/github.png", desc: "Code Collaboration, Pull Requests, Repository Management" },
  { name: "Ansible", category: "CLOUD & DEVOPS", icon: "./images/ansible.png", desc: "Configuration Management, Playbooks, Server Provisioning" }
];


  const categories = ['ALL', 'LANGUAGES', 'FRAMEWORKS', 'CLOUD & DEVOPS'];

  const filteredSkills = skillsData.filter((skill) => {
    const matchesCategory = activeCategory === 'ALL' || skill.category === activeCategory;
    const matchesSearch = skill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      skill.desc.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    sound.playClick();
    unlockAchievement('skills_inspected');
  };

  return (
    <section className='min-h-screen py-[70px] pt-[100px] px-[15px] md:px-[20px] relative overflow-hidden' id='skill'>
      <div className='max-w-[1200px] mx-auto relative z-[1]'>

        <header className='text-center mb-[50px]'>
          <h2 className='text-[2.2rem] md:text-[3rem] lg:text-[3.5rem] font-[800] mb-[15px] tracking-[-1px] leading-[1.1] text-white'>
            Skills & <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#667eea] via-[#a88beb] to-[#ff0844]'>Technologies</span>
          </h2>
          <p className='text-[1rem] md:text-[1.15rem] text-white/70 max-w-[650px] mx-auto leading-[1.6]'>
            Curated developer competencies spanning cloud infrastructure, full-stack systems, and backend automation.
          </p>
        </header>

        {/* Filter and Search Bar */}
        <div className='flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 bg-white/[0.03] p-3 rounded-2xl border border-white/10 backdrop-blur-xl'>

          {/* Category Tabs */}
          <div className='flex flex-wrap gap-2 w-full sm:w-auto'>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${activeCategory === cat
                  ? 'bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white shadow-lg shadow-[#667eea]/30'
                  : 'bg-white/5 text-white/60 hover:text-white hover:bg-white/10 border border-white/5'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className='relative w-full sm:w-64'>
            <SearchIcon className='absolute left-3 top-1/2 -translate-y-1/2 text-white/40 text-sm' />
            <input
              type='text'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder='Search tech / tools...'
              className='w-full bg-black/40 border border-white/10 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#667eea]'
            />
          </div>
        </div>

        {/* Skills Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              onMouseEnter={() => sound.playHover()}
              className='bg-white/[0.04] border border-white/10 rounded-2xl p-4 backdrop-blur-md hover:bg-white/[0.08] hover:border-cyan-400/40 hover:-translate-y-1 transition-all duration-300 group shadow-lg flex flex-col justify-between'
            >
              <div className='flex items-center gap-3.5 mb-3'>
                <div className='w-12 h-12 rounded-xl bg-white p-2 flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform'>
                  <img src={skill.icon} alt={skill.name} className='w-full h-full object-contain' />
                </div>
                <div>
                  <h3 className='font-bold text-white text-base'>{skill.name}</h3>
                  <span className='text-[10px] font-mono text-cyan-300 uppercase tracking-wider bg-cyan-950/50 px-2 py-0.5 rounded-full border border-cyan-500/20'>
                    {skill.category}
                  </span>
                </div>
              </div>

              <p className='text-xs text-white/60 leading-relaxed mb-3'>{skill.desc}</p>

              {/* Proficiency Gauge */}
              {/* <div>
                <div className='flex justify-between text-[11px] font-mono text-white/60 mb-1'>
                  <span>Proficiency</span>
                  <span className='text-white font-bold'>{skill.level}%</span>
                </div>
                <div className='w-full h-1.5 bg-black/50 rounded-full overflow-hidden'>
                  <div
                    className='h-full bg-gradient-to-r from-[#667eea] to-[#00f2fe] rounded-full transition-all duration-700'
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div> */}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;