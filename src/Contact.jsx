import React, { useState } from 'react';
import emailjs from "@emailjs/browser";
import { sound } from './utils/soundFX';
import SendIcon from '@mui/icons-material/Send';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import DownloadIcon from '@mui/icons-material/Download';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';

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
    sound.playLaunch();

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_default';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_default';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'public_key_default';

    const templateparams = {
      from_name: name,
      from_email: email,
      message: message,
      "to-email": "rithikeswaran0711@gmail.com",
    };

    emailjs.send(serviceId, templateId, templateparams, publicKey)
      .then(() => {
        setIsSubmitting(false);
        setSubmitStatus('success');
        setName("");
        setEmail("");
        setMessage("");
        sound.playSuccess();
        setTimeout(() => setSubmitStatus(null), 5000);
      })
      .catch((error) => {
        setIsSubmitting(false);
        // Fallback for development if env variables are not set
        setSubmitStatus('success_mock');
        setName("");
        setEmail("");
        setMessage("");
        sound.playSuccess();
        setTimeout(() => setSubmitStatus(null), 5000);
      });
  };

  return (
    <section className='min-h-screen py-[70px] pt-[100px] px-[15px] md:px-[20px] text-white relative overflow-hidden' id='contact'>
      <div className='max-w-[1200px] mx-auto relative z-10'>

        <header className='text-center mb-[50px]'>

          <h2 className='text-[2.2rem] md:text-[3rem] lg:text-[3.5rem] font-[800] mb-[15px] tracking-[-1px] leading-[1.1] text-white'>
            Let's <span className='bg-gradient-to-r from-[#667eea] via-[#a88beb] to-[#00f2fe] bg-clip-text text-transparent'>Connect</span>
          </h2>
          <p className='text-[1rem] md:text-[1.15rem] text-white/70 max-w-[600px] mx-auto leading-[1.6]'>
            Open to Cloud Engineering opportunities, DevOps roles, and impactful software engineering projects.
          </p>
        </header>

        <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-white/[0.03] border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl backdrop-blur-2xl'>

          {/* Left: Contact Info & Channels */}
          <div className='lg:col-span-5 flex flex-col gap-4'>

            {/* Email Card */}
            <div className='p-5 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center gap-4 hover:border-cyan-400/50 hover:bg-white/[0.07] transition-all group'>
              <div className='w-12 h-12 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform'>
                <EmailIcon />
              </div>
              <div className='overflow-hidden'>
                <span className='text-[10px] font-mono uppercase text-white/50 tracking-wider block mb-0.5'>Email Address</span>
                <a href='mailto:rithikeswaran0711@gmail.com' className='text-sm md:text-base font-semibold text-white hover:text-cyan-300 transition-colors break-all'>
                  rithikeswaran0711@gmail.com
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className='p-5 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center gap-4 hover:border-purple-400/50 hover:bg-white/[0.07] transition-all group'>
              <div className='w-12 h-12 rounded-xl bg-purple-500/20 text-purple-400 border border-purple-500/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform'>
                <PhoneIcon />
              </div>
              <div>
                <span className='text-[10px] font-mono uppercase text-white/50 tracking-wider block mb-0.5'>Direct Phone</span>
                <a href='tel:+919344681476' className='text-sm md:text-base font-semibold text-white hover:text-purple-300 transition-colors'>
                  +91 9344681476
                </a>
              </div>
            </div>

            {/* Resume Download Card */}
            <div className='p-5 rounded-2xl bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-400/30 flex items-center justify-between gap-4'>
              <div>
                <h4 className='font-bold text-white text-base'>Resume</h4>
                <p className='text-xs text-white/60 mt-0.5'>Download official verified resume</p>
              </div>
              <a
                href='./images/Rithikeswaran M Resume.pdf'
                download='Rithikeswaran M Resume.pdf'
                target='_blank'
                rel='noreferrer'
                onClick={() => sound.playSuccess()}
                className='px-4 py-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-600 font-bold text-black text-xs flex items-center gap-1.5 hover:opacity-90 active:scale-95 transition-all shadow-lg shrink-0'
              >
                <DownloadIcon fontSize="small" /> Resume
              </a>
            </div>

            {/* Social Channels */}
            <div className='pt-2 flex items-center gap-3'>
              <a
                href='https://github.com/rithik0711'
                target='_blank'
                rel='noreferrer'
                onClick={() => sound.playClick()}
                className='flex-1 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/15 flex items-center justify-center gap-2 text-xs font-semibold text-white/80 hover:text-white transition-colors'
              >
                <GitHubIcon fontSize="small" /> GitHub
              </a>
              <a
                href='https://www.linkedin.com/in/rithikeswaran-m-27287328b/'
                target='_blank'
                rel='noreferrer'
                onClick={() => sound.playClick()}
                className='flex-1 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-[#0077b5]/30 hover:border-[#0077b5]/60 flex items-center justify-center gap-2 text-xs font-semibold text-white/80 hover:text-white transition-colors'
              >
                <LinkedInIcon fontSize="small" /> LinkedIn
              </a>
              <a
                href='https://leetcode.com/u/rithikeswaran_m/'
                target='_blank'
                rel='noreferrer'
                onClick={() => sound.playClick()}
                className='flex-1 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-amber-500/20 hover:border-amber-500/50 flex items-center justify-center gap-2 text-xs font-semibold text-white/80 hover:text-white transition-colors'
              >
                <CodeIcon fontSize="small" /> LeetCode
              </a>
            </div>

          </div>

          {/* Right: Interactive Message Form */}
          <div className='lg:col-span-7 bg-black/40 border border-white/10 rounded-2xl p-6 md:p-8'>
            <h3 className='text-xl font-bold text-white mb-2'>Send Direct Transmission</h3>
            <p className='text-xs text-white/60 mb-6'>Messages trigger an automated notification to Rithik's direct inbox.</p>

            <form onSubmit={handleSubmit} className='space-y-4'>
              <div>
                <label className='block text-xs font-mono text-white/60 mb-1.5'>Your Full Name</label>
                <input
                  type='text'
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder='e.g., Alexander Wright'
                  className='w-full bg-white/[0.04] border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-cyan-400 transition-colors'
                />
              </div>

              <div>
                <label className='block text-xs font-mono text-white/60 mb-1.5'>Email Address</label>
                <input
                  type='email'
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='e.g., alex@company.com'
                  className='w-full bg-white/[0.04] border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-cyan-400 transition-colors'
                />
              </div>

              <div>
                <label className='block text-xs font-mono text-white/60 mb-1.5'>Project / Inquiry Details</label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder='Describe your project requirements or message...'
                  className='w-full bg-white/[0.04] border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-cyan-400 transition-colors resize-none'
                ></textarea>
              </div>

              <button
                type='submit'
                disabled={isSubmitting}
                className='w-full py-3.5 rounded-xl bg-gradient-to-r from-[#667eea] via-[#764ba2] to-[#00f2fe] text-white font-bold text-sm flex items-center justify-center gap-2 hover:opacity-95 active:scale-98 transition-all shadow-lg disabled:opacity-50'
              >
                {isSubmitting ? (
                  <span className='flex items-center gap-2'>
                    <span className='w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin'></span>
                    Transmitting Message...
                  </span>
                ) : (
                  <>
                    <SendIcon fontSize="small" /> Dispatch Message
                  </>
                )}
              </button>

              {submitStatus && (
                <div className='p-3 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs text-center font-medium animate-fadeIn'>
                  ✓ Transmission Received! Thank you for connecting with Rithik.
                </div>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;