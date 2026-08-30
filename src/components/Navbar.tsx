import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Rooms', href: '#rooms' },
    { name: 'Dining', href: '#dining' },
    { name: 'Experiences', href: '#experiences' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'About', href: '#about' },
  ];

  const headerBgClass = isScrolled || mobileMenuOpen ? 'bg-ivory/95 backdrop-blur-sm shadow-sm py-4' : 'bg-transparent py-6';
  const textClass = isScrolled || mobileMenuOpen ? 'text-forest' : 'text-ivory';
  const textHoverClass = isScrolled || mobileMenuOpen ? 'hover:text-brass' : 'hover:text-brass';
  const ctaClass = isScrolled || mobileMenuOpen 
    ? 'border-forest text-forest hover:bg-forest hover:text-ivory' 
    : 'border-ivory text-ivory hover:bg-ivory hover:text-forest';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${headerBgClass}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className={`font-serif text-2xl tracking-wide ${textClass}`}>
          The Rift Valley House
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className={`flex gap-8 text-sm uppercase tracking-widest ${textClass}`}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className={`transition-colors ${textHoverClass}`}>{link.name}</a>
              </li>
            ))}
          </ul>
          <a href="#booking" className={`px-6 py-3 text-xs uppercase tracking-widest border transition-colors ${ctaClass}`}>
            Check Availability
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className={textClass} /> : <Menu className={textClass} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-ivory shadow-lg overflow-hidden md:hidden"
          >
            <ul className="flex flex-col text-center py-8 gap-6 text-forest uppercase tracking-widest text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} onClick={() => setMobileMenuOpen(false)} className="hover:text-brass transition-colors">{link.name}</a>
                </li>
              ))}
              <li className="pt-4">
                <a href="#booking" onClick={() => setMobileMenuOpen(false)} className="inline-block px-8 py-4 border border-forest text-forest hover:bg-forest hover:text-ivory transition-colors">
                  Check Availability
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
