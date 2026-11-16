import React from 'react';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CodeIcon from '@mui/icons-material/Code';

export const Achievements = () => {
    const achievements = [
        {
            id: 1,
            title: "TN Skills - Web Technologies",
            subtitle: "Round 1 Qualified",
            description: "Successfully qualified in Round 1 of the state-level Tamil Nadu Skills (TN Skills) competition under Web Technologies, showcasing strong frontend development and timed problem-solving capabilities.",
            category: "STATE COMPETITION",
            tech: ["HTML", "CSS", "JavaScript", "Responsive Design", "Web Standards"],
            icon: <EmojiEventsIcon />,
            color: "#ffd700"
        },
        {
            id: 2,
            title: "LeetCode Problem Solver",
            subtitle: "360+ Problems Solved",
            description: "Solved algorithmic coding problems on LeetCode with a strong emphasis on Data Structures, Algorithms, and code optimization.",
            category: "PROBLEM SOLVING",
            tech: ["Data Structures", "Algorithms"],
            icon: <CodeIcon />,
            color: "#ffa116"
        }
    ];

    return (
        <section className='py-[70px] pt-[100px] px-[15px] md:px-[20px] relative overflow-hidden' id='achievements'>
            <div className='max-w-[1200px] mx-auto relative z-[1]'>

                <header className='text-center mb-[50px]'>
                    <h2 className='text-[2.2rem] md:text-[3rem] lg:text-[3.5rem] font-[800] mb-[15px] tracking-[-1px] leading-[1.1] text-white'>
                        Key <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#ffd700] via-[#ff9900] to-[#ff0844]'>Achievements</span>
                    </h2>
                    <p className='text-[1rem] md:text-[1.15rem] text-white/70 max-w-[650px] mx-auto leading-[1.6]'>
                        Competitive programming accomplishments and state-level skill recognitions.
                    </p>
                </header>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-[20px] md:gap-[25px]'>
                    {achievements.map((item) => (
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

                                <h3 className='text-[1.2rem] md:text-[1.35rem] font-[700] text-white mb-1 tracking-tight'>
                                    {item.title}
                                </h3>
                                <p className='text-xs font-mono text-amber-300/90 mb-3'>
                                    {item.subtitle}
                                </p>
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

export default Achievements;