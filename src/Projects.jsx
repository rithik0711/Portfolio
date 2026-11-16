import React, { useState } from 'react';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import BiotechIcon from '@mui/icons-material/Biotech';
import TerminalIcon from '@mui/icons-material/Terminal';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import GitHubIcon from '@mui/icons-material/GitHub';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CloudIcon from '@mui/icons-material/Cloud';

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const projects = [
    {
      id: "01",
      title: "AI Powered Exam Portal",
      description: "An intelligent examination platform enabling faculty to generate dynamic questions via LLMs and students to take exams with automated real-time grading and evaluation.",
      category: "GEN AI",
      tech: ["React", "Node.js", "Express", "MySQL", "OpenAI / LLMs"],
      icon: <SmartToyIcon fontSize="medium" />,
      color: "#00f2fe",
      badge: "GenAI & Automation",
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      id: "02",
      title: "AI-Powered Handloom Marketplace with RAG-Based Virtual Assistant ",
      description: "Built a RAG-based AI chatbot to reduce hallucinations and outdated responses by 30% through structured domain knowledge retrieval.",
      category: "GEN AI",
      tech: ["React", "Node.js", "RAG", "Vector DB"],
      icon: <BiotechIcon fontSize="medium" />,
      color: "#cd4ecb",
      badge: "RAG & Analytics",
      githubUrl: "#",
      liveUrl: "https://vastra-vvbz.onrender.com/"
    },
    {
      id: "03",
      title: "Self-Hosted AI Chat Application",
      description: "A private, zero-cloud dependency LLM chat client utilizing local Ollama models with a FastAPI/Flask REST server and real-time token streaming on React.",
      category: "LOCAL AI",
      tech: ["React", "FastAPI", "Ollama", "REST APIs", "Docker"],
      icon: <TerminalIcon fontSize="medium" />,
      color: "#45d19b",
      badge: "Local AI & Privacy",
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      id: "04",
      title: "Infrastructure Provisioning and Configuration Automation",
      description: "Automated AWS infrastructure provisioning using Terraform and configuration management using Ansible. Developed reusable Infrastructure as Code configurations and playbooks to automate Linux server setup, package installation, and service management.",
      category: "CLOUD & DEVOPS",
      tech: ["Terraform", "Ansible", "AWS", "Linux", "YAML", "IaC"],
      icon: <CloudIcon fontSize="medium" />,
      color: "#ff9900",
      badge: "Cloud & DevOps",
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      id: "05",
      title: "Automated CI/CD Pipeline for Student Management System Deployment",
      description: "Designed and implemented an automated CI/CD pipeline using Jenkins and GitHub to streamline application builds and deployments. Containerized application services using Docker and Docker Compose, deployed them on AWS EC2, and configured Nginx as a reverse proxy for seamless application access.",
      category: "CLOUD & DEVOPS",
      tech: ["Jenkins", "Docker", "Docker Compose", "AWS EC2", "Nginx", "GitHub"],
      icon: <CloudIcon fontSize="medium" />,
      color: "#ff9900",
      badge: "CI/CD & Cloud Deployment",
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      id: "06",
      title: "Autonomous n8n AI Ingestion Pipeline",
      description: "Developed an event-driven AI automation workflow using n8n to orchestrate multimedia stream ingestion, audio transcription, and multi-step LLM-based knowledge summarization through automated integrations.",
      category: "AI AUTOMATION",
      tech: ["n8n", "AI Agents", "LLM APIs", "Webhooks", "JSON Schema"],
      icon: <SmartToyIcon fontSize="medium" />,
      color: "#ff007f",
      badge: "AI Workflow Automation",
      githubUrl: "#",
      liveUrl: "#"
    }
  ];

  const categories = ['ALL', 'GEN AI', 'LOCAL AI', 'CLOUD & DEVOPS', 'AI AUTOMATION'];

  const filteredProjects = activeFilter === 'ALL'
    ? projects
    : projects.filter((project) => project.category === activeFilter);

  return (
    <section
      id="projects"
      className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <header className="text-center mb-14">
          {/* <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-4">
            <AutoAwesomeIcon sx={{ fontSize: 14 }} />
            <span>Selected Works</span>
          </div> */}

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4">
            Featured{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2fe] via-[#4facfe] to-[#cd4ecb]">
              Projects
            </span>
          </h2>

          <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Production architectures, full-stack systems, and Generative AI applications built for real-world impact.
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono font-semibold tracking-wider transition-all duration-300 border ${
                  activeFilter === cat
                    ? 'bg-cyan-400/15 text-cyan-300 border-cyan-400/50 shadow-[0_0_20px_rgba(0,242,254,0.2)]'
                    : 'bg-white/[0.03] text-slate-400 border-white/10 hover:bg-white/[0.08] hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </header>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group relative flex flex-col justify-between rounded-3xl bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/10 p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-white/25 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.7)] overflow-hidden"
            >
              {/* Top Accent Line */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(90deg, transparent, ${project.color}, transparent)`
                }}
              />

              {/* Hover Radial Glow */}
              <div
                className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-[70px] opacity-15 group-hover:opacity-35 transition-opacity duration-500 pointer-events-none"
                style={{ backgroundColor: project.color }}
              />

              <div>
                {/* Top Row: Icon + Action Links */}
                <div className="flex items-center justify-between mb-6 relative z-10">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center bg-black/40 border border-white/10 shadow-inner transition-transform duration-300 group-hover:scale-110"
                    style={{ color: project.color }}
                  >
                    {project.icon}
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub Repository"
                      className="p-2 rounded-xl bg-white/[0.04] border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      <GitHubIcon sx={{ fontSize: 18 }} />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Live Demo"
                      className="p-2 rounded-xl bg-white/[0.04] border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      <ArrowOutwardIcon sx={{ fontSize: 18 }} />
                    </a>
                  </div>
                </div>

                {/* Category & Index Tag */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-mono text-slate-500">
                    /{project.id}
                  </span>
                  <span
                    className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-semibold tracking-wider uppercase"
                    style={{
                      color: project.color,
                      backgroundColor: `${project.color}15`
                    }}
                  >
                    {project.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-cyan-200 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {/* Footer: Divider + Tech Stack */}
              <div className="pt-4 border-t border-white/[0.08] relative z-10">
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md text-xs font-mono text-slate-300 bg-white/[0.04] border border-white/[0.07] group-hover:border-white/15 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
