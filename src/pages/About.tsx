import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { SEO } from '../components/SEO';
import { ClientShowcase } from '../components/ClientShowcase';
import { CTASection } from '../components/CTASection';
import { GLOBAL_KEYWORDS } from '../constants/seo';

const timeline = [
  { company: 'THE GRIND (English Tabloid)', role: 'COO & Partner', duration: 'Current' },
  { company: 'BRAND QUEST & WHITE GLOBE', role: 'Founder & Director', duration: '3 Years' },
  { company: 'VUBITES (Rediff.com)', role: 'Location Head — Gujarat & Maharashtra', duration: '4+ Years' },
  { company: 'HINDUSTAN TIMES', role: 'Operations Head', duration: '2 Years' },
  { company: 'RADIO CITY', role: 'Group Sales Head', duration: '3 Years' },
  { company: 'DAINIK BHASKAR GROUP', role: 'Senior Manager — Space Selling & Activations', duration: '7.5 Years' },
];

export function About() {
  return (
    <div className="bg-white">
      <SEO
        title="About Himanshu Parashar | 20+ Years Media Career"
        description="Learn about Himanshu Parashar's 20-year journey in the Indian media industry."
        keywords={GLOBAL_KEYWORDS}
        canonicalPath="/about"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Himanshu Parashar",
          "jobTitle": "Media & Brand Consultant",
          "knowsAbout": ["Media Strategy", "Brand Consulting", "Sales Leadership"]
        }}
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
            <span className="text-brand text-xs font-bold tracking-[0.2em] uppercase block mb-4">About Us</span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
              Himanshu <span className="text-brand">Parashar.</span>
            </h1>
            <p className="text-white/50 text-lg max-w-xl">
              Media & Brand Consultant with over two decades of experience shaping India's top brands.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="hidden lg:block"
            >
              <div className="aspect-[4/5] overflow-hidden bg-gray-100">
                <img
                  src="https://ik.imagekit.io/ib9n0o3ps/IMG-20250821-WA0070%20-%20Himanshu%20Parashar.jpg"
                  alt="Himanshu Parashar"
                  className="w-full h-full object-cover object-top lg:grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </motion.div>
            
            {/* Mobile version (No animation/grayscale) */}
            <div className="lg:hidden">
              <div className="aspect-[4/5] overflow-hidden bg-gray-100">
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
              <h2 className="text-3xl md:text-4xl font-extrabold">The Journey</h2>
              <div className="w-16 h-1 bg-brand" />

              <p className="text-gray-600 leading-relaxed">
                My journey spans over 20 years in India's media industry. I have worked at the country's top media houses — Dainik Bhaskar, Hindustan Times, Radio City, BIG FM, MYFM, and Rediff.com.
              </p>
              <p className="text-gray-600 leading-relaxed">
                As the Founder of Brand Quest & White Globe, I brought big-agency thinking to retail and corporate brands. My approach is simple — understand the business first, then build a strategy that delivers results.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Currently serving as COO & Partner at The Grind, I continue to help businesses build their media presence and grow their brands across India.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <Link
                  to="/contact"
                  className="btn btn-primary"
                >
                  Work With Me
                </Link>
                <Link
                  to="/portfolio#event-gallery"
                  className="btn btn-outline"
                >
                  Event Highlights
                </Link>
                <Link
                  to="/#testimonials"
                  className="btn btn-outline"
                >
                  Client Reviews
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-gray-light">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Professional Experience</h2>
            <div className="w-16 h-1 bg-brand mx-auto" />
          </motion.div>

          <div className="max-w-3xl mx-auto relative">
            {/* Vertical Line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200 ml-[31px] md:ml-[39px] hidden md:block" />

            <div className="space-y-6">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative flex items-start gap-8"
                >
                  {/* Marker */}
                  <div className="hidden md:flex shrink-0 w-20 h-20 items-center justify-center relative">
                    <div className="w-10 h-10 rounded-full bg-white border-2 border-gray-200 group-hover:border-brand group-hover:scale-110 transition-all duration-500 flex items-center justify-center z-10 shadow-sm">
                      <span className="text-xs font-bold text-gray-400 group-hover:text-brand">0{i + 1}</span>
                    </div>
                    {/* Pulsing effect */}
                    <div className="absolute inset-0 rounded-full bg-brand/5 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-700" />
                  </div>

                  <div className="flex-grow bg-white p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 border border-gray-100 relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-1 h-full bg-brand transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                    
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <h3 className="font-bold text-lg leading-tight group-hover:text-brand transition-colors">{item.company}</h3>
                        <p className="text-gray-500 font-medium text-sm mt-1">{item.role}</p>
                      </div>
                      <span className="bg-gray-50 text-gray-400 group-hover:bg-brand/10 group-hover:text-brand px-3 py-1 text-[10px] font-bold tracking-wider uppercase rounded-full transition-all shrink-0 self-start md:self-center">
                        {item.duration}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ClientShowcase />
      <CTASection />
    </div>
  );
}
