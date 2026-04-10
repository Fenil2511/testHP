import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="block mb-4">
              <span className="text-2xl font-extrabold tracking-tight uppercase">
                Himanshu Parashar<span className="text-brand">.</span>
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Media & Brand Consultant with 20+ years of industry leadership across India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold tracking-[0.15em] uppercase mb-6 text-white/80">Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'Services', path: '/services' },
                { name: 'Portfolio', path: '/portfolio' },
                { name: 'About Us', path: '/about' },
                { name: 'Contact', path: '/contact' }
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-white/50 hover:text-white text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold tracking-[0.15em] uppercase mb-6 text-white/80">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-white/50 text-sm">
                <MapPin size={18} className="text-brand shrink-0 mt-0.5" />
                <span>
                  Brand Quest, 2nd Floor 2056/A,<br />
                  Veniziano Mall, Vesu,<br />
                  Surat 395007, India
                </span>
              </li>
              <li className="flex items-center space-x-3 text-white/50 text-sm">
                <Phone size={16} className="text-brand shrink-0" />
                <a href="tel:+919913700096" className="hover:text-white transition-colors">
                  +91 99137 00096
                </a>
              </li>
              <li className="flex items-center space-x-3 text-white/50 text-sm">
                <Mail size={16} className="text-brand shrink-0" />
                <a href="mailto:connect@brandquest.in" className="hover:text-white transition-colors">
                  connect@brandquest.in
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex flex-col md:flex-row items-center justify-between text-xs text-white/30">
          <p>&copy; {new Date().getFullYear()} Himanshu Parashar. All rights reserved.</p>
          <div className="flex gap-6 mt-3 md:mt-0">
            <Link to="/privacy" className="hover:text-white/60 transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-white/60 transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
