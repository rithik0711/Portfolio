import React, { useEffect, useState, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

export const CyberCursor = () => {
  const { theme } = useTheme();
  const [isMoving, setIsMoving] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorDotRef = useRef(null);
  const cursorRingRef = useRef(null);
  const cursorTrailRef = useRef(null);

  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const moveTimeout = useRef(null);
  const animationFrameId = useRef(null);

  useEffect(() => {
    // Check if device has fine pointer (mouse), disable on touchscreens
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const handleMouseMove = (e) => {
      if (!isVisible) setIsVisible(true);
      mousePos.current = { x: e.clientX, y: e.clientY };

      // Set moving state
      setIsMoving(true);
      if (moveTimeout.current) clearTimeout(moveTimeout.current);
      moveTimeout.current = setTimeout(() => {
        setIsMoving(false);
      }, 120);

      // Check if hovering over clickable / interactive elements
      const target = e.target;
      const isInteractive = target && (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.tagName === 'SELECT' ||
        target.closest('button') ||
        target.closest('a') ||
        target.getAttribute('role') === 'button' ||
        target.classList.contains('cursor-pointer') ||
        window.getComputedStyle(target).cursor === 'pointer'
      );
      setIsHovering(Boolean(isInteractive));
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Smooth lerp loop for the trailing ring
    const renderLoop = () => {
      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0)`;
      }

      if (cursorRingRef.current) {
        // Interpolate ring position
        const speed = isMoving ? 0.28 : 0.18;
        ringPos.current.x += (mousePos.current.x - ringPos.current.x) * speed;
        ringPos.current.y += (mousePos.current.y - ringPos.current.y) * speed;

        cursorRingRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      animationFrameId.current = requestAnimationFrame(renderLoop);
    };

    renderLoop();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (moveTimeout.current) clearTimeout(moveTimeout.current);
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
    };
  }, [isVisible, isMoving]);

  if (!isVisible) return null;

  return (
    <>
      {/* Central Sharp Dot / Reticle Core */}
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 will-change-transform"
        style={{ color: theme.accent }}
      >
        <div
          className={`transition-all duration-200 rounded-full flex items-center justify-center ${
            isClicking
              ? 'w-2 h-2 scale-75'
              : isMoving
              ? 'w-3 h-3 scale-125 rotate-45'
              : 'w-2 h-2'
          }`}
          style={{
            backgroundColor: theme.accent,
            boxShadow: `0 0 10px ${theme.accent}, 0 0 20px ${theme.accent}`
          }}
        >
          {/* Futuristic crosshair tick when moving */}
          {isMoving && (
            <div className="absolute inset-[-4px] border border-white/50 rounded-full animate-spin [animation-duration:1s]"></div>
          )}
        </div>
      </div>

      {/* Outer Trailing Halo / Morphing Reticle */}
      <div
        ref={cursorRingRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 will-change-transform"
      >
        <div
          className={`rounded-full transition-all duration-200 flex items-center justify-center ${
            isClicking
              ? 'w-7 h-7 scale-90 border-2'
              : isHovering
              ? 'w-14 h-14 scale-110 border-2 bg-white/[0.05] backdrop-blur-[2px]'
              : isMoving
              ? 'w-10 h-10 scale-125 border-[1.5px] border-dashed animate-[spin_4s_linear_infinite]'
              : 'w-8 h-8 scale-100 border'
          }`}
          style={{
            borderColor: isHovering ? theme.highlight : theme.accent,
            boxShadow: isHovering
              ? `0 0 15px ${theme.highlight}80, inset 0 0 10px ${theme.highlight}30`
              : isMoving
              ? `0 0 12px ${theme.accent}60`
              : `0 0 6px ${theme.accent}40`
          }}
        >
          {/* Cyber compass ticks on movement */}
          {isMoving && (
            <>
              <span
                className="absolute -top-1 w-1 h-1 rounded-full"
                style={{ backgroundColor: theme.accent }}
              />
              <span
                className="absolute -bottom-1 w-1 h-1 rounded-full"
                style={{ backgroundColor: theme.accent }}
              />
              <span
                className="absolute -left-1 w-1 h-1 rounded-full"
                style={{ backgroundColor: theme.accent }}
              />
              <span
                className="absolute -right-1 w-1 h-1 rounded-full"
                style={{ backgroundColor: theme.accent }}
              />
            </>
          )}

          {/* Hover pulse icon indicator */}
          {isHovering && (
            <span
              className="text-[8px] font-mono font-bold tracking-tighter uppercase select-none opacity-80"
              style={{ color: theme.highlight }}
            >
              TAP
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default CyberCursor;
