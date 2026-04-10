import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote: "Himanshu understood our vision and built a media plan that put us in front of the right audience. Our robotic knee surgery campaign was a huge success.",
    name: "Dr. Manu Sharma",
    company: "Healthcare",
    image: "https://ik.imagekit.io/ib9n0o3ps/Doctor%20(1).png"
  },
  {
    quote: "He gave us visibility from regional to national with a simple, effective launch strategy. The footfall that weekend said it all.",
    name: "Kesaria Textile Company",
    company: "Retail",
    image: "https://ik.imagekit.io/ib9n0o3ps/kesariyalogo1.395a49d23877712b5186.webp"
  },
  {
    quote: "Instead of generic ads, he created a bold billboard campaign that connected with families emotionally. A true partner.",
    name: "Unity Hospital",
    company: "Healthcare",
    image: "https://ik.imagekit.io/ib9n0o3ps/download.jpg"
  },
  {
    quote: "He didn't just talk strategy — he drove the routes himself and fixed our signage. Within weeks, emergency intakes improved.",
    name: "Harsh Hospital",
    company: "Emergency Care",
    image: "https://ik.imagekit.io/ib9n0o3ps/Harsh-Logo-Website.webp"
  },
  {
    quote: "He turned our RIVAYAT collection into a major success with a targeted digital campaign and influencer outreach.",
    name: "Billipatra Jewels",
    company: "Jewelry",
    image: "https://ik.imagekit.io/ib9n0o3ps/image.png"
  },
  {
    quote: "He didn't just handle our outdoor ads — he built our reputation. He positioned us as an industry authority.",
    name: "Bharat Lubricant",
    company: "Manufacturing",
    image: "https://ik.imagekit.io/ib9n0o3ps/3DLOGO1_300x300.avif"
  }
];

export function Testimonials({ isDark = false }: { isDark?: boolean }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const slideNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const slidePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(slideNext, 8000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [slideNext, isPaused]);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (!isPaused) timerRef.current = setInterval(slideNext, 8000);
  };

  return (
    <section className={`py-24 relative overflow-hidden ${isDark ? 'bg-dark' : 'bg-white'}`}>
      {/* Background Video */}
      <div className={`absolute inset-0 z-0 ${isDark ? 'opacity-[0.05]' : 'opacity-[0.02]'}`}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/Videos/D_Motion_Graphics_Background_Generation.mp4" type="video/mp4" />
        </video>
        <div className={`absolute inset-0 ${isDark ? 'bg-black/60' : 'bg-gray-light/40'}`} />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-extrabold mb-3 ${isDark ? 'text-white' : 'text-dark'}`}>What Our Clients Say</h2>
          <div className="w-12 h-1 bg-brand mx-auto" />
        </div>

        <div
          className="max-w-3xl mx-auto relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative min-h-[280px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="absolute w-full px-4"
              >
                <div className={`${isDark ? 'bg-white/5 backdrop-blur-sm' : 'bg-white shadow-sm'} p-10 md:p-14 text-center`}>
                  <p className={`${isDark ? 'text-white/80' : 'text-gray-700'} italic text-lg md:text-xl leading-relaxed mb-8`}>
                    "{testimonials[currentIndex].quote}"
                  </p>

                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-100 mb-4">
                      <img
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className={`font-bold ${isDark ? 'text-white' : 'text-dark'}`}>
                      {testimonials[currentIndex].name}
                    </h4>
                    <span className="text-brand text-xs font-bold tracking-[0.15em] uppercase mt-1">
                      {testimonials[currentIndex].company}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Nav Arrows */}
            <button
              onClick={() => { slidePrev(); resetTimer(); }}
              className="absolute -left-2 md:-left-8 top-1/2 -translate-y-1/2 z-20 p-2 text-gray-300 hover:text-brand transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={36} strokeWidth={1.5} />
            </button>
            <button
              onClick={() => { slideNext(); resetTimer(); }}
              className="absolute -right-2 md:-right-8 top-1/2 -translate-y-1/2 z-20 p-2 text-gray-300 hover:text-brand transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={36} strokeWidth={1.5} />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-10">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => { setCurrentIndex(idx); resetTimer(); }}
                className={`h-2 transition-all duration-300 ${
                  currentIndex === idx
                    ? 'w-8 bg-brand'
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
