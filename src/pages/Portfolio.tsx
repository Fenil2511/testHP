import { motion } from 'motion/react';
import { Award } from 'lucide-react';
import { SEO } from '../components/SEO';
import { Carousel } from '../components/ui/carousel';
import { EventGallery } from '../components/EventGallery';
import { ClientShowcase } from '../components/ClientShowcase';
import { CTASection } from '../components/CTASection';
import { GLOBAL_KEYWORDS } from '../constants/seo';

const projects = [
  { id: 'dainik-bhaskar', title: '100+ Brand Initiatives', client: 'Dainik Bhaskar Group', category: 'Brand Campaigns', image: '/HP/portfolio-brand-initiatives.png', result: '₹3.5 Crore revenue growth' },
  { id: 'bajaj-mileage', title: 'Sabse Jyada Mileage Test Challenge', client: 'Bajaj Auto', category: 'Strategic Projects', image: '/HP/portfolio-mileage-challenge.png', result: '450,000+ organic impressions' },
  { id: 'hero-honda', title: 'Jung Campus Challenge', client: 'Hero Honda', category: 'Brand Campaigns', image: '/HP/portfolio-campus-challenge.png', result: '15+ campuses engaged' },
  { id: 'vubites', title: 'National #1 Sales Rank', client: 'Vubites (Rediff.com)', category: 'Media Initiatives', image: '/HP/portfolio-sales-rank.png', result: '#1 Regional Sales Ranking' },
  { id: 'ht-operations', title: 'Strategic Media Operations', client: 'Hindustan Times', category: 'Strategic Projects', image: '/HP/portfolio-media-operations.png', result: '18% cost reduction' },
  { id: 'radio-city', title: 'Leadership & Sales Growth', client: 'Radio City', category: 'Media Initiatives', image: '/HP/portfolio-radio-growth.png', result: '25% YoY revenue growth' },
  { id: 'bhaskar-scholarship', title: 'Genius Scholarship Test', client: 'Dainik Bhaskar Group', category: 'Event & Activation', image: '/HP/portfolio-scholarship.png', result: '50,000+ student participants' },
  { id: 'bhaskar-utsav', title: 'Bhaskar Utsav', client: 'Dainik Bhaskar Group', category: 'Event & Activation', image: '/HP/Bhaskar Utsav.jpeg', result: '100,000+ footfalls' },
  { id: 'talk-shows', title: 'High-Profile Talk Shows', client: 'Event IPs', category: 'Media Initiatives', image: '/HP/High-Profile Talk Shows.jpeg', result: 'Sold-out auditoriums' },
];

export function Portfolio() {
  return (
    <div className="bg-white">
      <SEO
        title="Brand Campaign Portfolio | Strategic Media Case Studies"
        description="Success stories and media initiatives for top Indian brands."
        keywords={GLOBAL_KEYWORDS}
        canonicalPath="/portfolio"
      />

      {/* Hero */}
      <section className="relative bg-dark pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/Videos/D_Motion_Graphics_Background_Generation.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-dark/40 to-dark/60" />
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-brand text-xs font-bold tracking-[0.2em] uppercase block mb-4">Portfolio</span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
              Our <span className="text-brand">Work.</span>
            </h1>
            <p className="text-white/50 text-lg max-w-xl mb-8">
              A selection of successful campaigns, media initiatives, and brand activations.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#event-gallery" 
                className="btn btn-white inline-flex"
              >
                Event Gallery
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group no-mobile-animation"
              >
                <div className="aspect-[4/3] overflow-hidden bg-gray-100 mb-5">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover lg:grayscale lg:group-hover:grayscale-0 lg:group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                <span className="text-brand text-[11px] font-bold tracking-[0.15em] uppercase">{project.client}</span>
                <h3 className="text-lg font-bold mt-1 mb-2">{project.title}</h3>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <Award size={14} className="text-brand" />
                  {project.result}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
              Awards & <span className="text-brand">Recognition</span>
            </h2>
            <p className="text-white/50 text-lg max-w-lg mx-auto">
              Recognized for excellence in media strategy, retail branding, and corporate IP development.
            </p>
          </motion.div>

          <Carousel slides={[
            { title: 'Innovator & Trendsetter Award', src: '/HP/INNOVATOR%20AND%20TRENDSETTER%20AWARDS%202025.jpg' },
            { title: 'Healthcare Excellence Awards 2026', src: '/HP/SANDESH%20HEALTHCARE%20EXCELLENCE%20AWARDS%202026.jpg' },
            { title: 'MYFM Jaquar Expert Talk Show', src: '/HP/MYFM%20JAQUAR%20LIGHTNING%20EXPERT%20TALK%20SHOW.jpg' },
            { title: "The Grind's Event - What's For Dinner", src: '/HP/The%20grind_s%20event-WHAT_S%20FOR%20DINNER.jpg' },
            { title: 'MYFM Healthcare Excellence', src: '/HP/MYFM%20%20HEALTHCARE%20EXCELLENCE%20AWARD.jpg' },
            { title: 'Industry Leadership 2025', src: '/HP/INNOVATOR%20AND%20TRENDSETTER%20AWARDS%202025-11.jpg' },
          ]} />
        </div>
      </section>

      <div id="event-gallery">
        <EventGallery 
          title="Event Gallery" 
          subtitle="A comprehensive collection of milestone events, award ceremonies, and media initiatives."
          isDark={true}
        />
      </div>

      <ClientShowcase />
      <CTASection />
    </div>
  );
}
