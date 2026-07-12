import React, { useState } from 'react'
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const templateparams = {
      from_name: name,
      from_email: email,
      message: message,
      "to-email": "rithikeswaran0711@gmail.com",
    };

    emailjs.send(serviceId, templateId, templateparams, publicKey)
      .then((response) => {
        setIsSubmitting(false);
        setSubmitStatus('success');
        setName("");
        setEmail("");
        setMessage("");

        // Reset status message after 5 seconds
        setTimeout(() => setSubmitStatus(null), 5000);
      })
      .catch((error) => {
        setIsSubmitting(false);
        setSubmitStatus('error');
        console.log("Email sent failed", error);
        setTimeout(() => setSubmitStatus(null), 5000);
      })
  }

  return (
    <div className='bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] min-h-screen py-[60px] pt-[90px] md:pt-[80px] md:py-[80px] px-[20px] text-white relative overflow-hidden' id='contact'>

      {/* Innovative Background Animations */}
      <div className='absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-r from-[#667eea]/20 to-[#764ba2]/20 blur-[100px] opacity-50 animate-[spin_20s_linear_infinite] pointer-events-none'></div>
      <div className='absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-gradient-to-l from-[#FFD700]/10 to-[#FFA500]/10 blur-[100px] opacity-50 animate-[spin_15s_linear_infinite_reverse] pointer-events-none'></div>

      <div className='text-center mb-[60px] relative z-10'>
        <h2 className='text-[2.5rem] md:text-[4rem] mb-[15px] bg-gradient-to-r from-[#667eea] via-[#a88beb] to-[#764ba2] bg-clip-text text-transparent font-[800] tracking-tight drop-shadow-sm '>Let's Build Together</h2>
        <div className='w-[80px] h-[4px] bg-gradient-to-r from-[#FFD700] to-[#FFA500] mx-auto mb-[20px] rounded-full'></div>
        <p className='text-[1rem] md:text-[1.2rem] text-[#e0e0e0] max-w-[600px] mx-auto leading-[1.6] font-[300]'>I'm currently available for freelance work or full-time roles. If you have a project that needs some creative magic, I'd love to hear from you!</p>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-12 gap-[40px] lg:gap-[0px] max-w-[1200px] mx-auto mb-[60px] relative z-10 items-center bg-white/[0.02] border border-white/10 rounded-[30px] p-[20px] md:p-[40px] lg:p-[50px] shadow-[0_30px_60px_rgba(0,0,0,0.5)] backdrop-blur-xl'>

        {/* Left Side: Contact Info Cards */}
        <div className='lg:col-span-5 flex flex-col gap-[20px] pr-0 lg:pr-[40px]'>

          {/* Card 1 */}
          <div className='group relative bg-gradient-to-br from-white/5 to-white/[0.02] rounded-[20px] p-[25px] border border-white/10 overflow-hidden hover:border-[#667eea]/50 transition-colors duration-500'>
            <div className='absolute inset-0 bg-gradient-to-r from-[#667eea]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
            <div className='relative flex items-center gap-[20px]'>
              <div className='w-[60px] h-[60px] rounded-full bg-[#667eea]/20 text-[#667eea] flex items-center justify-center shrink-0 border border-[#667eea]/30 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(102,126,234,0.2)] group-hover:shadow-[0_0_30px_rgba(102,126,234,0.5)]'>
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-[28px] h-[28px]">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </div>
              <div>
                <p className='text-[#8a8a8a] text-[0.9rem] font-[600] uppercase tracking-wider mb-[5px]'>Email Me At</p>
                <h3 className='text-white text-[1.1rem] md:text-[1.2rem] font-[500] break-all group-hover:text-[#667eea] transition-colors'>rithikeswaran0711@gmail.com</h3>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className='group relative bg-gradient-to-br from-white/5 to-white/[0.02] rounded-[20px] p-[25px] border border-white/10 overflow-hidden hover:border-[#764ba2]/50 transition-colors duration-500'>
            <div className='absolute inset-0 bg-gradient-to-r from-[#764ba2]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
            <div className='relative flex items-center gap-[20px]'>
              <div className='w-[60px] h-[60px] rounded-full bg-[#764ba2]/20 text-[#cba4f8] flex items-center justify-center shrink-0 border border-[#764ba2]/30 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(118,75,162,0.2)] group-hover:shadow-[0_0_30px_rgba(118,75,162,0.5)]'>
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-[28px] h-[28px]">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
              </div>
              <div>
                <p className='text-[#8a8a8a] text-[0.9rem] font-[600] uppercase tracking-wider mb-[5px]'>Call Me At</p>
                <h3 className='text-white text-[1.1rem] md:text-[1.2rem] font-[500] group-hover:text-[#cba4f8] transition-colors'>+91 9344681476</h3>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className='group relative bg-gradient-to-br from-white/5 to-white/[0.02] rounded-[20px] p-[25px] border border-white/10 overflow-hidden hover:border-[#FFD700]/50 transition-colors duration-500'>
            <div className='absolute inset-0 bg-gradient-to-r from-[#FFD700]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
            <div className='relative flex flex-col items-center justify-center text-center'>
              <h3 className='text-white text-[1.4rem] font-[700] mb-[5px]'>Download Resume</h3>
              <p className='text-[#8a8a8a] text-[0.9rem] mb-[15px]'>Get a copy of my CV</p>
              <div className='flex gap-[10px] w-full'>
                <a href="/images/Rithikeswaaran_IT239.pdf" target="_blank" rel="noopener noreferrer" className='flex-1 py-[10px] rounded-[12px] bg-white/10 border border-white/20 text-white font-[600] text-[0.9rem] hover:bg-white/20 transition-colors flex justify-center items-center gap-[8px]'>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-[18px] h-[18px]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  View
                </a>
                <a href="/Resume.pdf" download="Rithikeswaran-Resume.pdf" className='flex-1 py-[10px] rounded-[12px] bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black font-[700] text-[0.9rem] hover:shadow-[0_0_20px_rgba(255,215,0,0.4)] transition-all flex justify-center items-center gap-[8px]'>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-[18px] h-[18px]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Vertical Divider for Desktop */}
        <div className='hidden lg:flex col-span-1 justify-center relative h-full'>
          <div className='w-[1px] h-full bg-gradient-to-b from-transparent via-white/20 to-transparent'></div>
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0f0c29] px-[10px] text-white/50 text-[0.9rem] font-[600] uppercase tracking-widest'>OR</div>
        </div>

        {/* Right Side: Form */}
        <div className='lg:col-span-6 pl-0 lg:pl-[20px]'>
          <form className='flex flex-col gap-[30px]' onSubmit={handleSubmit}>

            {/* Animated Input Wrapper */}
            <div className='relative group'>
              <input
                type="text"
                id="name"
                required
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='w-full bg-transparent border-b-2 border-white/20 py-[15px] text-white text-[1.1rem] outline-none transition-all duration-300 focus:border-[#667eea] peer'
                placeholder=" "
              />
              <label htmlFor="name" className='absolute left-0 top-[15px] text-[#a0a0a0] text-[1.1rem] transition-all duration-300 pointer-events-none peer-focus:-top-[15px] peer-focus:text-[0.85rem] peer-focus:text-[#667eea] peer-focus:font-[600] peer-valid:-top-[15px] peer-valid:text-[0.85rem] peer-valid:text-[#667eea]'>Your Full Name</label>
            </div>

            {/* Animated Input Wrapper */}
            <div className='relative group'>
              <input
                type="email"
                id="email"
                required
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='w-full bg-transparent border-b-2 border-white/20 py-[15px] text-white text-[1.1rem] outline-none transition-all duration-300 focus:border-[#764ba2] peer'
                placeholder=" "
              />
              <label htmlFor="email" className='absolute left-0 top-[15px] text-[#a0a0a0] text-[1.1rem] transition-all duration-300 pointer-events-none peer-focus:-top-[15px] peer-focus:text-[0.85rem] peer-focus:text-[#764ba2] peer-focus:font-[600] peer-valid:-top-[15px] peer-valid:text-[0.85rem] peer-valid:text-[#764ba2]'>Your Email Address</label>
            </div>

            {/* Animated Textarea Wrapper */}
            <div className='relative group mt-[10px]'>
              <textarea
                id="message"
                rows="4"
                required
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className='w-full bg-transparent border-b-2 border-white/20 py-[15px] text-white text-[1.1rem] outline-none transition-all duration-300 focus:border-[#FFD700] peer resize-none'
                placeholder=" "
              ></textarea>
              <label htmlFor="message" className='absolute left-0 top-[15px] text-[#a0a0a0] text-[1.1rem] transition-all duration-300 pointer-events-none peer-focus:-top-[15px] peer-focus:text-[0.85rem] peer-focus:text-[#FFD700] peer-focus:font-[600] peer-valid:-top-[15px] peer-valid:text-[0.85rem] peer-valid:text-[#FFD700]'>Message</label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className='relative overflow-hidden bg-white/5 border border-white/20 text-white px-[40px] py-[18px] rounded-[15px] text-[1.1rem] font-[700] uppercase tracking-[2px] transition-all duration-300 hover:border-[#667eea]/50 hover:shadow-[0_15px_30px_rgba(102,126,234,0.3)] group mt-[10px] disabled:opacity-50 disabled:cursor-not-allowed w-full'
            >
              <div className='absolute inset-0 w-0 bg-gradient-to-r from-[#667eea] to-[#764ba2] transition-all duration-500 ease-out group-hover:w-full z-0'></div>
              <span className='relative z-10 flex items-center justify-center gap-[12px]'>
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-[20px] h-[20px] transition-transform duration-300 group-hover:translate-x-[8px]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </span>
            </button>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="bg-[#22b455]/20 border border-[#22b455] text-[#22b455] px-4 py-3 rounded-[10px] text-center font-[500] animate-[fadeIn_0.5s_ease-out]">
                Thank you! Your message has been successfully sent.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="bg-[#FF6B35]/20 border border-[#FF6B35] text-[#FF6B35] px-4 py-3 rounded-[10px] text-center font-[500] animate-[fadeIn_0.5s_ease-out]">
                Oops! Something went wrong. Please try again later.
              </div>
            )}

          </form>
        </div>
      </div>

      {/* Social Media Footer - Redesigned */}
      <div className='text-center max-w-[800px] mx-auto mt-[80px] relative z-10'>
        <p className='text-[#8a8a8a] uppercase tracking-[3px] text-[0.9rem] font-[600] mb-[25px]'>Find me elsewhere</p>
        <div className='flex flex-wrap justify-center gap-[15px] md:gap-[25px]'>
          <a href="https://github.com/rithik0711" className='w-[60px] h-[60px] rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white transition-all duration-500 hover:!animate-none hover:-translate-y-[8px] hover:bg-[#333] hover:border-[#333] hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)] group animate-[bounce_2s_infinite_0s]' target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-[28px] h-[28px] transition-transform duration-300 group-hover:scale-110">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>

          <a href="https://www.linkedin.com/in/rithikeswaran-m-27287328b/" className='w-[60px] h-[60px] rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white transition-all duration-500 hover:!animate-none hover:-translate-y-[8px] hover:bg-[#0077b5] hover:border-[#0077b5] hover:shadow-[0_15px_30px_rgba(0,119,181,0.4)] group animate-[bounce_2s_infinite_400ms]' target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-[28px] h-[28px] transition-transform duration-300 group-hover:scale-110">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>

          <a href="https://www.instagram.com/_rithik_offl/" className='w-[60px] h-[60px] rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white transition-all duration-500 hover:!animate-none hover:-translate-y-[8px] hover:bg-gradient-to-tr hover:from-[#fdf497] hover:via-[#fd5949] hover:to-[#d6249f] hover:border-transparent hover:shadow-[0_15px_30px_rgba(225,48,108,0.4)] group animate-[bounce_2s_infinite_800ms]' target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-[28px] h-[28px] transition-transform duration-300 group-hover:scale-110">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069v-2.163zm0 2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>

          <a href="https://wa.me/919344681476" className='w-[60px] h-[60px] rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white transition-all duration-500 hover:!animate-none hover:-translate-y-[8px] hover:bg-[#25D366] hover:border-[#25D366] hover:shadow-[0_15px_30px_rgba(37,211,102,0.4)] group animate-[bounce_2s_infinite_1200ms]' target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-[28px] h-[28px] transition-transform duration-300 group-hover:scale-110">
              <path d="M11.964 1.999c-5.518 0-9.998 4.48-9.998 9.998 0 1.751.455 3.444 1.314 4.953L2 21.999l5.176-1.357c1.46.793 3.102 1.218 4.788 1.218 5.518 0 9.998-4.48 9.998-9.998 0-5.518-4.48-9.998-9.998-9.998zm5.558 14.394c-.234.66-1.36 1.266-1.898 1.341-.448.062-1.028.118-3.085-.733-2.484-1.026-4.06-3.565-4.186-3.733-.125-.168-1-1.332-1-2.54 0-1.208.625-1.804.85-2.052.224-.249.489-.311.655-.311.166 0 .332 0 .477.007.151.008.354-.055.553.424.208.502.71 1.734.773 1.859.062.125.104.27.02.437-.083.166-.125.27-.249.416-.125.145-.262.316-.372.433-.119.128-.246.269-.111.503.135.234.604.999 1.298 1.619.897.801 1.644 1.047 1.884 1.168.239.121.379.101.52-.055.14-.156.604-.705.766-.948.162-.242.324-.202.533-.125.208.078 1.318.62 1.546.734.229.114.38.17.435.265.056.096.056.551-.178 1.211z" />
            </svg>
          </a>

          <a href="https://x.com/RithikeswaranM" className='w-[60px] h-[60px] rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white transition-all duration-500 hover:!animate-none hover:-translate-y-[8px] hover:bg-[#1da1f2] hover:border-[#1da1f2] hover:shadow-[0_15px_30px_rgba(29,161,242,0.4)] group animate-[bounce_2s_infinite_1600ms]' target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-[28px] h-[28px] transition-transform duration-300 group-hover:scale-110">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact;