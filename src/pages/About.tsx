import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Award, Briefcase, Target, ChevronRight, Eye, Rocket, Flag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MediaSketchBackground } from '../components/MediaSketchBackground';
import { SEO } from '../components/SEO';
import { Testimonials } from '../components/Testimonials';
import { CTASection } from '../components/CTASection';
import { GLOBAL_KEYWORDS } from '../constants/seo';
/* ── Media Identity Imports ── */
import { BroadcastBadge } from '../components/BroadcastBadge';
import { CameraViewfinder, WaveformBars, SignalArcs, BroadcastGrid } from '../components/MediaSVGElements';
import { ScanLines, GrainTexture, ScreenGlow } from '../components/MediaOverlays';

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

const timeline = [
  {
    company: "THE GRIND (English Tabloid)",
    role: "COO & Partner",
    duration: "Current – 6 Months",
    description: "Leading operations and strategic partnerships for a premier English tabloid."
  },
  {
    company: "BRAND QUEST & WHITE GLOBE",
    role: "Founder & Director",
    duration: "3 Years",
    description: "Founded and directed a successful media consulting firm, delivering 360-degree brand solutions."
  },
  {
    company: "VUBITES (Rediff.com Venture)",
    role: "Location Head – Gujarat & Maharashtra",
    duration: "4+ Years",
    description: "Achieved National #1 Sales Rank, driving significant revenue growth across key regions."
  },
  {
    company: "HINDUSTAN TIMES",
    role: "Operations Head",
    duration: "2 Years",
    description: "Spearheaded strategic media operations, optimizing processes and enhancing market presence."
  },
  {
    company: "RADIO CITY",
    role: "Group Sales Head",
    duration: "3 Years",
    description: "Led the sales group, developing innovative media selling strategies and expanding client portfolios."
  },
  {
    company: "DAINIK BHASKAR GROUP",
    role: "Senior Manager – Space Selling & Activations",
    duration: "7.5 Years",
    description: "Executed 100+ brand initiatives, managing large-scale space selling and brand activations."
  }
];

export function About() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="bg-white pt-24">
      <SEO
        title="About Himanshu Parashar | 20+ Years Media Career Biography"
        description="Learn about Himanshu Parashar's 20-year journey in the Indian media industry, including Dainik Bhaskar, Radio City, Hindustan Times, BIG FM, MYFM, and Rediff.com. A legacy of brand building and strategic leadership."
        keywords={GLOBAL_KEYWORDS}
        canonicalPath="/about"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Himanshu Parashar",
          "jobTitle": "Media & Brand Consultant",
          "alumniOf": [
            { "@type": "Organization", "name": "Dainik Bhaskar Group" },
            { "@type": "Organization", "name": "Hindustan Times" },
            { "@type": "Organization", "name": "Radio City" },
            { "@type": "Organization", "name": "BIG FM" },
            { "@type": "Organization", "name": "MYFM" },
            { "@type": "Organization", "name": "Rediff.com" }
          ],
          "knowsAbout": ["Media Strategy", "Sales Leadership", "Brand Consulting", "Corporate Operations"]
        }}
      />
      {/* Hero Section */}
      <section className="relative pt-44 pb-32 md:pt-52 md:pb-40 bg-slate-950 text-white overflow-hidden media-screen-glow">
        {/* Artistic Sketch Background - Subtle Contrast on Dark */}
        <MediaSketchBackground opacity={0.3} className="mix-blend-overlay grayscale invert" />
        
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Corporate Background"
            className="w-full h-full object-cover grayscale"
            referrerPolicy="no-referrer"
          />
        </div>
        {/* Ambient Brand Glow */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand/10 blur-[150px] rounded-full"></div>
        {/* ── Media Identity: Scan Lines + Grain ── */}
        <ScanLines opacity={0.02} />
        <GrainTexture />
        <ScreenGlow />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.span variants={fadeInUp} className="text-brand font-bold tracking-[0.3em] uppercase text-xs mb-6 block">
              Professional Biography
            </motion.span>
            {/* ── Media Identity: Press Badge ── */}
            <motion.div variants={fadeInUp} className="mb-4">
              <BroadcastBadge variant="press" size="sm" />
            </motion.div>
            <motion.h1 variants={fadeInUp} className="font-serif font-bold leading-tight mb-8" style={{ color: '#ffffff' }}>
              Himanshu Parashar
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-slate-400 font-light leading-relaxed max-w-2xl">
              A visionary Media and Brand Consultant with over two decades of experience shaping the narrative of India's top corporate and retail brands.
            </motion.p>
            <motion.div variants={fadeInUp} className="mt-10">
              <a 
                href="#testimonials" 
                className="inline-flex items-center px-8 py-4 bg-brand hover:bg-brand-dark text-white text-sm font-bold tracking-widest uppercase rounded-full transition-all duration-300 shadow-lg hover:shadow-brand/30 group"
              >
                Read Client Testimonials
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Biography & Philosophy */}
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="sticky top-32 space-y-12"
              >
                <div className="relative group">
                  <div className="absolute inset-0 bg-brand translate-x-2 md:translate-x-4 translate-y-2 md:translate-y-4 rounded-3xl -z-10 group-hover:translate-x-4 md:group-hover:translate-x-6 group-hover:translate-y-4 md:group-hover:translate-y-6 transition-transform duration-500"></div>
                  <div className="relative broadcast-frame rounded-3xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      alt="Himanshu Parashar"
                      className="w-full aspect-[4/5] object-cover shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                    {/* ── Media Identity: Camera Viewfinder ── */}
                    <CameraViewfinder />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 gap-6">
                  {[
                    { icon: <Eye className="w-6 h-6" />, title: "Vision", desc: "To be the go-to media partner for ambitious brands, delivering integrated solutions that harness Print, TV, Outdoor, Radio, Digital, PR, Events, and Experiential to drive growth and fuel cultural relevance." },
                    { icon: <Rocket className="w-6 h-6" />, title: "Mission", desc: "Crafting tailored media strategies with data-driven insights, creative vision, and tech innovation. We understand clients businesses, anticipate shifts, and push media boundaries to deliver measurable impact." },
                    { icon: <Flag className="w-6 h-6" />, title: "Goal", desc: "To become the most trusted partner for brands seeking to disrupt markets, drive growth, and achieve iconic status." }
                  ].map((item, i) => (
                    <div key={i} className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-brand/20 transition-all duration-500 group">
                      <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-brand mb-6 group-hover:bg-brand group-hover:text-white transition-all duration-500">
                        {item.icon}
                      </div>
                      <h4 className="font-serif text-2xl font-bold text-slate-900 mb-3">{item.title}</h4>
                      <p className="text-slate-500 font-light leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-7 space-y-16 order-1 lg:order-2">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                <motion.h2 variants={fadeInUp} className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-8 underline decoration-brand/20 underline-offset-8">The Journey</motion.h2>
                
                <motion.div variants={fadeInUp} className="bg-slate-50 border-l-4 border-brand p-10 mb-12 rounded-r-3xl">
                  <h3 className="font-serif text-3xl font-bold text-slate-900 flex items-center">
                    <Award className="w-8 h-8 mr-4 text-brand shrink-0" />
                    20+ Years of Industry Leadership
                  </h3>
                  <p className="text-slate-600 font-medium mt-4 text-lg">
                    Over two decades of leadership and strategic brand building across India's premier media organizations.
                  </p>
                </motion.div>

                <motion.div variants={fadeInUp} className="text-xl text-slate-500 font-light leading-relaxed space-y-8">
                  <p>
                    My journey in the media and branding landscape spans over 20 years, marked by a relentless pursuit of excellence and a deep understanding of market dynamics. From the bustling newsrooms of <span className="text-slate-900 font-bold italic">Dainik Bhaskar</span> to the strategic boardrooms of <span className="text-slate-900 font-bold italic">Hindustan Times</span>, <span className="text-slate-900 font-bold italic">Radio City</span>, <span className="text-slate-900 font-bold italic">BIG FM</span>, <span className="text-slate-900 font-bold italic">MYFM</span>, and <span className="text-slate-900 font-bold italic">Rediff.com</span>, I have navigated the complexities of India's media ecosystem.
                  </p>
                  <p>
                    As the Founder & Director of Brand Quest & White Globe, I transitioned from corporate leadership to entrepreneurial consulting, bringing big-agency expertise to retail businesses and corporate enterprises alike. My approach is rooted in the belief that a brand is more than a logo; it's a legacy.
                  </p>
                  <p>
                    Currently serving as the COO & Partner at <span className="text-slate-900 font-bold italic">The Grind</span>, I continue to shape media narratives while advising clients on high-impact brand activations, media IP development, and revenue growth architecture.
                  </p>
                </motion.div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="pt-16 border-t border-slate-100"
              >
                <motion.h2 variants={fadeInUp} className="font-serif text-4xl font-bold text-slate-900 mb-10">Leadership Philosophy</motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <motion.div variants={fadeInUp} className="bg-slate-50 p-10 rounded-3xl border border-slate-100 group hover:border-brand/20 transition-all duration-500">
                    <Target className="w-8 h-8 text-brand mb-6 group-hover:scale-110 transition-transform" />
                    <h4 className="font-serif text-2xl font-bold text-slate-900 mb-4">Strategic Clarity</h4>
                    <p className="text-slate-500 font-light text-base leading-relaxed">
                      Every media initiative must align with the broader business objective. I believe in data-driven strategies that cut through the noise and deliver measurable ROI.
                    </p>
                  </motion.div>
                  <motion.div variants={fadeInUp} className="bg-slate-50 p-10 rounded-3xl border border-slate-100 group hover:border-brand/20 transition-all duration-500">
                    <Briefcase className="w-8 h-8 text-brand mb-6 group-hover:scale-110 transition-transform" />
                    <h4 className="font-serif text-2xl font-bold text-slate-900 mb-4">Execution Excellence</h4>
                    <p className="text-slate-500 font-light text-base leading-relaxed">
                      A great strategy is only as good as its execution. I pride myself on end-to-end project management, ensuring flawless delivery from concept to completion.
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Timeline */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        {/* ── Media Identity: Broadcast Grid Background ── */}
        <BroadcastGrid />
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-24"
          >
            <motion.span variants={fadeInUp} className="text-brand font-bold tracking-[0.3em] uppercase text-xs">The Trajectory</motion.span>
            <h2 className="font-serif text-4xl md:text-6xl font-bold text-slate-900 mt-6 mb-8">
              Professional Experience
            </h2>
            <motion.div variants={fadeInUp} className="w-20 h-1.5 bg-brand mx-auto"></motion.div>
            {/* ── Media Identity: Waveform Decoration ── */}
            <div className="flex justify-center mt-6">
              <WaveformBars barCount={20} className="opacity-30" />
            </div>
          </motion.div>

          <div className="max-w-5xl mx-auto relative" ref={scrollRef}>
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 transform md:-translate-x-1/2 hidden md:block"></div>
            <motion.div
              className="absolute left-0 md:left-1/2 top-0 w-1 bg-brand transform md:-translate-x-1/2 hidden md:block z-0 origin-top shadow-[0_0_15px_rgba(217,30,38,0.3)]"
              style={{ height: lineHeight }}
            />

            <div className="space-y-16">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                    }`}
                >
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-brand border-4 border-slate-50 transform -translate-x-1.5 md:-translate-x-2 z-10 hidden md:block"></div>

                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-20' : 'md:pl-20'}`}>
                    <div className="bg-white p-12 rounded-[2.5rem] shadow-[0_10px_40px_rgba(0,0,0,0.02)] border border-slate-100 hover:border-brand/20 hover:shadow-2xl transition-all duration-700 group">
                      <span className="text-brand text-xs font-bold tracking-[0.2em] uppercase block mb-4 px-4 py-1.5 bg-brand/5 rounded-full w-fit">
                        {item.duration}
                      </span>
                      <h3 className="font-serif text-3xl font-bold text-slate-900 mb-2 group-hover:text-brand transition-colors duration-500">
                        {item.company}
                      </h3>
                      <p className="text-slate-400 font-bold text-sm uppercase tracking-widest mb-6">
                        {item.role}
                      </p>
                      <p className="text-slate-500 font-light text-lg leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <CTASection />
    </div>
  );
}
