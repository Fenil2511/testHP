import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Contact', path: '/contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-midnight/95 backdrop-blur-md shadow-md py-4'
          : 'bg-white py-6 shadow-sm border-b border-gray-100'
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link to="/" className="flex flex-col">
          <span className={cn("font-serif text-2xl font-bold tracking-wider", isScrolled ? "text-white" : "text-midnight")}>
            HIMANSHU PARASHAR
          </span>
          <span className={cn("text-xs tracking-[0.2em] uppercase mt-1", isScrolled ? "text-gray-300" : "text-gray-500")}>
            Media & Brand Consultant
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                'text-sm font-medium tracking-wide uppercase transition-colors duration-200',
                location.pathname === link.path
                  ? 'text-burnt-orange'
                  : isScrolled ? 'text-gray-200 hover:text-white' : 'text-gray-600 hover:text-midnight'
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="px-6 py-2.5 bg-burnt-orange hover:bg-burnt-orange-light text-white text-sm font-medium tracking-wide uppercase rounded-sm transition-colors duration-300"
          >
            Book Consultation
          </Link>
        </nav>

        <button
          className={cn("md:hidden p-2", isScrolled ? "text-white" : "text-midnight")}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-midnight border-t border-white/10 overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    'text-base font-medium tracking-wide uppercase transition-colors duration-200 py-2',
                    location.pathname === link.path
                      ? 'text-burnt-orange'
                      : 'text-gray-200 hover:text-white'
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="inline-block text-center px-6 py-3 bg-burnt-orange text-white text-sm font-medium tracking-wide uppercase rounded-sm mt-4"
              >
                Book Consultation
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
