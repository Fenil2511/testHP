import { Link } from 'react-router-dom';
import { Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-indigo-navy text-white pt-6 md:pt-24 pb-4 md:pb-12 overflow-hidden">
      <div className="container mx-auto px-4 md:px-12 grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-6 md:gap-16 relative z-10">
        {/* Brand Info */}
        <div className="col-span-2 lg:col-span-1 space-y-2 flex flex-col items-center md:items-start text-center md:text-left">
          <Link to="/" className="flex flex-col items-center md:items-start group">
            <span className="font-serif text-xl md:text-3xl font-black tracking-tighter">
              HIMANSHU PARASHAR<span className="text-brand">.</span>
            </span>
            <span className="text-white/50 text-[9px] tracking-[0.2em] uppercase font-bold mt-1">
              Strategic Media House
            </span>
          </Link>
          <p className="text-white/60 text-[10px] md:text-sm font-light leading-relaxed max-w-xs opacity-80">
            20+ years of high-impact industry leadership.
          </p>
          <div className="flex items-center space-x-3">
            <a
              href="https://www.linkedin.com/in/himanshu-parashar-a89186334"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={14} />
            </a>
            <a
              href="mailto:connect@brandquest.in"
              className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={14} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="col-span-1">
          <h4 className="font-serif text-[11px] md:text-lg font-bold mb-2 md:mb-8 tracking-wide text-white uppercase">Links</h4>
          <ul className="space-y-1 md:space-y-4">
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
        <div className="col-span-1">
          <h4 className="font-serif text-[11px] md:text-lg font-bold mb-2 md:mb-8 tracking-wide text-white uppercase">Services</h4>
          <ul className="space-y-1 md:space-y-4">
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
        <div className="col-span-2 lg:col-span-1 border-t border-white/5 pt-4 mt-2 lg:border-t-0 lg:pt-0 lg:mt-0">
          <h4 className="font-serif text-[11px] md:text-lg font-bold mb-2 md:mb-8 tracking-wide text-white uppercase">Contact</h4>
          <ul className="space-y-2 md:space-y-6">
            <li className="flex items-start space-x-2 md:space-x-4 text-white/60 text-[10px] md:text-sm">
              <MapPin size={20} className="text-brand shrink-0 mt-0.5" />
              <span className="leading-relaxed">
                Brand Quest<br />
                2nd Floor 2056/A, Veniziano Mall<br />
                Vesu, Surat 395007, India
              </span>
            </li>
            <li className="flex items-center space-x-3 md:space-x-4 text-white/60 text-[11px] md:text-sm">
              <Phone size={16} className="text-brand shrink-0" />
              <a href="tel:+919913700096" className="hover:text-white transition-colors duration-300">
                +91 99137 00096
              </a>
            </li>
            <li className="flex items-center space-x-3 md:space-x-4 text-white/60 text-[11px] md:text-sm">
              <Mail size={16} className="text-brand shrink-0" />
              <a href="mailto:connect@brandquest.in" className="hover:text-white transition-colors duration-300">
                connect@brandquest.in
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 mt-10 md:mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-[10px] text-white/40 tracking-[0.2em] uppercase font-bold text-center md:text-left">
        <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} Himanshu Parashar. All rights reserved.</p>
        <div className="flex flex-wrap justify-center md:justify-end gap-x-4 md:gap-x-8 gap-y-2">
          <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
          <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
