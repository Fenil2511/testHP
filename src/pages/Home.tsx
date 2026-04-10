import { useRef, useEffect } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Newspaper, Radio, PanelTop, Monitor, Shield, PartyPopper, Trophy, Film, Lightbulb, Globe } from 'lucide-react';
import { SEO } from '../components/SEO';
import { Testimonials } from '../components/Testimonials';
import { EventGallery } from '../components/EventGallery';
import { ClientShowcase } from '../components/ClientShowcase';
import { CTASection } from '../components/CTASection';
import { GLOBAL_KEYWORDS } from '../constants/seo';

const services = [
  { id: 'print-media', icon: <Newspaper size={28} />, title: 'Print Media', desc: 'Newspapers, magazines, and tabloid advertising.' },
  { id: 'radio-tv-media', icon: <Radio size={28} />, title: 'Radio & TV Media', desc: 'FM radio, TV news, and entertainment channels.' },
  { id: 'ooh-hoardings', icon: <PanelTop size={28} />, title: 'OOH & Hoardings', desc: 'Billboards, bus shelters, and outdoor branding.' },
  { id: 'digital-marketing', icon: <Monitor size={28} />, title: 'Digital Marketing', desc: 'Social media, Google ads, and online campaigns.' },
  { id: 'pr-crisis-management', icon: <Shield size={28} />, title: 'PR & Crisis Management', desc: 'Press coverage, media meets, and reputation protection.' },
  { id: 'brand-activation-events', icon: <PartyPopper size={28} />, title: 'Brand Activation & Events', desc: 'On-ground events, launches, and experiential marketing.' },
  { id: 'awards-ip-development', icon: <Trophy size={28} />, title: 'Awards & IP Development', desc: 'Proprietary media properties and award shows.' },
  { id: 'film-production-podcasts', icon: <Film size={28} />, title: 'Film Production & Podcasts', desc: 'Corporate films, ad films, and podcast creation.' },
  { id: 'brand-consulting-strategy', icon: <Lightbulb size={28} />, title: 'Brand Consulting & Strategy', desc: 'Corporate + retail branding and go-to-market plans.' },
  { id: 'online-reputation-management', icon: <Globe size={28} />, title: 'Online Reputation Management', desc: 'Wikipedia, Google Knowledge Panel, and online presence.' },
];

const stats = [
  { value: 20, suffix: '+', label: 'Years Experience' },
  { value: 100, suffix: '+', label: 'Brand Campaigns' },
  { value: 1, prefix: '#', label: 'National Sales Rank' },
];

function StatCounter({ value, prefix = '', suffix = '' }: { value: number; prefix?: string; suffix?: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { 
        duration: 2,
        ease: "easeOut"
      });
      return controls.stop;
    }
  }, [isInView, count, value]);

  return (
    <motion.span ref={ref}>
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </motion.span>
  );
}

export function Home() {
  return (
    <div className="bg-white">
      <SEO
        title="Media Strategy Consultant India | Brand Activation Expert Surat"
        description="Himanshu Parashar — 20+ years of media strategy and brand consulting. Expert in corporate branding, media buying, and 360° brand solutions."
        keywords={GLOBAL_KEYWORDS}
        canonicalPath="/"
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-dark overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-40"
          >
            <source src="/Videos/Media_Dominance_Cityscape_Video_Generation.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-dark/40" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10 py-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-8 tracking-tight">
              BIG RESULTS.<br />
              <span className="text-brand">PERSONAL ATTENTION.</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
              20 years of expertise, 360-degree impact. I fuse the authority of TV and Print with the reach of Digital, OOH, and Radio—all amplified by surgical PR and activations. I don’t just build brands; I scale them to market dominance. Let’s make your impact unavoidable.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn btn-primary">
                Get in Touch
              </Link>
              <Link to="/portfolio" className="btn border-2 border-white/40 text-white hover:bg-white hover:text-dark">
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-brand">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-10">
          <div className="grid grid-cols-3 gap-8 text-center">
            {stats.map((stat, i) => (
              <div key={i}>
                <div className="text-3xl md:text-5xl font-extrabold text-white">
                  <StatCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </div>
                <div className="text-white/70 text-xs md:text-sm font-semibold tracking-wider uppercase mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-[0.05]"
          >
            <source src="/Videos/Media_ecosystem_3D_202604091125.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-white/60" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">What We Do</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Comprehensive media and brand solutions for ambitious businesses.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  to={`/services/${service.id}`}
                  className="block p-8 bg-gray-light/80 backdrop-blur-sm hover:bg-white border border-transparent hover:border-gray-200 hover:shadow-lg transition-all duration-300 group h-full"
                >
                  <div className="text-brand mb-5">{service.icon}</div>
                  <h3 className="text-lg font-bold mb-3 group-hover:text-brand transition-colors">{service.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.desc}</p>
                  <span className="text-brand text-xs font-bold tracking-wider uppercase flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn More <ArrowRight size={14} />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0 opacity-[0.03]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/Videos/Abstract_D_Motion_Background_Generation.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gray-light/40" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative hidden lg:block"
            >
              <div className="aspect-[4/5] max-w-md mx-auto lg:mx-0 overflow-hidden">
                <img
                  src="https://ik.imagekit.io/ib9n0o3ps/IMG-20250821-WA0070%20-%20Himanshu%20Parashar.jpg"
                  alt="Himanshu Parashar"
                  className="w-full h-full object-cover object-top lg:grayscale lg:hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </motion.div>

            {/* Mobile version (No animation or grayscale) */}
            <div className="relative lg:hidden">
              <div className="aspect-[4/5] max-w-md mx-auto lg:mx-0 overflow-hidden">
                <img
                  src="https://ik.imagekit.io/ib9n0o3ps/IMG-20250821-WA0070%20-%20Himanshu%20Parashar.jpg"
                  alt="Himanshu Parashar"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <span className="text-brand text-xs font-bold tracking-[0.2em] uppercase">About</span>
              <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
                Himanshu Parashar
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                A media and brand consultant with over 20 years of experience. I have worked with India's leading media houses — Dainik Bhaskar, Hindustan Times, Radio City, and Rediff.com.
              </p>
              <p className="text-gray-500 leading-relaxed">
                I help businesses build strong brands through smart media strategies. Whether it's retail branding or corporate positioning, I deliver real, measurable results.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-dark font-bold text-sm tracking-wider uppercase hover:text-brand transition-colors"
              >
                Read Full Story <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      
      <div id="event-gallery">
        <EventGallery 
          title="Event Highlights" 
          subtitle="A snapshot of professional milestones, curated events, and industry recognition."
          isDark={true}
        />
      </div>

      {/* Testimonials */}
      <div id="testimonials">
        <Testimonials />
      </div>

      {/* CTA */}
      <ClientShowcase />
      <CTASection />
    </div>
  );
}
