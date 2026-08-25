import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { sound } from '../utils/soundFX';
import CloseIcon from '@mui/icons-material/Close';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import MemoryIcon from '@mui/icons-material/Memory';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import StorageIcon from '@mui/icons-material/Storage';
import SmartToyIcon from '@mui/icons-material/SmartToy';

export const ProjectSandboxModal = () => {
  const { sandboxProject, closeSandbox } = useTheme();

  if (!sandboxProject) return null;

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-black/80 backdrop-blur-lg animate-fadeIn">
      <div className="w-full max-w-[850px] max-h-[90vh] bg-[#0d1021]/95 border border-white/20 rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden backdrop-blur-2xl">
        
        {/* Modal Header */}
        <div className="p-5 bg-white/5 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 flex items-center justify-center font-mono font-bold">
              ⚡
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 font-mono font-bold uppercase tracking-wider">
                  Live Interactive Sandbox
                </span>
              </div>
              <h2 className="text-lg md:text-xl font-bold text-white tracking-wide mt-0.5">
                {sandboxProject.title}
              </h2>
            </div>
          </div>
          <button
            onClick={closeSandbox}
            className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center text-white/70 hover:text-white transition-colors"
          >
            <CloseIcon fontSize="small" />
          </button>
        </div>

        {/* Modal Content - Dynamic Sandbox depending on project */}
        <div className="flex-1 p-6 overflow-y-auto space-y-6 text-white text-sm">
          {sandboxProject.id === 1 && <AIExamPortalSandbox />}
          {sandboxProject.id === 2 && <FacultyWorkloadSandbox />}
          {sandboxProject.id === 3 && <OllamaAIChatSandbox />}
          {(sandboxProject.id > 3 || !sandboxProject.id) && <GenericPipelineSandbox project={sandboxProject} />}
        </div>
      </div>
    </div>
  );
};

// Sandbox 1: AI Exam Portal Generator & Automated Evaluation
const AIExamPortalSandbox = () => {
  const [topic, setTopic] = useState('AWS & Cloud Architecture');
  const [difficulty, setDifficulty] = useState('Intermediate');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedQuestion, setGeneratedQuestion] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [evaluationResult, setEvaluationResult] = useState(null);

  const mockQuestions = {
    'AWS & Cloud Architecture': {
      question: "Which AWS service is specifically designed to distribute incoming application traffic across multiple targets, such as EC2 instances in multiple AZs?",
      options: [
        "AWS Route 53 Traffic Flow",
        "Application Load Balancer (ALB)",
        "AWS Direct Connect",
        "Amazon CloudFront"
      ],
      correct: 1,
      explanation: "Application Load Balancer (ALB) operates at layer 7 to route traffic based on content and ensures high availability across multiple AZs."
    },
    'Data Structures & Algorithms': {
      question: "What is the worst-case time complexity of searching an element in a balanced Binary Search Tree (AVL Tree) with N nodes?",
      options: ["O(1)", "O(log N)", "O(N)", "O(N log N)"],
      correct: 1,
      explanation: "Because an AVL tree is strictly height-balanced, the maximum depth is O(log N), making both search and insertion O(log N) worst-case."
    },
    'DevOps & CI/CD': {
      question: "In a Docker multi-stage build, what is the primary architectural advantage?",
      options: [
        "Reduces overall container image size by discarding intermediate build tooling",
        "Increases container RAM allocation automatically",
        "Bypasses Linux kernel security checks",
        "Enables automatic Kubernetes autoscaling"
      ],
      correct: 0,
      explanation: "Multi-stage builds allow compiling in a heavy SDK image and copying only runtime artifacts into a lean alpine base, drastically reducing attack surface and size."
    }
  };

  const handleGenerate = () => {
    setIsGenerating(true);
    setGeneratedQuestion(null);
    setSelectedOption(null);
    setEvaluationResult(null);
    sound.playLaunch();

    setTimeout(() => {
      setIsGenerating(false);
      setGeneratedQuestion(mockQuestions[topic] || mockQuestions['AWS & Cloud Architecture']);
      sound.playBeep(650, 'sine', 0.1, 0.05);
    }, 900);
  };

  const handleEvaluate = (optionIndex) => {
    setSelectedOption(optionIndex);
    const isCorrect = optionIndex === generatedQuestion.correct;
    setEvaluationResult({
      isCorrect,
      score: isCorrect ? 100 : 0,
      feedback: isCorrect
        ? "✅ Correct! Automated GenAI evaluator awarded 10/10 points."
        : "❌ Incorrect. Automated GenAI evaluation feedback provided below."
    });
    if (isCorrect) sound.playSuccess();
    else sound.playBeep(220, 'sawtooth', 0.15, 0.04);
  };

  return (
    <div className="space-y-5">
      <div className="bg-white/5 p-4 rounded-2xl border border-white/10 flex flex-wrap gap-4 items-end">
        <div className="flex-1 min-w-[200px]">
          <label className="block text-xs font-semibold text-white/60 mb-1">Exam Subject / Topic</label>
          <select
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="w-full bg-black/40 border border-white/15 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-400"
          >
            <option value="AWS & Cloud Architecture">AWS & Cloud Architecture</option>
            <option value="Data Structures & Algorithms">Data Structures & Algorithms</option>
            <option value="DevOps & CI/CD">DevOps & CI/CD</option>
          </select>
        </div>

        <div className="w-[160px]">
          <label className="block text-xs font-semibold text-white/60 mb-1">AI Prompt Rigor</label>
          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            className="w-full bg-black/40 border border-white/15 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-400"
          >
            <option value="Standard">Standard</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced Pro</option>
          </select>
        </div>

        <button
          onClick={handleGenerate}
          disabled={isGenerating}
          className="px-5 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold flex items-center gap-2 hover:opacity-90 active:scale-95 disabled:opacity-50 transition-all shadow-lg"
        >
          {isGenerating ? (
            <span className="flex items-center gap-2">
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              Generating with AI...
            </span>
          ) : (
            <>
              <PlayArrowIcon fontSize="small" /> Generate Exam Question
            </>
          )}
        </button>
      </div>

      {generatedQuestion && (
        <div className="bg-white/5 p-5 rounded-2xl border border-white/15 space-y-4 animate-fadeIn">
          <div className="flex justify-between items-center text-xs text-white/50 border-b border-white/10 pb-2">
            <span>Generated Question (Real-time LLM Prompt)</span>
            <span className="bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full font-mono">
              Live Mock Evaluation Mode
            </span>
          </div>

          <h3 className="text-base font-semibold text-white leading-relaxed">
            {generatedQuestion.question}
          </h3>

          <div className="grid grid-cols-1 gap-2.5">
            {generatedQuestion.options.map((opt, idx) => {
              const isSelected = selectedOption === idx;
              return (
                <button
                  key={idx}
                  onClick={() => handleEvaluate(idx)}
                  className={`text-left p-3.5 rounded-xl border transition-all text-sm flex items-center justify-between ${
                    isSelected
                      ? idx === generatedQuestion.correct
                        ? 'bg-emerald-500/20 border-emerald-400 text-emerald-200'
                        : 'bg-rose-500/20 border-rose-400 text-rose-200'
                      : 'bg-black/30 border-white/10 hover:border-white/30 text-gray-200'
                  }`}
                >
                  <span>{String.fromCharCode(65 + idx)}. {opt}</span>
                  {isSelected && (
                    <span>{idx === generatedQuestion.correct ? '✓' : '✗'}</span>
                  )}
                </button>
              );
            })}
          </div>

          {evaluationResult && (
            <div className={`p-4 rounded-xl border mt-3 ${
              evaluationResult.isCorrect
                ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-300'
                : 'bg-rose-950/40 border-rose-500/40 text-rose-300'
            }`}>
              <div className="font-bold mb-1">{evaluationResult.feedback}</div>
              <p className="text-xs text-white/80 leading-relaxed mt-1">
                {generatedQuestion.explanation}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// Sandbox 2: Faculty Workload Prediction ML Simulator
const FacultyWorkloadSandbox = () => {
  const [courses, setCourses] = useState(3);
  const [students, setStudents] = useState(120);
  const [researchHours, setResearchHours] = useState(15);
  const [adminDuties, setAdminDuties] = useState(2);
  const [predictedWorkload, setPredictedWorkload] = useState(null);

  const calculateMLWorkload = () => {
    // Model inference calculation: W = 8*courses + 0.15*students + 1.2*research + 5*admin
    const score = courses * 8 + students * 0.16 + researchHours * 1.1 + adminDuties * 5.5;
    let status = 'Optimal';
    let color = 'text-emerald-400';
    if (score > 85) {
      status = 'Heavy Overload';
      color = 'text-rose-400';
    } else if (score > 65) {
      status = 'Moderate High';
      color = 'text-amber-400';
    }

    setPredictedWorkload({
      hours: Math.round(score),
      status,
      color,
      recommendation:
        score > 85
          ? 'Recommend assigning a Teaching Assistant or reducing administrative load by 1 committee.'
          : score > 65
          ? 'Balanced workload with moderate research bandwidth.'
          : 'Optimal capacity for new research mentorship or elective course.'
    });
    sound.playClick();
  };

  useEffect(() => {
    calculateMLWorkload();
  }, [courses, students, researchHours, adminDuties]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
      <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-4">
        <h3 className="text-sm font-bold text-white/80 uppercase tracking-wider">
          ML Feature Input Parameters
        </h3>

        <div>
          <div className="flex justify-between text-xs mb-1">
            <span>Course Sections Taught</span>
            <span className="font-mono text-cyan-300 font-bold">{courses} courses</span>
          </div>
          <input
            type="range"
            min="1"
            max="6"
            value={courses}
            onChange={(e) => setCourses(Number(e.target.value))}
            className="w-full accent-cyan-400 cursor-pointer"
          />
        </div>

        <div>
          <div className="flex justify-between text-xs mb-1">
            <span>Total Enrolled Students</span>
            <span className="font-mono text-cyan-300 font-bold">{students} students</span>
          </div>
          <input
            type="range"
            min="20"
            max="350"
            step="10"
            value={students}
            onChange={(e) => setStudents(Number(e.target.value))}
            className="w-full accent-cyan-400 cursor-pointer"
          />
        </div>

        <div>
          <div className="flex justify-between text-xs mb-1">
            <span>Weekly Research Hours</span>
            <span className="font-mono text-cyan-300 font-bold">{researchHours} hrs/wk</span>
          </div>
          <input
            type="range"
            min="0"
            max="40"
            value={researchHours}
            onChange={(e) => setResearchHours(Number(e.target.value))}
            className="w-full accent-cyan-400 cursor-pointer"
          />
        </div>

        <div>
          <div className="flex justify-between text-xs mb-1">
            <span>Administrative Committees</span>
            <span className="font-mono text-cyan-300 font-bold">{adminDuties} roles</span>
          </div>
          <input
            type="range"
            min="0"
            max="6"
            value={adminDuties}
            onChange={(e) => setAdminDuties(Number(e.target.value))}
            className="w-full accent-cyan-400 cursor-pointer"
          />
        </div>
      </div>

      {predictedWorkload && (
        <div className="bg-gradient-to-br from-white/10 to-white/5 p-6 rounded-2xl border border-white/15 flex flex-col items-center justify-center text-center space-y-3">
          <span className="text-xs uppercase tracking-widest text-white/50">
            TensorFlow Model Inference Output
          </span>
          <div className="text-5xl font-black font-mono text-white tracking-tight">
            {predictedWorkload.hours} <span className="text-lg text-white/50 font-normal">hrs/wk</span>
          </div>
          <div className={`text-sm font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-black/40 border border-white/10 ${predictedWorkload.color}`}>
            Status: {predictedWorkload.status}
          </div>
          <p className="text-xs text-white/70 max-w-[280px] leading-relaxed pt-2 border-t border-white/10">
            {predictedWorkload.recommendation}
          </p>
        </div>
      )}
    </div>
  );
};

// Sandbox 3: Ollama Local AI Chat Simulator
const OllamaAIChatSandbox = () => {
  const [prompt, setPrompt] = useState('Explain how containerization improves cloud deployment scalability.');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const runPrompt = () => {
    setLoading(true);
    setResponse('');
    sound.playLaunch();

    const fullResponse = `[Ollama / Llama3 8B Local Stream]: Containerization packages application code alongside all OS libraries, runtime dependencies, and configurations into lightweight immutable units. This guarantees identical execution across dev, test, and AWS EC2 production, enables sub-second autoscaling under traffic surges, and maximizes compute density over traditional virtual machines.`;

    let current = "";
    let i = 0;
    const interval = setInterval(() => {
      if (i < fullResponse.length) {
        current += fullResponse[i];
        setResponse(current);
        i += 3;
      } else {
        clearInterval(interval);
        setLoading(false);
        sound.playSuccess();
      }
    }, 20);
  };

  return (
    <div className="space-y-4">
      <div className="bg-white/5 p-4 rounded-2xl border border-white/10 space-y-3">
        <label className="block text-xs font-semibold text-white/60">
          Enter Prompt for Self-Hosted AI (Ollama + Flask Backend)
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="flex-1 bg-black/40 border border-white/15 rounded-xl px-3.5 py-2 text-white focus:outline-none focus:border-cyan-400 text-sm"
          />
          <button
            onClick={runPrompt}
            disabled={loading}
            className="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 font-bold text-white flex items-center gap-1.5 transition-all disabled:opacity-50"
          >
            <PlayArrowIcon fontSize="small" /> Run Inference
          </button>
        </div>
      </div>

      <div className="bg-black/50 p-4 rounded-2xl border border-white/10 font-mono text-xs text-emerald-400 min-h-[140px] leading-relaxed whitespace-pre-wrap">
        {response || (loading ? 'Generating local tokens with Ollama...' : 'Click "Run Inference" to execute the local LLM query.')}
      </div>
    </div>
  );
};

// Generic Sandbox: AWS CI/CD Pipeline Simulator
const GenericPipelineSandbox = ({ project }) => {
  const [stage, setStage] = useState(0);
  const [running, setRunning] = useState(false);

  const stages = [
    { title: "Git Push to Main", desc: "Webhook triggered on GitHub repository commit", icon: "📦" },
    { title: "Jenkins Build & Unit Tests", desc: "Running test suites in isolated runner container", icon: "⚙️" },
    { title: "Docker Containerization", desc: "Building lean multi-stage production image", icon: "🐳" },
    { title: "AWS EC2 Deployment", desc: "Rolling deploy behind ALB with health checks", icon: "☁️" }
  ];

  const triggerPipeline = () => {
    setRunning(true);
    setStage(0);
    sound.playLaunch();

    let currentStage = 0;
    const stepInterval = setInterval(() => {
      currentStage++;
      if (currentStage <= 4) {
        setStage(currentStage);
        sound.playBeep(500 + currentStage * 100, 'sine', 0.1, 0.04);
      } else {
        clearInterval(stepInterval);
        setRunning(false);
        sound.playSuccess();
      }
    }, 1000);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center bg-white/5 p-4 rounded-2xl border border-white/10">
        <div>
          <h4 className="font-bold text-white">{project?.title || 'AWS CI/CD Pipeline'}</h4>
          <p className="text-xs text-white/60">Simulate automated deployment workflow</p>
        </div>
        <button
          onClick={triggerPipeline}
          disabled={running}
          className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 font-bold text-white flex items-center gap-1.5 hover:opacity-90 disabled:opacity-50 transition-all shadow-lg"
        >
          <PlayArrowIcon fontSize="small" />
          {running ? 'Pipeline Running...' : 'Trigger Pipeline Run'}
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {stages.map((s, idx) => {
          const isDone = stage > idx;
          const isCurrent = stage === idx + 1 && running;

          return (
            <div
              key={idx}
              className={`p-4 rounded-2xl border transition-all ${
                isDone
                  ? 'bg-emerald-950/40 border-emerald-500/50 text-emerald-200'
                  : isCurrent
                  ? 'bg-cyan-950/50 border-cyan-400 text-cyan-200 animate-pulse'
                  : 'bg-white/5 border-white/10 text-white/50'
              }`}
            >
              <div className="text-2xl mb-2">{s.icon}</div>
              <div className="text-xs font-mono font-bold uppercase mb-1">
                Stage 0{idx + 1}
              </div>
              <div className="font-bold text-sm text-white mb-1">{s.title}</div>
              <p className="text-xs opacity-75">{s.desc}</p>
              {isDone && (
                <div className="mt-2 text-xs font-mono text-emerald-400 flex items-center gap-1">
                  ✓ Passed (100% OK)
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectSandboxModal;
