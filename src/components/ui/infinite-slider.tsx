import React, { useState, useEffect } from 'react';
import { cn } from '../../lib/utils';
import { useMotionValue, animate, motion } from 'framer-motion';
import useMeasure from 'react-use-measure';

type InfiniteSliderProps = {
  children: React.ReactNode;
  gap?: number;
  duration?: number;
  durationOnHover?: number;
  direction?: 'horizontal' | 'vertical';
  reverse?: boolean;
  isPaused?: boolean;
  manualNav?: number;
  className?: string;
};

export function InfiniteSlider({
  children,
  gap = 16,
  duration = 25,
  durationOnHover,
  direction = 'horizontal',
  reverse = false,
  isPaused = false,
  manualNav = 0,
  className,
}: InfiniteSliderProps) {
  const [currentDuration, setCurrentDuration] = useState(duration);
  const [ref, { width, height }] = useMeasure();
  const translation = useMotionValue(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [key, setKey] = useState(0);

  useEffect(() => {
    let controls;
    const size = direction === 'horizontal' ? width : height;
    
    // Safety check for width/height being 0 before calculating contentSize
    if (size <= 0) return;

    const contentSize = size + gap;
    const from = reverse ? -contentSize / 2 : 0;
    const to = reverse ? 0 : -contentSize / 2;

    if (isPaused) {
      return controls?.stop;
    }

    if (isTransitioning) {
      controls = animate(translation, [translation.get(), to], {
        ease: 'linear',
        duration:
          currentDuration * Math.abs((translation.get() - to) / contentSize),
        onComplete: () => {
          setIsTransitioning(false);
          setKey((prevKey) => prevKey + 1);
        },
      });
    } else {
      controls = animate(translation, [from, to], {
        ease: 'linear',
        duration: currentDuration,
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 0,
        onRepeat: () => {
          translation.set(from);
        },
      });
    }

    return controls?.stop;
  }, [
    key,
    translation,
    currentDuration,
    width,
    height,
    gap,
    isTransitioning,
    direction,
    reverse,
    isPaused,
  ]);

  // Dedicated Effect for Manual Navigation Nudges
  const lastNav = React.useRef(manualNav);
  useEffect(() => {
    if (manualNav === lastNav.current) return;
    
    const size = direction === 'horizontal' ? width : height;
    if (size <= 0) return;
    
    const contentSize = size + gap;
    const step = 300; // logo width + gap (approx)
    const directionMult = manualNav > lastNav.current ? -1 : 1;
    
    let newTarget = translation.get() + (directionMult * step);
    
    // Bounds check and loop-around for translation
    if (newTarget < -contentSize / 2) newTarget += contentSize / 2;
    if (newTarget > 0) newTarget -= contentSize / 2;

    animate(translation, newTarget, {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    });

    lastNav.current = manualNav;
  }, [manualNav, width, height, gap, direction, translation]);

  const hoverProps = durationOnHover
    ? {
        onHoverStart: () => {
          setIsTransitioning(true);
          setCurrentDuration(durationOnHover);
        },
        onHoverEnd: () => {
          setIsTransitioning(true);
          setCurrentDuration(duration);
        },
      }
    : {};

  return (
    <div className={cn('overflow-hidden', className)}>
      <motion.div
        className='flex w-max'
        style={{
          ...(direction === 'horizontal'
            ? { x: translation }
            : { y: translation }),
          gap: `${gap}px`,
          flexDirection: direction === 'horizontal' ? 'row' : 'column',
        }}
        ref={ref}
        {...hoverProps}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}
