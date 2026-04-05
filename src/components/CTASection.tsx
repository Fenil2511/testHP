import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export function CTASection() {
  return (
    <section className="py-24 bg-surface-50 relative overflow-hidden">
      {/* Professional Wave Transitions to match Home Page architecture */}
      <div className="absolute top-0 left-0 w-full h-24 bg-white section-wave-top rotate-180"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 pt-12 pb-24">
        <div className="relative rounded-[2rem] md:rounded-[4rem] overflow-hidden shadow-2xl bg-white min-h-[350px] md:min-h-[500px] flex items-center justify-center group border border-indigo-navy/5">
          {/* Light-Themed Motion Background - Contained for Uniformity */}
          <motion.div 
            initial={{ scale: 1 }}
            animate={{ scale: 1.1 }}
            transition={{ 
              duration: 40, 
              repeat: Infinity, 
              repeatType: "reverse", 
              ease: "linear" 
            }}
            className="absolute inset-0 z-0"
          >
            <img 
              src="/cta-motion-light-bg.png" 
              alt="Media Motion Background Light" 
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Sophisticated Soft Light Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/60 via-transparent to-white/40 z-10" />

          {/* Minimalist Action Center */}
          <div className="relative z-20 text-center px-6">
            <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link 
                to="/contact" 
                className="btn-pill btn-secondary shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 px-12 py-5"
              >
                Work With Himanshu
              </Link>
            </motion.div>
          </div>

          {/* Artistic Frame Glare */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent pointer-events-none z-15"></div>
        </div>
      </div>
      
      {/* Wave Transition into Footer Context */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-indigo-navy section-wave-bottom"></div>
    </section>
  );
}
