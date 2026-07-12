import React from 'react'
import CloudIcon from '@mui/icons-material/Cloud';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import ApiIcon from '@mui/icons-material/Api';
import StorageIcon from '@mui/icons-material/Storage';

export const Technical = () => {
    const implementations = [
        {
            id: 1,
            title: "Automated CI/CD Pipeline for Node.js",
            description: "Built an end-to-end CI/CD pipeline to automate build, containerization, and deployment of a Node.js application using Jenkins and Docker on AWS EC2.",
            category: "Cloud/DevOps",
            tech: ["Jenkins", "Docker", "Node.js", "GitHub", "AWS EC2", "Linux"],
            icon: <ApiIcon />,
            color: "#45d19b"
        },
        {
            id: 2,
            title: "AWS Full-Stack Deployment",
            description: "Deployed a full-stack web application on AWS using EC2, VPC, and secure public-private subnet architecture with React, Node.js, and MySQL.",
            category: "Cloud Architecture",
            tech: ["AWS EC2", "AWS S3", "AWS RDS", "AWS VPC", "React", "Node.js", "MySQL", "Linux"],
            icon: <StorageIcon />,
            color: "#ff9900"
        },
        {
            id: 3,
            title: "Highly Available Pipeline on AWS",
            description: "Designed a fully automated CI/CD pipeline. Automates source control, testing, and deployment to EC2 instances in an Auto Scaling Group behind an ALB, ensuring zero-downtime.",
            category: "Enterprise Cloud",
            tech: ["AWS CodeCommit", "AWS CodePipeline", "AWS CodeBuild", "AWS CodeDeploy", "AWS EC2", "AWS S3", "AWS IAM", "AWS CloudWatch"],
            icon: <CloudIcon />,
            color: "#f26d21"
        },
        {
            id: 4,
            title: "n8n AI YouTube Video Summarizer",
            description: "Created an autonomous AI agent workflow in n8n that automatically ingests YouTube videos and generates detailed text descriptions and summaries using LLMs.",
            category: "AI Automation",
            tech: ["n8n", "AI Agents", "LLMs", "YouTube API", "Automation"],
            icon: <SmartToyIcon />,
            color: "#ff0066"
        }
    ];

    return (
        <section className='bg-gradient-to-br from-[#0a0f25] to-[#12193b] min-h-screen py-[60px] pt-[90px] md:pt-[100px] md:py-[100px] px-[15px] md:px-[20px] relative overflow-hidden' id='technical'>

            {/* Decorative Grid Background */}
            <div className='absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none'></div>

            <div className='max-w-[1200px] mx-auto relative z-[1]'>
                <header className='text-center mb-[80px]'>
                    <h2 className='text-[2rem] md:text-[2.5rem] lg:text-[3.5rem] font-[800] mb-[20px] tracking-[-1px] leading-[1.1] text-white'>
                        Technical <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#4facfe] to-[#00f2fe]'>Implementations</span>
                    </h2>
                    <p className='text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] text-[#8a9cc2] max-w-[600px] mx-auto leading-[1.6]'>Complex architectures, cloud deployments, and AI automations</p>
                </header>

                {/* Timeline Layout */}
                <div className='relative max-w-[900px] mx-auto'>

                    {/* Vertical Line */}
                    <div className='absolute left-[20px] md:left-1/2 top-[20px] bottom-[20px] w-[2px] bg-white/10 -translate-x-1/2 rounded-full hidden md:block'></div>

                    <div className='flex flex-col gap-[40px] md:gap-[60px]'>
                        {implementations.map((item, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <div key={item.id} className={`relative flex flex-col md:flex-row items-start md:items-center ${isEven ? 'md:flex-row-reverse' : ''} gap-[20px] md:gap-[40px] group`}>

                                    {/* Timeline Dot */}
                                    <div className={`absolute left-0 md:left-1/2 -translate-x-1/2 w-[40px] h-[40px] rounded-full border-[4px] border-[#0a0f25] flex items-center justify-center text-white z-10 transition-transform duration-500 group-hover:scale-125 shadow-[0_0_15px_rgba(0,0,0,0.5)]`} style={{ backgroundColor: item.color }}>
                                        <div className='scale-75'>{item.icon}</div>
                                    </div>

                                    {/* Empty Spacer for Desktop Layout */}
                                    <div className='hidden md:block w-1/2'></div>

                                    {/* Content Card */}
                                    <div className={`w-full md:w-1/2 pl-[50px] md:pl-0 ${isEven ? 'md:pr-[50px]' : 'md:pl-[50px]'}`}>
                                        <div className='bg-white/5 border border-white/10 rounded-[24px] p-[25px] md:p-[35px] backdrop-blur-xl transition-all duration-500 hover:bg-white/10 hover:-translate-y-[5px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]' style={{ borderTop: `4px solid ${item.color}` }}>

                                            <div className='inline-block px-[12px] py-[6px] rounded-full bg-white/10 text-white/80 text-[0.75rem] font-[600] uppercase tracking-wider mb-[15px]'>
                                                {item.category}
                                            </div>

                                            <h3 className='text-[1.3rem] md:text-[1.5rem] font-[700] text-white mb-[15px] leading-[1.3]'>{item.title}</h3>
                                            <p className='text-[#8a9cc2] text-[0.95rem] md:text-[1rem] leading-[1.6] mb-[20px]'>{item.description}</p>

                                            <div className='flex flex-wrap gap-[8px]'>
                                                {item.tech.map((tech, i) => (
                                                    <span key={i} className='bg-[#0a0f25] text-[#4facfe] border border-[#4facfe]/30 px-[12px] py-[5px] rounded-[8px] text-[0.8rem] font-[500]'>
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Technical;
