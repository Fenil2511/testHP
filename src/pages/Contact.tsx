import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Linkedin, Send, Calendar, CheckCircle2 } from 'lucide-react';
import { SEO } from '../components/SEO';
import { GLOBAL_KEYWORDS } from '../constants/seo';
/* ── Media Identity Imports ── */
import { BroadcastBadge } from '../components/BroadcastBadge';
import { ScanLines, GrainTexture, ScreenGlow } from '../components/MediaOverlays';
import { MediaSketchBackground } from '../components/MediaSketchBackground';

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

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // TODO: The user will need to paste their Google Apps Script Web App URL below
    const scriptURL: string = 'https://script.google.com/macros/s/AKfycbwyIGJ5e7JfcZu7KHyy6Pxk5tJmdkI0PPw-eflLdK5pPOglVWpprodb8iiCXLx4KeVa/exec';

    if (!scriptURL || scriptURL === '' || scriptURL.includes('your-google-script-url')) {
      alert("Please configure your Google Apps Script Web App URL in the codebase first!");
      setIsSubmitting(false);
      return;
    }

    try {
      // Need to use FormData for Google Forms/Script
      const data = new FormData();
      data.append('name', formData.name);
      data.append('email', formData.email);
      data.append('phone', formData.phone);
      data.append('message', formData.message);

      const response = await fetch(scriptURL, {
        method: 'POST',
        body: data,
        // mode: 'no-cors' is necessary here as Google Script Web Apps do not send back CORS headers on POST
        mode: 'no-cors'
      });

      // Because of 'no-cors', response won't have standard status logic so we automatically assume success
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });

      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Error submitting form', error);
      setIsSubmitting(false);
      setSubmitStatus('error');
    }
  };

  return (
    <div className="bg-white pt-24">
      <SEO
        title="Contact Himanshu Parashar | Book a Media Strategy Consultation"
        description="Get in touch for professional media consulting and brand strategy projects across India. Office in Vesu, Surat. Schedule your discovery call or consultation today."
        keywords={GLOBAL_KEYWORDS}
        canonicalPath="/contact"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "mainEntity": {
            "@type": "ProfessionalService",
            "name": "Himanshu Parashar — Media & Brand Consultant",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "2nd Floor 2056/A, Veniziano Mall, Vesu",
              "addressLocality": "Surat",
              "addressRegion": "Gujarat",
              "postalCode": "395007",
              "addressCountry": "IN"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+919913700096",
              "contactType": "sales",
              "email": "connect@brandquest.in"
            }
          }
        }}
      />
      {/* Contact Hero - Simple Design with White Visibility Layer */}
      <section className="relative pt-44 pb-32 md:pt-52 md:pb-40 bg-white overflow-hidden">
        {/* Background Image with Layered Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/HP/brand_future_sketch_hero.png"
            alt="Contact Sketch Background"
            className="w-full h-full object-cover opacity-60 blur-[2px]"
          />
          {/* THE WHITE VISIBILITY LAYER - Refined for Sketch Theme */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/40 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.span variants={fadeInUp} className="text-brand font-black tracking-[0.3em] uppercase text-xs mb-6 block">
              Get in Touch
            </motion.span>
            
            <motion.div variants={fadeInUp} className="mb-4">
              <BroadcastBadge variant="media" size="sm" />
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="font-serif font-bold leading-tight mb-8 text-indigo-navy">
              Let's Build Your <br />
              <span className="text-brand italic font-light">Brand's Future</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed max-w-2xl">
              Whether you need strategic media consulting, brand activation, or a comprehensive corporate strategy, I'm here to help you achieve measurable growth.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">

            {/* Contact Details */}
            <div className="lg:col-span-5 space-y-16">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                <motion.h2 variants={fadeInUp} className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-8 underline decoration-brand/20 underline-offset-8">Contact Information</motion.h2>
                
                <div className="space-y-10">
                  <motion.div variants={fadeInUp} className="flex items-start group">
                    <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-brand mr-8 shrink-0 border border-slate-100 group-hover:bg-brand group-hover:text-white transition-all duration-500 shadow-sm">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold tracking-[0.25em] uppercase text-slate-400 mb-4">Office Address</h4>
                      <img
                        src="https://ik.imagekit.io/ib9n0o3ps/Brandquest%20Logo%20BQ%202%20-%20Himanshu%20Parashar.jpg"
                        alt="Brand Quest Logo"
                        className="h-12 w-auto object-contain mb-4 grayscale"
                        referrerPolicy="no-referrer"
                      />
                      <p className="text-slate-600 font-medium leading-relaxed">
                        2nd Floor 2056/A, Veniziano Mall<br />
                        Near Gandhi Cinema, Vesu<br />
                        Surat 395007, India
                      </p>
                    </div>
                  </motion.div>

                  <motion.div variants={fadeInUp} className="flex items-start group">
                    <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-brand mr-8 shrink-0 border border-slate-100 group-hover:bg-brand group-hover:text-white transition-all duration-500 shadow-sm">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold tracking-[0.25em] uppercase text-slate-400 mb-3">Phone</h4>
                      <a href="tel:+919913700096" className="text-xl font-serif font-bold text-slate-900 hover:text-brand transition-colors">
                        +91 99137 00096
                      </a>
                    </div>
                  </motion.div>

                  <motion.div variants={fadeInUp} className="flex items-start group">
                    <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-brand mr-8 shrink-0 border border-slate-100 group-hover:bg-brand group-hover:text-white transition-all duration-500 shadow-sm">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold tracking-[0.25em] uppercase text-slate-400 mb-3">Email</h4>
                      <a href="mailto:connect@brandquest.in" className="text-lg font-medium text-slate-600 hover:text-brand transition-colors">
                        connect@brandquest.in
                      </a>
                    </div>
                  </motion.div>

                  <motion.div variants={fadeInUp} className="flex items-start group">
                    <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-brand mr-8 shrink-0 border border-slate-100 group-hover:bg-brand group-hover:text-white transition-all duration-500 shadow-sm">
                      <Linkedin size={24} />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold tracking-[0.25em] uppercase text-slate-400 mb-3">LinkedIn</h4>
                      <a
                        href="https://www.linkedin.com/in/himanshu-parashar-a89186334"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-medium text-slate-600 hover:text-brand transition-colors border-b border-brand/20 pb-1"
                      >
                        Connect on LinkedIn
                      </a>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Calendly Teaser */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4 }}
                className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 shadow-inner group"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand shadow-sm mr-5 group-hover:rotate-12 transition-transform">
                    <Calendar size={24} />
                  </div>
                  <h4 className="font-serif text-2xl font-bold text-slate-900">Schedule a Meeting</h4>
                </div>
                <p className="text-slate-500 font-light text-base leading-relaxed mb-8">
                  Prefer to speak directly? Book a 30-minute discovery call at your convenience.
                </p>
                <a
                  href="#"
                  onClick={(e) => { e.preventDefault(); alert('Calendly integration would open here.'); }}
                  className="inline-flex items-center h-14 px-10 bg-slate-900 hover:bg-brand text-white text-xs font-bold tracking-[0.2em] uppercase rounded-full transition-all duration-500 w-full justify-center shadow-xl active:scale-95"
                >
                  Book via Calendly
                </a>
              </motion.div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white p-12 md:p-20 rounded-[3rem] shadow-[0_20px_60px_rgba(0,0,0,0.04)] border border-slate-100"
              >
                <div className="mb-12">
                  <h3 className="font-serif text-3xl md:text-5xl font-bold text-slate-900 mb-4">Send a Message</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <label htmlFor="name" className="text-[10px] font-bold tracking-[0.25em] uppercase text-slate-400 block px-2">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full h-14 px-6 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand focus:bg-white transition-all duration-300 placeholder:text-slate-300 text-slate-900 font-medium"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-4">
                      <label htmlFor="phone" className="text-[10px] font-bold tracking-[0.25em] uppercase text-slate-400 block px-2">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full h-14 px-6 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand focus:bg-white transition-all duration-300 placeholder:text-slate-300 text-slate-900 font-medium"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label htmlFor="email" className="text-[10px] font-bold tracking-[0.25em] uppercase text-slate-400 block px-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full h-14 px-6 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand focus:bg-white transition-all duration-300 placeholder:text-slate-300 text-slate-900 font-medium"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div className="space-y-4">
                    <label htmlFor="message" className="text-[10px] font-bold tracking-[0.25em] uppercase text-slate-400 block px-2">How can I help you?</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-6 py-5 bg-slate-50 border border-slate-100 rounded-3xl focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand focus:bg-white transition-all duration-300 placeholder:text-slate-300 text-slate-900 font-medium resize-none"
                      placeholder="Please describe your business goals or the challenges you're facing..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full h-16 text-white text-xs font-bold tracking-[0.3em] uppercase rounded-full transition-all duration-500 flex items-center justify-center shadow-2xl active:scale-95 ${isSubmitting ? 'bg-slate-300 cursor-not-allowed' : 'bg-brand hover:bg-slate-900 shadow-brand/20'
                      }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-4 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        Send Message <Send className="ml-3 w-4 h-4" />
                      </span>
                    )}
                  </button>

                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="p-6 bg-green-50 text-green-800 text-sm font-bold rounded-2xl border border-green-100 text-center flex items-center justify-center"
                    >
                      <CheckCircle2 className="w-5 h-5 mr-3" /> Thank you for reaching out. I will get back to you shortly.
                    </motion.div>
                  )}
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Integration */}
      <section className="h-96 w-full bg-slate-100 relative">
        <iframe
          src="https://maps.google.com/maps?q=Brand+Quest,+2nd+Floor+2036%2FA,+Veniziano+Mall,+Near+Gandhi+Cinema,+Vesu,+Surat+395007,+India&t=&z=15&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Office Location"
          className="absolute inset-0 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
        ></iframe>
      </section>
    </div>
  );
}
