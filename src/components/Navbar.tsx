import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const services = [
  { name: 'Print Media', id: 'print-media' },
  { name: 'Radio & TV Media', id: 'radio-tv-media' },
  { name: 'OOH & Hoardings', id: 'ooh-hoardings' },
  { name: 'Digital Marketing', id: 'digital-marketing' },
  { name: 'PR & Crisis Management', id: 'pr-crisis-management' },
  { name: 'Brand Activation & Events', id: 'brand-activation-events' },
  { name: 'Awards & IP Development', id: 'awards-ip-development' },
  { name: 'Film Production & Podcasts', id: 'film-production-podcasts' },
  { name: 'Brand Consulting & Strategy', id: 'brand-consulting-strategy' },
  { name: 'Online Reputation Management', id: 'online-reputation-management' },
];

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services', hasDropdown: true },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setShowDropdown(false);
    setMobileServicesOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark shadow-lg py-3'
          : 'bg-dark/95 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-white text-xl md:text-2xl font-extrabold tracking-tight uppercase">
            Himanshu Parashar<span className="text-brand">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative"
              onMouseEnter={() => link.hasDropdown && setShowDropdown(true)}
              onMouseLeave={() => link.hasDropdown && setShowDropdown(false)}
              ref={link.hasDropdown ? dropdownRef : undefined}
            >
              <Link
                to={link.path}
                className={`text-[13px] font-semibold tracking-[0.15em] uppercase transition-colors duration-200 flex items-center gap-1 ${
                  location.pathname === link.path || (link.hasDropdown && location.pathname.startsWith('/services'))
                    ? 'text-brand'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {link.name}
                {link.hasDropdown && <ChevronDown size={14} className={`transition-transform ${showDropdown ? 'rotate-180' : ''}`} />}
              </Link>

              {/* Services Dropdown */}
              {link.hasDropdown && (
                <AnimatePresence>
                  {showDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-72 bg-white shadow-2xl border border-gray-100 z-50"
                    >
                      {services.map((service) => (
                        <Link
                          key={service.id}
                          to={`/services/${service.id}`}
                          className="flex items-center justify-between px-6 py-4 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand transition-colors border-b border-gray-50 last:border-b-0 font-medium"
                        >
                          {service.name}
                          <ChevronRight size={14} className="text-gray-300" />
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-dark border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-6 space-y-1">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.hasDropdown ? (
                    <>
                      <button
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className="flex items-center justify-between w-full py-3 text-white font-semibold tracking-wider uppercase text-sm"
                      >
                        {link.name}
                        <ChevronDown size={16} className={`transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden pl-4"
                          >
                            {services.map((service) => (
                              <Link
                                key={service.id}
                                to={`/services/${service.id}`}
                                className="block py-2.5 text-white/60 hover:text-brand text-sm font-medium"
                                onClick={() => setIsOpen(false)}
                              >
                                {service.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={link.path}
                      className={`block py-3 font-semibold tracking-wider uppercase text-sm ${
                        location.pathname === link.path ? 'text-brand' : 'text-white'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
