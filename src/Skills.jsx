import React from 'react'

const Skills = () => {
  return (
    <div className='m-0 px-[10px] py-[20px] pt-[90px] md:px-[20px] md:py-[40px] md:pt-[80px] bg-gradient-to-br from-[#110a4a] via-[#302b63] to-[#272763] min-h-screen' id='skill'>
      <h2 className='text-[2rem] md:text-[2.5rem] lg:text-[3.5rem] mb-[10px] bg-gradient-to-br from-[#667eea] to-[#764ba2] bg-clip-text text-transparent font-[700] flex items-center justify-center'>Skills & Technologies</h2>
      <p className='text-white/70 text-[1rem] md:text-[1.2rem] text-center mb-[40px]'>A comprehensive overview of the technologies and tools I work with.</p>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-[20px] md:gap-[30px] max-w-[1200px] mx-auto'>
        {/* Languages Section */}
        <div className='bg-white/10 rounded-[20px] p-[20px] md:p-[25px] backdrop-blur-[10px] border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)]'>
          <h3 className='text-white text-[1.3rem] lg:text-[1.5rem] mb-[20px] text-center font-[600] border-b-[2px] border-white/30 pb-[10px]'>Languages</h3>
          <div className='grid grid-cols-2 gap-[10px] md:gap-[15px]'>
            <div className='flex flex-col items-center text-center transition-all duration-300 p-[10px] md:p-[15px] rounded-[15px] bg-white/5 border border-white/10 hover:-translate-y-[5px] hover:bg-white/15 hover:shadow-[0_10px_25px_rgba(0,0,0,0.2)] group'>
              <img src="./images/java.png" alt="Java" className='w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-[10px] mb-[10px] object-cover bg-white p-[8px] transition-transform duration-300 ease-in-out group-hover:scale-110' />
              <span className='text-white text-[12px] md:text-[14px] font-[500] drop-shadow-[1px_1px_2px_rgba(0,0,0,0.5)]'>Java</span>
            </div>
            <div className='flex flex-col items-center text-center transition-all duration-300 p-[10px] md:p-[15px] rounded-[15px] bg-white/5 border border-white/10 hover:-translate-y-[5px] hover:bg-white/15 hover:shadow-[0_10px_25px_rgba(0,0,0,0.2)] group'>
              <img src="./images/py.jpeg" alt="Python" className='w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-[10px] mb-[10px] object-cover bg-white p-[8px] transition-transform duration-300 ease-in-out group-hover:scale-110' />
              <span className='text-white text-[12px] md:text-[14px] font-[500] drop-shadow-[1px_1px_2px_rgba(0,0,0,0.5)]'>Python</span>
            </div>
            <div className='flex flex-col items-center text-center transition-all duration-300 p-[10px] md:p-[15px] rounded-[15px] bg-white/5 border border-white/10 hover:-translate-y-[5px] hover:bg-white/15 hover:shadow-[0_10px_25px_rgba(0,0,0,0.2)] group'>
              <img src="./images/sql.jpg" alt="MySQL" className='w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-[10px] mb-[10px] object-cover bg-white p-[8px] transition-transform duration-300 ease-in-out group-hover:scale-110' />
              <span className='text-white text-[12px] md:text-[14px] font-[500] drop-shadow-[1px_1px_2px_rgba(0,0,0,0.5)]'>MySQL</span>
            </div>
            <div className='flex flex-col items-center text-center transition-all duration-300 p-[10px] md:p-[15px] rounded-[15px] bg-white/5 border border-white/10 hover:-translate-y-[5px] hover:bg-white/15 hover:shadow-[0_10px_25px_rgba(0,0,0,0.2)] group'>
              <img src="./images/c-programming.png" alt="TailwindCSS" className='w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-[10px] mb-[10px] object-cover bg-white p-[8px] transition-transform duration-300 ease-in-out group-hover:scale-110' />
              <span className='text-white text-[12px] md:text-[14px] font-[500] drop-shadow-[1px_1px_2px_rgba(0,0,0,0.5)]'>C</span>
            </div>
          </div>
        </div>

        {/* Frameworks Section */}
        <div className='bg-white/10 rounded-[20px] p-[20px] md:p-[25px] backdrop-blur-[10px] border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)]'>
          <h3 className='text-white text-[1.3rem] lg:text-[1.5rem] mb-[20px] text-center font-[600] border-b-[2px] border-white/30 pb-[10px]'>Frameworks</h3>
          <div className='grid grid-cols-2 gap-[10px] md:gap-[15px]'>
            <div className='flex flex-col items-center text-center transition-all duration-300 p-[10px] md:p-[15px] rounded-[15px] bg-white/5 border border-white/10 hover:-translate-y-[5px] hover:bg-white/15 hover:shadow-[0_10px_25px_rgba(0,0,0,0.2)] group'>
              <img src="./images/react.png" alt="React" className='w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-[10px] mb-[10px] object-cover bg-white p-[8px] transition-transform duration-300 ease-in-out group-hover:scale-110' />
              <span className='text-white text-[12px] md:text-[14px] font-[500] drop-shadow-[1px_1px_2px_rgba(0,0,0,0.5)]'>React</span>
            </div>
            <div className='flex flex-col items-center text-center transition-all duration-300 p-[10px] md:p-[15px] rounded-[15px] bg-white/5 border border-white/10 hover:-translate-y-[5px] hover:bg-white/15 hover:shadow-[0_10px_25px_rgba(0,0,0,0.2)] group'>
              <img src="./images/node.png" alt="Node.js" className='w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-[10px] mb-[10px] object-cover bg-white p-[8px] transition-transform duration-300 ease-in-out group-hover:scale-110' />
              <span className='text-white text-[12px] md:text-[14px] font-[500] drop-shadow-[1px_1px_2px_rgba(0,0,0,0.5)]'>Node.js</span>
            </div>
            <div className='flex flex-col items-center text-center transition-all duration-300 p-[10px] md:p-[15px] rounded-[15px] bg-white/5 border border-white/10 hover:-translate-y-[5px] hover:bg-white/15 hover:shadow-[0_10px_25px_rgba(0,0,0,0.2)] group'>
              <img src="./images/express.jpg" alt="Express" className='w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-[10px] mb-[10px] object-cover bg-white p-[8px] transition-transform duration-300 ease-in-out group-hover:scale-110' />
              <span className='text-white text-[12px] md:text-[14px] font-[500] drop-shadow-[1px_1px_2px_rgba(0,0,0,0.5)]'>Express</span>
            </div>
            <div className='flex flex-col items-center text-center transition-all duration-300 p-[10px] md:p-[15px] rounded-[15px] bg-white/5 border border-white/10 hover:-translate-y-[5px] hover:bg-white/15 hover:shadow-[0_10px_25px_rgba(0,0,0,0.2)] group'>
              <img src="./images/mongodb.png" alt="MongoDB" className='w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-[10px] mb-[10px] object-cover bg-white p-[8px] transition-transform duration-300 ease-in-out group-hover:scale-110' />
              <span className='text-white text-[12px] md:text-[14px] font-[500] drop-shadow-[1px_1px_2px_rgba(0,0,0,0.5)]'>MongoDB</span>
            </div>
            <div className='flex flex-col items-center text-center transition-all duration-300 p-[10px] md:p-[15px] rounded-[15px] bg-white/5 border border-white/10 hover:-translate-y-[5px] hover:bg-white/15 hover:shadow-[0_10px_25px_rgba(0,0,0,0.2)] group'>
              <img src="./images/flask.svg" alt="Flask" className='w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-[10px] mb-[10px] object-cover bg-white p-[8px] transition-transform duration-300 ease-in-out group-hover:scale-110' />
              <span className='text-white text-[12px] md:text-[14px] font-[500] drop-shadow-[1px_1px_2px_rgba(0,0,0,0.5)]'>Flask</span>
            </div>
          </div>
        </div>

        {/* Tools Section */}
        <div className='bg-white/10 rounded-[20px] p-[20px] md:p-[25px] backdrop-blur-[10px] border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)]'>
          <h3 className='text-white text-[1.3rem] lg:text-[1.5rem] mb-[20px] text-center font-[600] border-b-[2px] border-white/30 pb-[10px]'>Tools</h3>
          <div className='grid grid-cols-2 gap-[10px] md:gap-[15px]'>
            <div className='flex flex-col items-center text-center transition-all duration-300 p-[10px] md:p-[15px] rounded-[15px] bg-white/5 border border-white/10 hover:-translate-y-[5px] hover:bg-white/15 hover:shadow-[0_10px_25px_rgba(0,0,0,0.2)] group'>
              <img src="./images/git.png" alt="Git" className='w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-[10px] mb-[10px] object-cover bg-white p-[8px] transition-transform duration-300 ease-in-out group-hover:scale-110' />
              <span className='text-white text-[12px] md:text-[14px] font-[500] drop-shadow-[1px_1px_2px_rgba(0,0,0,0.5)]'>Git</span>
            </div>
            <div className='flex flex-col items-center text-center transition-all duration-300 p-[10px] md:p-[15px] rounded-[15px] bg-white/5 border border-white/10 hover:-translate-y-[5px] hover:bg-white/15 hover:shadow-[0_10px_25px_rgba(0,0,0,0.2)] group'>
              <img src="./images/github.png" alt="Figma" className='w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-[10px] mb-[10px] object-cover bg-white p-[8px] transition-transform duration-300 ease-in-out group-hover:scale-110' />
              <span className='text-white text-[12px] md:text-[14px] font-[500] drop-shadow-[1px_1px_2px_rgba(0,0,0,0.5)]'>Github</span>
            </div>
            <div className='flex flex-col items-center text-center transition-all duration-300 p-[10px] md:p-[15px] rounded-[15px] bg-white/5 border border-white/10 hover:-translate-y-[5px] hover:bg-white/15 hover:shadow-[0_10px_25px_rgba(0,0,0,0.2)] group'>
              <img src="./images/jenkins.jpg" alt="Postman" className='w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-[10px] mb-[10px] object-cover bg-white p-[8px] transition-transform duration-300 ease-in-out group-hover:scale-110' />
              <span className='text-white text-[12px] md:text-[14px] font-[500] drop-shadow-[1px_1px_2px_rgba(0,0,0,0.5)]'>Jenkins</span>
            </div>
            <div className='flex flex-col items-center text-center transition-all duration-300 p-[10px] md:p-[15px] rounded-[15px] bg-white/5 border border-white/10 hover:-translate-y-[5px] hover:bg-white/15 hover:shadow-[0_10px_25px_rgba(0,0,0,0.2)] group'>
              <img src="./images/docker.png" alt="Docker" className='w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-[10px] mb-[10px] object-cover bg-white p-[8px] transition-transform duration-300 ease-in-out group-hover:scale-110' />
              <span className='text-white text-[12px] md:text-[14px] font-[500] drop-shadow-[1px_1px_2px_rgba(0,0,0,0.5)]'>Docker</span>
            </div>
            <div className='flex flex-col items-center text-center transition-all duration-300 p-[10px] md:p-[15px] rounded-[15px] bg-white/5 border border-white/10 hover:-translate-y-[5px] hover:bg-white/15 hover:shadow-[0_10px_25px_rgba(0,0,0,0.2)] group'>
              <img src="./images/githubactions.png" alt="Visual Studio" className='w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-[10px] mb-[10px] object-cover bg-white p-[8px] transition-transform duration-300 ease-in-out group-hover:scale-110' />
              <span className='text-white text-[12px] md:text-[14px] font-[500] drop-shadow-[1px_1px_2px_rgba(0,0,0,0.5)]'>GitHub Actions</span>
            </div>
            <div className='flex flex-col items-center text-center transition-all duration-300 p-[10px] md:p-[15px] rounded-[15px] bg-white/5 border border-white/10 hover:-translate-y-[5px] hover:bg-white/15 hover:shadow-[0_10px_25px_rgba(0,0,0,0.2)] group'>
              <img src="./images/aws.jpg" alt="AWS" className='w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-[10px] mb-[10px] object-cover bg-white p-[8px] transition-transform duration-300 ease-in-out group-hover:scale-110' />
              <span className='text-white text-[12px] md:text-[14px] font-[500] drop-shadow-[1px_1px_2px_rgba(0,0,0,0.5)]'>AWS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills;