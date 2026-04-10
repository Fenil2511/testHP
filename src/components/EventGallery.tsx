import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MasonryGallery } from './MasonryGallery';

const hpImages = [
  { file: 'INNOVATOR AND TRENDSETTER AWARDS 2025-1.jpg', cat: 'Awards', title: 'Media Innovation Excellence' },
  { file: 'INNOVATOR AND TRENDSETTER AWARDS 2025-11(1).jpg', cat: 'Awards', title: 'Trendsetter Achievement Honor' },
  { file: 'INNOVATOR AND TRENDSETTER AWARDS 2025-11.jpg', cat: 'Awards', title: 'Industry Leader Spotlight' },
  { file: 'INNOVATOR AND TRENDSETTER AWARDS 2025-6.jpg', cat: 'Awards', title: 'Excellence in Corporate Branding' },
  { file: 'INNOVATOR AND TRENDSETTER AWARDS 2025-8(1).jpg', cat: 'Awards', title: 'Visionary Media Award' },
  { file: 'INNOVATOR AND TRENDSETTER AWARDS 2025-8.jpg', cat: 'Awards', title: 'Strategic Leadership Recognition' },
  { file: 'INNOVATOR AND TRENDSETTER AWARDS 2025-9(1).jpg', cat: 'Awards', title: 'Media Growth & Strategy Award' },
  { file: 'INNOVATOR AND TRENDSETTER AWARDS 2025-9(2).jpg', cat: 'Awards', title: 'Corporate IP Excellence' },
  { file: 'INNOVATOR AND TRENDSETTER AWARDS 2025-9.jpg', cat: 'Awards', title: 'Impactful Brand Initiatives' },
  { file: 'INNOVATOR AND TRENDSETTER AWARDS 2025.jpg', cat: 'Awards', title: 'Innovator & Trendsetter 2025' },
  { file: 'MYFM  HEALTHCARE EXCELLENCE AWARD.jpg', cat: 'Awards', title: 'Healthcare Media Excellence' },
  { file: 'MYFM JAQUAR LIGHTNING EXPERT TALK SHOW.jpg', cat: 'Talk Shows', title: 'Jaquar Expert Talk Series' },
  { file: 'MYFM JAQUAR LIGHTNING EXPERT TALK SHOW1.jpg', cat: 'Talk Shows', title: 'Radio IP Development' },
  { file: 'MYFM JAQUAR LIGHTNING EXPERT TALK SHOW2.jpg', cat: 'Talk Shows', title: 'Strategic Brand Dialogues' },
  { file: 'SANDESH HEALTHCARE EXCELLENCE AWARD 2026-1.jpg', cat: 'Awards', title: 'Healthcare Leadership Honors' },
  { file: 'SANDESH HEALTHCARE EXCELLENCE AWARD 2026-2.jpg', cat: 'Awards', title: 'Medical Branding Excellence' },
  { file: 'SANDESH HEALTHCARE EXCELLENCE AWARD 2026-3.jpg', cat: 'Awards', title: 'Sandesh Excellence Awards' },
  { file: 'SANDESH HEALTHCARE EXCELLENCE AWARD 2026-5.jpg', cat: 'Awards', title: 'Industry Recognition Ceremony' },
  { file: 'SANDESH HEALTHCARE EXCELLENCE AWARD 2026-6.jpg', cat: 'Awards', title: 'Healthcare Media Milestones' },
  { file: 'The grind_s event-WHAT_S FOR DINNER.jpg', cat: 'Event IPs', title: 'Exclusive Curated Experiences' },
  { file: 'The grind_s event-WHAT_S FOR DINNER1.jpg', cat: 'Event IPs', title: 'Experiential Brand Dinner' },
  { file: 'The grind_s event-WHAT_S FOR DINNER2.jpg', cat: 'Event IPs', title: "The Grind's Corporate IP" },
  { file: 'The grind_s event-WHAT_S FOR DINNER3.jpg', cat: 'Event IPs', title: 'Strategic Networking Events' },
  { file: 'The grind_s event-WHAT_S FOR DINNER4.jpg', cat: 'Event IPs', title: 'Premium Event Management' }
];

const categories = ['All', 'Awards', 'Talk Shows', 'Event IPs'];

const allGalleryItems = hpImages.map(({ file, cat, title }) => {
  const encodedPath = `/HP/${encodeURIComponent(file)}`;
  
  return {
    id: file,
    img: encodedPath,
    title: title,
    height: Math.floor(Math.random() * (600 - 300 + 1)) + 300,
    desc: 'Himanshu Parashar',
    category: cat
  };
});

interface EventGalleryProps {
  title?: string;
  subtitle?: string;
}

export function EventGallery({ 
  title = "Moments of Excellence", 
  subtitle = "Capturing the journey of brand building, media leadership, and industry recognition."
}: EventGalleryProps) {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = useMemo(() => {
    if (activeCategory === 'All') return allGalleryItems;
    return allGalleryItems.filter(item => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="relative py-32 overflow-hidden bg-dark">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-30"
        >
          <source src="/Videos/Abstract_D_Motion_Background_Generation.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-dark/90 via-dark/60 to-dark/90" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-brand text-xs font-bold tracking-[0.3em] uppercase block mb-4">Gallery</span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            {title.split(' ').map((word, i) => (
              word.toLowerCase() === 'excellence' || word.toLowerCase() === 'recognition' || word.toLowerCase() === 'gallery' ? 
              <span key={i} className="text-brand"> {word}</span> : <span key={i}> {word}</span>
            ))}
          </h2>
          <p className="text-white/50 text-xl max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 border-b-2 ${
                activeCategory === cat 
                ? 'border-brand text-white' 
                : 'border-transparent text-white/40 hover:text-white/70'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <MasonryGallery 
              items={filteredItems}
              itemClassName="border-dark"
              colorShiftOnHover={true}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
