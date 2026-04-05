import { Link } from 'react-router-dom';
import { Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-indigo-navy text-white pt-24 pb-12 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 relative z-10">
        {/* Brand Info */}
        <div className="space-y-8 flex flex-col items-center md:items-start text-center md:text-left">
          <Link to="/" className="flex flex-col items-center md:items-start group">
            <span className="font-serif text-2xl md:text-3xl font-black tracking-tighter">
              HIMANSHU PARASHAR<span className="text-brand">.</span>
            </span>
            <span className="text-white/50 text-[10px] tracking-[0.3em] uppercase font-bold mt-2">
              Strategic Media House
            </span>
          </Link>
          <p className="text-white/60 text-sm font-light leading-relaxed max-w-xs">
            Architecting legacies through 360° media strategy and disruptive brand activation. 20+ years of high-impact industry leadership.
          </p>
          <div className="flex items-center space-x-4">
            <a
              href="https://www.linkedin.com/in/himanshu-parashar-a89186334"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:connect@brandquest.in"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-serif text-lg font-bold mb-8 tracking-wide text-white">Quick Links</h4>
          <ul className="space-y-4">
            {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
              <li key={item}>
                <Link
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className="text-white/60 hover:text-white transition-colors duration-300 text-xs font-bold uppercase tracking-widest"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-serif text-lg font-bold mb-8 tracking-wide text-white">Core Services</h4>
          <ul className="space-y-4">
            {[
              { name: 'Media Buying & Selling', path: '/services#media-buying' },
              { name: 'Retail Brand Consulting', path: '/services#retail-consulting' },
              { name: 'Corporate Brand Consulting', path: '/services#corporate-consulting' },
              { name: 'Media IP Development', path: '/services#media-ip' },
              { name: 'Concept-to-Execution', path: '/services#concept-execution' }
            ].map((service) => (
              <li key={service.name}>
                <Link
                  to={service.path}
                  className="text-white/60 hover:text-white transition-colors duration-300 text-sm font-medium"
                >
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-serif text-lg font-bold mb-8 tracking-wide text-white">Contact</h4>
          <ul className="space-y-6">
            <li className="flex items-start space-x-4 text-white/60 text-sm">
              <MapPin size={20} className="text-brand shrink-0 mt-0.5" />
              <span className="leading-relaxed">
                Brand Quest<br />
                2nd Floor 2056/A, Veniziano Mall<br />
                Vesu, Surat 395007, India
              </span>
            </li>
            <li className="flex items-center space-x-4 text-white/60 text-sm">
              <Phone size={20} className="text-brand shrink-0" />
              <a href="tel:+919913700096" className="hover:text-white transition-colors duration-300">
                +91 99137 00096
              </a>
            </li>
            <li className="flex items-center space-x-4 text-white/60 text-sm">
              <Mail size={20} className="text-brand shrink-0" />
              <a href="mailto:connect@brandquest.in" className="hover:text-white transition-colors duration-300">
                connect@brandquest.in
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-[10px] text-white/40 tracking-[0.2em] uppercase font-bold text-center md:text-left">
        <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} Himanshu Parashar. All rights reserved.</p>
        <div className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-2">
          <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
