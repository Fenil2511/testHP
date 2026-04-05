/**
 * BroadcastBadge — Media identity badge with pulsing live indicator
 * Variants: live, press, media, broadcast, featured, on-air
 */
import { cn } from '../lib/utils';

type BadgeVariant = 'live' | 'press' | 'media' | 'broadcast' | 'featured' | 'on-air';

interface BroadcastBadgeProps {
  variant?: BadgeVariant;
  className?: string;
  size?: 'sm' | 'md';
}

const variantConfig: Record<BadgeVariant, { label: string; showPulse: boolean }> = {
  'live':      { label: 'LIVE',      showPulse: true },
  'press':     { label: 'PRESS',     showPulse: false },
  'media':     { label: 'MEDIA',     showPulse: false },
  'broadcast': { label: 'BROADCAST', showPulse: true },
  'featured':  { label: 'FEATURED',  showPulse: false },
  'on-air':    { label: 'ON AIR',    showPulse: true },
};

export function BroadcastBadge({ variant = 'live', className = '', size = 'sm' }: BroadcastBadgeProps) {
  const config = variantConfig[variant];

  return (
    <div
      className={cn(
        'inline-flex items-center gap-2 font-bold uppercase tracking-[0.25em] border rounded-full backdrop-blur-md',
        size === 'sm' 
          ? 'px-3 py-1.5 text-[9px]' 
          : 'px-4 py-2 text-[10px]',
        'bg-brand/10 border-brand/30 text-brand-light',
        className
      )}
      aria-label={config.label}
    >
      {config.showPulse && (
        <span className="relative flex h-2 w-2">
          <span className="media-pulse-dot absolute inline-flex h-full w-full rounded-full bg-brand opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-brand" />
        </span>
      )}
      {!config.showPulse && (
        <span className="inline-flex rounded-full h-1.5 w-1.5 bg-brand/60" />
      )}
      {config.label}
    </div>
  );
}
