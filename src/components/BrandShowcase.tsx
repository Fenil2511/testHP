"use client"

import React from 'react';
import { motion } from 'motion/react';
import { Sparkles } from './ui/sparkles';
import { InfiniteSlider } from './ui/infinite-slider';
import { ProgressiveBlur } from './ui/progressive-blur';
import { Play, Pause, ChevronLeft, ChevronRight } from 'lucide-react';

const logos = [
  { id: 1, src: "/logos/Alpha Neuro Clinic.jpg", name: "Alpha Neuro Clinic" },
  { id: 2, src: "/logos/Bake & Shake.png", name: "Bake & Shake" },
  { id: 3, src: "/logos/Bharat Lubricant.avif", name: "Bharat Lubricant" },
  { id: 4, src: "/logos/Billipatra Jewels.jpg", name: "Billipatra Jewels" },
  { id: 5, src: "/logos/Dainik_Bhaskar_Logo.svg.png", name: "Dainik Bhaskar" },
  { id: 6, src: "/logos/Dr. Kunal Shah – Aastha Clinic.webp", name: "Aastha Clinic" },
  { id: 7, src: "/logos/Dr. Manu Sharma – The Clinic.png", name: "The Clinic" },
  { id: 8, src: "/logos/HK Jewels.webp", name: "HK Jewels" },
  { id: 9, src: "/logos/HT Media.webp", name: "HT Media" },
  { id: 10, src: "/logos/Harsh Hospital.webp", name: "Harsh Hospital" },
  { id: 11, src: "/logos/Kilkaari Children Hosp..png", name: "Kilkaari Children Hospital" },
  { id: 12, src: "/logos/My FM.png", name: "My FM" },
  { id: 13, src: "/logos/Rabindranath Tagore University – Bhopal.png", name: "Rabindranath Tagore University" },
  { id: 14, src: "/logos/Rajhans Group.png", name: "Rajhans Group" },
  { id: 15, src: "/logos/Ramani Icecreams- Top & Town.png", name: "Ramani Icecreams" },
  { id: 16, src: "/logos/Red-FM-93.5-Live-Online.png", name: "Red FM" },
  { id: 17, src: "/logos/Rediff.svg", name: "Rediff" },
  { id: 18, src: "/logos/Saachi Hosp.jpg", name: "Saachi Hospital" },
  { id: 19, src: "/logos/Sage Group.png", name: "Sage Group" },
  { id: 20, src: "/logos/Shalby Hospitals logo.svg", name: "Shalby Hospitals" },
  { id: 21, src: "/logos/Unique Hospital.png", name: "Unique Hospital" },
  { id: 23, src: "/logos/kesariyalogo.webp", name: "Kesariya" },
  { id: 24, src: "/logos/unity logo eng (1) (1).webp", name: "Unity" },
];

export function BrandShowcase() {
  const [manualNav, setManualNav] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);
  const resumeTimerRef = React.useRef<NodeJS.Timeout | null>(null);

  const startAutoResumeTimer = () => {
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    setIsPaused(true);
    resumeTimerRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 5000); // 5 seconds
  };

  const handleNext = () => {
    setManualNav(prev => prev + 1);
    startAutoResumeTimer();
  };
  const handlePrev = () => {
    setManualNav(prev => prev - 1);
    startAutoResumeTimer();
  };

  React.useEffect(() => {
    return () => {
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    };
  }, []);

  return (
    <section className="relative py-32 bg-slate-50 overflow-hidden">
      {/* Background Sparkles Effect */}
      <div className="absolute inset-0 z-0">
        <Sparkles
          density={400}
          speed={0.5}
          size={1.2}
          color="#8350e8"
          opacity={0.3}
          className="w-full h-full"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter text-indigo-navy">
            Trusted by the <span className="text-brand italic font-light">Industry Giants</span>
          </h3>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg md:text-xl font-medium opacity-80 leading-relaxed">
            Collaborating with India's leading media houses, healthcare systems, and corporate conglomerates to deliver strategic excellence.
          </p>
        </motion.div>

        <div className="relative mt-12 py-8 md:py-12 bg-white/40 backdrop-blur-md rounded-[2.5rem] md:rounded-[3rem] border border-white/60 shadow-lg overflow-hidden group">
          <InfiniteSlider 
            duration={45} 
            gap={40} // Reduced gap for better mobile density
            className="py-4 md:py-6"
            isPaused={isPaused}
            manualNav={manualNav}
          >
            {logos.map((logo) => (
              <div key={logo.id} className="flex items-center justify-center h-20 w-40 md:h-28 md:w-56 transition-all duration-500 hover:scale-110 shrink-0">
                <img 
                  src={logo.src} 
                  alt={logo.name} 
                  className="max-h-full max-w-full object-contain filter drop-shadow-md p-2"
                  title={logo.name}
                  loading="lazy"
                />
              </div>
            ))}
          </InfiniteSlider>

          {/* Interactive Controls Overlay */}
          <div className="absolute inset-0 flex items-center justify-between px-8 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <button 
              onClick={handlePrev}
              className="pointer-events-auto p-4 bg-white/80 backdrop-blur-md rounded-full shadow-xl text-indigo-navy hover:bg-brand hover:text-white transition-all duration-300 border border-white/20"
              aria-label="Previous logo"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button 
              onClick={handleNext}
              className="pointer-events-auto p-4 bg-white/80 backdrop-blur-md rounded-full shadow-xl text-indigo-navy hover:bg-brand hover:text-white transition-all duration-300 border border-white/20"
              aria-label="Next logo"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <ProgressiveBlur
            className='pointer-events-none absolute top-0 left-0 h-full w-[40px] md:w-[75px]'
            direction='left'
            blurIntensity={1}
          />
          <ProgressiveBlur
            className='pointer-events-none absolute top-0 right-0 h-full w-[40px] md:w-[75px]'
            direction='right'
            blurIntensity={1}
          />
        </div>
      </div>
    </section>
  );
}
