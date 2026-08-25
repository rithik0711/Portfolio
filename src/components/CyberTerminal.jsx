import React, { useState, useEffect, useRef } from 'react';
import { useTheme, THEMES } from '../context/ThemeContext';
import { sound } from '../utils/soundFX';

export const CyberTerminal = () => {
  const {
    terminalOpen,
    toggleTerminal,
    theme,
    changeTheme,
    unlockAchievement,
    openSandbox
  } = useTheme();

  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    { type: 'sys', text: '╔═════════════════════════════════════════════════════════════════╗' },
    { type: 'sys', text: '║   RITHSYS OS v3.8.4-PROD (x86_64-cloud-linux-gnu)               ║' },
    { type: 'sys', text: '║   Developer: Rithikeswaran M | Cloud & Full-Stack Engineer      ║' },
    { type: 'sys', text: '╚═════════════════════════════════════════════════════════════════╝' },
    { type: 'info', text: 'Type "help" to view all available commands or "neofetch" for system telemetry.' }
  ]);
  const [cmdHistory, setCmdHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isMatrixMode, setIsMatrixMode] = useState(false);

  const inputRef = useRef(null);
  const terminalBodyRef = useRef(null);

  useEffect(() => {
    if (terminalOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [terminalOpen]);

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (rawCmd) => {
    const cmd = rawCmd.trim();
    if (!cmd) return;

    sound.playClick();
    setCmdHistory((prev) => [...prev, cmd]);
    setHistoryIndex(-1);

    const newHistory = [...history, { type: 'prompt', text: `rithik@cloud-sys:~$ ${cmd}` }];
    const parts = cmd.split(' ');
    const mainCmd = parts[0].toLowerCase();
    const arg = parts.slice(1).join(' ').toLowerCase();

    switch (mainCmd) {
      case 'help':
        newHistory.push({
          type: 'output',
          text: `AVAILABLE COMMANDS:
  • neofetch / fetch       - Display developer & architecture telemetry
  • projects / ls          - List featured cloud & AI projects
  • sandbox <1|2|3>        - Launch interactive project simulation
  • skills                 - Display technical stack & proficiencies
  • tech                   - View cloud architecture implementations
  • certs                  - Show verified professional certifications
  • contact / hire         - Display direct contact channels & resume link
  • cat resume             - Open resume download
  • theme <name>           - Change theme: cyber, matrix, aurora, synthwave, obsidian
  • matrix                 - Toggle visual matrix stream mode
  • game                   - Play terminal cyber security challenge
  • quote                  - Get an engineer inspiration quote
  • clear / cls            - Clear terminal screen
  • exit / quit            - Close terminal session`
        });
        break;

      case 'neofetch':
      case 'fetch':
      case 'sysinfo':
        newHistory.push({
          type: 'output',
          text: `
      .---.          rithik@cloud-sys
     /     \\         ----------------
    | () () |        OS: Cloud Linux / AWS EC2 Ubuntu 24.04 LTS
     \\  -  /         Host: Bannari Amman Institute of Tech (B.Tech IT)
      \`---\`          Kernel: React 18.3 / Node.js 20 / Vite 6.0
                     Role: Aspiring Cloud & DevOps Engineer
                     Focus: AWS Cloud, CI/CD, Containerization, GenAI
                     Uptime: 2023 - 2027 (4th Year)
                     Packages: 15+ Modern Dev Tools
                     Memory: 100% Dedicated to Scalable Architecture`
        });
        break;

      case 'projects':
      case 'ls':
        newHistory.push({
          type: 'output',
          text: `FEATURED PROJECTS:
[1] AI Exam Portal (GenAI, React, Node.js, SQL) -> Secure automated AI questions & grading.
[2] Faculty Workload Prediction (ML, TensorFlow, Python) -> Predicts workload using predictive models.
[3] Self-Hosted AI Chat (Flask, Ollama, React) -> Local offline privacy-first LLM chat.

👉 Tip: Type "sandbox 1", "sandbox 2", or "sandbox 3" to launch live simulations!`
        });
        break;

      case 'sandbox':
        if (arg === '1') {
          openSandbox({ id: 1, title: "AI Exam Portal", category: "GEN AI" });
          newHistory.push({ type: 'success', text: '🚀 Launching AI Exam Portal live interactive sandbox...' });
        } else if (arg === '2') {
          openSandbox({ id: 2, title: "Faculty Workload Prediction System", category: "MACHINE LEARNING" });
          newHistory.push({ type: 'success', text: '🚀 Launching Faculty Workload live interactive calculator...' });
        } else if (arg === '3') {
          openSandbox({ id: 3, title: "Self-Hosted AI Chat Application", category: "Gen AI" });
          newHistory.push({ type: 'success', text: '🚀 Launching Ollama AI Chat live sandbox...' });
        } else {
          newHistory.push({ type: 'error', text: 'Usage: sandbox <1|2|3>' });
        }
        break;

      case 'skills':
        newHistory.push({
          type: 'output',
          text: `TECHNICAL PROFICIENCIES:
• Languages: Java, Python, C, SQL, JavaScript
• Cloud & DevOps: AWS (EC2, S3, RDS, VPC, IAM), Docker, Jenkins, GitHub Actions
• Web & Frameworks: React, Node.js, Express, Flask, TailwindCSS, MongoDB
• Domains: Cloud Architecture, CI/CD Automations, LLMs/GenAI Workflows`
        });
        unlockAchievement('skills_inspected');
        break;

      case 'tech':
        newHistory.push({
          type: 'output',
          text: `CLOUD & DEVOPS IMPLEMENTATIONS:
1. Automated CI/CD Pipeline on AWS EC2 (Jenkins, Docker, GitHub, Linux)
2. High Availability Auto-Scaling AWS Cluster behind ALB
3. Full-Stack Secure VPC Multi-tier Deployment with RDS & S3
4. Autonomous n8n AI Workflow for automated video summarization`
        });
        break;

      case 'certs':
      case 'certifications':
        newHistory.push({
          type: 'output',
          text: `VERIFIED CERTIFICATIONS:
• Cisco: CCNA (Introduction to Networking) & Python Programming
• Oracle Cloud: OCI Foundations Associate
• NPTEL: Machine Learning Fundamentals & Ethical Hacking & Java OOP
• Google / Coursera: Introduction to AI & LLMs`
        });
        break;

      case 'contact':
      case 'hire':
        newHistory.push({
          type: 'output',
          text: `CONNECT WITH RITHIKESWARAN:
• Email: rithikeswaran0711@gmail.com
• Phone: +91 9344681476
• LinkedIn: https://www.linkedin.com/in/rithikeswaran-m-27287328b/
• GitHub: https://github.com/rithik0711
• LeetCode: https://leetcode.com/u/rithikeswaran_m/`
        });
        break;

      case 'cat':
        if (arg.includes('resume')) {
          window.open('/images/Rithikeswaran - resume.pdf', '_blank');
          newHistory.push({ type: 'success', text: '📄 Opening resume in new tab...' });
        } else {
          newHistory.push({ type: 'error', text: `cat: ${arg || 'file'}: No such file. Try "cat resume".` });
        }
        break;

      case 'theme':
        if (THEMES[arg]) {
          changeTheme(arg);
          newHistory.push({ type: 'success', text: `✨ Theme updated to: ${THEMES[arg].name}` });
        } else {
          newHistory.push({
            type: 'error',
            text: `Invalid theme. Choose from: ${Object.keys(THEMES).join(', ')}`
          });
        }
        break;

      case 'matrix':
        setIsMatrixMode((prev) => !prev);
        newHistory.push({ type: 'success', text: '🟢 Matrix stream mode toggled.' });
        break;

      case 'quote':
        const quotes = [
          '"Cloud is about how you do computing, not where you do computing." - Paul Maritz',
          '"First, solve the problem. Then, write the code." - John Johnson',
          '"Simplicity is prerequisite for reliability." - Edsger W. Dijkstra',
          '"Any fool can write code that a computer can understand. Good programmers write code that humans can understand." - Martin Fowler'
        ];
        newHistory.push({ type: 'info', text: quotes[Math.floor(Math.random() * quotes.length)] });
        break;

      case 'game':
        newHistory.push({
          type: 'info',
          text: '🔐 CYBER CHALLENGE: Decode the flag: "Q2xvdWRFbmdpbmVlcjIwMjY=" (Hint: Base64 decode it!)'
        });
        break;

      case 'sudo':
        newHistory.push({ type: 'error', text: 'User is not in the sudoers file. This incident will be reported to Rithik!' });
        break;

      case 'clear':
      case 'cls':
        setHistory([]);
        setInputVal('');
        return;

      case 'exit':
      case 'quit':
        toggleTerminal(false);
        return;

      default:
        newHistory.push({
          type: 'error',
          text: `Command not recognized: "${cmd}". Type "help" for a list of commands.`
        });
        break;
    }

    setHistory(newHistory);
    setInputVal('');
  };

  const handleKeyDown = (e) => {
    sound.playKeypress();
    if (e.key === 'Enter') {
      handleCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cmdHistory.length > 0) {
        const nextIdx = historyIndex === -1 ? cmdHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(nextIdx);
        setInputVal(cmdHistory[nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const nextIdx = historyIndex + 1;
        if (nextIdx < cmdHistory.length) {
          setHistoryIndex(nextIdx);
          setInputVal(cmdHistory[nextIdx]);
        } else {
          setHistoryIndex(-1);
          setInputVal('');
        }
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const commands = ['help', 'neofetch', 'projects', 'skills', 'tech', 'certs', 'contact', 'theme', 'clear', 'cat resume', 'sandbox', 'matrix', 'game', 'quote'];
      const match = commands.find((c) => c.startsWith(inputVal.toLowerCase()));
      if (match) setInputVal(match);
    }
  };

  if (!terminalOpen) return null;

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-[850px] h-[550px] bg-[#0c0d14]/95 border border-white/20 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden backdrop-blur-xl relative">
        
        {/* Terminal Header */}
        <div className="h-10 bg-white/5 border-b border-white/10 px-4 flex items-center justify-between select-none">
          <div className="flex items-center gap-2">
            <button
              onClick={() => toggleTerminal(false)}
              className="w-3.5 h-3.5 rounded-full bg-red-500 hover:opacity-80 transition-opacity"
            />
            <button
              onClick={() => setHistory([])}
              className="w-3.5 h-3.5 rounded-full bg-yellow-500 hover:opacity-80 transition-opacity"
            />
            <button
              onClick={() => handleCommand('help')}
              className="w-3.5 h-3.5 rounded-full bg-green-500 hover:opacity-80 transition-opacity"
            />
            <span className="ml-3 text-xs font-mono text-white/60 tracking-wider">
              rithik@cloud-sys:~ (RithSys Terminal CLI)
            </span>
          </div>
          <div className="text-[11px] font-mono text-white/40 hidden sm:block">
            Press <span className="text-white/70 font-bold">`</span> or <span className="text-white/70 font-bold">Esc</span> to close
          </div>
        </div>

        {/* Terminal Body */}
        <div
          ref={terminalBodyRef}
          className={`flex-1 p-4 font-mono text-sm overflow-y-auto space-y-2 select-text ${
            isMatrixMode ? 'text-green-400 bg-[#020d06]/90' : 'text-gray-200'
          }`}
        >
          {history.map((item, i) => (
            <div key={i} className="leading-relaxed whitespace-pre-wrap">
              {item.type === 'prompt' && (
                <span className={`${theme.terminalPrompt} font-bold`}>{item.text}</span>
              )}
              {item.type === 'sys' && <span className="text-cyan-400 opacity-90">{item.text}</span>}
              {item.type === 'info' && <span className="text-blue-300">{item.text}</span>}
              {item.type === 'success' && <span className="text-emerald-400">{item.text}</span>}
              {item.type === 'error' && <span className="text-rose-400">{item.text}</span>}
              {item.type === 'output' && <span className="text-gray-300">{item.text}</span>}
            </div>
          ))}

          {/* Prompt line */}
          <div className="flex items-center gap-2 pt-1">
            <span className={`${theme.terminalPrompt} font-bold select-none`}>
              rithik@cloud-sys:~$
            </span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent border-none outline-none text-white font-mono text-sm caret-white"
              autoFocus
              spellCheck="false"
              autoComplete="off"
            />
          </div>
        </div>

        {/* Quick Command Suggestions Footer */}
        <div className="bg-black/40 border-t border-white/5 px-4 py-2 flex flex-wrap items-center gap-2 text-xs font-mono">
          <span className="text-white/40">Quick tags:</span>
          {['help', 'neofetch', 'projects', 'skills', 'tech', 'sandbox 1', 'theme matrix', 'clear'].map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleCommand(cmd)}
              className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-white/70 hover:bg-white/15 hover:text-white transition-colors"
            >
              {cmd}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CyberTerminal;
