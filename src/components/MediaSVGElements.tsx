/**
 * MediaSVGElements — Broadcast/Press identity SVG decorative elements
 * Pure SVG components for media-themed visual enhancements
 */
import { motion } from 'motion/react';

/* ─── Camera Viewfinder Frame ─── */
export function CameraViewfinder({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute inset-0 pointer-events-none z-20 ${className}`}>
      {/* Top-left corner bracket */}
      <svg className="absolute top-4 left-4 w-8 h-8 text-white/40" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M2 12V4a2 2 0 012-2h8" />
      </svg>
      {/* Top-right corner bracket */}
      <svg className="absolute top-4 right-4 w-8 h-8 text-white/40" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M30 12V4a2 2 0 00-2-2h-8" />
      </svg>
      {/* Bottom-left corner bracket */}
      <svg className="absolute bottom-4 left-4 w-8 h-8 text-white/40" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M2 20v8a2 2 0 002 2h8" />
      </svg>
      {/* Bottom-right corner bracket */}
      <svg className="absolute bottom-4 right-4 w-8 h-8 text-white/40" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M30 20v8a2 2 0 01-2 2h-8" />
      </svg>
      {/* Center crosshair */}
      <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 text-white/15" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1">
        <circle cx="20" cy="20" r="8" />
        <line x1="20" y1="8" x2="20" y2="14" />
        <line x1="20" y1="26" x2="20" y2="32" />
        <line x1="8" y1="20" x2="14" y2="20" />
        <line x1="26" y1="20" x2="32" y2="20" />
      </svg>
    </div>
  );
}

/* ─── Waveform / Equalizer Bars ─── */
export function WaveformBars({ className = '', barCount = 12 }: { className?: string; barCount?: number }) {
  return (
    <div className={`flex items-end gap-[3px] h-8 ${className}`} aria-hidden="true">
      {Array.from({ length: barCount }).map((_, i) => (
        <motion.div
          key={i}
          className="w-[3px] bg-brand/30 rounded-full"
          animate={{
            height: ['30%', `${40 + Math.random() * 60}%`, '30%'],
          }}
          transition={{
            duration: 1.2 + Math.random() * 0.8,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
            delay: i * 0.08,
          }}
          style={{ height: '30%' }}
        />
      ))}
    </div>
  );
}

/* ─── Broadcast Signal Arcs ─── */
export function SignalArcs({ className = '', size = 120 }: { className?: string; size?: number }) {
  return (
    <svg
      className={`text-brand/10 ${className}`}
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      aria-hidden="true"
    >
      <motion.path
        d="M60 90 C60 90, 30 75, 30 50"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: [0, 1, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeOut', delay: 0 }}
      />
      <motion.path
        d="M60 90 C60 90, 20 70, 20 35"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: [0, 0.8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeOut', delay: 0.3 }}
      />
      <motion.path
        d="M60 90 C60 90, 10 60, 10 20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: [0, 0.6, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeOut', delay: 0.6 }}
      />
      {/* Signal source dot */}
      <circle cx="60" cy="90" r="4" fill="currentColor" opacity="0.5" />
    </svg>
  );
}

/* ─── Microphone SVG Icon ─── */
export function MicrophoneIcon({ className = '', size = 48 }: { className?: string; size?: number }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
    >
      <rect x="18" y="4" width="12" height="24" rx="6" stroke="currentColor" strokeWidth="2" />
      <path d="M12 22c0 6.627 5.373 12 12 12s12-5.373 12-12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="24" y1="34" x2="24" y2="42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="18" y1="42" x2="30" y2="42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/* ─── Film Strip Decoration (horizontal divider) ─── */
export function FilmStripDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`w-full overflow-hidden ${className}`} aria-hidden="true">
      <div className="flex items-center h-6">
        {/* Film strip edge with perforations */}
        <div className="flex-1 h-full bg-white/5 border-y border-white/10 flex items-center">
          {Array.from({ length: 40 }).map((_, i) => (
            <div key={i} className="flex-shrink-0 w-4 h-3 mx-2 rounded-sm bg-white/5 border border-white/10" />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Broadcast Grid Pattern (background overlay) ─── */
export function BroadcastGrid({ className = '' }: { className?: string }) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className}`}
      aria-hidden="true"
      style={{
        backgroundImage: `
          linear-gradient(rgba(217,30,38,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(217,30,38,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }}
    />
  );
}

/* ─── News Ticker Line ─── */
export function TickerLine({ className = '' }: { className?: string }) {
  return (
    <div className={`w-full overflow-hidden h-px relative ${className}`} aria-hidden="true">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand/40 to-transparent" />
      <motion.div
        className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-transparent via-brand to-transparent"
        animate={{ x: ['-80px', 'calc(100vw + 80px)'] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'linear', repeatDelay: 2 }}
      />
    </div>
  );
}
