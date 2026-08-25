import React from 'react';
import { useTheme, ACHIEVEMENTS_LIST } from '../context/ThemeContext';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CloseIcon from '@mui/icons-material/Close';

export const AchievementsToast = () => {
  const { recentAchievement } = useTheme();

  if (!recentAchievement) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[3000] max-w-[340px] bg-[#0e1122]/95 border-2 border-amber-400/80 rounded-2xl p-4 shadow-[0_10px_40px_rgba(255,215,0,0.3)] backdrop-blur-xl animate-bounce flex items-center gap-3.5 select-none">
      <div className="w-12 h-12 rounded-xl bg-amber-400/20 text-2xl flex items-center justify-center border border-amber-400/40 shrink-0">
        {recentAchievement.icon}
      </div>
      <div>
        <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-amber-400">
          🏆 Achievement Unlocked!
        </div>
        <h4 className="font-bold text-white text-sm">{recentAchievement.title}</h4>
        <p className="text-xs text-white/70 leading-tight mt-0.5">{recentAchievement.desc}</p>
      </div>
    </div>
  );
};

export const AchievementsModal = () => {
  const { achievementsOpen, setAchievementsOpen, achievements } = useTheme();

  if (!achievementsOpen) return null;

  const unlockedCount = achievements.length;
  const totalCount = ACHIEVEMENTS_LIST.length;
  const progressPercent = Math.round((unlockedCount / totalCount) * 100);

  return (
    <div className="fixed inset-0 z-[2500] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-[550px] max-h-[85vh] bg-[#0d1021]/95 border border-white/20 rounded-3xl p-6 shadow-2xl backdrop-blur-2xl flex flex-col">
        
        {/* Header */}
        <div className="flex justify-between items-start pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-400/20 text-amber-400 flex items-center justify-center">
              <EmojiEventsIcon />
            </div>
            <div>
              <h3 className="font-bold text-white text-lg">Gamified Badges & Trophies</h3>
              <p className="text-xs text-white/60">
                Unlocked {unlockedCount} of {totalCount} ({progressPercent}%)
              </p>
            </div>
          </div>
          <button
            onClick={() => setAchievementsOpen(false)}
            className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center text-white/70 hover:text-white"
          >
            <CloseIcon fontSize="small" />
          </button>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-white/10 h-2 rounded-full my-4 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-amber-400 to-amber-600 transition-all duration-500 rounded-full"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>

        {/* Badge list */}
        <div className="flex-1 overflow-y-auto space-y-3 pr-1">
          {ACHIEVEMENTS_LIST.map((ach) => {
            const isUnlocked = achievements.includes(ach.id);
            return (
              <div
                key={ach.id}
                className={`p-3.5 rounded-2xl border flex items-center gap-3.5 transition-all ${
                  isUnlocked
                    ? 'bg-white/10 border-amber-400/40 text-white'
                    : 'bg-white/[0.02] border-white/5 text-white/40 grayscale opacity-60'
                }`}
              >
                <div className="text-2xl w-10 h-10 rounded-xl bg-black/30 flex items-center justify-center shrink-0">
                  {ach.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-sm text-white">{ach.title}</h4>
                    <span className="text-[10px] font-mono uppercase tracking-wider font-bold">
                      {isUnlocked ? '✓ Unlocked' : 'Locked'}
                    </span>
                  </div>
                  <p className="text-xs opacity-75 mt-0.5">{ach.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AchievementsToast;
