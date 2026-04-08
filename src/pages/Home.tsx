import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, Award, TrendingUp, Briefcase, Target, Users, Zap, Radio, Tv, Trophy } from 'lucide-react';
import { SEO } from '../components/SEO';
import { NumberCounter } from '../components/NumberCounter';
import { Testimonials } from '../components/Testimonials';
import { CTASection } from '../components/CTASection';
import { MediaSketchBackground } from '../components/MediaSketchBackground';
import { GLOBAL_KEYWORDS } from '../constants/seo';
import { BrandShowcase } from '../components/BrandShowcase';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export function Home() {
  return (
    <div className="bg-white overflow-x-hidden">
      <SEO
        title="Media Strategy Consultant India | Brand Activation Expert Surat"
        description="Himanshu Parashar is India's leading media strategist and brand architect with 20+ years of experience. Expert in corporate brand consulting, media buying & selling, and 360° brand solutions in Surat, Gujarat."
        keywords={GLOBAL_KEYWORDS}
        canonicalPath="/"
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 lg:pt-0 bg-gradient-to-br from-surface-50 via-white to-[#fff0f5] overflow-hidden">
        {/* Artistic Background Structure */}
        <MediaSketchBackground opacity={0.4} blur={true} />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left"
            >
              <motion.div 
                variants={fadeInUp} 
                className="inline-flex items-center px-6 py-2 bg-indigo-navy/5 border border-indigo-navy/10 rounded-full text-indigo-navy text-xs font-black tracking-[0.3em] uppercase"
              >
                <span className="relative flex h-2 w-2 mr-3">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-brand opacity-75 animate-ping"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
                </span>
                Senior Media Strategist
              </motion.div>

              <motion.h1 variants={fadeInUp} className="font-black leading-[1.1] tracking-tighter text-indigo-navy">
                Building <span className="text-brand">Brands</span> <br className="hidden sm:block" />
                That Lead Markets.
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-lg md:text-xl text-slate-500 font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed">
                We craft 360-degree narratives that resonate everywhere—from TV and Print to digital screens and the streets. By integrating Radio, OOH, and surgical PR, I turn your brand’s vision into an unavoidable presence. Let’s make your impact total, seamless, and impossible to ignore.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center gap-6 pt-4 w-full sm:w-auto">
                <Link
                  to="/contact"
                  className="btn-pill btn-primary w-full sm:w-auto text-center"
                >
                  Start Consultation
                </Link>
                <Link
                  to="/portfolio"
                  className="btn-pill bg-white text-indigo-navy border border-indigo-navy/10 hover:border-indigo-navy/40 w-full sm:w-auto text-center shadow-lg"
                >
                  View Case Studies
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="relative z-10 aspect-square max-w-2xl mx-auto flex items-center justify-center">
                 {/* Profile/Main Image with artistic flare */}
                <div className="relative w-4/5 h-4/5 bg-indigo-navy/5 rounded-[4rem] overflow-hidden border-8 border-white shadow-2xl rotate-3 group overflow-hidden">
                    <img
                    src="https://ik.imagekit.io/ib9n0o3ps/IMG-20250821-WA0070%20-%20Himanshu%20Parashar.jpg"
                    alt="Himanshu Parashar"
                    className="w-full h-full object-cover object-top -rotate-3 scale-100 group-hover:scale-110 transition-transform duration-1000"
                  />
                </div>

                {/* Floating 3D Elements - Hidden on mobile to prevent overflow */}
                <motion.div 
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-10 -right-10 w-24 md:w-40 h-24 md:h-40 z-20 drop-shadow-2xl"
                >
                  <img src="/illustrations/tv.png" alt="TV News" className="w-full h-full object-contain" />
                </motion.div>

                <motion.div 
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute -bottom-10 -left-10 w-20 md:w-36 h-20 md:h-36 z-20 drop-shadow-2xl"
                >
                  <img src="/illustrations/radio.png" alt="Radio Broadcast" className="w-full h-full object-contain" />
                </motion.div>

                <motion.div 
                  animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute top-1/2 -right-10 md:-right-20 w-16 md:w-28 h-16 md:h-28 z-20 drop-shadow-2xl"
                >
                  <img src="/illustrations/awards.png" alt="Awards" className="w-full h-full object-contain" />
                </motion.div>

                {/* New Illustrations - Hidden or scaled on mobile */}
                <motion.div 
                  animate={{ y: [0, -15, 0], rotate: [0, -10, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                  className="absolute -top-12 left-5 md:left-10 w-16 md:w-24 h-16 md:h-24 z-20 drop-shadow-xl"
                >
                  <img src="/illustrations/3d_rocket_illustration_1774898965661.png" alt="Rocket" className="w-full h-full object-contain" />
                </motion.div>

                <motion.div 
                  animate={{ x: [0, 15, 0], y: [0, 15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                  className="absolute top-0 -left-12 md:-left-24 w-20 md:w-32 h-20 md:h-32 z-20 drop-shadow-2xl"
                >
                  <img src="/illustrations/3d_target_illustration_1774898897023.png" alt="Targeting" className="w-full h-full object-contain" />
                </motion.div>

                <motion.div 
                  animate={{ x: [0, 10, 0], y: [0, 10, 0] }}
                  transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                  className="absolute bottom-0 -right-5 md:-right-10 w-14 md:w-20 h-14 md:h-20 z-20 drop-shadow-xl"
                >
                  <img src="/illustrations/3d_lightbulb_illustration_1774898933635.png" alt="Idea" className="w-full h-full object-contain" />
                </motion.div>

                {/* Decorative background shape */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-navy/5 rounded-full blur-3xl -z-10"></div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-white section-wave-bottom"></div>
      </section>
      {/* Brand Authority Showcase - High-End Animation Integration */}
      <BrandShowcase />

      {/* Highlights Section (Radio, TV, Awards) */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">             <motion.div 
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="card-premium flex flex-col items-center text-center space-y-6 group overflow-hidden"
             >
                <div className="w-20 h-20 flex items-center justify-center bg-surface-50 rounded-3xl relative">
                  <Radio size={40} className="text-brand relative z-10" />
                </div>
                <h3 className="text-2xl font-black">Radio Strategy</h3>
                <p className="text-slate-500 text-sm font-medium">Dominating the airwaves with creative placements and high-frequency brand recall strategies.</p>
             </motion.div>

             <motion.div 
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="card-premium flex flex-col items-center text-center space-y-6 group overflow-hidden"
             >
                <div className="w-20 h-20 flex items-center justify-center bg-surface-50 rounded-3xl relative">
                  <Tv size={40} className="text-indigo-navy relative z-10" />
                </div>
                <h3 className="text-2xl font-black">TV News Media</h3>
                <p className="text-slate-500 text-sm font-medium">Strategic presence in top-tier news channels to build authority and nationwide visibility.</p>
             </motion.div>

             <motion.div 
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="card-premium flex flex-col items-center text-center space-y-6 group overflow-hidden"
             >
                <div className="w-20 h-20 flex items-center justify-center bg-surface-50 rounded-3xl relative">
                  <Trophy size={40} className="text-brand relative z-10" />
                </div>
                <h3 className="text-2xl font-black">Awards & IPs</h3>
                <p className="text-slate-500 text-sm font-medium">Creating proprietary media properties that win awards and capture market leadership.</p>
             </motion.div>

          </div>
        </div>
      </section>


      {/* Introduction */}
      <section className="py-32 bg-surface-50 relative">
        <div className="absolute top-0 left-0 w-full h-24 bg-white section-wave-top rotate-180"></div>
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative order-2 lg:order-1">
             <div className="grid grid-cols-2 gap-6 relative z-10">
                <div className="space-y-6">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative group"
                  >
                    <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80" alt="Strategy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]" />
                    {/* Floating mini-accolade */}
                    <div className="absolute top-4 left-4 p-3 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl z-20">
                      <img src="/HP/INNOVATOR%20AND%20TRENDSETTER%20AWARDS%202025-11.jpg" className="w-12 h-12 object-cover rounded-lg" alt="" />
                    </div>
                  </motion.div>
                  <div className="p-10 bg-brand rounded-[3rem] text-white relative overflow-hidden group">
                    <img src="/HP/INNOVATOR%20AND%20TRENDSETTER%20AWARDS%202025-8.jpg" className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale group-hover:scale-110 transition-transform duration-[3s]" alt="" />
                    <div className="relative z-10">
                      <h4 className="text-4xl font-black mb-2" style={{ color: '#ffffff' }}>20+</h4>
                      <p className="text-[10px] uppercase tracking-widest font-bold opacity-80" style={{ color: '#ffffff' }}>Years of Experience</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6 pt-12">
                  <div className="p-10 bg-indigo-navy rounded-[3rem] text-white relative overflow-hidden group">
                    <img src="/HP/SANDESH%20HEALTHCARE%20EXCELLENCE%20AWARD%202026-3.jpg" className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale group-hover:scale-110 transition-transform duration-[3s]" alt="" />
                    <div className="relative z-10">
                      <h4 className="text-4xl font-black mb-2" style={{ color: '#ffffff' }}>100+</h4>
                      <p className="text-[10px] uppercase tracking-widest font-bold opacity-80" style={{ color: '#ffffff' }}>Successful IPs</p>
                    </div>
                  </div>
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl group"
                  >
                    <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=600&q=80" alt="Consulting" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]" />
                  </motion.div>
                </div>
              </div>
              <div className="absolute -top-10 -left-10 w-40 h-40 border-8 border-brand/10 rounded-full -z-0"></div>
            </div>

            <div className="space-y-10 order-1 lg:order-2">
              <div className="space-y-6">
                <span className="text-brand font-black tracking-[0.4em] uppercase text-xs">The Visionary</span>
                <h2 className="text-4xl md:text-6xl font-black text-indigo-navy leading-tight">
                  Architecting <br />
                  <span className="text-brand">Media Legacy.</span>
                </h2>
              </div>
              
              <div className="w-24 h-2 bg-indigo-navy rounded-full"></div>

              <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed italic">
                <p>
                  With a track record at India's leading media houses like Dainik Bhaskar, Radio City, and Rediff, I bring insider expertise to your brand's growth journey.
                </p>
                <p>
                   We don't just "buy media"—we engineer attention. Whether it's retail branding in Surat or national level corporate strategy, our approach is data-driven and results-oriented.
                </p>
              </div>

              <div className="pt-6">
                <Link
                  to="/about"
                  className="inline-flex items-center text-indigo-navy font-black tracking-widest uppercase text-xs group"
                >
                  Discover the Journey
                  <div className="ml-4 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center group-hover:bg-indigo-navy group-hover:text-white transition-all duration-500">
                    <ArrowRight size={18} />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery of Impact - Showcasing Volume of Experience */}
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-brand font-black tracking-[0.4em] uppercase text-xs mb-4 block">Event Highlights</span>
            <h2 className="text-4xl md:text-6xl font-black text-indigo-navy">Moments of <span className="text-brand italic font-light">Excellence.</span></h2>
            <div className="w-24 h-2 bg-brand rounded-full mx-auto mt-8"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "/HP/INNOVATOR%20AND%20TRENDSETTER%20AWARDS%202025-1.jpg",
              "/HP/SANDESH%20HEALTHCARE%20EXCELLENCE%20AWARD%202026-3.jpg",
              "/HP/INNOVATOR%20AND%20TRENDSETTER%20AWARDS%202025-8.jpg",
              "/HP/INNOVATOR%20AND%20TRENDSETTER%20AWARDS%202025-9.jpg",
              "/HP/MYFM%20%20HEALTHCARE%20EXCELLENCE%20AWARD.jpg",
              "/HP/MYFM%20JAQUAR%20LIGHTNING%20EXPERT%20TALK%20SHOW.jpg",
              "/HP/SANDESH%20HEALTHCARE%20EXCELLENCE%20AWARD%202026-6.jpg",
              "/HP/MYFM%20JAQUAR%20LIGHTNING%20EXPERT%20TALK%20SHOW1.jpg",
              "/HP/SANDESH%20HEALTHCARE%20EXCELLENCE%20AWARD%202026-1.jpg",
              "/HP/INNOVATOR%20AND%20TRENDSETTER%20AWARDS%202025-6.jpg",
              "/HP/The%20grind_s%20event-WHAT_S%20FOR%20DINNER.jpg",
              "/HP/The%20grind_s%20event-WHAT_S%20FOR%20DINNER4.jpg"
            ].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8, 
                  delay: (i % 4) * 0.1, 
                  ease: [0.22, 1, 0.36, 1] 
                }}
                whileHover={{ 
                  y: -10, 
                  transition: { duration: 0.3 } 
                }}
                className="aspect-square rounded-[2rem] overflow-hidden shadow-xl cursor-pointer bg-slate-100 group relative border-4 border-white active:scale-95"
              >
                <img src={img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-125" alt="Career Backdrop" />
                <div className="absolute inset-0 bg-brand/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                   <div className="bg-white p-3 rounded-full shadow-2xl scale-0 group-hover:scale-100 transition-transform duration-500">
                    <Trophy size={24} className="text-brand" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/portfolio" className="btn-pill btn-primary inline-block">
              View All 100+ Projects
            </Link>
          </div>
        </div>
      </section>

      <Testimonials />

      <CTASection />
    </div>
  );
}
