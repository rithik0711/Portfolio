import React from 'react';
import ApiIcon from '@mui/icons-material/Api';
import StorageIcon from '@mui/icons-material/Storage';
import CloudIcon from '@mui/icons-material/Cloud';
import SmartToyIcon from '@mui/icons-material/SmartToy';

export const Technical = () => {
  const implementations = [
    {
      id: 1,
      title: "Automated CI/CD Pipeline for Node.js",
      description: "End-to-end CI/CD automation featuring Jenkins webhook triggers, Docker multi-stage containerization, and zero-downtime deployment on AWS EC2.",
      category: "DEVOPS",
      tech: ["Jenkins", "Docker", "AWS EC2", "GitHub Webhooks", "Node.js"],
      icon: <ApiIcon />,
      color: "#45d19b"
    },
    {
      id: 2,
      title: "AWS Multi-Tier VPC Architecture",
      description: "Secure AWS Virtual Private Cloud design with public and private subnet isolation, Application Load Balancers, and managed MySQL RDS.",
      category: "CLOUD INFRASTRUCTURE",
      tech: ["AWS VPC", "AWS EC2", "AWS RDS", "ALB", "MySQL"],
      icon: <StorageIcon />,
      color: "#ff9900"
    },
    {
      id: 3,
      title: "High-Availability Auto-Scaling Cluster",
      description: "Dynamic auto-scaling deployment cluster on AWS leveraging EC2 Auto Scaling Groups, CodeDeploy, and proactive CloudWatch telemetry.",
      category: "ENTERPRISE CLOUD",
      tech: ["AWS AutoScaling", "CodeDeploy", "CloudWatch", "Target Groups"],
      icon: <CloudIcon />,
      color: "#00f2fe"
    },
    {
      id: 4,
      title: "Autonomous n8n AI Ingestion Pipeline",
      description: "Event-driven workflow in n8n orchestrating multimedia stream ingestion, audio transcription, and multi-step LLM knowledge summarization.",
      category: "AI AUTOMATION",
      tech: ["n8n", "AI Agents", "LLM APIs", "Webhooks", "JSON Schema"],
      icon: <SmartToyIcon />,
      color: "#ff007f"
    }
  ];

  return (
    <section className='py-[70px] pt-[100px] px-[15px] md:px-[20px] relative overflow-hidden' id='technical'>
      <div className='max-w-[1200px] mx-auto relative z-[1]'>

        <header className='text-center mb-[50px]'>
          <h2 className='text-[2.2rem] md:text-[3rem] lg:text-[3.5rem] font-[800] mb-[15px] tracking-[-1px] leading-[1.1] text-white'>
            Technical <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#45d19b] via-[#00f2fe] to-[#4facfe]'>Architecture</span>
          </h2>
          <p className='text-[1rem] md:text-[1.15rem] text-white/70 max-w-[650px] mx-auto leading-[1.6]'>
            Production cloud infrastructure, automated delivery pipelines, and backend workflows.
          </p>
        </header>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-[20px] md:gap-[25px]'>
          {implementations.map((item) => (
            <div
              key={item.id}
              className='bg-white/[0.03] rounded-[20px] p-[22px] md:p-[26px] border border-white/10 backdrop-blur-xl hover:border-white/20 hover:bg-white/[0.06] transition-all duration-300 flex flex-col justify-between group shadow-lg'
            >
              <div>
                <div className='flex items-center justify-between gap-2 mb-3'>
                  <div
                    className='w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-md'
                    style={{ backgroundColor: item.color }}
                  >
                    {item.icon}
                  </div>
                  <span
                    className='text-[10px] font-mono font-bold tracking-wider uppercase px-2.5 py-1 rounded-full border'
                    style={{
                      color: item.color,
                      backgroundColor: `${item.color}15`,
                      borderColor: `${item.color}30`
                    }}
                  >
                    {item.category}
                  </span>
                </div>

                <h3 className='text-[1.2rem] md:text-[1.35rem] font-[700] text-white mb-2 tracking-tight'>
                  {item.title}
                </h3>
                <p className='text-[0.88rem] text-white/65 leading-[1.55] mb-4'>
                  {item.description}
                </p>
              </div>

              <div className='flex flex-wrap gap-[6px] pt-2'>
                {item.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className='bg-black/40 text-white/75 border border-white/10 px-[10px] py-[3px] rounded-md text-[0.72rem] font-mono'
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Technical;
