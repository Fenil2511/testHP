import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Newspaper, Radio, PanelTop, Monitor, Shield, PartyPopper, Trophy, Film, Lightbulb, Globe, ChevronDown } from 'lucide-react';
import { SEO } from '../components/SEO';
import { Testimonials } from '../components/Testimonials';
import { ClientShowcase } from '../components/ClientShowcase';
import { CTASection } from '../components/CTASection';
import { GLOBAL_KEYWORDS } from '../constants/seo';

const services = [
  { id: 'print-media', icon: <Newspaper size={28} />, title: 'Print Media', desc: 'Newspapers, magazines, and tabloid advertising.', image: '/HP/service-print-media.png' },
  { id: 'radio-tv-media', icon: <Radio size={28} />, title: 'Radio & TV Media', desc: 'FM radio, TV news, and entertainment channels.', image: '/HP/service-radio-tv.png' },
  { id: 'ooh-hoardings', icon: <PanelTop size={28} />, title: 'OOH & Hoardings', desc: 'Billboards, bus shelters, and outdoor branding.', image: '/HP/service-ooh-hoardings.png' },
  { id: 'digital-marketing', icon: <Monitor size={28} />, title: 'Digital Marketing', desc: 'Social media, Google ads, and online campaigns.', image: '/HP/service-digital-marketing.png' },
  { id: 'pr-crisis-management', icon: <Shield size={28} />, title: 'PR & Crisis Management', desc: 'Press coverage, media meets, and reputation protection.', image: '/HP/service-pr-crisis.png' },
  { id: 'brand-activation-events', icon: <PartyPopper size={28} />, title: 'Brand Activation & Events', desc: 'On-ground events, launches, and experiential marketing.', image: '/HP/service-brand-activation.png' },
  { id: 'awards-ip-development', icon: <Trophy size={28} />, title: 'Awards & IP Development', desc: 'Proprietary media properties and award shows.', image: '/HP/service-awards-ip.png' },
  { id: 'film-production-podcasts', icon: <Film size={28} />, title: 'Film Production & Podcasts', desc: 'Corporate films, ad films, and podcast creation.', image: '/HP/service-film-podcasts.png' },
  { id: 'brand-consulting-strategy', icon: <Lightbulb size={28} />, title: 'Brand Consulting & Strategy', desc: 'Corporate + retail branding and go-to-market plans.', image: '/HP/service-brand-consulting.png' },
  { id: 'online-reputation-management', icon: <Globe size={28} />, title: 'Online Reputation Management', desc: 'Wikipedia, Google Knowledge Panel, and online presence.', image: '/HP/service-online-reputation.png' },
];

const whyChooseUs = [
  { title: 'Customized Approach', desc: 'We create a tailored strategy for every client. No two brands are the same, and neither are our solutions.' },
  { title: 'Expert Team', desc: 'Our professionals bring decades of industry experience, delivering top-tier results consistently.' },
  { title: 'Proactive Innovation', desc: 'We stay ahead of market trends, offering you cutting-edge solutions that keep your brand visible.' },
  { title: 'Comprehensive Support', desc: 'From strategy to crisis management, we provide end-to-end services for every stage.' },
];

import { useState } from 'react';

export function Services() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);
  return (
    <div className="bg-white">
      <SEO
        title="Media Consulting Services | Corporate Brand Strategy Surat"
        description="Comprehensive media services including print, radio, TV, digital, PR, events, film production, and brand consulting."
        keywords={GLOBAL_KEYWORDS}
        canonicalPath="/services"
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
            <source src="/Videos/Abstract_D_Motion_Background_Generation.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-dark/40 to-dark/60" />
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-brand text-xs font-bold tracking-[0.2em] uppercase block mb-4">Our Services</span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
              What We <span className="text-brand">Do.</span>
            </h1>
            <p className="text-white/50 text-lg max-w-xl mb-8">
              Simple, effective media and brand solutions. We help you reach the right audience and grow your business.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#testimonials" 
                className="btn btn-white"
              >
                Client Testimonials
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="no-mobile-animation"
              >
                <Link
                  to={`/services/${service.id}`}
                  className="block group h-full"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-gray-100 mb-6">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover lg:grayscale lg:group-hover:grayscale-0 lg:group-hover:scale-105 transition-all duration-700"
                    />
                  </div>
                  <div className="text-brand mb-3">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-brand transition-colors">{service.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.desc}</p>
                  <span className="text-brand text-xs font-bold tracking-wider uppercase flex items-center gap-2">
                    Learn More <ArrowRight size={14} />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us — Accordion */}
      <section className="py-24 bg-gray-light">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight">
                Why Choose<br />Himanshu Parashar!
              </h2>
            </div>
            <div className="space-y-2">
              {whyChooseUs.map((item, i) => (
                <div key={i} className="bg-white">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left font-bold uppercase tracking-wider text-sm"
                  >
                    {item.title}
                    <ChevronDown
                      size={18}
                      className={`transition-transform ${openAccordion === i ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {openAccordion === i && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="px-6 pb-6"
                    >
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div id="testimonials">
        <Testimonials isDark={true} />
      </div>

      <ClientShowcase />
      <CTASection />
    </div>
  );
}
