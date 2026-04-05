import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
/* ── Media Identity ── */
import { MicrophoneIcon, WaveformBars } from './MediaSVGElements';

const testimonials = [
  {
    quote: "Himanshu understood our vision and built a media plan that put us in front of the right audience. From concept to execution, our robotic knee surgery campaign has been a success.",
    name: "Dr. Manu Sharma",
    company: "Healthcare",
    image: "https://ik.imagekit.io/ib9n0o3ps/Doctor%20(1).png"
  },
  {
    quote: "He gave us visibility from regional to national with a simple, effective launch strategy. The footfall that weekend said it all. A gem to work with.",
    name: "Kesaria Textile Company",
    company: "Retail",
    image: "https://ik.imagekit.io/ib9n0o3ps/kesariyalogo1.395a49d23877712b5186.webp"
  },
  {
    quote: "He listens first. Instead of generic ads, he created a bold, colour-changing billboard that connected with families emotionally. A true partner from concept to final placement.",
    name: "Unity Hospital",
    company: "Healthcare",
    image: "https://ik.imagekit.io/ib9n0o3ps/download.jpg"
  },
  {
    quote: "He didn’t just talk strategy—he drove the routes himself and fixed our directional signage on the ground. Within weeks, emergency intakes improved.",
    name: "Harsh Hospital",
    company: "Emergency Care",
    image: "https://ik.imagekit.io/ib9n0o3ps/Harsh-Logo-Website.webp"
  },
  {
    quote: "He turned our RIVAYAT collection into a major success with a targeted digital campaign and influencer outreach. That’s the Himanshu impact.",
    name: "Billipatra Jewels",
    company: "Jewelry",
    image: "https://ik.imagekit.io/ib9n0o3ps/image.png"
  },
  {
    quote: "He didn’t just handle our outdoor ads—he built our reputation. From trade journals to business dailies, he positioned us as an industry authority.”",
    name: "Bharat Lubricant",
    company: "Manufacturing",
    image: "https://ik.imagekit.io/ib9n0o3ps/3DLOGO1_300x300.avif"
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for right, -1 for left
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const slideNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const slidePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(slideNext, 10000); // 10 seconds
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [slideNext, isPaused]);

  const handleManualNav = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    resetTimer();
  };

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (!isPaused) {
      timerRef.current = setInterval(slideNext, 10000);
    }
  };

  return (
    <section id="testimonials" className="py-24 bg-white overflow-hidden border-t border-gray-100 relative">
      <div className="container mx-auto px-6 md:px-12 text-center mb-12">
        <span className="text-burnt-orange text-sm font-semibold tracking-widest uppercase mb-4 block">
          Client Feedback
        </span>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-midnight mb-6">
          Trusted by Industry Leaders
        </h2>
        <div className="w-20 h-1 bg-burnt-orange mx-auto"></div>

      {/* Floating Authority Logos - Slower & More Graceful Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-25">
        <motion.div
          animate={{ y: [0, -30, 0], x: [0, 10, 0], rotate: [2, -2, 2] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 left-[5%] w-24 md:w-36"
        >
          <img src="/logos/Dainik_Bhaskar_Logo.svg.png" alt="" className="w-full h-auto drop-shadow-sm" />
        </motion.div>
        
        <motion.div
          animate={{ y: [0, 30, 0], x: [0, -10, 0], rotate: [-3, 3, -3] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute top-[35%] right-[5%] w-20 md:w-32"
        >
          <img src="/logos/My FM.png" alt="" className="w-full h-auto drop-shadow-sm" />
        </motion.div>
        
        <motion.div
          animate={{ y: [0, -25, 0], x: [0, 15, 0] }}
          transition={{ duration: 40, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-40 left-[8%] w-24 md:w-40"
        >
          <img src="/logos/HT Media.webp" alt="" className="w-full h-auto drop-shadow-sm" />
        </motion.div>
        
        <motion.div
          animate={{ y: [0, 25, 0], x: [0, -15, 0] }}
          transition={{ duration: 35, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute bottom-20 right-[12%] w-28 md:w-44"
        >
          <img src="/logos/Red-FM-93.5-Live-Online.png" alt="" className="w-full h-auto drop-shadow-sm" />
        </motion.div>

        <motion.div
          animate={{ scale: [1, 1.05, 1], rotate: [0, 5, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[15%] left-[25%] w-16 md:w-24 opacity-60"
        >
          <img src="/logos/Sage Group.png" alt="" className="w-full h-auto" />
        </motion.div>

        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 28, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
          className="absolute top-[60%] left-[15%] w-20 md:w-32 opacity-60"
        >
          <img src="/logos/Shalby Hospitals logo.svg" alt="" className="w-full h-auto" />
        </motion.div>

        <motion.div
          animate={{ scale: [1, 1.1, 1], rotate: [0, -10, 0] }}
          transition={{ duration: 45, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-[40%] right-[30%] w-16 md:w-28 opacity-60"
        >
          <img src="/logos/Billipatra Jewels.jpg" alt="" className="w-full h-auto rounded-xl shadow-sm" />
        </motion.div>

        <motion.div
          animate={{ y: [0, 20, 0], x: [0, 5, 0] }}
          transition={{ duration: 32, repeat: Infinity, ease: "easeInOut", delay: 3.5 }}
          className="absolute top-[5%] right-[25%] w-20 md:w-32 opacity-60"
        >
          <img src="/logos/Bharat Lubricant.avif" alt="" className="w-full h-auto" />
        </motion.div>
      </div>
      </div>

      <div 
        className="max-w-4xl mx-auto px-4 relative flex flex-col items-center"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="w-full relative min-h-[400px] md:min-h-[350px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute w-full px-4"
            >
              <div className="bg-white border border-gray-100 p-8 md:p-12 rounded-2xl shadow-sm relative text-center mx-auto max-w-2xl overflow-hidden">
                {/* ── Media Identity: Decorations ── */}
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 pointer-events-none transition-opacity duration-300">
                  <MicrophoneIcon className="text-burnt-orange/15" size={40} />
                </div>
                
                <p className="text-gray-700 font-light italic relative z-10 mt-6 mb-10 text-xl md:text-2xl leading-relaxed">
                  "{testimonials[currentIndex].quote}"
                </p>
                
                {/* Author Info (from minimal design) */}
                <div className="flex flex-col items-center">
                  <div className="h-6 w-px bg-gray-200 mb-4" />
                  <h4 className="font-bold text-midnight text-lg md:text-xl mb-1">
                    {testimonials[currentIndex].name}
                  </h4>
                  <span className="text-burnt-orange text-xs font-bold uppercase tracking-[0.2em]">
                    {testimonials[currentIndex].company}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 w-full opacity-10 pointer-events-none">
                  <WaveformBars barCount={32} className="h-6" />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows (Preserved) */}
          <button 
            onClick={() => { slidePrev(); resetTimer(); }}
            className="absolute -left-4 md:left-0 top-1/2 -translate-y-1/2 z-20 p-2 text-gray-300 hover:text-burnt-orange transition-all duration-300 hover:scale-110"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={44} strokeWidth={1} />
          </button>
          <button 
            onClick={() => { slideNext(); resetTimer(); }}
            className="absolute -right-4 md:right-0 top-1/2 -translate-y-1/2 z-20 p-2 text-gray-300 hover:text-burnt-orange transition-all duration-300 hover:scale-110"
            aria-label="Next testimonial"
          >
            <ChevronRight size={44} strokeWidth={1} />
          </button>
        </div>

        {/* Minimal Style Avatar Row */}
        <div className="mt-4 flex items-center gap-6">
          <div className="flex -space-x-3">
            {testimonials.map((t, i) => (
              <button
                key={i}
                onClick={() => handleManualNav(i)}
                className={`
                  relative w-14 h-14 rounded-full overflow-hidden ring-4 ring-white shadow-md
                  transition-all duration-500 ease-in-out cursor-pointer
                  ${currentIndex === i ? "z-20 scale-125 saturate-100 ring-brand/30" : "z-10 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:scale-110"}
                `}
                aria-label={`View testimonial from ${t.name}`}
              >
                <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center gap-2 mt-10">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleManualNav(idx)}
              className={`h-2 transition-all duration-500 rounded-full ${
                currentIndex === idx 
                  ? 'w-12 bg-brand' 
                  : 'w-2 bg-slate-200 hover:bg-slate-300'
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
