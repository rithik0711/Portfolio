import React, { createContext, useContext, useState, useEffect } from 'react';
import { sound } from '../utils/soundFX';

export const THEMES = {
  cyber: {
    id: 'cyber',
    name: 'Cyber Violet',
    accent: '#667eea',
    secondary: '#764ba2',
    highlight: '#ff0844',
    particleColor: 'rgba(102, 126, 234, 0.8)',
    bgGradient: 'from-[#0f0c29] via-[#302b63] to-[#24243e]',
    cardBg: 'bg-[#1a1f3c]/40',
    borderGlow: 'border-[#667eea]/30',
    terminalPrompt: 'text-[#667eea]'
  },
  matrix: {
    id: 'matrix',
    name: 'Matrix Neon',
    accent: '#00ff66',
    secondary: '#008f11',
    highlight: '#00ffcc',
    particleColor: 'rgba(0, 255, 102, 0.8)',
    bgGradient: 'from-[#031109] via-[#051c0f] to-[#010905]',
    cardBg: 'bg-[#042111]/40',
    borderGlow: 'border-[#00ff66]/30',
    terminalPrompt: 'text-[#00ff66]'
  },
  aurora: {
    id: 'aurora',
    name: 'Aurora Borealis',
    accent: '#00f2fe',
    secondary: '#4facfe',
    highlight: '#43e97b',
    particleColor: 'rgba(0, 242, 254, 0.8)',
    bgGradient: 'from-[#051923] via-[#003554] to-[#051923]',
    cardBg: 'bg-[#002b42]/40',
    borderGlow: 'border-[#00f2fe]/30',
    terminalPrompt: 'text-[#00f2fe]'
  },
  synthwave: {
    id: 'synthwave',
    name: 'Synthwave Sunset',
    accent: '#ff007f',
    secondary: '#7928ca',
    highlight: '#ffbd39',
    particleColor: 'rgba(255, 0, 127, 0.8)',
    bgGradient: 'from-[#1e0826] via-[#2d0c3d] to-[#12031a]',
    cardBg: 'bg-[#290c38]/40',
    borderGlow: 'border-[#ff007f]/30',
    terminalPrompt: 'text-[#ff007f]'
  },
  obsidian: {
    id: 'obsidian',
    name: 'Obsidian Gold',
    accent: '#ffd700',
    secondary: '#ffa500',
    highlight: '#00e5ff',
    particleColor: 'rgba(255, 215, 0, 0.8)',
    bgGradient: 'from-[#0a0a0a] via-[#141414] to-[#0d0d0d]',
    cardBg: 'bg-[#171717]/60',
    borderGlow: 'border-[#ffd700]/30',
    terminalPrompt: 'text-[#ffd700]'
  }
};

export const ACHIEVEMENTS_LIST = [
  { id: 'first_visit', title: 'System Initialized', desc: 'Loaded RithSys Portfolio interface', icon: '🚀' },
  { id: 'arch_explored', title: 'Cloud Architect', desc: 'Inspected Technical Cloud Architectures', icon: '☁️' },
  { id: 'blueprint_opened', title: 'Blueprint Engineer', desc: 'Analyzed System Architecture Blueprints', icon: '📐' },
  { id: 'sandbox_played', title: 'Sandbox Architect', desc: 'Ran an interactive project simulation', icon: '⚡' },
  { id: 'theme_switched', title: 'Chameleon', desc: 'Customized the portfolio cyber theme', icon: '🎨' },
  { id: 'skills_inspected', title: 'Tech Stack Inspector', desc: 'Filtered and examined technical proficiencies', icon: '🔍' },
  { id: 'sound_toggled', title: 'Audio Synthesizer', desc: 'Toggled cyber audio sound FX', icon: '🔊' },
  { id: 'konami_code', title: 'Secret Overclock', desc: 'Unlocked the legendary Konami easter egg', icon: '👑' }
];

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('cyber');
  const [soundMuted, setSoundMuted] = useState(false);
  const [sandboxProject, setSandboxProject] = useState(null); // project object or null
  const [achievements, setAchievements] = useState(['first_visit']);
  const [recentAchievement, setRecentAchievement] = useState(null);
  const [achievementsOpen, setAchievementsOpen] = useState(false);

  useEffect(() => {
    sound.setMuted(soundMuted);
  }, [soundMuted]);

  const unlockAchievement = (id) => {
    if (!achievements.includes(id)) {
      setAchievements((prev) => [...prev, id]);
      const achObj = ACHIEVEMENTS_LIST.find((a) => a.id === id);
      if (achObj) {
        setRecentAchievement(achObj);
        sound.playSuccess();
        setTimeout(() => setRecentAchievement(null), 4500);
      }
    }
  };

  const changeTheme = (themeKey) => {
    if (THEMES[themeKey]) {
      setCurrentTheme(themeKey);
      unlockAchievement('theme_switched');
      sound.playClick();
    }
  };

  const toggleSound = () => {
    const nextState = !soundMuted;
    setSoundMuted(nextState);
    sound.setMuted(nextState);
    if (!nextState) {
      sound.playBeep(600, 'sine', 0.1, 0.05);
    }
    unlockAchievement('sound_toggled');
  };

  const openSandbox = (project) => {
    setSandboxProject(project);
    unlockAchievement('sandbox_played');
    sound.playLaunch();
  };

  const closeSandbox = () => {
    setSandboxProject(null);
    sound.playClick();
  };

  // Global Konami code listener
  useEffect(() => {
    const konamiSequence = [
      'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
      'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
      'b', 'a'
    ];
    let konamiIndex = 0;

    const handleKeyDown = (e) => {
      const key = e.key;
      const expectedKey = konamiSequence[konamiIndex];
      if (key && key.toLowerCase() === expectedKey.toLowerCase()) {
        konamiIndex++;
        if (konamiIndex === konamiSequence.length) {
          unlockAchievement('konami_code');
          sound.playEasterEgg();
          changeTheme('synthwave');
          konamiIndex = 0;
        }
      } else {
        konamiIndex = 0;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [achievements]);

  return (
    <ThemeContext.Provider
      value={{
        theme: THEMES[currentTheme],
        currentThemeKey: currentTheme,
        changeTheme,
        soundMuted,
        toggleSound,
        sandboxProject,
        openSandbox,
        closeSandbox,
        achievements,
        unlockAchievement,
        recentAchievement,
        achievementsOpen,
        setAchievementsOpen
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
