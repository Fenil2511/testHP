import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle2, Calendar } from 'lucide-react';
import { SEO } from '../components/SEO';
import { GLOBAL_KEYWORDS } from '../constants/seo';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
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

    const scriptURL = 'https://script.google.com/macros/s/AKfycbwyIGJ5e7JfcZu7KHyy6Pxk5tJmdkI0PPw-eflLdK5pPOglVWpprodb8iiCXLx4KeVa/exec';

    try {
      const data = new FormData();
      data.append('name', formData.name);
      data.append('email', formData.email);
      data.append('phone', formData.phone);
      data.append('message', formData.message);

      await fetch(scriptURL, { method: 'POST', body: data, mode: 'no-cors' });

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
    <div className="bg-white">
      <SEO
        title="Contact Himanshu Parashar | Book a Consultation"
        description="Get in touch for media consulting and brand strategy. Office in Surat, Gujarat."
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

      {/* Hero */}
      <section className="relative bg-dark pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
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
            <span className="text-brand text-xs font-bold tracking-[0.2em] uppercase block mb-4">Get In Touch</span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
              Contact <span className="text-brand">Us.</span>
            </h1>
            <p className="text-white/50 text-lg max-w-xl">
              Let's discuss how we can help your brand grow. Reach out today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

            {/* Contact Info */}
            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-10"
              >
                <div className="pt-2">
                  <h2 className="text-2xl font-extrabold pb-4">Contact Information</h2>
                  <div className="w-12 h-1 bg-brand" />
                </div>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <MapPin size={20} className="text-brand shrink-0 mt-1" />
                    <div>
                      <h4 className="text-xs font-bold tracking-[0.15em] uppercase text-gray-400 mb-2">Office</h4>
                      <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                        <img 
                          src="/Brandquest%20Logo%20BQ%202%20-%20Himanshu%20Parashar%20(1).jpg" 
                          alt="Brand Quest" 
                          className="h-14 w-auto object-contain rounded border border-gray-200 mix-blend-multiply flex-shrink-0" 
                        />
                        <p className="text-gray-600 text-sm leading-relaxed mt-1 sm:mt-0">
                          <strong>Brand Quest</strong><br />
                          2nd Floor 2056/A, Veniziano Mall,<br />
                          Vesu, Surat 395007, India
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone size={20} className="text-brand shrink-0 mt-1" />
                    <div>
                      <h4 className="text-xs font-bold tracking-[0.15em] uppercase text-gray-400 mb-2">Phone</h4>
                      <a href="tel:+919913700096" className="text-gray-800 font-semibold hover:text-brand transition-colors">
                        +91 99137 00096
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail size={20} className="text-brand shrink-0 mt-1" />
                    <div>
                      <h4 className="text-xs font-bold tracking-[0.15em] uppercase text-gray-400 mb-2">Email</h4>
                      <a href="mailto:connect@brandquest.in" className="text-gray-800 font-semibold hover:text-brand transition-colors">
                        connect@brandquest.in
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Linkedin size={20} className="text-brand shrink-0 mt-1" />
                    <div>
                      <h4 className="text-xs font-bold tracking-[0.15em] uppercase text-gray-400 mb-2">LinkedIn</h4>
                      <a
                        href="https://www.linkedin.com/in/himanshu-parashar-a89186334"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-800 font-semibold hover:text-brand transition-colors"
                      >
                        Connect on LinkedIn
                      </a>
                    </div>
                  </div>

                  <div className="pt-6">
                    <a
                      href="https://calendly.com/brandhimanshu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary w-full flex items-center justify-center gap-3 py-4"
                    >
                      <Calendar size={18} />
                      Schedule a Meeting
                    </a>
                    <p className="text-[10px] text-gray-400 text-center mt-3 uppercase tracking-widest font-bold">
                      Direct Consultation Booking
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gray-light p-10 md:p-14"
              >
                <h3 className="text-2xl font-extrabold mb-8">Send a Message</h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="text-xs font-bold tracking-[0.15em] uppercase text-gray-400 block mb-2">Full Name</label>
                      <input
                        type="text" id="name" name="name" value={formData.name} onChange={handleChange} required
                        className="w-full h-13 px-5 bg-white border border-gray-200 focus:outline-none focus:border-brand text-sm"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="text-xs font-bold tracking-[0.15em] uppercase text-gray-400 block mb-2">Phone</label>
                      <input
                        type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange}
                        className="w-full h-13 px-5 bg-white border border-gray-200 focus:outline-none focus:border-brand text-sm"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="text-xs font-bold tracking-[0.15em] uppercase text-gray-400 block mb-2">Email</label>
                    <input
                      type="email" id="email" name="email" value={formData.email} onChange={handleChange} required
                      className="w-full h-13 px-5 bg-white border border-gray-200 focus:outline-none focus:border-brand text-sm"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="text-xs font-bold tracking-[0.15em] uppercase text-gray-400 block mb-2">Message</label>
                    <textarea
                      id="message" name="message" value={formData.message} onChange={handleChange} required rows={5}
                      className="w-full px-5 py-4 bg-white border border-gray-200 focus:outline-none focus:border-brand text-sm resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full h-14 text-white text-xs font-bold tracking-[0.2em] uppercase flex items-center justify-center transition-all ${
                      isSubmitting ? 'bg-gray-300 cursor-not-allowed' : 'bg-brand hover:bg-brand-dark'
                    }`}
                  >
                    {isSubmitting ? 'Sending...' : (<><span>Send Message</span><Send className="ml-3 w-4 h-4" /></>)}
                  </button>

                  {submitStatus === 'success' && (
                    <div className="p-5 bg-green-50 text-green-800 text-sm font-semibold flex items-center justify-center gap-2">
                      <CheckCircle2 className="w-5 h-5" /> Thank you! We will get back to you shortly.
                    </div>
                  )}
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-80 w-full bg-gray-100 relative">
        <iframe
          src="https://maps.google.com/maps?q=Brand+Quest,+2nd+Floor+2036%2FA,+Veniziano+Mall,+Near+Gandhi+Cinema,+Vesu,+Surat+395007,+India&t=&z=15&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Office Location"
          className="absolute inset-0 lg:grayscale lg:hover:grayscale-0 transition-all duration-500"
        />
      </section>
    </div>
  );
}
