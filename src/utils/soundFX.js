// Web Audio API Synthesizer for Sci-Fi UI sound effects
// Lightweight, zero external dependencies

class SoundFX {
  constructor() {
    this.ctx = null;
    this.muted = false;
  }

  init() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
  }

  setMuted(muted) {
    this.muted = muted;
  }

  isMuted() {
    return this.muted;
  }

  playBeep(freq = 440, type = 'sine', duration = 0.08, volume = 0.05) {
    if (this.muted) return;
    try {
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      gain.gain.setValueAtTime(volume, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      // Audio autoplay policy catch
    }
  }

  playHover() {
    this.playBeep(520, 'sine', 0.04, 0.02);
  }

  playClick() {
    this.playBeep(880, 'triangle', 0.06, 0.04);
  }

  playKeypress() {
    const freqs = [350, 420, 490, 560, 630];
    const randFreq = freqs[Math.floor(Math.random() * freqs.length)];
    this.playBeep(randFreq, 'square', 0.03, 0.015);
  }

  playSuccess() {
    if (this.muted) return;
    try {
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }

      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        setTimeout(() => {
          this.playBeep(freq, 'sine', 0.15, 0.04);
        }, idx * 60);
      });
    } catch (e) {}
  }

  playLaunch() {
    if (this.muted) return;
    try {
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(200, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(800, this.ctx.currentTime + 0.25);

      gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.25);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.25);
    } catch (e) {}
  }

  playEasterEgg() {
    if (this.muted) return;
    try {
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }

      const fanfare = [
        { f: 523.25, d: 0.1 },
        { f: 523.25, d: 0.1 },
        { f: 523.25, d: 0.1 },
        { f: 659.25, d: 0.2 },
        { f: 587.33, d: 0.1 },
        { f: 659.25, d: 0.1 },
        { f: 783.99, d: 0.3 }
      ];
      let delay = 0;
      fanfare.forEach((n) => {
        setTimeout(() => {
          this.playBeep(n.f, 'triangle', n.d, 0.05);
        }, delay);
        delay += (n.d * 1000) + 20;
      });
    } catch (e) {}
  }
}

export const sound = new SoundFX();
