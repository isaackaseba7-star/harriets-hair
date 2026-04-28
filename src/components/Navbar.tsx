import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 border-b border-white/10 ${
        isScrolled ? 'bg-luxury-black/95 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-10 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 z-50">
          <div className="w-10 h-10 border border-gold flex items-center justify-center font-serif text-xl font-bold text-gold">H</div>
          <span className="font-serif text-2xl tracking-widest text-white uppercase ml-1">Harriet's</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="font-sans text-[11px] tracking-[0.2em] text-white/60 hover:text-gold uppercase transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="hidden md:flex items-center gap-6">
          <span className="text-[11px] text-white/40 tracking-tighter uppercase whitespace-nowrap hidden lg:block">Plot 4718, Haile Selassie Ave</span>
          <a
            href="#booking"
            className="px-6 py-2 border border-gold text-gold text-[11px] font-sans tracking-widest uppercase hover:bg-gold hover:text-luxury-black transition-colors"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white z-50 relative"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-0 left-0 w-full h-screen bg-luxury-black flex flex-col items-center justify-center gap-8 z-40"
            >
              <ul className="flex flex-col items-center gap-8">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="font-serif text-3xl text-white hover:text-gold transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="#booking"
                onClick={() => setIsOpen(false)}
                className="mt-8 bg-gold text-luxury-black px-10 py-4 font-sans text-sm tracking-widest uppercase"
              >
                Book Appointment
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
