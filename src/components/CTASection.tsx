import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export function CTASection() {
  return (
    <section className="relative bg-dark py-24 overflow-hidden">
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
        <div className="absolute inset-0 bg-dark/60" />
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-10 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
            Ready to Build Your Brand?
          </h2>
          <p className="text-white/50 text-lg mb-10 max-w-lg mx-auto">
            Let's create a media strategy that delivers real results for your business.
          </p>
          <Link
            to="/contact"
            className="btn btn-primary"
          >
            Let's Get Started
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
