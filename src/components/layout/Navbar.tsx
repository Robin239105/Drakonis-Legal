import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  Phone,
  ChevronDown,
  ArrowRight,
  Building2,
  Globe,
  Shield,
  Users,
  Landmark,
  Cpu,
  RefreshCcw,
  Crown,
  Scale,
  Gavel,
} from 'lucide-react';
import { practiceAreas } from '../../data/practiceAreas';
import Button from '../ui/Button';

const iconMap: Record<string, typeof Building2> = {
  Building2,
  Globe,
  Shield,
  Users,
  Landmark,
  Cpu,
  RefreshCcw,
  Crown,
  Scale,
  Gavel,
};

const navLinks = [
  { label: 'About', to: '/about' },
  { label: 'Practice Areas', to: '/practice-areas', hasMega: true },
  { label: 'Attorneys', to: '/attorneys' },
  { label: 'Case Results', to: '/case-results' },
  { label: 'Insights', to: '/insights' },
  { label: 'Careers', to: '/careers' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMegaOpen, setIsMegaOpen] = useState(false);
  const [mobilePracticeOpen, setMobilePracticeOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    setIsMegaOpen(false);
    setMobilePracticeOpen(false);
  }, [location]);

  const isActive = (to: string) =>
    to === '/' ? location.pathname === '/' : location.pathname.startsWith(to);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-obsidian/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-gold/10'
          : 'bg-obsidian/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="group">
            <span className="font-ui text-xl tracking-[0.25em] uppercase text-gold font-semibold group-hover:text-gold-light transition-colors">
              Drakonis Legal
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setIsMegaOpen(!!link.hasMega)}
                onMouseLeave={() => link.hasMega && setIsMegaOpen(false)}
              >
                <Link
                  to={link.to}
                  className={`flex items-center gap-1 font-ui text-sm tracking-wide transition-colors ${
                    isActive(link.to) ? 'text-gold' : 'text-gray-light hover:text-gold'
                  }`}
                >
                  {link.label}
                  {link.hasMega && (
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-300 ${isMegaOpen ? 'rotate-180' : ''}`}
                    />
                  )}
                </Link>
              </div>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden lg:flex items-center space-x-6">
            <a href="tel:+442070000000" className="flex items-center space-x-2 text-gray-light hover:text-gold transition-colors">
              <Phone className="w-3.5 h-3.5" />
              <span className="text-xs font-ui tracking-wide">+44 20 7000 0000</span>
            </a>
            <Button to="/consultation" size="sm">
              Consultation
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden text-warm-white hover:text-gold transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Practice Areas Mega Menu (full-width) */}
      <AnimatePresence>
        {isMegaOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            onMouseEnter={() => setIsMegaOpen(true)}
            onMouseLeave={() => setIsMegaOpen(false)}
            className="hidden lg:block absolute top-full left-0 right-0 bg-navy-deep border-t border-b border-gold/15 shadow-2xl shadow-black/50"
          >
            <div className="max-w-7xl mx-auto px-8 py-8 grid grid-cols-[1fr_300px] gap-10">
              {/* Practice areas grid */}
              <div className="grid grid-cols-2 gap-x-8 gap-y-1">
                {practiceAreas.map((area) => {
                  const Icon = iconMap[area.icon] ?? Scale;
                  return (
                    <Link
                      key={area.slug}
                      to={`/practice-areas/${area.slug}`}
                      className="group flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-gold/5"
                    >
                      <span className="mt-0.5 flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-md border border-gold/20 text-gold group-hover:border-gold/50 group-hover:bg-gold/10 transition-colors">
                        <Icon size={17} strokeWidth={1.5} />
                      </span>
                      <span className="min-w-0">
                        <span className="block font-ui text-sm font-medium text-warm-white group-hover:text-gold transition-colors">
                          {area.title}
                        </span>
                        <span className="block text-xs text-gray-muted leading-snug line-clamp-2 mt-0.5">
                          {area.shortDescription}
                        </span>
                      </span>
                    </Link>
                  );
                })}
              </div>

              {/* Featured panel */}
              <div className="flex flex-col justify-between border-l border-gold/10 pl-10">
                <div>
                  <p className="text-[10px] font-ui tracking-[0.3em] uppercase text-gold/70 mb-3">
                    Why Drakonis
                  </p>
                  <p className="font-heading text-xl text-warm-white leading-snug mb-3">
                    Elite litigation across 42 jurisdictions.
                  </p>
                  <p className="text-sm text-gray-light leading-relaxed mb-6">
                    £4.2B+ recovered, a 97% success rate, and Band 1 recognition
                    from Chambers UK.
                  </p>
                </div>
                <div className="space-y-3">
                  <Link
                    to="/practice-areas"
                    className="inline-flex items-center gap-2 text-sm font-ui text-gold hover:text-gold-light transition-colors"
                  >
                    View all practice areas
                    <ArrowRight size={15} />
                  </Link>
                  <Button to="/consultation" size="sm" className="w-full">
                    Schedule Consultation
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-navy-deep border-t border-gold/10 overflow-hidden"
          >
            <div className="px-6 py-6 space-y-1 max-h-[calc(100vh-5rem)] overflow-y-auto">
              {navLinks.map((link) =>
                link.hasMega ? (
                  <div key={link.label}>
                    <button
                      onClick={() => setMobilePracticeOpen((v) => !v)}
                      className="flex w-full items-center justify-between font-ui text-sm tracking-wide text-gray-light hover:text-gold transition-colors py-3"
                    >
                      {link.label}
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${mobilePracticeOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                    <AnimatePresence>
                      {mobilePracticeOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <div className="ml-2 mb-2 space-y-1 border-l border-gold/15 pl-3">
                            {practiceAreas.map((area) => {
                              const Icon = iconMap[area.icon] ?? Scale;
                              return (
                                <Link
                                  key={area.slug}
                                  to={`/practice-areas/${area.slug}`}
                                  className="flex items-center gap-2.5 text-xs font-ui text-gray-muted hover:text-gold transition-colors py-1.5"
                                >
                                  <Icon size={14} strokeWidth={1.5} className="text-gold/70" />
                                  {area.title}
                                </Link>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    to={link.to}
                    className={`block font-ui text-sm tracking-wide transition-colors py-3 ${
                      isActive(link.to) ? 'text-gold' : 'text-gray-light hover:text-gold'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <div className="pt-4 mt-2 border-t border-gold/10 space-y-3">
                <a
                  href="tel:+442070000000"
                  className="flex items-center gap-2 text-gray-light hover:text-gold transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  +44 20 7000 0000
                </a>
                <Button to="/consultation" size="md" className="w-full">
                  Schedule Consultation
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
