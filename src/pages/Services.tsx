import { motion } from 'motion/react';
import { Target, TrendingUp, Zap, Users, Briefcase, Award, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MediaSketchBackground } from '../components/MediaSketchBackground';
import { SEO } from '../components/SEO';
import { GLOBAL_KEYWORDS } from '../constants/seo';
import { MasonryGallery } from '../components/MasonryGallery';
import { CTASection } from '../components/CTASection';
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

const services = [
  {
    id: "media-buying",
    icon: <TrendingUp className="w-10 h-10" />,
    title: "Media Buying & Selling",
    description: "Strategic procurement and sales of media space across print, radio, digital, and outdoor platforms. Maximizing ROI through data-driven negotiation and placement.",
    impact: "Optimized media spend, increased reach, and higher conversion rates.",
    idealClients: "Brands looking to scale their advertising efforts efficiently.",
    features: ["Cross-platform media planning", "Rate negotiation & optimization", "Performance tracking & analytics", "Strategic placement"],
    image: "/HP/INNOVATOR%20AND%20TRENDSETTER%20AWARDS%202025-9(1).jpg",
    secondaryImage: "/HP/MYFM%20JAQUAR%20LIGHTNING%20EXPERT%20TALK%20SHOW.jpg"
  },
  {
    id: "retail-consulting",
    icon: <Users className="w-10 h-10" />,
    title: "Brand Consulting for Retail",
    description: "Tailored brand strategies for small and medium retail businesses to establish a strong local and regional presence, driving footfall and customer loyalty.",
    impact: "Enhanced local visibility, increased customer retention, and scalable brand identity.",
    idealClients: "SME retailers, local chains, and emerging consumer brands.",
    features: ["Local market positioning", "In-store branding & activation", "Customer journey mapping", "Retail marketing strategy"],
    image: "/HP/MYFM%20%20HEALTHCARE%20EXCELLENCE%20AWARD.jpg",
    secondaryImage: "/HP/SANDESH%20HEALTHCARE%20EXCELLENCE%20AWARD%202026-6.jpg"
  },
  {
    id: "corporate-consulting",
    icon: <Target className="w-10 h-10" />,
    title: "Corporate Brand Consulting",
    description: "Comprehensive brand architecture and positioning strategies for large enterprises. Aligning corporate identity with business objectives for market leadership.",
    impact: "Stronger corporate reputation, unified brand messaging, and competitive advantage.",
    idealClients: "Large enterprises, B2B companies, and established corporations.",
    features: ["Brand architecture & hierarchy", "Corporate identity development", "Stakeholder communication", "Market positioning"],
    image: "/HP/SANDESH%20HEALTHCARE%20EXCELLENCE%20AWARD%202026-2.jpg",
    secondaryImage: "/HP/INNOVATOR%20AND%20TRENDSETTER%20AWARDS%202025-11.jpg"
  },
  {
    id: "strategy-development",
    icon: <Award className="w-10 h-10" />,
    title: "Strategy Development",
    description: "Data-driven roadmaps that align brand objectives with actionable media tactics. From market entry to repositioning, crafting strategies that win.",
    impact: "Clear direction, measurable KPIs, and agile market response.",
    idealClients: "Companies entering new markets or launching new products.",
    features: ["Market research & analysis", "Competitive benchmarking", "Go-to-market strategy", "KPI definition & tracking"],
    image: "/HP/MYFM%20JAQUAR%20LIGHTNING%20EXPERT%20TALK%20SHOW.jpg",
    secondaryImage: "/HP/INNOVATOR%20AND%20TRENDSETTER%20AWARDS%202025-1.jpg"
  },
  {
    id: "media-ip",
    icon: <Zap className="w-10 h-10" />,
    title: "Media IP Development",
    description: "Creation, management, and monetization of proprietary media properties and intellectual assets. Building unique platforms that engage audiences and generate revenue.",
    impact: "New revenue streams, owned audience engagement, and brand differentiation.",
    idealClients: "Media houses, content creators, and innovative brands.",
    features: ["Concept ideation & validation", "IP monetization strategy", "Partnership & sponsorship development", "Audience growth planning"],
    image: "/HP/The%20grind_s%20event-WHAT_S%20FOR%20DINNER3.jpg",
    secondaryImage: "/HP/MYFM%20JAQUAR%20LIGHTNING%20EXPERT%20TALK%20SHOW2.jpg"
  },
  {
    id: "concept-execution",
    icon: <Briefcase className="w-10 h-10" />,
    title: "Concept-to-Execution Projects",
    description: "End-to-end management of complex media projects and brand activations. From the initial spark of an idea to the final flawless delivery.",
    impact: "Seamless execution, reduced operational friction, and high-impact results.",
    idealClients: "Brands requiring turnkey solutions for major campaigns or events.",
    features: ["Project planning & scoping", "Vendor & resource management", "On-ground activation", "Post-campaign analysis"],
    image: "/HP/The%20grind_s%20event-WHAT_S%20FOR%20DINNER.jpg",
    secondaryImage: "/HP/SANDESH%20HEALTHCARE%20EXCELLENCE%20AWARD%202026-3.jpg"
  }
];

export function Services() {
  return (
    <div className="bg-white overflow-x-hidden">
      <SEO
        title="Media Consulting Services | Corporate Brand Strategy Surat"
        description="Comprehensive media services including corporate brand consulting, media buying & selling, and media IP development. Transform your business with 360° brand solutions."
        keywords={GLOBAL_KEYWORDS}
        canonicalPath="/services"
        jsonLd={services.map(s => ({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": s.title,
          "description": s.description,
          "provider": {
            "@type": "Person",
            "name": "Himanshu Parashar"
          }
        }))}
      />
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center pt-32 pb-24 bg-gradient-to-br from-surface-50 via-white to-[#fff0f5] overflow-hidden">
        {/* Artistic Background Structure */}
        <div className="absolute inset-0 z-0">
          <img src="/HP/MYFM%20JAQUAR%20LIGHTNING%20EXPERT%20TALK%20SHOW1.jpg" className="w-full h-full object-cover opacity-[0.03] grayscale pointer-events-none" alt="" />
        </div>
        <MediaSketchBackground opacity={0.4} blur={true} />
        
        {/* Decorative background shape */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-light rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 opacity-50"></div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-4xl"
            >
              <motion.span variants={fadeInUp} className="text-brand font-black tracking-[0.3em] uppercase text-xs mb-6 block">
                Core Consulting Services
              </motion.span>
              <motion.h1 variants={fadeInUp} className="font-black leading-[1.1] tracking-tighter text-indigo-navy mb-8">
                Strategic Solutions for <br className="hidden sm:block" />
                <span className="text-brand">Market Leaders.</span>
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed max-w-xl">
                Comprehensive media and brand consulting designed to accelerate growth, enhance visibility, and build lasting equity.
              </motion.p>
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center gap-6 pt-12">
                <a
                  href="#methodology"
                  className="btn-pill btn-primary"
                >
                  The 360° Methodology
                </a>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative hidden lg:block h-[500px]"
            >
                {/* Floating 3D Elements - Responsive Scaling */}
                <motion.div 
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-10 right-10 w-48 md:w-72 h-48 md:h-72 z-20 drop-shadow-2xl"
                >
                  <img src="/illustrations/3d_target_illustration_1774898897023.png" alt="Strategy Target" className="w-full h-full object-contain" />
                </motion.div>

                <motion.div 
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute bottom-10 left-10 w-32 md:w-56 h-32 md:h-56 z-20 drop-shadow-2xl"
                >
                  <img src="/illustrations/3d_briefcase_illustration_1774898917262.png" alt="Corporate Consulting" className="w-full h-full object-contain" />
                </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brand Authority Section */}
      <BrandShowcase />

      {/* Services Detailed List */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6 md:px-12">
          <div className="space-y-32">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className={`flex flex-col lg:flex-row gap-16 lg:gap-24 items-center ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                  }`}
              >
                {/* Visual/Icon Side */}
                <div className="w-full lg:w-1/2">
                  <div className="relative group p-4">
                    <div className="absolute inset-0 bg-brand/5 rounded-[3rem] group-hover:rotate-[-2deg] transition-transform duration-700"></div>
                    <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white group">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-6 left-6 z-10 transition-transform duration-500">
                        <div className="w-14 h-14 bg-brand rounded-2xl flex items-center justify-center text-white shadow-xl shadow-brand/20">
                          {service.icon}
                        </div>
                      </div>
                    </div>
                    {/* Secondary Miniature Image - Refined Positioning */}
                    {service.secondaryImage && (
                      <div className="absolute -bottom-4 -right-4 w-44 h-44 rounded-3xl overflow-hidden border-8 border-white shadow-2xl z-30 hidden md:block transition-all duration-500 group-hover:rotate-0 rotate-3">
                        <img src={service.secondaryImage} alt="Context" className="w-full h-full object-cover" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2 space-y-10">
                  <div className="space-y-6">
                    <h3 className="text-4xl md:text-5xl font-black text-indigo-navy leading-tight">{service.title}</h3>
                    <div className="w-20 h-2 bg-brand rounded-full"></div>
                    <p className="text-xl text-slate-500 font-medium leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-10 border-t border-slate-100">
                    <div>
                      <h4 className="text-[10px] font-black tracking-[0.25em] uppercase text-slate-400 mb-3">Business Impact</h4>
                      <p className="text-slate-600 font-medium text-sm leading-relaxed">{service.impact}</p>
                    </div>
                    <div>
                      <h4 className="text-[10px] font-black tracking-[0.25em] uppercase text-slate-400 mb-3">Ideal Clients</h4>
                      <p className="text-slate-600 font-medium text-sm leading-relaxed">{service.idealClients}</p>
                    </div>
                  </div>

                  <div className="bg-surface-50 p-8 rounded-[2rem] border border-slate-100 shadow-inner">
                    <h4 className="text-[10px] font-black tracking-[0.25em] uppercase text-slate-400 mb-6">Key Deliverables</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-slate-700 font-medium text-sm group">
                          <CheckCircle2 className="w-4 h-4 text-brand mr-3 shrink-0 group-hover:scale-110 transition-transform" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6">
                    <Link
                      to={`/contact?service=${service.id}`}
                      className="inline-flex items-center text-indigo-navy font-black tracking-widest uppercase text-xs group"
                    >
                      Request Consultation
                      <div className="ml-4 w-12 h-12 rounded-full bg-white shadow-lg border border-slate-100 flex items-center justify-center group-hover:bg-indigo-navy group-hover:text-white transition-all duration-500">
                        <ArrowRight size={18} />
                      </div>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>      {/* Methodology Section - Architectural Redesign */}
      <section id="methodology" className="pt-40 pb-56 bg-indigo-navy text-white relative overflow-hidden">
        {/* Architectural Watermark Layer */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.03]">
          <h2 className="text-[30rem] font-black leading-none text-white outline-text tracking-tighter">360</h2>
        </div>

        {/* Global Architectural Sketches */}
        <div className="absolute inset-0 opacity-[0.07] mix-blend-screen pointer-events-none">
          <MediaSketchBackground opacity={1} blur={true} position="right" />
        </div>
        
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-brand rounded-full blur-[200px] -translate-y-1/2 translate-x-1/2 opacity-20"></div>
        
        {/* Soft Section Transition */}
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white to-transparent"></div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto mb-28 p-12 bg-white/[0.03] backdrop-blur-md rounded-[4rem] border border-white/10 shadow-2xl"
          >
            <motion.div 
               variants={fadeInUp} 
               className="inline-flex items-center px-8 py-3 bg-white rounded-full text-brand text-xs font-black tracking-[0.4em] uppercase mb-10 shadow-xl"
            >
              Systematic Success
            </motion.div>
            
            <motion.h2 variants={fadeInUp} className="font-black mb-10 leading-[0.9] tracking-tighter text-center">
              <span className="text-4xl md:text-5xl text-white/40 block mb-2 uppercase tracking-widest font-light">The</span>
              <span className="text-[5rem] md:text-[8rem] text-white block mb-4">360°</span>
              <span className="text-4xl md:text-6xl text-brand italic font-light relative leading-none">
                Methodology
                <div className="absolute -bottom-4 left-0 w-full h-2 bg-brand rounded-full"></div>
              </span>
            </motion.h2>
            
            <motion.p variants={fadeInUp} className="text-white text-lg md:text-2xl font-medium max-w-2xl mx-auto leading-relaxed italic opacity-80">
              "We don't just execute media campaigns; we architect long-term brand authority through a systematic loop of discovery and optimization."
            </motion.p>
          </motion.div>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {[
              { id: "1", step: "01", title: "Discovery", desc: "Understanding your business, your market, and exactly what you want to achieve.", img: "/HP/MYFM%20JAQUAR%20LIGHTNING%20EXPERT%20TALK%20SHOW1.jpg" },
              { id: "2", step: "02", title: "Strategy", desc: "Creating a clear, smart plan to help your brand grow and reach the right people.", img: "/HP/INNOVATOR%20AND%20TRENDSETTER%20AWARDS%202025-11.jpg" },
              { id: "3", step: "03", title: "Execution", desc: "Running the campaigns perfectly across TV, radio, print, or digital to get maximum attention.", img: "/HP/SANDESH%20HEALTHCARE%20EXCELLENCE%20AWARD%202026-6.jpg" },
              { id: "4", step: "04", title: "Optimization", desc: "Checking the results regularly and making improvements so you get the most out of your money.", img: "/HP/The%20grind_s%20event-WHAT_S%20FOR%20DINNER4.jpg" }
            ].map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover="hover"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative aspect-[4/5] rounded-[3.5rem] overflow-hidden shadow-2xl hover:shadow-brand/20 transition-all duration-500 cursor-pointer border border-white/10"
              >
                {/* Background Image with Overlay */}
                <motion.div 
                  variants={{ hover: { scale: 1.1 } }}
                  transition={{ duration: 0.7 }}
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${step.img})` }}
                />
                
                {/* Fixed Overlay for Text Readability */}
                <motion.div 
                  variants={{ 
                    initial: { backgroundColor: "rgba(59, 62, 142, 0.7)" },
                    hover: { backgroundColor: "rgba(238, 49, 36, 0.85)" } 
                  }}
                  className="absolute inset-0 bg-gradient-to-t from-indigo-navy via-indigo-navy/40 to-transparent transition-colors duration-500" 
                />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end text-white z-10">
                    <motion.span 
                      variants={{ hover: { color: "#ffffff", opacity: 0.6 } }}
                      className="text-white font-black text-6xl md:text-7xl mb-4 opacity-20 block transition-all duration-500 font-serif"
                    >
                      {step.step}
                    </motion.span>
                    <motion.h3 
                      variants={{ hover: { x: 5 } }}
                      className="text-white text-xl md:text-2xl font-black mb-4 leading-tight uppercase font-serif break-words"
                      style={{ color: '#ffffff' }}
                    >
                      {step.title}
                    </motion.h3>
                    <motion.p 
                      variants={{ 
                        initial: { opacity: 0, y: 15 },
                        hover: { opacity: 1, y: 0 } 
                      }}
                      className="text-white/90 text-xs md:text-sm font-medium leading-relaxed max-w-[95%]"
                      style={{ color: '#ffffff' }}
                    >
                      {step.desc}
                    </motion.p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Highlights Gallery Section */}
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <span className="text-brand font-black tracking-[0.3em] uppercase text-xs mb-6 block">
              Brands in Action
            </span>
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight text-indigo-navy">
              Media Highlights & <br />
              <span className="text-brand">Market Presence.</span>
            </h2>
            <div className="w-24 h-2 bg-brand rounded-full mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "National TV Broadcast", category: "TV News", img: "/HP/SANDESH%20HEALTHCARE%20EXCELLENCE%20AWARD%202026-5.jpg" },
              { title: "Prime Radio Slots", category: "Radio", img: "/HP/MYFM%20JAQUAR%20LIGHTNING%20EXPERT%20TALK%20SHOW2.jpg" },
              { title: "OOH Hoarding Strategy", category: "Outdoor", img: "/HP/INNOVATOR%20AND%20TRENDSETTER%20AWARDS%202025-9(2).jpg" },
              { title: "Press Conferences", category: "PR", img: "/HP/SANDESH%20HEALTHCARE%20EXCELLENCE%20AWARD%202026-1.jpg" },
              { title: "Brand Activations", category: "Events", img: "/HP/The%20grind_s%20event-WHAT_S%20FOR%20DINNER4.jpg" },
              { title: "Ip Monetization", category: "Strategic Projects", img: "/HP/INNOVATOR%20AND%20TRENDSETTER%20AWARDS%202025-6.jpg" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="relative group rounded-[2.5rem] overflow-hidden shadow-xl"
              >
                <img src={item.img} alt={item.title} className="w-full aspect-[4/5] object-cover transition-all duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-navy/95 via-indigo-navy/40 to-transparent transition-all duration-500 flex flex-col justify-end p-10">
                  <span className="text-brand text-xs font-black tracking-[0.3em] uppercase mb-2 shadow-sm">{item.category}</span>
                  <h4 className="text-white text-2xl font-black leading-tight drop-shadow-md" style={{ color: '#ffffff' }}>{item.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
