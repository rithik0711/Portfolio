import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import { sound } from '../utils/soundFX';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const FAQ_KNOWLEDGE_BASE = [
  {
    keywords: ['who', 'about', 'rithik', 'rithikeswaran', 'intro', 'background', 'profile'],
    answer: "Rithikeswaran M is an aspiring Cloud & Full-Stack Engineer currently pursuing B.Tech in Information Technology at Bannari Amman Institute of Technology (2023-2027). He specializes in AWS Cloud infrastructure, CI/CD automation pipelines, Docker containerization, and Generative AI workflows.",
    actionSection: 'home'
  },
  {
    keywords: ['skill', 'stack', 'languages', 'tech', 'technologies', 'docker', 'jenkins', 'aws', 'python', 'java'],
    answer: "Rithik's core technical stack includes:\n• Languages: Java, Python, C, MySQL, JavaScript\n• Cloud & DevOps: AWS (EC2, S3, RDS, VPC, ALB, IAM), Docker, Jenkins, GitHub Actions, Linux\n• Frameworks & Web: React, Node.js, Express, Flask, TailwindCSS, MongoDB\n• AI / ML: LLM Agents (n8n, Ollama), TensorFlow, Machine Learning",
    actionSection: 'skill'
  },
  {
    keywords: ['project', 'exam', 'workload', 'chat', 'portfolio', 'built'],
    answer: "Rithik has developed high-impact projects including:\n1. AI Exam Portal: GenAI automated test creation & secure evaluation platform\n2. Faculty Workload Prediction System: Machine learning predictive analytics in Python/TensorFlow\n3. Self-Hosted AI Chat Application: Privacy-first local LLM chat engine with Flask & Ollama\n\nYou can click on 'Sandbox' on any project card to test a live simulation!",
    actionSection: 'projects'
  },
  {
    keywords: ['cloud', 'pipeline', 'devops', 'cicd', 'aws', 'architecture', 'technical'],
    answer: "In Cloud & DevOps, Rithik has built:\n• Automated CI/CD with Jenkins & Docker deploying to AWS EC2\n• High-Availability auto-scaling cluster with ALB & zero-downtime rolling updates\n• Secure multi-tier AWS VPC network architecture with private RDS\n• Autonomous n8n AI workflow for YouTube ingestion & LLM summaries",
    actionSection: 'technical'
  },
  {
    keywords: ['education', 'college', 'school', 'marks', 'degree', 'btech', 'university'],
    answer: "Education details:\n• B.Tech in Information Technology (2023 - 2027, 4th Year) at Bannari Amman Institute of Technology\n• Higher Secondary School (2022 - 2023) at Isha Vidhya Matric Higher Secondary School with academic excellence in Mathematics & Computer Science.",
    actionSection: 'education'
  },
  {
    keywords: ['cert', 'certification', 'cisco', 'oracle', 'ccna', 'nptel', 'google', 'coursera'],
    answer: "Verified Certifications:\n• Cisco: CCNA (Introduction to Networking) & Python Programming\n• Oracle Cloud: OCI Foundations Associate\n• NPTEL: Machine Learning & Ethical Hacking & Java Programming\n• Google / Coursera: Introduction to AI & LLMs",
    actionSection: 'certification'
  },
  {
    keywords: ['contact', 'email', 'phone', 'hire', 'linkedin', 'github', 'reach', 'message'],
    answer: "You can reach Rithik directly via:\n• Email: rithikeswaran0711@gmail.com\n• Phone: +91 9344681476\n• LinkedIn: in/rithikeswaran-m-27287328b\n• GitHub: github.com/rithik0711\n\nFeel free to send a direct message in the Contact section below!",
    actionSection: 'contact'
  },
  {
    keywords: ['resume', 'cv', 'pdf', 'download'],
    answer: "You can download Rithikeswaran's updated resume directly from the Contact section or via the Terminal with `cat resume`.",
    actionSection: 'contact'
  }
];

export const AIAssistantModal = () => {
  const { aiAssistantOpen, toggleAiAssistant, theme, unlockAchievement } = useTheme();
  const [messages, setMessages] = useState([
    {
      sender: 'ai',
      text: "👋 Greetings! I am Nova, Rithikeswaran's AI Portfolio Guide. Ask me anything about Rithik's cloud architectures, full-stack projects, certifications, or how to get in touch!"
    }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSend = (textToSend) => {
    const query = (textToSend || inputVal).trim();
    if (!query) return;

    sound.playClick();
    unlockAchievement('ai_conversed');

    const userMsg = { sender: 'user', text: query };
    setMessages((prev) => [...prev, userMsg]);
    setInputVal('');
    setIsTyping(true);

    setTimeout(() => {
      const lowerQuery = query.toLowerCase();
      let match = FAQ_KNOWLEDGE_BASE.find((item) =>
        item.keywords.some((kw) => lowerQuery.includes(kw))
      );

      let replyText = "";
      let targetSection = null;

      if (match) {
        replyText = match.answer;
        targetSection = match.actionSection;
      } else {
        replyText = `That's a great question! Rithik specializes in Cloud Engineering, DevOps pipelines (AWS, Docker, Jenkins), and Full-Stack AI apps. Explore his Projects, Technical Implementations, or reach out to him directly at rithikeswaran0711@gmail.com.`;
      }

      setMessages((prev) => [
        ...prev,
        {
          sender: 'ai',
          text: replyText,
          targetSection
        }
      ]);
      setIsTyping(false);
      sound.playBeep(700, 'sine', 0.08, 0.03);
    }, 600);
  };

  const navigateToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      sound.playClick();
      toggleAiAssistant(false);
    }
  };

  if (!aiAssistantOpen) return null;

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-[550px] h-[620px] bg-[#0c0e1a]/95 border border-white/20 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden backdrop-blur-2xl relative">
        
        {/* Top Header */}
        <div className="p-4 bg-white/5 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#667eea] to-[#764ba2] flex items-center justify-center shadow-lg shadow-[#667eea]/30 animate-pulse">
              <SmartToyIcon sx={{ color: 'white', fontSize: 22 }} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-white text-base">Nova AI Assistant</h3>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              </div>
              <p className="text-xs text-white/50">Interactive Portfolio Intelligence</p>
            </div>
          </div>
          <button
            onClick={() => toggleAiAssistant(false)}
            className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center text-white/70 hover:text-white transition-colors"
          >
            <CloseIcon fontSize="small" />
          </button>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3.5 select-text text-sm">
          {messages.map((m, idx) => (
            <div
              key={idx}
              className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-3 leading-relaxed whitespace-pre-wrap ${
                  m.sender === 'user'
                    ? 'bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white shadow-md rounded-br-none'
                    : 'bg-white/10 border border-white/10 text-gray-200 rounded-bl-none backdrop-blur-md'
                }`}
              >
                {m.text}
              </div>

              {m.targetSection && (
                <button
                  onClick={() => navigateToSection(m.targetSection)}
                  className="mt-1.5 text-xs text-cyan-300 hover:text-cyan-200 flex items-center gap-1 font-medium bg-cyan-950/40 border border-cyan-500/30 px-2.5 py-1 rounded-full transition-colors"
                >
                  <AutoAwesomeIcon sx={{ fontSize: 12 }} />
                  Jump to {m.targetSection.toUpperCase()} section →
                </button>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-1.5 bg-white/10 px-3.5 py-2.5 rounded-2xl rounded-bl-none w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-white/70 animate-bounce"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/70 animate-bounce [animation-delay:0.2s]"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/70 animate-bounce [animation-delay:0.4s]"></span>
            </div>
          )}

          <div ref={chatEndRef} />
        </div>

        {/* Suggested Quick Questions */}
        <div className="px-4 py-2 bg-black/40 border-t border-white/5 flex gap-2 overflow-x-auto no-scrollbar text-xs">
          {[
            "What are Rithik's core skills?",
            "Tell me about the AI Exam Portal",
            "Show AWS & CI/CD experience",
            "How can I contact Rithik?"
          ].map((q, i) => (
            <button
              key={i}
              onClick={() => handleSend(q)}
              className="shrink-0 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/15 transition-all text-xs"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="p-3 bg-white/[0.03] border-t border-white/10 flex items-center gap-2"
        >
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Ask Nova anything about Rithik..."
            className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#667eea] transition-colors"
          />
          <button
            type="submit"
            className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white flex items-center justify-center shadow-lg hover:opacity-90 active:scale-95 transition-all shrink-0"
          >
            <SendIcon fontSize="small" />
          </button>
        </form>

      </div>
    </div>
  );
};

export default AIAssistantModal;
