/**
 * MediaOverlays — Broadcast-style visual effect overlays
 * Scanlines, grain texture, corner broadcast frame, screen glow
 */

/* ─── Scan Lines Overlay ─── */
export function ScanLines({ className = '', opacity = 0.03 }: { className?: string; opacity?: number }) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none z-30 ${className}`}
      aria-hidden="true"
      style={{
        backgroundImage: `repeating-linear-gradient(
          0deg,
          transparent,
          transparent 2px,
          rgba(0,0,0,${opacity}) 2px,
          rgba(0,0,0,${opacity}) 4px
        )`,
      }}
    />
  );
}

/* ─── Film Grain / Noise Texture ─── */
export function GrainTexture({ className = '' }: { className?: string }) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none z-30 opacity-[0.035] mix-blend-overlay ${className}`}
      aria-hidden="true"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
        backgroundSize: '128px 128px',
      }}
    />
  );
}

/* ─── Corner Broadcast Frame (REC-style corner overlay) ─── */
export function BroadcastCorner({ 
  className = '', 
  label = 'REC',
  showTimecode = true
}: { 
  className?: string; 
  label?: string;
  showTimecode?: boolean;
}) {
  return (
    <div className={`absolute inset-0 pointer-events-none z-20 ${className}`} aria-hidden="true">
      {/* Top-right REC indicator */}
      <div className="absolute top-6 right-6 flex items-center gap-2">
        <span className="relative flex h-2.5 w-2.5">
          <span className="media-pulse-dot absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500" />
        </span>
        <span className="text-red-400/60 text-[10px] font-mono font-bold tracking-wider">{label}</span>
      </div>
      
      {/* Bottom-left timecode */}
      {showTimecode && (
        <div className="absolute bottom-6 left-6">
          <span className="text-white/20 text-[10px] font-mono tracking-wider">
            TC 00:00:00:00
          </span>
        </div>
      )}
    </div>
  );
}

/* ─── Screen Edge Glow ─── */
export function ScreenGlow({ className = '' }: { className?: string }) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none z-10 ${className}`}
      aria-hidden="true"
      style={{
        boxShadow: 'inset 0 0 120px rgba(217,30,38,0.03), inset 0 0 60px rgba(217,30,38,0.02)',
      }}
    />
  );
}
