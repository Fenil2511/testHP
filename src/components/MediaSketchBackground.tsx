import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

interface MediaSketchBackgroundProps {
  className?: string;
  opacity?: number;
  src?: string;
  position?: 'right' | 'left';
  scale?: number;
  top?: string;
  blur?: boolean;
}

export function MediaSketchBackground({
  className = "",
  opacity = 0.4,
  src = "/illustrations/media_sketch_v1.png",
  position = 'right',
  scale = 1,
  top = "top-20",
  blur = false
}: MediaSketchBackgroundProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, position === 'right' ? 8 : -8]);

  const positionClasses = position === 'right' 
    ? "-right-20 md:right-[-5%]" 
    : "-left-20 md:left-[-5%]";

  const initialX = position === 'right' ? 100 : -100;

  return (
    <div ref={ref} className={`absolute inset-0 overflow-hidden pointer-events-none select-none ${className}`}>
      {/* Primary Sketch Illustration */}
      <motion.div 
        style={{ 
          y: y1, 
          rotate,
          scale: scale
        }}
        initial={{ opacity: 0, x: initialX }}
        animate={{ opacity, x: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className={`absolute ${top} w-[700px] md:w-[1000px] h-auto z-0 ${positionClasses}`}
      >
        <img 
          src={src} 
          alt="" 
          className={`w-full h-full object-contain filter contrast-125 saturate-150 brightness-95 ${blur ? 'blur-[4px]' : ''}`}
        />
      </motion.div>

      {/* Decorative Texture Overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-15 mix-blend-overlay"></div>
      
      {/* Subtle Gradient to ensure text readability */}
      <div className={`absolute inset-0 bg-gradient-to-r ${position === 'right' ? 'from-white via-white/30 to-transparent' : 'from-transparent via-white/30 to-white'}`}></div>
    </div>
  );
}
