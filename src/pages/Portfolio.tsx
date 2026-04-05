import { motion } from 'motion/react';
import { Award, ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MediaSketchBackground } from '../components/MediaSketchBackground';
import { SEO } from '../components/SEO';
import { Carousel } from '../components/ui/carousel';
import { CTASection } from '../components/CTASection';
import { BrandShowcase } from '../components/BrandShowcase';
import { GLOBAL_KEYWORDS } from '../constants/seo';

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

const projects = [
  {
    id: "dainik-bhaskar",
    title: "100+ Brand Initiatives",
    client: "Dainik Bhaskar Group",
    category: "Brand Campaigns",
    image: "/HP/INNOVATOR%20AND%20TRENDSETTER%20AWARDS%202025.jpg",
    description: "Spearheaded over 100 successful brand initiatives, driving massive engagement and revenue growth through strategic space selling and on-ground activations.",
    results: ["Achieved ₹3.5 Crore in targeted revenue growth", "Captured 15% additional regional market share", "Executed 40+ successful on-ground events"]
  },
  {
    id: "bajaj-mileage",
    title: "Sabse Jyada Mileage Challenge",
    client: "Bajaj Auto",
    category: "Strategic Projects",
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Conceptualized and executed a high-impact, nationwide challenge that significantly boosted brand perception and sales for Bajaj's high-mileage commuter segment.",
    results: ["Generated 450,000+ local organic impressions", "Drove a 15% spike in dealer walk-ins", "Over 5,000 active regional challenge participants"]
  },
  {
    id: "hero-honda",
    title: "Campus Challenge",
    client: "Hero Honda",
    category: "Brand Campaigns",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Designed a targeted youth-centric campaign across major university campuses, successfully positioning the brand among the crucial 18-24 demographic.",
    results: ["Engaged 15+ major campuses across Gujarat", "Reached 120,000+ students digitally", "Increased 18-24 targeted demographic sales by 12%"]
  },
  {
    id: "vubites",
    title: "National #1 Sales Rank",
    client: "Vubites (Rediff.com)",
    category: "Media Initiatives",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Led the Gujarat & Maharashtra regions to achieve the coveted National #1 Sales Rank through innovative local media selling strategies and team leadership.",
    results: ["Secured #1 Regional Sales Ranking", "Grew Gujarat revenue by 85% YoY", "Maintained 90% key client retention rate"]
  },
  {
    id: "ht-operations",
    title: "Strategic Media Operations",
    client: "Hindustan Times",
    category: "Strategic Projects",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Overhauled media operations to streamline processes, reduce inefficiencies, and improve overall profitability for the regional editions.",
    results: ["Reduced operational cost by 18%", "Accelerated local ad delivery times by 25%", "Boosted quarterly ad revenue by ₹1.2 Crore"]
  },
  {
    id: "radio-city",
    title: "Leadership & Sales Growth",
    client: "Radio City",
    category: "Media Initiatives",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Drove significant sales growth by developing customized, integrated radio solutions for top-tier corporate clients.",
    results: ["Delivered 25% Year-on-Year regional revenue growth", "Onboarded 8 major state-level accounts", "Achieved 2x ROI on integrated radio campaigns"]
  },
  {
    id: "bhaskar-scholarship",
    title: "Genius Scholarship Test",
    client: "Dainik Bhaskar Group",
    category: "Event & Activation",
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=800",
    description: "Conceptualized and executed a massive educational event in MP & Chhattisgarh to engage the local student community.",
    results: ["Over 50,000 student participants", "Widespread regional media coverage", "Strengthened brand loyalty among local youths"]
  },
  {
    id: "corporate-cricket",
    title: "Corporate Cricket Tournament",
    client: "Brand Activation",
    category: "Event & Activation",
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&q=80",
    description: "Organized a premier corporate cricket tournament to foster B2B relationships and drive brand engagement.",
    results: ["Participation from 20+ top corporates", "High on-ground brand visibility", "Strong networking and PR opportunities"]
  },
  {
    id: "bhaskar-utsav",
    title: "Bhaskar Utsav",
    client: "Dainik Bhaskar Group",
    category: "Event & Activation",
    image: "/HP/The%20grind_s%20event-WHAT_S%20FOR%20DINNER1.jpg",
    description: "Successfully spearheaded the Bhaskar Utsav, a massive cultural and lifestyle festival celebrating local traditions and bringing the community together.",
    results: ["Attracted over 100,000 footfalls", "Significant boost in local brand affinity", "Generated multiple high-value sponsorships"]
  },
  {
    id: "talk-shows",
    title: "High-Profile Talk Shows",
    client: "Event IPs",
    category: "Media Initiatives",
    image: "/HP/MYFM%20JAQUAR%20LIGHTNING%20EXPERT%20TALK%20SHOW1.jpg",
    description: "Organized and managed exclusive talk shows featuring renowned personalities like Shiv Khera and Chetan Bhagat for massive audience engagement.",
    results: ["Sold-out auditoriums", "Premium ticket and sponsor revenue", "Massive earned media and PR"]
  },
  {
    id: "education-tabloid",
    title: "Education Tabloid Introduction",
    client: "Dainik Bhaskar Group",
    category: "Strategic Projects",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80",
    description: "Spearheaded the conceptualization and successful launch of a specialized Education Tabloid, opening up a highly lucrative new advertising sector.",
    results: ["Captured massive education sector ad-spend", "Established thought leadership in education", "High reader retention and subscriber growth"]
  },
  {
    id: "lifestyle-segment",
    title: "Lifestyle Segment Expansion",
    client: "Dainik Bhaskar Group",
    category: "Strategic Projects",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80",
    description: "Driven the introduction and commercial strategy for a specialized lifestyle segment, effectively capturing premium lifestyle and retail brand advertisers.",
    results: ["Onboarded 20+ premium lifestyle brands", "Significant increase in weekend ad rates", "Enhanced newspaper aesthetic value"]
  }
];

export function Portfolio() {
  return (
    <div className="bg-white overflow-x-hidden">
      <SEO
        title="Brand Campaign Portfolio | Strategic Media Case Studies"
        description="Success stories and media initiatives for top Indian brands including Dainik Bhaskar, Hindustan Times, Radio City, BIG FM, MYFM, and Rediff.com. Proven results in revenue growth and brand leadership."
        keywords={GLOBAL_KEYWORDS}
        canonicalPath="/portfolio"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Media Project Portfolio",
          "itemListElement": projects.map((p, i) => ({
            "@type": "ListItem",
            "position": i + 1,
            "item": {
              "@type": "CreativeWork",
              "name": p.title,
              "description": p.description,
              "author": { "@type": "Person", "name": "Himanshu Parashar" }
            }
          }))
        }}
      />
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center pt-32 pb-24 bg-gradient-to-br from-surface-50 via-white to-[#fff0f5] overflow-hidden">
        <MediaSketchBackground 
          src="/illustrations/media_sketch_legacy_v2.png" 
          opacity={0.3} 
          position="right"
          top="top-10"
          blur={true}
        />
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
                Featured Work
              </motion.span>
              <motion.h1 variants={fadeInUp} className="font-black leading-[1.1] tracking-tighter text-indigo-navy mb-8">
                A Legacy of <br className="hidden sm:block" />
                <span className="text-brand">Impactful Campaigns.</span>
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed max-w-xl">
                Explore a curated selection of strategic media projects, brand activations, and revenue-driving initiatives that have shaped industry standards.
              </motion.p>
              <motion.div variants={fadeInUp} className="mt-12 flex items-center gap-6">
                <a 
                  href="#awards" 
                  className="btn-pill btn-primary inline-flex items-center group"
                >
                  View Awards & Recognition <Award className="ml-4 w-5 h-5 group-hover:rotate-12 transition-transform" />
                </a>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative hidden lg:block h-[500px]"
            >
                {/* Floating 3D Elements - Adjusted for better responsiveness */}
                <motion.div 
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 md:w-80 h-48 md:h-80 z-20 drop-shadow-2xl"
                >
                  <img src="/illustrations/3d_megaphone_illustration_1774898948586.png" alt="Megaphone Broadcast" className="w-full h-full object-contain" />
                </motion.div>

                <motion.div 
                  animate={{ x: [0, 10, 0], y: [0, 20, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute top-10 right-5 md:right-0 w-24 md:w-48 h-24 md:h-48 z-10 drop-shadow-xl"
                >
                  <img src="/illustrations/3d_target_illustration_1774898897023.png" alt="Target" className="w-full h-full object-contain opacity-20 md:opacity-40 group-hover:opacity-100 transition-opacity" />
                </motion.div>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-white section-wave-bottom"></div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                className="bg-white/80 backdrop-blur-sm rounded-[2.5rem] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-2xl border border-slate-100 transition-all duration-700 group flex flex-col"
              >
                <div className="relative aspect-[4/3] overflow-hidden p-3 bg-white">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-[2rem] grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-8 left-8 z-30">
                    <span className="px-4 py-1.5 bg-white/95 backdrop-blur-md text-slate-900 text-[10px] font-black tracking-[0.2em] uppercase rounded-full shadow-xl">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-10 flex-grow flex flex-col pt-6">
                  <span className="text-brand text-[10px] font-black tracking-[0.3em] uppercase mb-3 block">
                    {project.client}
                  </span>
                  <h3 className="text-2xl font-black text-indigo-navy mb-4 transition-colors duration-500">
                    {project.title}
                  </h3>
                  <p className="text-slate-500 font-medium text-sm leading-relaxed mb-10 flex-grow">
                    {project.description}
                  </p>

                  <div className="pt-6 border-t border-slate-200 mt-auto">
                    <h4 className="text-[10px] font-black tracking-[0.25em] uppercase text-slate-400 mb-4 flex items-center">
                      <Award className="w-4 h-4 mr-2 text-brand" /> Key Results
                    </h4>
                    <ul className="space-y-3">
                      {project.results.map((result, i) => (
                        <li key={i} className="text-slate-600 font-medium text-sm flex items-start group/it">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand/30 mt-2.5 mr-3 shrink-0 group-hover/it:bg-brand group-hover/it:scale-125 transition-all duration-300"></span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Authority Section */}
      <BrandShowcase />

      {/* Awards & Recognition Section - Architectural Redesign */}
      <section id="awards" className="relative py-40 bg-indigo-navy text-white overflow-hidden">
        {/* Soft Section Transition */}
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white to-transparent"></div>

        {/* Global Architectural Sketches for Depth */}
        <div className="absolute inset-0 opacity-[0.05] mix-blend-screen pointer-events-none">
          <MediaSketchBackground opacity={1} blur={true} position="left" />
        </div>
        
        <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-24"
          >
            <motion.span 
              variants={fadeInUp} 
              className="inline-flex items-center px-8 py-3 bg-white rounded-full text-brand text-xs font-black tracking-[0.4em] uppercase mb-10 shadow-xl"
            >
              Industry Authority
            </motion.span>
            
            <motion.h2 variants={fadeInUp} className="text-5xl md:text-[6rem] font-black mb-10 tracking-tighter leading-none">
              <span className="text-white block" style={{ color: '#ffffff' }}>Awards &</span>
              <span className="text-brand italic font-light relative leading-none block">
                Accomplishments
                <div className="absolute -bottom-4 left-0 w-full h-2 bg-brand rounded-full"></div>
              </span>
            </motion.h2>
            
            <motion.p variants={fadeInUp} className="text-white text-lg md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed italic opacity-80 mb-12">
              "Honored with prestigious industry titles for excellence in media strategy, retail branding, and corporate IP development."
            </motion.p>
          </motion.div>

          <Carousel slides={[
            {
              title: "Innovator & Trendsetter Award (dot com)",
              src: "/HP/INNOVATOR%20AND%20TRENDSETTER%20AWARDS%202025.jpg"
            },
            {
              title: "Healthcare Excellence Award (Sandesh)",
              src: "/HP/SANDESH%20HEALTHCARE%20EXCELLENCE%20AWARDS%202026.jpg"
            },
            {
              title: "MYFM Jaquar Expert Talk Show",
              src: "/HP/MYFM%20JAQUAR%20LIGHTNING%20EXPERT%20TALK%20SHOW1.jpg"
            },
            {
              title: "The Grind's Event - What's For Dinner",
              src: "/HP/The%20grind_s%20event-WHAT_S%20FOR%20DINNER.jpg"
            },
            {
              title: "Industry Recognition Award 2025",
              src: "/HP/INNOVATOR%20AND%20TRENDSETTER%20AWARDS%202025-11.jpg"
            },
            {
              title: "Business Networking & Expert Panels",
              src: "/HP/MYFM%20JAQUAR%20LIGHTNING%20EXPERT%20TALK%20SHOW2.jpg"
            }
          ]} />
        </div>
      </section>

      <CTASection />
    </div>
  );
}
